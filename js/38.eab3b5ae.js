(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{6780:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"col-12 row q-pa-md q-pt-xl q-px-lg"},[s("q-btn",{attrs:{icon:"arrow_back_ios",round:"",color:"secondary",size:"sm",flat:""},on:{click:function(e){return t.$router.go(-1)}}}),s("div",{staticClass:"text-primary col-12 text-center",staticStyle:{"font-size":"20px","font-weight":"700","margin-top":"-20px"}},[t._v("Working services")])],1),s("section",{staticClass:"row q-px-lg q-pb-md"},[s("q-list",{staticClass:"col-12 q-gutter-y-md"},t._l(t.data,(function(e){return s("item",t._b({key:e.id,attrs:{isCancel:!1},on:{clickItem:t.clickItem}},"item",e,!1))})),1)],1)])},a=[],c=s("742d"),n=s("f99b"),o={mixins:[n["a"]],components:{Item:c["a"]},data(){return{route:"/master_request_services/status/1/specialist"}},methods:{async cancelService(t){this.$q.loading.show();const e=await this.$api.delete(`${this.route}/${t}`);this.$q.loading.hide(),e&&this.getRecord()},clickItem(t){this.$router.push("/services/detail/"+t+"/employee")}}},r=o,l=s("2877"),u=s("9989"),p=s("9c40"),d=s("1c1c"),m=s("eebe"),h=s.n(m),g=Object(l["a"])(r,i,a,!1,null,null,null);e["default"]=g.exports;h()(g,"components",{QPage:u["a"],QBtn:p["a"],QList:d["a"]})}}]);