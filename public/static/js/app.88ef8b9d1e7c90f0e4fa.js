webpackJsonp([1],{"+708":function(e,t,i){"use strict";var a={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;i("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,i,a,n,r,c,l,o,s,p,u,d,f,v){particlesJS("particles-js",{particles:{number:{value:i,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:a,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:n,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:l,distance:s,color:r,opacity:o,width:c},move:{enable:!0,speed:p,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:u,mode:d},onclick:{enable:f,mode:v},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},n={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},r=i("VU/8")(a,n,!1,null,null,null);t.a=r.exports},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),n=i("/ocq"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("img",{staticClass:"logo",attrs:{src:"/static/techkshetra_logo.svg",alt:""}}),this._v(" "),t("h1",[this._v("TECHKSHETRA")])])}]};var c=[{path:"/",component:i("VU/8")({name:"Home",data:function(){return{msg:"Welcome to Your Vue.js App"}}},r,!1,function(e){i("u2rv")},"data-v-5a0f150a",null).exports}],l=i("9JMe"),o=i("NYxO");a.a.use(o.a);var s=new o.a.Store({state:{},actions:{},mutations:{},getters:{}}),p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("vue-particles",{attrs:{color:"#c13a48",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#c13a48",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var u=i("VU/8")({name:"App"},p,!1,function(e){i("VCSu")},null,null).exports,d=i("mM94");a.a.config.productionTip=!1,a.a.use(d.a),a.a.use(n.a);var f=new n.a({routes:c,mode:"history",linkExactActiveClass:"active",scrollBehavior:function(e,t,i){return i||{x:0,y:0}}});Object(l.sync)(s,f),new a.a({el:"#root",router:f,store:s,render:function(e){return e(u)}})},VCSu:function(e,t){},u2rv:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.88ef8b9d1e7c90f0e4fa.js.map