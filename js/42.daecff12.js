(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{b525:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("q-toolbar",{staticClass:"row justify-between bg-primary text-white"},[s("div",{staticClass:"text-bold text-h6"},[t._v("Services")])]),t._m(0),t._m(1),s("section",{staticClass:"row col-12 q-pt-lg q-px-md"},t._l(t.services,(function(e){return s("div",{key:e.id,staticClass:"col-6 row q-px-sm q-py-md"},[s("card-item",t._b({staticClass:"col-12",on:{selectCategory:function(s){return t.showServices(e.id)}}},"card-item",e,!1))],1)})),0),s("q-dialog",{attrs:{persistent:""},model:{value:t.isDlg,callback:function(e){t.isDlg=e},expression:"isDlg"}},[s("q-card",{staticClass:"full-width q-py-md q-pa-md",staticStyle:{"border-radius":"10px"}},[s("q-card-section",[s("div",{staticClass:"text-h5 text-primary"},[t._v("Sign up")]),s("p",{staticClass:"text-subtitle1 q-pt-md",staticStyle:{"line-height":"20px"}},[t._v("\n          Don't miss the chance to choose from the various services we offer in our application! Register to access this feature and enjoy all the benefits we offer. Don't wait any longer!\n        ")])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{attrs:{label:"Cancel",color:"primary",flat:"","no-caps":""},on:{click:function(e){t.isDlg=!1}}}),s("q-btn",{staticClass:"q-px-md",attrs:{to:"/register",color:"primary",label:"Sign up","no-caps":"",rounded:""}})],1)],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row q-px-lg q-pb-md q-pt-lg"},[s("div",{staticClass:"col-12 text-primary",staticStyle:{"font-weight":"700","font-size":"20px"}},[t._v("Welcome! ")]),s("div",{staticClass:"col-12",staticStyle:{"font-weight":"400","font-size":"16px",color:"#5C5C5C"}},[t._v("Let’s start work! ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row q-pt-md q-px-lg justify-center"},[s("img",{attrs:{src:"illustrations/14.svg",alt:"ilustratio",width:"100%",height:"100%"}})])}],o=s("94c3"),c={name:"HomeNoLogout",components:{CardItem:o["a"]},data(){return{services:[{icon:"img:vectors/cleaning1.svg",title:"Cleaning",id:1},{icon:"img:vectors/can1.svg",title:"House Service",id:2},{icon:"img:vectors/briefcase1.svg",title:"Road Service",id:3},{icon:"img:vectors/wheel1.svg",title:"Company Service",id:4}],isDlg:!1}},mounted(){this.getCategories()},methods:{async getCategories(){this.$q.loading.show();const t=await this.$api.get("categories_actives");this.$q.loading.hide(),this.services=t},async showServices(t){this.$router.push(`/services/customer/process/${t}`)}}},r=c,n=s("2877"),l=s("65c6"),d=s("24e8"),g=s("f09f"),p=s("a370"),m=s("4b7e"),u=s("9c40"),v=s("eebe"),h=s.n(v),f=Object(n["a"])(r,i,a,!1,null,"50e48276",null);e["default"]=f.exports;h()(f,"components",{QToolbar:l["a"],QDialog:d["a"],QCard:g["a"],QCardSection:p["a"],QCardActions:m["a"],QBtn:u["a"]})}}]);