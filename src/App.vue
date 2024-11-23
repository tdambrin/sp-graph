<template>
  <div id="app">
    <div class="query-container">
      <form v-on:submit.prevent="search" class='search-box' v-bind:style="[isMobile ? {'width': '320px'} : {'width': '750px'}]">
        <span @click.prevent='forwardFocus'>Search Spotify</span>
        <query-input
          class='query-input'
          placeholder='ex: Mariella Khruangbin'
          @inputEnter="search"
          ref='queryInput'
          :isMobile="isMobile"
        ></query-input>
        <a type='submit' class='search-submit' href='#' @click.prevent='search'>Go</a>
      </form>
    </div>
    <div class='about-line'>
      <a class='about-link' href='https://tdambrin.github.io'>about</a>
      <a class='bold' href='https://github.com/tdambrin/sp_graph'>source code</a>
    </div>
    <div id="graph-container">
      <NetworkVue ref="graph_net" id="graph"
        :options="{
          interaction: {hover: true, zoomSpeed: 0.5}
        }"
        :selectedTypes="selectedTypes"
        :isMobile="isMobile"
        :events="['doubleClick', 'hoverNode', 'blurNode', 'selectNode', 'deselectNode', ]"
        @doubleClick="expand"
        @hoverNode="stopAndPlayFromHover"
        @blurNode="stopAudio"
        @selectNode="onNodeSelected"
        @deselectNode="stopAudio"
      />
    </div>
  </div>
  <!-- <GraphVue nodes="sample nodes"/> -->
</template>

<script>
import NetworkVue from './components/Network.vue';
import QueryInput from './components/QueryInput';
import { asyncTimeout, spgAPIGet } from './lib/utils'
import { SESSION_ID_KEY } from "@/Constants";
import {getAppState } from './appState.js';

// Helpers

const appState = getAppState();

// -- Session Management --

async function createOrGetSession() {
  var sessionId = this.$cookies.get(SESSION_ID_KEY);
  if ( sessionId == null ){
    const sessionCookies = await createSession();
    if (sessionCookies == null ){
      throw Error("Could not set up session, API is probably down.");
    }
    sessionId = sessionCookies[SESSION_ID_KEY];
    this.$cookies.set(SESSION_ID_KEY, sessionId);
  }
}

async function createSession() {
  const endpoint = 'api/sessions/create';
  const respBody = await spgAPIGet(endpoint)
    .catch((error) => {
        appState.progress.fail(error);
    });
  return respBody
}


// -- Graph --

function handleTaskResult(context, body) {
  const newNodes = body?.nodes ?? [];
  context.$refs.graph_net.addNodes(newNodes);
  var newEdges = body?.edges ?? [];
  context.$refs.graph_net.addEdges(newEdges);
}

async function checkStatus(context, taskId, initialDelay, nextDelay) {
  await asyncTimeout(initialDelay);
  const endpoint = `api/tasks/${taskId}/status`;
  const respBody = await spgAPIGet(endpoint)
    .catch((error) => {
        appState.progress.fail(error);
    });
  
  if (respBody?.status) {
      // failed: stop
      if (['failed', 'not_found'].includes(respBody.status)) {
          return;
      }
      // completed: handle result
      // running: handle result and set next
      if (['completed', 'running'].includes(respBody.status)) {
          handleTaskResult(context, respBody);
      }
      if (respBody.status === 'completed') {
          appState.progress.done();
          return;
      }
      checkStatus(context, taskId, nextDelay, nextDelay);
  } else {
      console.err("No status property in task status check");
  }
}

async function search() {
  const keywords = this.$refs.queryInput.searchValue.split(' ').join('+');
  const selectedTypes = this.$refs.queryInput.selectedTypes.map(item => item.name);
  const sessionId = this.$cookies.get(SESSION_ID_KEY);
  const queryParams = {"selected_types": selectedTypes.join('+')}
  const endpoint = `api/search/${keywords}`;
  const respBody = await spgAPIGet(endpoint, queryParams, sessionId)
    .catch((error) => {
      appState.progress.fail(error);
    });
  appState.progress.doWork();
  checkStatus(this, respBody.task_id, 2000, 2000);
}

async function expand(params) {
  var node = this.$refs.graph_net.getNode(params.nodes[0]);
  const involvedEdges = this.$refs.graph_net.getInvolvedBackboneEdges(node.id);
  await expandApi(this, node);
  if (!node.is_backbone) {
    updateNodeToBackbone(this, node, involvedEdges);
  }
}

async function expandApi(context, node) {
  const endpoint = `api/expand/${node.graph_key}/${node.id}`
  const selectedTypes = context.$refs.queryInput.selectedTypes.map(item => item.name);
  const queryParams = {
    "selected_types": selectedTypes.join('+'),
    "item_type": node.node_type?? 'None',
  }
  const sessionId = context.$cookies.get(SESSION_ID_KEY);
  const respBody = await spgAPIGet(endpoint, queryParams, sessionId)
    .catch((error) => {
        appState.progress.fail(error);
    });
  appState.progress.doWork();
  checkStatus(context, respBody.task_id, 2000, 2000);
}

function updateNodeToBackbone(context, node, involvedEdges){
  involvedEdges.forEach( edge => {
    const newEdge = edge;
    edge.hidden = false;
    edge.is_backbone = true;
    context.$refs.graph_net.overrideEdge(newEdge);
  });
  node.is_backbone = true;
  context.$refs.graph_net.overrideNode(node);
}

async function deleteCascading(context, node) {
  const endpoint = `api/delete/${node.graph_key}/${node.id}`
  const queryParams = {
    "cascading": true,
  }
  const sessionId = context.$cookies.get(SESSION_ID_KEY);
  const respBody = await spgAPIGet(endpoint, queryParams, sessionId)
    .catch((error) => {
        appState.progress.fail(error);
    });
  return respBody.nodes;
}

// -- Audio --

var last_started_audio_ts = Date.now();

function stopAudio() {
  window.currentAudio?.pause();
  if (window.currentAudio?.currentTime) {
    window.currentAudio.currentTime = 0;
  }
}

function breakAudio(started_at){
  if ((window.currentAudio?.paused) & (started_at === last_started_audio_ts)) {
      stopAudio();
  }
}

function stopAndPlayFromHover( params ) {
  const prev_url = this.$refs.graph_net.getNode(params.node)?.preview_url;
  stopAndPlayAudio(prev_url);
}

function stopAndPlayAudio(prev_url) {
  stopAudio();
  if (prev_url) {
    window.currentAudio = new Audio(prev_url);
    if (window.currentAudio) {
      var start_at = Date.now();
      last_started_audio_ts = start_at;
      window.currentAudio.play().catch(console.log);
    }
    setTimeout(breakAudio, 30000, start_at);
  }
}

// -- Interactions --

// Click
// + Alt : remove node
// + Shift : Open spotify
async function onNodeSelected(params) {
  const node = this.$refs.graph_net.getNode(params.nodes[0]);
  if (params.event.srcEvent.altKey) {  // remove node
    const nodesToDel = await deleteCascading(this, node);
    this.$refs.graph_net.removeNode(nodesToDel);
    return;
  }
  if (params.event.srcEvent.shiftKey) {  // open spotify
    window.open(node.href, '_blank');
    return;
  }
  if (this.isMobile) {
    const prev_url = node?.preview_url;
    stopAndPlayAudio(prev_url);
    return;
  }
}


export default {
  name: 'App',
  components: {
    NetworkVue,
    QueryInput,
  },
  data() {
    return {
      aboutVisible: false,
      appState: getAppState(),
      selectedTypes: ['artist', 'album', 'track'],
    };
  },
  computed: {
    isLoading() {
      return appState.progress.working;
    },
    isMobile() {
      if (screen.width <= 760) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    search,
    stopAudio,
    stopAndPlayFromHover,
    onNodeSelected,
    expand,
    handleTaskResult,
    createOrGetSession,
  },
  mounted() {
    this.createOrGetSession();
    this.$watch(
      () => this.$refs.queryInput.selectedTypes, // Watch child1's computed1 property
      (newValue) => {
        this.selectedTypes = newValue.map(item => item.name);
      },
      { immediate: true } // Trigger immediately to set initial value
    );
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
<style lang='stylus'>
@import('./vars.styl');

#app {
  height: inherit;
  width: inherit;
  background: background-color;
}

.query-input {
  flex: 1;
  margin-left: 8px;
}

.highlight {
  color: highlight-color;
}

.search-submit {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  align-items: center;
  text-decoration: none;
  display: flex;
  flex-shrink: 0;
  width: 48px;
  justify-content: center;
  outline: none;
  opacity: 1;
  background-color: background-color; 
  &:hover, &:focus {
    color: background-color;
    background: highlight-color;
  }
}
.special {
  color: highlight-color;
  font-family: monospace;
}
a {
  text-decoration: none;
}

.about-line {
  position: fixed;
  right: 0;
  top: 8px;
  padding: 0px 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 2;

  a {
    text-align: right;
    background: background-color;
    font-size: 12px;
    padding: 0 8px;
    line-height: 24px;
    height: 24px;
    color: secondary-color;
    border-bottom: 1px solid transparent;
    &:hover, &:focus {
      color: highlight-color;
      border-bottom: 1px dashed;
    }
  }
}

.query-container {
  padding-top: 1em;
  z-index: 2;
  position: relative;
}

.search-box {
  position: relative;
  z-index : 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2), 0 -1px 0px rgba(0,0,0,0.02);
  height: 40px;
  display: flex;
  font-size: 16px;
  padding: 0 0 0 48px;
  cursor: text;
  border-radius: 25px;
  opacity: 1;
  background-color: background-color; 

  a {
    color: #B2B2B2;
    cursor: pointer;
  }
  span {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

}

@media (max-width: 100vw) {
  #app {
    margin: 0;
  }
  .about-line {
    bottom: 0;
    top: initial;
    right: 0;
  }
}

@media (max-height: 550px) {
  .search-box {
    height: 40px;
    input.search-input {  
      font-size: 16px;
    }

  }

#graph-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index : 1;
  left: 0px;
  top: 0px;
}

}</style>
