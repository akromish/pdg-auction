(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"054e":function(t,e,a){},"0d00":function(t,e,a){},"26ae":function(t,e,a){"use strict";a("95e4")},3916:function(t,e,a){"use strict";a("054e")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{background:"#143344"}},[n("v-app-bar",{attrs:{app:"",color:"#e0d9ce"}},[n("div",{staticClass:"d-flex align-center"},[n("router-link",{attrs:{to:"/"}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"PDG Logo",contain:"",src:a("f9e8"),transition:"scale-transition",width:"80"}})],1)],1)]),n("v-main",{attrs:{color:"#e0d9ce"}},[n("router-view"),n("div",{staticClass:"nav"},[n("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)],1)],1)},i=[],o={name:"App"},s=o,c=(a("8156"),a("2877")),l=a("6544"),d=a.n(l),u=a("7496"),p=a("40dc"),f=a("adda"),m=a("f6c4"),v=Object(c["a"])(s,r,i,!1,null,"1a48e59e",null),b=v.exports;d()(v,{VApp:u["a"],VAppBar:p["a"],VImg:f["a"],VMain:m["a"]});var g=a("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-container",{staticClass:"my-5"},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,(function(e){return n("v-flex",{key:e.name,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[n("v-card",{staticClass:"my-3 mx-6 justify-center rounded-lg",attrs:{flat:"",color:"#fffff2"}},[n("v-responsive",{staticClass:"pt-4 justify-center"},[n("v-img",{attrs:{height:"175",src:a("9f90")}})],1),n("v-card-title",[n("div",[t._v(t._s(e.name))])]),n("v-card-text",{staticClass:"justify-center"},[n("div",{staticClass:"my-2"},[t._v(t._s(e.description))]),n("v-divider",{staticClass:"mx-4"}),n("div",{staticClass:"price my-2 py-3"},[t._v("Current Price: "+t._s(e.currentPrice))])],1),n("v-card-actions",[n("PopUp")],1)],1)],1)})),1)],1)],1)},y=[],x=(a("159b"),a("260b")),_=(a("e71f"),a("ea7b"),{apiKey:"AIzaSyAkV1GJZ3my2QYGwCd9vRMFU4NGoTvcuB0",authDomain:"pdg-app-f75fb.firebaseapp.com",databaseURL:"https://pdg-app-f75fb-default-rtdb.firebaseio.com",projectId:"pdg-app-f75fb",storageBucket:"pdg-app-f75fb.appspot.com",messagingSenderId:"1090019154090",appId:"1:1090019154090:web:33dc43ba980556d41798d3",measurementId:"G-DXKSTB41FK"});x["a"].initializeApp(_);var V=x["a"].firestore(),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary"}},"v-btn",r,!1),n),[t._v("Bid on Item")])]}},{key:"default",fn:function(e){return[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:""}},[t._v("Opening from the bottom")]),a("v-card-text",[a("div",{staticClass:"text-h2 pa-12"},[t._v("Hello world!")])]),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{text:""},on:{click:function(t){e.value=!1}}},[t._v("Close")])],1)],1)]}}])})},C=[],k={name:"PopUp"},P=k,j=a("8336"),A=a("b0af"),O=a("99d9"),I=a("169a"),T=a("71d9"),S=Object(c["a"])(P,w,C,!1,null,"0a1a8f53",null),$=S.exports;d()(S,{VBtn:j["a"],VCard:A["a"],VCardActions:O["a"],VCardText:O["b"],VDialog:I["a"],VToolbar:T["a"]});var B={name:"Home",components:{PopUp:$},data:function(){return{items:[]}},mounted:function(){var t=this;V.collection("items").get().then((function(e){e.forEach((function(e){t.items.push(e.data())}))})),console.log("1 mounted loop")}},E=B,F=(a("3916"),a("a523")),L=a("ce7e"),D=a("0e8f"),M=a("a722"),G=a("6b53"),U=Object(c["a"])(E,h,y,!1,null,"572d5ddd",null),H=U.exports;d()(U,{VCard:A["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VContainer:F["a"],VDivider:L["a"],VFlex:D["a"],VImg:f["a"],VLayout:M["a"],VResponsive:G["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"out"},[a("v-btn",{on:{click:t.pressed}},[t._v("Sign Out")])],1),a("div",{staticClass:"add"},[a("v-btn",{on:{click:t.add}},[t._v("Add Auction Item")])],1),a("v-data-table")],1)},K=[],R=(a("5319"),a("ac1f"),{name:"Admin",methods:{pressed:function(){console.log("sign out")},add:function(){this.$router.replace({name:"Add Item"})}}}),z=R,N=(a("26ae"),a("8fea")),Q=Object(c["a"])(z,J,K,!1,null,"659c4f2e",null),W=Q.exports;d()(Q,{VBtn:j["a"],VDataTable:N["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"log"},[t._v(" Login "),a("v-app",[a("v-form",[a("v-text-field",{attrs:{label:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{type:"password",label:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{on:{click:t.pressed}},[t._v(" Sign In ")])],1)],1)],1)},Y=[],Z={name:"Login",methods:{pressed:function(){var t=this,e=V.auth();e.signInWithEmailAndPassword(this.email,this.password).then((function(e){var a=e.user;console.log(a),t.$router.replace({name:"Admin"})})).catch((function(t){var e=t.code;console.log(e)}))}},data:function(){return{password:"",email:""}}},q=Z,tt=(a("73d1"),a("4bd4")),et=a("8654"),at=Object(c["a"])(q,X,Y,!1,null,"dbab22de",null),nt=at.exports;d()(at,{VApp:u["a"],VBtn:j["a"],VForm:tt["a"],VTextField:et["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"adding"},[t._v(" Adding Item "),a("v-app",[a("v-form",[a("v-text-field",{attrs:{label:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-textarea",{attrs:{label:"description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-text-field",{attrs:{type:"number",label:"starting price"},model:{value:t.startingPrice,callback:function(e){t.startingPrice=e},expression:"startingPrice"}}),a("v-text-field",{attrs:{type:"number",label:"increment"},model:{value:t.increment,callback:function(e){t.increment=e},expression:"increment"}}),a("v-btn",{on:{click:t.pressed}},[t._v("Add Item")])],1)],1)],1)},it=[],ot=(a("b0c0"),a("a4d3"),a("e01a"),{name:"AddItem",methods:{pressed:function(){V.collection("items").add({name:this.name,description:this.description,startingPrice:this.startingPrice,increment:this.increment,currentPrice:this.startingPrice,bid:!1}),this.$router.replace({name:"Admin"})}},data:function(){return{name:"",description:"",startingPrice:0,increment:0,currentPrice:0}}}),st=ot,ct=(a("6f72"),a("a844")),lt=Object(c["a"])(st,rt,it,!1,null,"720cebb2",null),dt=lt.exports;d()(lt,{VApp:u["a"],VBtn:j["a"],VForm:tt["a"],VTextField:et["a"],VTextarea:ct["a"]}),n["a"].use(g["a"]);var ut=[{path:"/",name:"Home",component:H},{path:"/admin9",name:"Admin",component:W},{path:"/login",name:"Login",component:nt},{path:"/add",name:"Add Item",component:dt}],pt=new g["a"]({mode:"history",base:"/",routes:ut}),ft=pt,mt=a("f309");n["a"].use(mt["a"]);var vt=new mt["a"]({theme:{themes:{primary:"#fffff2",secondary:"#143344",accent:"#133243",error:"#b71c1c"}}});n["a"].config.productionTip=!1,new n["a"]({router:ft,vuetify:vt,render:function(t){return t(b)}}).$mount("#app")},"6f72":function(t,e,a){"use strict";a("f890")},"73d1":function(t,e,a){"use strict";a("0d00")},8156:function(t,e,a){"use strict";a("9d62")},"95e4":function(t,e,a){},"9d62":function(t,e,a){},"9f90":function(t,e,a){t.exports=a.p+"img/temp-img.b72c15ab.jpg"},f890:function(t,e,a){},f9e8:function(t,e,a){t.exports=a.p+"img/pdg_logo.08b99202.jpg"}});
//# sourceMappingURL=app.556d2424.js.map