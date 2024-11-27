(function(){"use strict";var e={23:function(e,t,o){var s=o(5130),n=o(6768),r=o(4232);const i={id:"app"},a={class:"query-container"},d={id:"graph-container"};function l(e,t,o,l,u,c){const h=(0,n.g2)("query-input"),p=(0,n.g2)("NetworkVue");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("div",a,[(0,n.Lk)("form",{onSubmit:t[2]||(t[2]=(0,s.D$)(((...e)=>c.search&&c.search(...e)),["prevent"])),class:"search-box",style:(0,r.Tr)([c.isMobile?{width:"320px"}:{width:"750px"}])},[(0,n.Lk)("span",{onClick:t[0]||(t[0]=(0,s.D$)(((...t)=>e.forwardFocus&&e.forwardFocus(...t)),["prevent"]))},"Search Spotify"),(0,n.bF)(h,{class:"query-input",placeholder:"ex: Mariella Khruangbin",onInputEnter:c.search,ref:"queryInput",isMobile:c.isMobile},null,8,["onInputEnter","isMobile"]),(0,n.Lk)("a",{type:"submit",class:"search-submit",href:"#",onClick:t[1]||(t[1]=(0,s.D$)(((...e)=>c.search&&c.search(...e)),["prevent"]))},"Go")],36)]),t[3]||(t[3]=(0,n.Lk)("div",{class:"about-line"},[(0,n.Lk)("a",{class:"about-link",href:"https://tdambrin.github.io"},"about"),(0,n.Lk)("a",{class:"bold",href:"https://github.com/tdambrin/sp-graph"},"source code")],-1)),(0,n.Lk)("div",d,[(0,n.bF)(p,{ref:"graph_net",id:"graph",options:{interaction:{hover:!0,zoomSpeed:.5}},selectedTypes:u.selectedTypes,isMobile:c.isMobile,events:["doubleClick","hoverNode","blurNode","selectNode","deselectNode"],onDoubleClick:c.expand,onHoverNode:c.stopAndPlayFromHover,onBlurNode:c.stopAudio,onSelectNode:c.onNodeSelected,onDeselectNode:c.stopAudio},null,8,["selectedTypes","isMobile","onDoubleClick","onHoverNode","onBlurNode","onSelectNode","onDeselectNode"])])])}o(8992),o(3949),o(1454);const u={class:"top-level-container"},c={id:"viz",ref:"visualization"},h={id:"msg-wrapper"};function p(e,t,o,i,a,d){return(0,n.uX)(),(0,n.CE)("div",u,[(0,n.bo)((0,n.Lk)("div",c,null,512),[[s.aG,0!=this.nodeLength]]),(0,n.bo)((0,n.Lk)("div",h,[t[4]||(t[4]=(0,n.Lk)("h2",{id:"msg"},"Enter search keywords to get a graph",-1)),t[5]||(t[5]=(0,n.Lk)("h3",null,[(0,n.Lk)("i",null,"Graph properties")],-1)),(0,n.Lk)("p",null,[t[2]||(t[2]=(0,n.eW)(" The graph structure is ")),(0,n.Lk)("b",null,"a backbone of "+(0,r.v_)(this.backboneType)+"s",1),(0,n.bo)((0,n.Lk)("span",null,[t[0]||(t[0]=(0,n.eW)(" with ")),(0,n.Lk)("b",null,"stars of "+(0,r.v_)(this.starTypes),1),t[1]||(t[1]=(0,n.eW)(" from a backbone node."))],512),[[s.aG,this.starTypes]])]),t[6]||(t[6]=(0,n.Lk)("p",null,"A node size is proportional to its popularity.",-1)),t[7]||(t[7]=(0,n.Lk)("p",null,"Each color group represents star nodes related to the same backbone node.",-1)),t[8]||(t[8]=(0,n.Lk)("h3",null,[(0,n.Lk)("i",null,"Interactions")],-1)),(0,n.Lk)("p",null,[(0,n.bo)((0,n.Lk)("i",null,"Click - ",512),[[s.aG,o.isMobile]]),(0,n.bo)((0,n.Lk)("i",null,"Hover - ",512),[[s.aG,!o.isMobile]]),t[3]||(t[3]=(0,n.eW)(" Play track preview "))]),t[9]||(t[9]=(0,n.Lk)("p",null,[(0,n.Lk)("i",null,"Double Click - "),(0,n.eW)("Expand graph around outside node")],-1)),t[10]||(t[10]=(0,n.Lk)("p",null,[(0,n.Lk)("i",null,"Shift Click - "),(0,n.eW)("Open Spotify")],-1)),t[11]||(t[11]=(0,n.Lk)("p",null,[(0,n.Lk)("i",null,"Alt/Option Click - "),(0,n.eW)("Delete node and its successors")],-1))],512),[[s.aG,0==this.nodeLength]])])}o(4114),o(6573),o(8100),o(7936),o(4520);var g=o(4694),w=o(7174);o(4603),o(7566),o(8721);const f="spotify-graph-api-4b00479b17ee.herokuapp.com",k=NaN,v=isNaN(k)?`https://${f}`:`http://${f}:${k}`,b="session_id",m=(e,t)=>e.filter((e=>-1===t.indexOf(e))),y=(e,t)=>{let o=e[t];if(!(e[t]instanceof w.DataSet||e[t]instanceof w.DataView)){o=new w.DataSet(e[t]),o.on("*",((o,s,n)=>e.$emit(`${t}-${o}`,{event:o,properties:s,senderId:n})));const s=o=>{if(Array.isArray(o)){const s=new w.DataSet(o).getIds(),n=m(e.visData[t].getIds(),s);e.visData[t].update(o),e.visData[t].remove(n)}};e.$watch(t,s,{deep:!0})}return e.$emit(`${t}-mounted`,o),o},N=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E=e=>new Promise((t=>{setTimeout(t,e)})),$=async function(e,t,o){var s=`${v}/${e}?`;t&&(s+=new URLSearchParams(t).toString()),console.log(`Sending HTTP Get for ${s}`);var n={Accept:"application/json","Content-Type":"application/json"};null!=o&&(n["Session-Id"]=o,console.log("added session id to header",n));const r=await fetch(s,{method:"GET",headers:n}).catch(console.log);if(!r.ok)throw new Error(`Response for ${s} => status: ${r.status}`);const i=await r.json();return i};var D={name:"NetworkVue",props:{edges:{type:[Array,w.DataSet,DataView],default:()=>[]},nodes:{type:[Array,w.DataSet,DataView],default:()=>[]},events:{type:Array,default:()=>["click","doubleClick","oncontext","hold","release","select","selectNode","selectEdge","deselectNode","deselectEdge","dragStart","dragging","dragEnd","hoverNode","blurNode","hoverEdge","blurEdge","zoom","showPopup","hidePopup","startStabilizing","stabilizationProgress","stabilizationIterationsDone","stabilized","resize","initRedraw","beforeDrawing","afterDrawing","animationFinished","configChange"]},options:{type:Object,default:()=>({})},selectedTypes:{type:[Array],default:()=>["album","artist","track"]},isMobile:{type:[Boolean],default:!1}},data:()=>({visData:{nodes:null,edges:null},length:0}),computed:{nodeLength:function(){return this.visData.nodes?.length??0},backboneType:function(){return this.selectedTypes.includes("artist")?"artist":this.selectedTypes.includes("album")?"album":"track"},starTypes:function(){return this.selectedTypes.filter((e=>e!=this.backboneType))?.map((e=>e+"s"))?.join(" and ")}},watch:{options:{deep:!0,handler(e){this.network.setOptions(e)}}},methods:{setData(e,t){this.visData.nodes=Array.isArray(e)?new w.DataSet(e):e,this.visData.edges=Array.isArray(t)?new w.DataSet(t):t,this.network.setData(this.visData)},destroy(){this.network.destroy()},getNode(e){return this.visData.nodes.get(e)},getEdge(e){return this.visData.edges.get(e)},setOptions(e){this.network.setOptions(e)},on(e,t){this.network.on(e,t)},off(e,t){this.network.off(e,t)},once(e,t){this.network.once(e,t)},canvasToDom(e){return this.network.canvasToDOM(e)},domToCanvas(e){return this.network.DOMtoCanvas(e)},redraw(){this.network.redraw()},setSize(e,t){this.network.setSize(e,t)},cluster(e){this.network.cluster(e)},clusterByConnection(e,t){this.network.clusterByConnection(e,t)},clusterByHubsize(e,t){this.network.clusterByHubsize(e,t)},clusterOutliers(e){this.network.clusterOutliers(e)},findNode(e){return this.network.findNode(e)},getClusteredEdges(e){return this.network.clustering.getClusteredEdges(e)},getBaseEdge(e){return this.network.clustering.getBaseEdge(e)},getBaseEdges(e){return this.network.clustering.getBaseEdges(e)},updateEdge(e,t){this.network.clustering.updateEdge(e,t)},updateClusteredNode(e,t){this.network.clustering.updateClusteredNode(e,t)},isCluster(e){return this.network.isCluster(e)},getNodesInCluster(e){return this.network.getNodesInCluster(e)},openCluster(e,t){this.network.openCluster(e,t)},getSeed(){return this.network.getSeed()},enableEditMode(){this.network.enableEditMode()},disableEditMode(){this.network.disableEditMode()},addNodeMode(){this.network.addNodeMode()},addNodes(e){e.forEach((e=>{this.visData.nodes.getIds().includes(e.id)||this.visData.nodes.add(e)}))},overrideNode(e){this.visData.nodes.update(e)},addEdges(e){e.forEach((e=>{this.visData.edges.map((e=>e.unordered_id)).includes(e.unordered_id)||this.visData.edges.add(e)}))},overrideEdge(e){this.visData.edges.update(e)},getInvolvedBackboneEdges(e){const t=[];return this.visData.edges.forEach((o=>{(o.from===e||o.to===e&&(this.getNode(o.from)?.is_backbone||this.getNode(o.to)?.is_backbone))&&t.push(o)})),t},removeNode(e){this.visData.nodes.remove(e)},editNode(){this.network.editNode()},addEdgeMode(){this.network.addEdgeMode()},editEdgeMode(){this.network.editEdgeMode()},deleteSelected(){this.network.deleteSelected()},getPositions(e){return this.network.getPositions(e)},storePositions(){this.network.storePositions()},moveNode(e,t,o){this.network.moveNode(e,t,o)},getBoundingBox(e){return this.network.getBoundingBox(e)},getConnectedNodes(e,t){return this.network.getConnectedNodes(e,t)},getConnectedEdges(e){return this.network.getConnectedEdges(e)},startSimulation(){this.network.startSimulation()},stopSimulation(){this.network.stopSimulation()},stabilize(e){this.network.stabilize(e)},getSelection(){return this.network.getSelection()},getSelectedNodes(){return this.network.getSelectedNodes()},getSelectedEdges(){return this.network.getSelectedEdges()},getNodeAt(e){return this.network.getNodeAt(e)},getEdgeAt(e){return this.network.getEdgeAt(e)},selectNodes(e,t){this.network.selectNodes(e,t)},selectEdges(e){this.network.selectEdges(e)},setSelection(e,t){this.network.setSelection(e,t)},unselectAll(){this.network.unselectAll()},getScale(){return this.network.getScale()},getViewPosition(){return this.network.getViewPosition()},fit(e){this.network.fit(e)},focus(e,t){this.network.focus(e,t)},moveTo(e){this.network.moveTo(e)},releaseNode(){this.network.releaseNode()},getOptionsFromConfigurator(){return this.network.getOptionsFromConfigurator()}},created(){this.network=null},mounted(){const e=this.$refs.visualization;this.visData.nodes=y(this,"nodes"),this.visData.edges=y(this,"edges"),this.length=this.visData.nodes.length,this.network=new g.Network(e,this.visData,this.options),this.events.forEach((e=>{this.network.on(e,(t=>{this.$emit(N(e),t)}))}))},beforeMount(){this.network?.destroy()}},S=o(1241);const C=(0,S.A)(D,[["render",p]]);var L=C;const T={class:"query-input-container"},A=["placeholder"],_={style:{"padding-right":"30px","padding-left":"30px"}};function M(e,t,o,r,i,a){const d=(0,n.g2)("multiselect");return(0,n.uX)(),(0,n.CE)("div",T,[(0,n.bo)((0,n.Lk)("input",{class:"search-input",onKeyup:t[0]||(t[0]=(0,s.jR)((t=>e.$emit("inputEnter")),["enter"])),"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchValue=t),onInput:t[2]||(t[2]=t=>e.$emit("update:modelValue",t.target.value)),type:"text",placeholder:o.placeholder,autofocus:"",ref:"input"},null,40,A),[[s.Jo,e.searchValue]]),(0,n.bo)((0,n.Lk)("span",_," with types ",512),[[s.aG,!o.isMobile]]),(0,n.bo)((0,n.bF)(d,{id:"type-selector",modelValue:e.selectedTypes,"onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedTypes=t),options:e.allTypes,multiple:!0,allowEmpty:!1,closeOnSelect:!1,placeholder:"Select types","group-values":"types","group-label":"grp","track-by":"name",label:"name","group-select":!0,hideSelected:!0},null,8,["modelValue","options"]),[[s.aG,!o.isMobile]])])}var O=o(8074),x={props:["placeholder","modelValue","isMobile"],watch:{modelValue(e){return console.log("emitted"),this.$refs.input.value=e,e}},data:()=>({searchValue:"",allTypes:[{grp:"All",types:[{name:"album"},{name:"artist"},{name:"track"}]}],selectedTypes:[{name:"album"},{name:"artist"},{name:"track"}]}),components:{Multiselect:O.Ay},computed:{},methods:{focus(){this.$refs.input.focus()}},mounted(){}};const I=(0,S.A)(x,[["render",M]]);var V=I;class z{constructor(){this.message="",this.phase="none",this.download={errors:[],remaining:0,currentWord:""},this.layout={iteration:0},this.working=!0,this.errors=[]}startDownload(){this.phase="download"}startLayout(){this.message="Finished download. Constructing layout...",this.phase="layout"}setLayoutCompletion(e){"layout"===this.phase&&(this.message=`Finished download. Constructing layout ${e}%...`)}updateLayout(e,t){this.download.currentWord=t,this.download.remaining=e,this.message=`Remaining: ${e}. Downloading ${t}`}doWork(){this.working=!0}done(){this.working=!1}fail(e){this.errors.push(e),this.working=!1}downloadError(e){this.download.errors.push(e)}reset(){this.phase="none",this.download.errors=[],this.download.remaining=0,this.download.currentWord="",this.layout.iteration=0,this.message="",this.working=!0}}var P=o(144);const B=(0,P.Kh)({hasGraph:!1,progress:new z,graph:null});function j(){return B}const G=j();async function F(){var e=this.$cookies.get(b);if(null==e){const t=await W();if(null==t)throw Error("Could not set up session, API is probably down.");e=t[b],this.$cookies.set(b,e)}}async function W(){const e="api/sessions/create",t=await $(e).catch((e=>{G.progress.fail(e)}));return t}function q(e,t){const o=t?.nodes??[];e.$refs.graph_net.addNodes(o);var s=t?.edges??[];e.$refs.graph_net.addEdges(s)}async function H(e,t,o,s){await E(o);const n=`api/tasks/${t}/status`,r=await $(n).catch((e=>{G.progress.fail(e)}));if(r?.status){if(["failed","not_found"].includes(r.status))return;if(["completed","running"].includes(r.status)&&q(e,r),"completed"===r.status)return void G.progress.done();H(e,t,s,s)}else console.err("No status property in task status check")}async function R(){const e=this.$refs.queryInput.searchValue.split(" ").join("+"),t=this.$refs.queryInput.selectedTypes.map((e=>e.name)),o=this.$cookies.get(b),s={selected_types:t.join("+")},n=`api/search/${e}`,r=await $(n,s,o).catch((e=>{G.progress.fail(e)}));G.progress.doWork(),H(this,r.task_id,2e3,2e3)}async function K(e){var t=this.$refs.graph_net.getNode(e.nodes[0]);const o=this.$refs.graph_net.getInvolvedBackboneEdges(t.id);await U(this,t),t.is_backbone||X(this,t,o)}async function U(e,t){const o=`api/expand/${t.graph_key}/${t.id}`,s=e.$refs.queryInput.selectedTypes.map((e=>e.name)),n={selected_types:s.join("+"),item_type:t.node_type??"None"},r=e.$cookies.get(b),i=await $(o,n,r).catch((e=>{G.progress.fail(e)}));G.progress.doWork(),H(e,i.task_id,2e3,2e3)}function X(e,t,o){o.forEach((t=>{const o=t;t.hidden=!1,t.is_backbone=!0,e.$refs.graph_net.overrideEdge(o)})),t.is_backbone=!0,e.$refs.graph_net.overrideNode(t)}async function J(e,t){const o=`api/delete/${t.graph_key}/${t.id}`,s={cascading:!0},n=e.$cookies.get(b),r=await $(o,s,n).catch((e=>{G.progress.fail(e)}));return r.nodes}var Q=Date.now();function Z(){window.currentAudio?.pause(),window.currentAudio?.currentTime&&(window.currentAudio.currentTime=0)}function Y(e){window.currentAudio?.paused&e===Q&&Z()}function ee(e){const t=this.$refs.graph_net.getNode(e.node)?.preview_url;te(t)}function te(e){if(Z(),e){if(window.currentAudio=new Audio(e),window.currentAudio){var t=Date.now();Q=t,window.currentAudio.play().catch(console.log)}setTimeout(Y,3e4,t)}}async function oe(e){const t=this.$refs.graph_net.getNode(e.nodes[0]);if(e.event.srcEvent.altKey){const e=await J(this,t);this.$refs.graph_net.removeNode(e)}else if(e.event.srcEvent.shiftKey)window.open(t.href,"_blank");else if(this.isMobile){const e=t?.preview_url;te(e)}else;}var se={name:"App",components:{NetworkVue:L,QueryInput:V},data(){return{aboutVisible:!1,appState:j(),selectedTypes:["artist","album","track"]}},computed:{isLoading(){return G.progress.working},isMobile(){return screen.width<=760}},methods:{search:R,stopAudio:Z,stopAndPlayFromHover:ee,onNodeSelected:oe,expand:K,handleTaskResult:q,createOrGetSession:F},mounted(){this.createOrGetSession(),this.$watch((()=>this.$refs.queryInput.selectedTypes),(e=>{this.selectedTypes=e.map((e=>e.name))}),{immediate:!0})}};const ne=(0,S.A)(se,[["render",l]]);var re=ne,ie=o(4570),ae=o.n(ie);const de=(0,s.Ef)(re);de.use(ae(),{expires:"1h"}),de.mount("#app"),console.log(de.$primevue)}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,s,n,r){if(!s){var i=1/0;for(u=0;u<e.length;u++){s=e[u][0],n=e[u][1],r=e[u][2];for(var a=!0,d=0;d<s.length;d++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](s[d])}))?s.splice(d--,1):(a=!1,r<i&&(i=r));if(a){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,n,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,r,i=s[0],a=s[1],d=s[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(d)var u=d(o)}for(t&&t(s);l<i.length;l++)r=i[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},s=self["webpackChunksp_graph"]=self["webpackChunksp_graph"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(23)}));s=o.O(s)})();
//# sourceMappingURL=app.753341e2.js.map