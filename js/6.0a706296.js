(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"546f":function(e,t,a){"use strict";var n=a("58c1"),i=a.n(n);i.a},"58c1":function(e,t,a){},"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{staticClass:"o-layout",attrs:{view:"hHh Lpr fFf"}},[a("q-drawer",{attrs:{width:240,mini:e.miniState,"show-if-above":"",bordered:"","content-class":"bg-grey-1 o-drawer"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("header",{staticClass:"row justify-center items-center"},[a("q-btn",{attrs:{icon:"mdi-github",flat:""},on:{click:e.gotoRepo}},[e.miniState?e._e():a("div",{staticClass:"q-px-xs"},[e._v("Quasar Tiptap "+e._s(e.version))])])],1),a("q-separator"),a("q-list",[e._l(e.links,(function(t,n){return[a("div",{key:n},[t.group?a("q-expansion-item",{attrs:{icon:t.icon,label:t.label,"default-opened":""}},[e._l(t.children,(function(t,n){return a("q-item",{key:n,staticClass:"sub-item",attrs:{to:t.to,clickable:""}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon,size:"1rem"}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n                  "+e._s(t.caption)+"\n                ")])],1)],1)})),a("q-separator")],2):e._e()],1)]}))],2),a("div",{staticClass:"drawer-toggle absolute",staticStyle:{bottom:"50px",right:"-12px"}},[a("q-btn",{attrs:{color:"blue",icon:e.miniState?"chevron_right":"chevron_left",dense:"",round:""},on:{click:function(t){e.miniState=!e.miniState}}})],1)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],o=a("9224"),l=a("b06b"),s={name:"MainLayout",components:{},data:function(){return{leftDrawerOpen:!1,miniState:!1,version:o["a"],links:[{label:"Examples",icon:"apps",group:!0,children:[{label:"Basic",caption:"Basic extensions",icon:"mdi-pencil",type:"route",to:"/examples/basic",groupLabel:"examples"},{label:"Readonly",caption:"readonly",icon:"mdi-eye",type:"route",to:"/examples/readonly"},{label:"Full Featured",caption:"All extensions",icon:"mdi-text-box",type:"route",to:"/examples/all"}]},{label:"Usages",icon:"book",group:!1,children:[{label:"Basic",caption:"Basic extensions",icon:"mdi-pencil",type:"route",to:"/examples/basic",groupLabel:"examples"},{label:"Readonly",caption:"readonly",icon:"mdi-eye",type:"route",to:"/examples/readonly"},{label:"Full Featured",caption:"All extensions",icon:"mdi-text-box",type:"route",to:"/examples/all"}]}]}},methods:{gotoRepo:function(){Object(l["a"])("https://github.com/donotebase/quasar-tiptap")}}},r=s,c=(a("546f"),a("2877")),p=Object(c["a"])(r,n,i,!1,null,null,null);t["default"]=p.exports},9224:function(e){e.exports=JSON.parse('{"a":"1.4.2"}')}}]);