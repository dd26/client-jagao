(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"07bc":function(t,e,s){},"203c":function(t,e,s){"use strict";s("363d")},"363d":function(t,e,s){},"3a50":function(t,e,s){"use strict";s("6373")},6373:function(t,e,s){},"742d":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticStyle:{position:"relative"}},[s("q-item",{staticClass:"bg-color-item",attrs:{clickable:""},on:{click:function(e){return t.$emit("clickItem",t.id)}}},[s("q-item-section",{attrs:{top:""}},[s("q-item-label",{staticClass:"text-primary text-bold"},[t._v(t._s(t.category_name))]),s("q-item-label",{staticClass:"q-pt-sm"},[s("div",{staticClass:"row"},[s("q-icon",{attrs:{name:"img:vectors/location2.svg",size:"xs"}}),s("div",{staticClass:"q-pl-xs",staticStyle:{"font-size":"10px","font-weight":"400",color:"#B3B3B3"}},[t._v(t._s(t.address_name))])],1)]),t.right_now?s("q-item-label",{staticClass:"q-pt-sm"},[s("div",{staticClass:"row items-center"},[s("q-icon",{attrs:{name:"img:vectors/time1.svg",size:"xs"}}),s("div",{staticClass:"q-pl-xs",staticStyle:{"font-size":"10px","font-weight":"700",color:"#5C5C5C"}},[t._v("RIGHT NOW")])],1)]):s("q-item-label",{staticClass:"q-pt-sm"},[s("div",{staticClass:"row items-center"},[s("q-icon",{attrs:{name:"img:vectors/time1.svg",size:"xs"}}),s("div",{staticClass:"row"},[s("div",{staticClass:"q-pl-xs col-12",staticStyle:{"font-size":"10px","font-weight":"700",color:"#5C5C5C"}},[t._v(t._s(t.dateData))]),s("div",{staticClass:"q-pl-xs col-12",staticStyle:{"font-size":"10px","font-weight":"400",color:"#5C5C5C"}},[t._v(t._s(t.timeData))])])],1)])],1),s("q-item-section",{staticClass:"q-mr-md",attrs:{side:"",top:""}},[s("q-item-label",[t._v("#"+t._s(t.id))])],1),s("div",{staticClass:"total-price-style text-primary text-bold"},[t._v("\n      $"+t._s(t.total)+"\n    ")])],1),t.isCancel?s("q-btn",{staticStyle:{position:"absolute",right:"5px",top:"5px"},attrs:{icon:"more_vert",size:"md",flat:"",dense:"",round:"",color:"primary"}},[s("q-menu",[s("q-list",{staticStyle:{width:"150px"}},[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-negative text-white",attrs:{clickable:""},on:{click:function(e){return t.$emit("cancelService",t.id)}}},[s("q-item-section",[s("q-item-label",[s("div",{staticClass:"row items-center"},[s("q-icon",{attrs:{name:"close",size:"md"}}),s("div",{staticClass:"text-bold q-pt-xs q-pl-xs",staticStyle:{"font-size":"16px"}},[t._v("Cancel")])],1)])],1)],1)],1)],1)],1):t._e()],1)},a=[],c=s("bd4c"),n={props:["category_name","observations","id","address_name","address","right_now","date_request","total","isCancel"],computed:{timeData(){return c["b"].formatDate(new Date(this.date_request),"HH:mm A")},dateData(){return c["b"].formatDate(new Date(this.date_request),"DD/MM/YYYY")}}},o=n,r=(s("3a50"),s("2877")),l=s("66e5"),m=s("4074"),d=s("0170"),u=s("0016"),p=s("9c40"),v=s("4e73"),g=s("1c1c"),h=s("714f"),f=s("eebe"),q=s.n(f),x=Object(r["a"])(o,i,a,!1,null,"a34b9776",null);e["a"]=x.exports;q()(x,"components",{QItem:l["a"],QItemSection:m["a"],QItemLabel:d["a"],QIcon:u["a"],QBtn:p["a"],QMenu:v["a"],QList:g["a"]}),q()(x,"directives",{Ripple:h["a"]})},8842:function(t,e,s){"use strict";s("07bc")},9654:function(t,e,s){},edac:function(t,e,s){"use strict";s("9654")},f80d:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"q-pt-lg q-pb-lg window-height"},[s("section",{staticClass:"row q-pa-md items-center q-px-lg"},[s("div",{staticClass:"col-6 row items-center"},[s("div",{staticClass:"col-12 text-primary text-bold",staticStyle:{"font-size":"20px"}},[t._v(" Hello, "+t._s(t.name)+" ")]),s("div",{staticClass:"col-12",staticStyle:{"font-size":"16px",color:"#5C5C5C"}},[t._v("Let’s start working!")])]),s("div",{staticClass:"col-6 row justify-end"},[s("wallet",{staticClass:"col-12",attrs:{amount:t.amount}})],1)]),s("section",{staticClass:"row justify-center q-pt-lg q-px-lg"},[s("status-employee")],1),s("section",{staticClass:"row q-px-xl q-pt-lg"},[t.servicesFilters||t.servicesFilters.message?t._e():s("div",{staticClass:"col-12 text-center q-pb-lg text-primary text-bold",staticStyle:{"font-size":"25px"}},[t._v("Available services")]),t.servicesFilters&&!t.servicesFilters.message&&t.servicesFilters.length>0?s("q-list",{staticClass:"col-12 q-gutter-y-md"},t._l(t.servicesFilters,(function(e){return s("Item",t._b({key:e.id,attrs:{isCancel:!1},on:{clickItem:t.clickItem}},"Item",e,!1))})),1):t.servicesFilters&&t.servicesFilters.message?s("section",{staticClass:"row q-pa-xl justify-center items-center q-py-xl",staticStyle:{"background-color":"#D9F2EE","border-radius":"12px"}},[s("div",{staticClass:"col-12 text-center text-primary text-bold"},[t._v(t._s(t.servicesFilters.message))]),s("img",{attrs:{src:"illustrations/18.png",alt:"illustration_18",width:"100%"}})]):s("section",{staticClass:"col-12"},[s("img",{staticStyle:{"object-fit":"fill"},attrs:{src:"vectors/card5.svg",alt:"",width:"100%",height:"110px"}})])],1)])},a=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-expansion-item",{staticClass:"style-expansion-item col-12 text-primary",staticStyle:{"font-size":"20px","font-weight":"700"},scopedSlots:t._u([{key:"header",fn:function(){return[s("q-item-section",[t._v("\n      "+t._s(t.stateObj.name)+"\n    ")]),s("q-item-section",{attrs:{side:""}},[s("q-badge",{style:"background-color: "+t.stateObj.color,attrs:{rounded:""}})],1)]},proxy:!0}]),model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},t._l(t.states,(function(e){return s("q-item",{key:e.id,attrs:{clickable:""},on:{click:function(s){return t.changeState(e.id)}}},[s("q-item-section",[s("q-item-label",[t._v("\n        "+t._s(e.name)+"\n      ")])],1),s("q-item-section",{attrs:{side:""}},[s("q-badge",{style:"background-color: "+e.color,attrs:{rounded:""}})],1)],1)})),1)},n=[],o={data(){return{states:[{name:"Available",id:1,color:"#7DBA47"},{name:"Ocupied",id:2,color:"#F2994A"},{name:"Not available",id:3,color:"#EB5757"}],state:1,expanded:!1}},mounted(){this.getUserInfo()},computed:{stateObj(){return this.states.find((t=>t.id===this.state))}},methods:{async getUserInfo(){const t=await this.$getUserInfo();t&&(this.state=t.user.status)},async changeState(t){this.state=t,this.$q.loading.show(),await this.$api.put("/users/change_status",{status:t}).then((t=>{this.$q.loading.hide(),t&&this.$q.notify({color:"positive",textColor:"white",message:"Your status has been changed!"})})),this.expanded=!1}}},r=o,l=(s("edac"),s("2877")),m=s("3b73"),d=s("4074"),u=s("58a81"),p=s("66e5"),v=s("0170"),g=s("eebe"),h=s.n(g),f=Object(l["a"])(r,c,n,!1,null,"7bf9629f",null),q=f.exports;h()(f,"components",{QExpansionItem:m["a"],QItemSection:d["a"],QBadge:u["a"],QItem:p["a"],QItemLabel:v["a"]});var x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"bg-style-card flex flex-center row q-gutter-x-sm"},[s("q-icon",{attrs:{name:"img:vectors/wallet1.svg",size:"sm"}}),s("div",{staticClass:"text-primary",staticStyle:{"font-size":"15px","font-weight":"700"}},[t._v(" $"+t._s(t.amount)+" ")])],1)},b=[],_={props:["amount"]},y=_,C=(s("8842"),s("0016")),w=Object(l["a"])(y,x,b,!1,null,"0864dd9b",null),S=w.exports;h()(w,"components",{QIcon:C["a"]});var I=s("742d"),$={components:{Wallet:S,StatusEmployee:q,Item:I["a"]},data(){return{name:"Elizabeth",services:[],servicesPending:[],amount:"0,00",user:{}}},computed:{servicesFilters(){if(this.user.user.verified){const t=this.user.specialistServices.map((t=>t.category_id));return console.log({userCategories:t,filtro:this.services.filter((e=>t.includes(e.category_id)))}),this.services.filter((e=>t.includes(e.category_id)))}return{message:"We are reviewing your information, you will receive a notification soon"}}},async mounted(){this.getUserInfo(),this.getAmount(),this.services=await this.getServices(0)},methods:{async getUserInfo(){const t=await this.$getUserInfo();this.name=t.user.name,this.user=t},async getServices(t){this.$q.loading.show();const e=await this.$api.get("/master_request_services/status/"+t);return this.$q.loading.hide(),e},clickItem(t){this.$router.push("/services/detail/"+t+"/employee")},async getAmount(){this.$q.loading.show();const t=await this.$api.get("/specialists/amount/total");this.$q.loading.hide(),t&&(this.amount=t)}}},k=$,z=(s("203c"),s("9989")),Q=s("1c1c"),D=Object(l["a"])(k,i,a,!1,null,"6960c256",null);e["default"]=D.exports;h()(D,"components",{QPage:z["a"],QList:Q["a"]})}}]);