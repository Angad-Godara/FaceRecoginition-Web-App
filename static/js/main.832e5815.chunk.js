(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{40:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var i=n(8),o=n(20),c=n.n(o),a=(n(40),n(0)),r=n(1),s=n(4),l=n(3),u=n(34),d=n.n(u),f=n(21),b=n.n(f),h=(n(82),n(6)),p=function(e){var t=e.imageUrl,n=e.box;return""!==t?Object(h.jsx)("div",{className:"center",children:Object(h.jsxs)("div",{className:"absolute ma2",children:[Object(h.jsx)("img",{alt:"pic",id:"inputimage",src:t,width:"500px",height:"auto"}),Object(h.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})}):Object(h.jsx)("div",{})},j=function(){return Object(h.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(h.jsx)("p",{className:"f3 link dim underline black pa3 pointer",children:"Sign out"})})},g=n(35),m=n.n(g),v=n.p+"static/media/brain.eea55d5b.jpg",x=function(){return Object(h.jsx)("div",{className:"ma4 mt0",children:Object(h.jsx)(m.a,{className:"Tilt",options:{max:55},style:{height:120,width:120},children:Object(h.jsx)("div",{className:"Tilt-inner pa0.5",children:Object(h.jsx)("img",{src:v,alt:"logo",style:{borderRadius:"10px"}})})})})},w=(n(84),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"f4",children:"This magic brain will detect faces in your picture, just give it a try..."}),Object(h.jsx)("div",{className:"center",children:Object(h.jsxs)("div",{className:"form center pa4 ma4 br3 shadow-5",children:[Object(h.jsx)("input",{className:"f4 pa2 center w-70",type:"text",onChange:t}),Object(h.jsx)("button",{className:"w-30 grow center f4 link ph3 pv2 white bg-light-purple pointer",onClick:n,children:"Detect"})]})})]})}),O=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"white f4",children:"Hey User, your current rank is...."}),Object(h.jsx)("div",{className:"f2 white",children:"#5"})]})},y=(n(85),new b.a.App({apiKey:"96f590ed948648ea937b13471d0b4898"})),N=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).calculateface=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),i=n.width,o=n.height;return{leftCol:t.left_col*i,topRow:t.top_row*o,rightCol:i-t.right_col*i,bottomRow:o-t.bottom_row*o}},e.DisplayBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),y.models.predict(b.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.DisplayBox(e.calculateface(t)).catch((function(e){return console.log(e)}))}))},e.state={input:"",imageUrl:"",box:{}},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d.a,{id:"tsparticles",options:{fpsLimit:120,interactivity:{events:{onHover:{enable:!0,mode:"repulse"},resize:!0}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,area:800},value:35},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}}),Object(h.jsx)(j,{}),Object(h.jsx)(x,{}),Object(h.jsx)(O,{}),Object(h.jsx)(w,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(h.jsx)(p,{box:this.state.box,imageUrl:this.state.imageUrl})]})}}]),n}(i.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(86);c.a.render(Object(h.jsx)(N,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/FaceRecoginition-Web-App",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/FaceRecoginition-Web-App","/service-worker.js");k?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):C(e)}))}}()}},[[88,1,2]]]);
//# sourceMappingURL=main.832e5815.chunk.js.map