(function(){"use strict";var e={957:function(e,t,s){var o=s(5130),n=s(6768);const r={id:"app"},i={class:"query-container"},a={id:"graph-container"};function d(e,t,s,d,l,u){const c=(0,n.g2)("query-input"),h=(0,n.g2)("NetworkVue");return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("div",i,[(0,n.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...e)=>u.search&&u.search(...e)),["prevent"])),class:"search-box"},[(0,n.Lk)("span",{onClick:t[0]||(t[0]=(0,o.D$)(((...t)=>e.forwardFocus&&e.forwardFocus(...t)),["prevent"]))},"Search Spotify"),(0,n.bF)(c,{class:"query-input",placeholder:"ex: Mariella Khruangbin",ref:"queryInput"},null,512),(0,n.Lk)("a",{type:"submit",class:"search-submit",href:"#",onClick:t[1]||(t[1]=(0,o.D$)(((...e)=>u.search&&u.search(...e)),["prevent"]))},"Go")],32)]),t[3]||(t[3]=(0,n.Lk)("div",{class:"about-line"},[(0,n.Lk)("a",{class:"about-link",href:"https://tdambrin.github.io"},"about"),(0,n.Lk)("a",{class:"bold",href:"https://github.com/tdambrin/sp_graph"},"source code")],-1)),(0,n.Lk)("div",a,[(0,n.bF)(h,{ref:"graph_net",id:"graph",options:{interaction:{hover:!0,zoomSpeed:.5}},selectedTypes:l.selectedTypes,isMobile:u.isMobile,events:["doubleClick","hoverNode","blurNode","selectNode","deselectNode"],onDoubleClick:u.expand,onHoverNode:u.stopAndPlayFromHover,onBlurNode:u.stopAudio,onSelectNode:u.onNodeSelected,onDeselectNode:u.stopAudio},null,8,["selectedTypes","isMobile","onDoubleClick","onHoverNode","onBlurNode","onSelectNode","onDeselectNode"])])])}s(8992),s(3949),s(1454);var l=s(4232);const u={class:"top-level-container"},c={id:"viz",ref:"visualization"},h={id:"msg-wrapper"};function p(e,t,s,r,i,a){return(0,n.uX)(),(0,n.CE)("div",u,[(0,n.bo)((0,n.Lk)("div",c,null,512),[[o.aG,0!=this.nodeLength]]),(0,n.bo)((0,n.Lk)("div",h,[t[4]||(t[4]=(0,n.Lk)("h2",{id:"msg"},"Enter search keywords to get a graph",-1)),t[5]||(t[5]=(0,n.Lk)("h3",null,[(0,n.Lk)("i",null,"Graph properties")],-1)),(0,n.Lk)("p",null,[t[2]||(t[2]=(0,n.eW)(" The graph structure is ")),(0,n.Lk)("b",null,"a backbone of "+(0,l.v_)(this.backboneType)+"s",1),(0,n.bo)((0,n.Lk)("span",null,[t[0]||(t[0]=(0,n.eW)(" with ")),(0,n.Lk)("b",null,"stars of "+(0,l.v_)(this.starTypes),1),t[1]||(t[1]=(0,n.eW)(" from a backbone node."))],512),[[o.aG,this.starTypes]])]),t[6]||(t[6]=(0,n.Lk)("p",null,"A node size is proportional to its popularity.",-1)),t[7]||(t[7]=(0,n.Lk)("p",null,"Each color group represents star nodes related to the same backbone node.",-1)),t[8]||(t[8]=(0,n.Lk)("h3",null,[(0,n.Lk)("i",null,"Interactions")],-1)),(0,n.Lk)("p",null,[(0,n.bo)((0,n.Lk)("i",null,"Click - ",512),[[o.aG,s.isMobile]]),(0,n.bo)((0,n.Lk)("i",null,"Hover - ",512),[[o.aG,!s.isMobile]]),t[3]||(t[3]=(0,n.eW)(" Play track preview "))]),t[9]||(t[9]=(0,n.Lk)("p",null,[(0,n.Lk)("i",null,"Double Click - "),(0,n.eW)("Expand graph around outside node")],-1)),t[10]||(t[10]=(0,n.Lk)("p",null,[(0,n.Lk)("i",null,"Shift Click - "),(0,n.eW)("Open Spotify")],-1)),t[11]||(t[11]=(0,n.Lk)("p",null,[(0,n.Lk)("i",null,"Alt/Option Click - "),(0,n.eW)("Delete node and its successors")],-1))],512),[[o.aG,0==this.nodeLength]])])}s(4114),s(6573),s(8100),s(7936),s(4520);var g=s(4694),f=s(7174);s(4603),s(7566),s(8721);const w="spotify-graph-api-4b00479b17ee.herokuapp.com",k=NaN,v=isNaN(k)?`https://${w}`:`http://${w}:${k}`,m="session_id",y=(e,t)=>e.filter((e=>-1===t.indexOf(e))),b=(e,t)=>{let s=e[t];if(!(e[t]instanceof f.DataSet||e[t]instanceof f.DataView)){s=new f.DataSet(e[t]),s.on("*",((s,o,n)=>e.$emit(`${t}-${s}`,{event:s,properties:o,senderId:n})));const o=s=>{if(Array.isArray(s)){const o=new f.DataSet(s).getIds(),n=y(e.visData[t].getIds(),o);e.visData[t].update(s),e.visData[t].remove(n)}};e.$watch(t,o,{deep:!0})}return e.$emit(`${t}-mounted`,s),s},N=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E=e=>new Promise((t=>{setTimeout(t,e)})),D=async function(e,t,s){var o=`${v}/${e}?`;t&&(o+=new URLSearchParams(t).toString()),console.log(`Sending HTTP Get for ${o}`);var n={Accept:"application/json","Content-Type":"application/json"};null!=s&&(n["Session-Id"]=s,console.log("added session id to header",n));const r=await fetch(o,{method:"GET",headers:n}).catch(console.log);if(!r.ok)throw new Error(`Response for ${o} => status: ${r.status}`);const i=await r.json();return i};var $={name:"NetworkVue",props:{edges:{type:[Array,f.DataSet,DataView],default:()=>[]},nodes:{type:[Array,f.DataSet,DataView],default:()=>[]},events:{type:Array,default:()=>["click","doubleClick","oncontext","hold","release","select","selectNode","selectEdge","deselectNode","deselectEdge","dragStart","dragging","dragEnd","hoverNode","blurNode","hoverEdge","blurEdge","zoom","showPopup","hidePopup","startStabilizing","stabilizationProgress","stabilizationIterationsDone","stabilized","resize","initRedraw","beforeDrawing","afterDrawing","animationFinished","configChange"]},options:{type:Object,default:()=>({})},selectedTypes:{type:[Array],default:()=>["album","artist","track"]},isMobile:{type:[Boolean],default:!1}},data:()=>({visData:{nodes:null,edges:null},length:0}),computed:{nodeLength:function(){return this.visData.nodes?.length??0},backboneType:function(){return this.selectedTypes.includes("artist")?"artist":this.selectedTypes.includes("album")?"album":"track"},starTypes:function(){return this.selectedTypes.filter((e=>e!=this.backboneType))?.map((e=>e+"s"))?.join(" and ")}},watch:{options:{deep:!0,handler(e){this.network.setOptions(e)}}},methods:{setData(e,t){this.visData.nodes=Array.isArray(e)?new f.DataSet(e):e,this.visData.edges=Array.isArray(t)?new f.DataSet(t):t,this.network.setData(this.visData)},destroy(){this.network.destroy()},getNode(e){return this.visData.nodes.get(e)},getEdge(e){return this.visData.edges.get(e)},setOptions(e){this.network.setOptions(e)},on(e,t){this.network.on(e,t)},off(e,t){this.network.off(e,t)},once(e,t){this.network.once(e,t)},canvasToDom(e){return this.network.canvasToDOM(e)},domToCanvas(e){return this.network.DOMtoCanvas(e)},redraw(){this.network.redraw()},setSize(e,t){this.network.setSize(e,t)},cluster(e){this.network.cluster(e)},clusterByConnection(e,t){this.network.clusterByConnection(e,t)},clusterByHubsize(e,t){this.network.clusterByHubsize(e,t)},clusterOutliers(e){this.network.clusterOutliers(e)},findNode(e){return this.network.findNode(e)},getClusteredEdges(e){return this.network.clustering.getClusteredEdges(e)},getBaseEdge(e){return this.network.clustering.getBaseEdge(e)},getBaseEdges(e){return this.network.clustering.getBaseEdges(e)},updateEdge(e,t){this.network.clustering.updateEdge(e,t)},updateClusteredNode(e,t){this.network.clustering.updateClusteredNode(e,t)},isCluster(e){return this.network.isCluster(e)},getNodesInCluster(e){return this.network.getNodesInCluster(e)},openCluster(e,t){this.network.openCluster(e,t)},getSeed(){return this.network.getSeed()},enableEditMode(){this.network.enableEditMode()},disableEditMode(){this.network.disableEditMode()},addNodeMode(){this.network.addNodeMode()},addNodes(e){e.forEach((e=>{this.visData.nodes.getIds().includes(e.id)||this.visData.nodes.add(e)}))},overrideNode(e){this.visData.nodes.update(e)},addEdges(e){e.forEach((e=>{this.visData.edges.map((e=>e.unordered_id)).includes(e.unordered_id)||this.visData.edges.add(e)}))},overrideEdge(e){this.visData.edges.update(e)},getInvolvedBackboneEdges(e){const t=[];return this.visData.edges.forEach((s=>{(s.from===e||s.to===e&&(this.getNode(s.from)?.is_backbone||this.getNode(s.to)?.is_backbone))&&t.push(s)})),t},removeNode(e){this.visData.nodes.remove(e)},editNode(){this.network.editNode()},addEdgeMode(){this.network.addEdgeMode()},editEdgeMode(){this.network.editEdgeMode()},deleteSelected(){this.network.deleteSelected()},getPositions(e){return this.network.getPositions(e)},storePositions(){this.network.storePositions()},moveNode(e,t,s){this.network.moveNode(e,t,s)},getBoundingBox(e){return this.network.getBoundingBox(e)},getConnectedNodes(e,t){return this.network.getConnectedNodes(e,t)},getConnectedEdges(e){return this.network.getConnectedEdges(e)},startSimulation(){this.network.startSimulation()},stopSimulation(){this.network.stopSimulation()},stabilize(e){this.network.stabilize(e)},getSelection(){return this.network.getSelection()},getSelectedNodes(){return this.network.getSelectedNodes()},getSelectedEdges(){return this.network.getSelectedEdges()},getNodeAt(e){return this.network.getNodeAt(e)},getEdgeAt(e){return this.network.getEdgeAt(e)},selectNodes(e,t){this.network.selectNodes(e,t)},selectEdges(e){this.network.selectEdges(e)},setSelection(e,t){this.network.setSelection(e,t)},unselectAll(){this.network.unselectAll()},getScale(){return this.network.getScale()},getViewPosition(){return this.network.getViewPosition()},fit(e){this.network.fit(e)},focus(e,t){this.network.focus(e,t)},moveTo(e){this.network.moveTo(e)},releaseNode(){this.network.releaseNode()},getOptionsFromConfigurator(){return this.network.getOptionsFromConfigurator()}},created(){this.network=null},mounted(){const e=this.$refs.visualization;this.visData.nodes=b(this,"nodes"),this.visData.edges=b(this,"edges"),this.length=this.visData.nodes.length,this.network=new g.Network(e,this.visData,this.options),this.events.forEach((e=>{this.network.on(e,(t=>{this.$emit(N(e),t)}))}))},beforeMount(){this.network?.destroy()}},S=s(1241);const C=(0,S.A)($,[["render",p]]);var L=C;const A={class:"query-input-container"},T=["placeholder"];function _(e,t,s,r,i,a){const d=(0,n.g2)("multiselect");return(0,n.uX)(),(0,n.CE)("div",A,[(0,n.bo)((0,n.Lk)("input",{class:"search-input","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchValue=t),onInput:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.value)),type:"text",placeholder:s.placeholder,autofocus:"",ref:"input"},null,40,T),[[o.Jo,e.searchValue]]),t[3]||(t[3]=(0,n.Lk)("span",{style:{"padding-right":"30px","padding-left":"30px"}}," with types ",-1)),(0,n.bF)(d,{id:"type-selector",modelValue:e.selectedTypes,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedTypes=t),options:e.allTypes,multiple:!0,allowEmpty:!1,closeOnSelect:!1,placeholder:"Select types","group-values":"types","group-label":"grp","track-by":"name",label:"name","group-select":!0,hideSelected:!0},null,8,["modelValue","options"])])}var O=s(8074),M={props:["placeholder","modelValue"],watch:{modelValue(e){return console.log("emitted"),this.$refs.input.value=e,e}},data:()=>({searchValue:"",allTypes:[{grp:"All",types:[{name:"album"},{name:"artist"},{name:"track"}]}],selectedTypes:[{name:"album"},{name:"artist"},{name:"track"}]}),components:{Multiselect:O.Ay},computed:{},methods:{focus(){this.$refs.input.focus()}},mounted(){}};const V=(0,S.A)(M,[["render",_]]);var x=V;class I{constructor(){this.message="",this.phase="none",this.download={errors:[],remaining:0,currentWord:""},this.layout={iteration:0},this.working=!0,this.errors=[]}startDownload(){this.phase="download"}startLayout(){this.message="Finished download. Constructing layout...",this.phase="layout"}setLayoutCompletion(e){"layout"===this.phase&&(this.message=`Finished download. Constructing layout ${e}%...`)}updateLayout(e,t){this.download.currentWord=t,this.download.remaining=e,this.message=`Remaining: ${e}. Downloading ${t}`}doWork(){this.working=!0}done(){this.working=!1}fail(e){this.errors.push(e),this.working=!1}downloadError(e){this.download.errors.push(e)}reset(){this.phase="none",this.download.errors=[],this.download.remaining=0,this.download.currentWord="",this.layout.iteration=0,this.message="",this.working=!0}}var z=s(144);const P=(0,z.Kh)({hasGraph:!1,progress:new I,graph:null});function B(){return P}const j=B();async function F(){var e=this.$cookies.get(m);if(null==e){const t=await W();if(null==t)throw Error("Could not set up session, API is probably down.");e=t[m],this.$cookies.set(m,e)}}async function W(){const e="api/sessions/create",t=await D(e).catch((e=>{j.progress.fail(e)}));return t}function G(e,t){const s=t?.nodes??[];e.$refs.graph_net.addNodes(s);var o=t?.edges??[];e.$refs.graph_net.addEdges(o)}async function q(e,t,s,o){await E(s);const n=`api/tasks/${t}/status`,r=await D(n).catch((e=>{j.progress.fail(e)}));if(r?.status){if(["failed","not_found"].includes(r.status))return;if(["completed","running"].includes(r.status)&&G(e,r),"completed"===r.status)return void j.progress.done();q(e,t,o,o)}else console.err("No status property in task status check")}async function H(){const e=this.$refs.queryInput.searchValue.split(" ").join("+"),t=this.$refs.queryInput.selectedTypes.map((e=>e.name)),s=this.$cookies.get(m),o={selected_types:t.join("+")},n=`api/search/${e}`,r=await D(n,o,s).catch((e=>{j.progress.fail(e)}));j.progress.doWork(),q(this,r.task_id,2e3,2e3)}async function R(e){var t=this.$refs.graph_net.getNode(e.nodes[0]);const s=this.$refs.graph_net.getInvolvedBackboneEdges(t.id);await K(this,t),t.is_backbone||U(this,t,s)}async function K(e,t){const s=`api/expand/${t.graph_key}/${t.id}`,o=e.$refs.queryInput.selectedTypes.map((e=>e.name)),n={selected_types:o.join("+"),item_type:t.node_type??"None"},r=e.$cookies.get(m),i=await D(s,n,r).catch((e=>{j.progress.fail(e)}));j.progress.doWork(),q(e,i.task_id,2e3,2e3)}function U(e,t,s){s.forEach((t=>{const s=t;t.hidden=!1,t.is_backbone=!0,e.$refs.graph_net.overrideEdge(s)})),t.is_backbone=!0,e.$refs.graph_net.overrideNode(t)}async function X(e,t){const s=`api/delete/${t.graph_key}/${t.id}`,o={cascading:!0},n=e.$cookies.get(m),r=await D(s,o,n).catch((e=>{j.progress.fail(e)}));return r.nodes}var J=Date.now();function Q(){window.currentAudio?.pause(),window.currentAudio?.currentTime&&(window.currentAudio.currentTime=0)}function Z(e){window.currentAudio?.paused&e===J&&Q()}function Y(e){const t=this.$refs.graph_net.getNode(e.node)?.preview_url;ee(t)}function ee(e){if(Q(),e){if(window.currentAudio=new Audio(e),window.currentAudio){var t=Date.now();J=t,window.currentAudio.play().catch(console.log)}setTimeout(Z,3e4,t)}}async function te(e){const t=this.$refs.graph_net.getNode(e.nodes[0]);if(e.event.srcEvent.altKey){const e=await X(this,t);this.$refs.graph_net.removeNode(e)}else if(e.event.srcEvent.shiftKey)window.open(t.href,"_blank");else if(this.isMobile){const e=t?.preview_url;ee(e)}else;}var se={name:"App",components:{NetworkVue:L,QueryInput:x},data(){return{aboutVisible:!1,appState:B(),selectedTypes:["artist","album","track"]}},computed:{isLoading(){return j.progress.working},isMobile(){return screen.width<=760}},methods:{search:H,stopAudio:Q,stopAndPlayFromHover:Y,onNodeSelected:te,expand:R,handleTaskResult:G,createOrGetSession:F},mounted(){this.createOrGetSession(),this.$watch((()=>this.$refs.queryInput.selectedTypes),(e=>{this.selectedTypes=e.map((e=>e.name))}),{immediate:!0})}};const oe=(0,S.A)(se,[["render",d]]);var ne=oe,re=s(4570),ie=s.n(re);const ae=(0,o.Ef)(ne);ae.use(ie(),{expires:"1h"}),ae.mount("#app"),console.log(ae.$primevue)}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,o,n,r){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],r=e[u][2];for(var a=!0,d=0;d<o.length;d++)(!1&r||i>=r)&&Object.keys(s.O).every((function(e){return s.O[e](o[d])}))?o.splice(d--,1):(a=!1,r<i&&(i=r));if(a){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,n,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,i=o[0],a=o[1],d=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(d)var u=d(s)}for(t&&t(o);l<i.length;l++)r=i[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(u)},o=self["webpackChunksp_graph"]=self["webpackChunksp_graph"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[504],(function(){return s(957)}));o=s.O(o)})();
//# sourceMappingURL=app.f542ab63.js.map