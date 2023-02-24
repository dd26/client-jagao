(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"3a50":function(t,e,s){"use strict";s("6373")},6373:function(t,e,s){},"742d":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticStyle:{position:"relative"}},[s("q-item",{staticClass:"bg-color-item",attrs:{clickable:""},on:{click:function(e){return t.$emit("clickItem",t.id)}}},[s("q-item-section",{attrs:{top:""}},[s("q-item-label",{staticClass:"text-primary text-bold"},[t._v(t._s(t.category_name))]),s("q-item-label",{staticClass:"q-pt-sm"},[s("div",{staticClass:"row"},[s("q-icon",{attrs:{name:"img:vectors/location2.svg",size:"xs"}}),s("div",{staticClass:"q-pl-xs",staticStyle:{"font-size":"10px","font-weight":"400",color:"#B3B3B3"}},[t._v(t._s(t.address_name))])],1)]),t.right_now?s("q-item-label",{staticClass:"q-pt-sm"},[s("div",{staticClass:"row items-center"},[s("q-icon",{attrs:{name:"img:vectors/time1.svg",size:"xs"}}),s("div",{staticClass:"q-pl-xs",staticStyle:{"font-size":"10px","font-weight":"700",color:"#5C5C5C"}},[t._v("RIGHT NOW")])],1)]):s("q-item-label",{staticClass:"q-pt-sm"},[s("div",{staticClass:"row items-center"},[s("q-icon",{attrs:{name:"img:vectors/time1.svg",size:"xs"}}),s("div",{staticClass:"row"},[s("div",{staticClass:"q-pl-xs col-12",staticStyle:{"font-size":"10px","font-weight":"700",color:"#5C5C5C"}},[t._v(t._s(t.dateData))]),s("div",{staticClass:"q-pl-xs col-12",staticStyle:{"font-size":"10px","font-weight":"400",color:"#5C5C5C"}},[t._v(t._s(t.timeData))])])],1)])],1),s("q-item-section",{staticClass:"q-mr-md",attrs:{side:"",top:""}},[s("q-item-label",[t._v("#"+t._s(t.id))])],1),s("div",{staticClass:"total-price-style text-primary text-bold"},[t._v("\n      $"+t._s(t.total)+"\n    ")])],1),t.isCancel?s("q-btn",{staticStyle:{position:"absolute",right:"5px",top:"5px"},attrs:{icon:"more_vert",size:"md",flat:"",dense:"",round:"",color:"primary"}},[s("q-menu",[s("q-list",{staticStyle:{width:"150px"}},[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-negative text-white",attrs:{clickable:""},on:{click:function(e){return t.$emit("cancelService",t.id)}}},[s("q-item-section",[s("q-item-label",[s("div",{staticClass:"row items-center"},[s("q-icon",{attrs:{name:"close",size:"md"}}),s("div",{staticClass:"text-bold q-pt-xs q-pl-xs",staticStyle:{"font-size":"16px"}},[t._v("Cancel")])],1)])],1)],1)],1)],1)],1):t._e()],1)},a=[],c=s("bd4c"),o={props:["category_name","observations","id","address_name","address","right_now","date_request","total","isCancel"],computed:{timeData(){return c["b"].formatDate(new Date(this.date_request),"HH:mm A")},dateData(){return c["b"].formatDate(new Date(this.date_request),"DD/MM/YYYY")}}},n=o,r=(s("3a50"),s("2877")),l=s("66e5"),d=s("4074"),m=s("0170"),p=s("0016"),u=s("9c40"),v=s("4e73"),f=s("1c1c"),q=s("714f"),h=s("eebe"),_=s.n(h),b=Object(r["a"])(n,i,a,!1,null,"a34b9776",null);e["a"]=b.exports;_()(b,"components",{QItem:l["a"],QItemSection:d["a"],QItemLabel:m["a"],QIcon:p["a"],QBtn:u["a"],QMenu:v["a"],QList:f["a"]}),_()(b,"directives",{Ripple:q["a"]})},"98e3":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"col-12 row q-pa-md q-pt-xl q-px-lg"},[s("q-btn",{attrs:{icon:"arrow_back_ios",round:"",color:"secondary",size:"sm",flat:""},on:{click:function(e){return t.$router.go(-1)}}}),s("div",{staticClass:"text-primary col-12 text-center",staticStyle:{"font-size":"20px","font-weight":"700","margin-top":"-20px"}},[t._v("Peding services")])],1),s("section",{staticClass:"row q-px-lg q-pb-md"},[s("q-list",{staticClass:"col-12 q-gutter-y-md"},t._l(t.data,(function(e){return s("item",t._b({key:e.id,on:{cancelService:t.cancelService,clickItem:t.clickItem}},"item",e,!1))})),1)],1)])},a=[],c=s("742d"),o=s("f99b"),n={mixins:[o["a"]],components:{Item:c["a"]},data(){return{route:"master_request_services"}},methods:{async cancelService(t){this.$q.loading.show();const e=await this.$api.delete(`${this.route}/${t}`);this.$q.loading.hide(),e&&this.getRecord()},clickItem(t){this.$router.push("/services/detail/"+t+"/employee")}}},r=n,l=s("2877"),d=s("9989"),m=s("9c40"),p=s("1c1c"),u=s("eebe"),v=s.n(u),f=Object(l["a"])(r,i,a,!1,null,null,null);e["default"]=f.exports;v()(f,"components",{QPage:d["a"],QBtn:m["a"],QList:p["a"]})},f99b:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var i=s("f508");const a={data(){return{data:[]}},async mounted(){"function"===typeof this.beforeMounted&&this.beforeMounted(),await this.getRecord(),"function"===typeof this.afterMounted&&this.afterMounted()},methods:{async getRecord(){i["a"].show(),await this.$api.get(`${this.route}`).then((t=>{this.data=t,"function"===typeof this.afterGetRecord&&this.afterGetRecord(t),i["a"].hide()}))}}}}}]);