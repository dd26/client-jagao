(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"192c":function(t,e,s){"use strict";s("2fc7")},2645:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row"},[s("q-item",{staticClass:"col-12"},[s("q-item-section",{staticStyle:{width:"120px"},attrs:{thumbnail:""}},[s("q-img",{staticClass:"q-ml-md",staticStyle:{"object-fit":"fill"},attrs:{src:t.$api_url()+"image/subcategories/"+t.id,width:"100%",height:"100%"}})],1),s("q-item-section",{staticClass:"q-py-xs q-px-md q-pr-xl"},[s("q-item-label",{staticClass:"text-primary",staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v(" "+t._s(t.name)+" ")]),s("q-item-label",{staticStyle:{"font-size":"14px","font-weight":"400",color:"#5C5C5C"},attrs:{lines:"3"}},[t._v(t._s(t.description))]),s("q-item-label",{staticClass:"text-primary text-bold q-pt-xs",staticStyle:{"font-size":"20px"}},[t._v(" "+t._s(t.price)+"$ ")])],1),s("div",{staticClass:"check-style"},[s("q-checkbox",{attrs:{"keep-color":"",color:"secondary"},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})],1),t.hasOperatorBtn?s("div",{staticClass:"operators-style column"},[s("div",{staticClass:"col-6 column q-pb-xs"},[s("q-btn",{staticClass:"col-12",staticStyle:{width:"100%"},attrs:{icon:"add",dense:"",size:"sm",color:"primary",unelevated:""},on:{click:function(e){return t.$emit("increment",t.id)}}})],1),s("div",{staticClass:"col-6 column q-pt-xs"},[s("q-btn",{staticClass:"col-12",staticStyle:{width:"100%","font-size":"22px"},attrs:{label:"-",dense:"",size:"sm",color:"primary",unelevated:""},on:{click:function(e){return t.$emit("decrement",t.id)}}})],1)]):t._e()],1)],1)},a=[],n={props:{value:{type:Boolean,default:!1},name:{type:String,default:""},price:{type:String,default:""},description:{type:String,default:""},id:{type:Number,default:null},quantity:{type:Number,default:0},hasOperatorBtn:{type:Boolean,default:!0}},data(){return{selection:this.value}},watch:{selection(t){this.$emit("input",t)},quantity(){this.quantity>0&&(this.selection=!0)}}},o=n,c=(s("77ed"),s("2877")),r=s("66e5"),l=s("4074"),d=s("068f"),m=s("0170"),u=s("8f8e"),p=s("9c40"),h=s("eebe"),f=s.n(h),v=Object(c["a"])(o,i,a,!1,null,"0b1ae8f6",null);e["a"]=v.exports;f()(v,"components",{QItem:r["a"],QItemSection:l["a"],QImg:d["a"],QItemLabel:m["a"],QCheckbox:u["a"],QBtn:p["a"]})},"2fc7":function(t,e,s){},3726:function(t,e,s){"use strict";s("6cca")},5762:function(t,e,s){},"6cca":function(t,e,s){},"742d":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticStyle:{position:"relative"}},[s("q-item",{staticClass:"bg-color-item",attrs:{clickable:""}},[s("q-item-section",{attrs:{top:""}},[s("q-item-label",{staticClass:"text-primary text-bold"},[t._v(t._s(t.category_name))]),s("q-item-label",{staticClass:"q-pt-sm"},[s("div",{staticClass:"row"},[s("q-icon",{attrs:{name:"img:vectors/location2.svg",size:"xs"}}),s("div",{staticClass:"q-pl-xs",staticStyle:{"font-size":"10px","font-weight":"400",color:"#B3B3B3"}},[t._v(t._s(t.address_name))])],1)]),t.right_now?s("q-item-label",{staticClass:"q-pt-sm"},[s("div",{staticClass:"row items-center"},[s("q-icon",{attrs:{name:"img:vectors/time1.svg",size:"xs"}}),s("div",{staticClass:"q-pl-xs",staticStyle:{"font-size":"10px","font-weight":"700",color:"#5C5C5C"}},[t._v("RIGHT NOW")])],1)]):s("q-item-label",{staticClass:"q-pt-sm"},[s("div",{staticClass:"row items-center"},[s("q-icon",{attrs:{name:"img:vectors/time1.svg",size:"xs"}}),s("div",{staticClass:"row"},[s("div",{staticClass:"q-pl-xs col-12",staticStyle:{"font-size":"10px","font-weight":"700",color:"#5C5C5C"}},[t._v(t._s(t.dateData))]),s("div",{staticClass:"q-pl-xs col-12",staticStyle:{"font-size":"10px","font-weight":"400",color:"#5C5C5C"}},[t._v(t._s(t.timeData))])])],1)])],1),s("q-item-section",{attrs:{side:"",top:""}},[s("section",{staticClass:"row items-end",staticStyle:{position:"relative",right:"-10px"}},[s("div",{staticStyle:{position:"relative",bottom:"4px"}},[t._v("\n          #"+t._s(t.id)+"\n        ")]),s("q-btn",{attrs:{icon:"more_vert",size:"md",flat:"",dense:"",round:"",color:"primary"}},[s("q-menu",[s("section",{staticClass:"row",staticStyle:{"min-width":"90px","border-radius":"19px"}},[s("div",{staticClass:"col-12 bg-primary text-white text-center row justify-left q-pa-sm q-pl-md",on:{click:function(e){return t.$emit("clickItem",t.id)}}},[s("q-icon",{attrs:{name:"remove_red_eye",size:"xs"}}),s("div",{staticClass:"q-pl-xs",staticStyle:{"font-size":"10px","font-weight":"700"}},[t._v("View")])],1),s("div",{staticClass:"col-12 bg-negative text-white text-center row justify-left q-pa-sm q-pl-md",on:{click:function(e){return t.$emit("clickItemDecline",t.id)}}},[s("q-icon",{attrs:{name:"close",size:"xs"}}),s("div",{staticClass:"q-pl-xs",staticStyle:{"font-size":"10px","font-weight":"700"}},[t._v("Decline")])],1)])])],1)],1)]),s("div",{staticClass:"total-price-style text-primary text-bold"},[t._v("\n      $"+t._s(t.total)+"\n    ")])],1),t.isCancel?s("q-btn",{staticStyle:{position:"absolute",right:"5px",top:"5px"},attrs:{icon:"more_vert",size:"md",flat:"",dense:"",round:"",color:"primary"}},[s("q-menu",[s("q-list",{staticStyle:{width:"150px"}},[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-negative text-white",attrs:{clickable:""},on:{click:function(e){return t.$emit("cancelService",t.id)}}},[s("q-item-section",[s("q-item-label",[s("div",{staticClass:"row items-center"},[s("q-icon",{attrs:{name:"close",size:"md"}}),s("div",{staticClass:"text-bold q-pt-xs q-pl-xs",staticStyle:{"font-size":"16px"}},[t._v("Cancel")])],1)])],1)],1)],1)],1)],1):t._e()],1)},a=[],n=s("bd4c"),o={props:["category_name","observations","id","address_name","address","right_now","date_request","total","isCancel"],computed:{timeData(){return n["b"].formatDate(new Date(this.date_request),"HH:mm A")},dateData(){return n["b"].formatDate(new Date(this.date_request),"DD/MM/YYYY")}},methods:{handleClick(t){this.$emit("clickItem",t)}}},c=o,r=(s("192c"),s("2877")),l=s("66e5"),d=s("4074"),m=s("0170"),u=s("0016"),p=s("9c40"),h=s("4e73"),f=s("1c1c"),v=s("714f"),y=s("eebe"),b=s.n(y),g=Object(r["a"])(c,i,a,!1,null,"07594396",null);e["a"]=g.exports;b()(g,"components",{QItem:l["a"],QItemSection:d["a"],QItemLabel:m["a"],QIcon:u["a"],QBtn:p["a"],QMenu:h["a"],QList:f["a"]}),b()(g,"directives",{Ripple:v["a"]})},"77ed":function(t,e,s){"use strict";s("e2b3")},7898:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-expansion-item",{staticClass:"style-expansion-item col-12 text-primary",staticStyle:{"font-size":"20px","font-weight":"700"},scopedSlots:t._u([{key:"header",fn:function(){return[s("q-item-section",[t._v("\n      "+t._s(t.stateObj.name)+"\n    ")]),s("q-item-section",{attrs:{side:""}},[s("q-badge",{style:"background-color: "+t.stateObj.color,attrs:{rounded:""}})],1)]},proxy:!0}]),model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[t._l(t.states,(function(e){return s("q-item",{key:e.id,attrs:{clickable:""},on:{click:function(s){return t.changeState(e.id)}}},[s("q-item-section",[s("q-item-label",[t._v("\n        "+t._s(e.name)+"\n      ")])],1),s("q-item-section",{attrs:{side:""}},[s("q-badge",{style:"background-color: "+e.color,attrs:{rounded:""}})],1)],1)})),s("q-dialog",{attrs:{persistent:""},model:{value:t.dlgReminder,callback:function(e){t.dlgReminder=e},expression:"dlgReminder"}},[s("Reminder")],1)],2)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"full-width q-py-md",staticStyle:{"border-radius":"12px"}},[s("q-card-section",{staticClass:"row justify-center"},[s("q-icon",{staticClass:"col-12",attrs:{name:"img:vectors/Bell.svg",color:"primary",size:"50px"}}),s("div",{staticClass:"text-h6 col-12 text-center text-primary text-bold"},[t._v("Reminder")]),s("p",{staticClass:"col-12 q-px-lg text-center q-pt-md",staticStyle:{color:"#AAAAAA","font-size":"14px"}},[t._v("\n      Hello! Don't forget to check that the gas tank is full and make sure you have all the necessary tools before performing any service.\n    ")])],1),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-px-xl text-bold",staticStyle:{"border-radius":"10px"},attrs:{color:"primary",label:"Accept"}})],1)],1)},o=[],c={methods:{}},r=c,l=s("2877"),d=s("f09f"),m=s("a370"),u=s("0016"),p=s("4b7e"),h=s("9c40"),f=s("7f67"),v=s("eebe"),y=s.n(v),b=Object(l["a"])(r,n,o,!1,null,null,null),g=b.exports;y()(b,"components",{QCard:d["a"],QCardSection:m["a"],QIcon:u["a"],QCardActions:p["a"],QBtn:h["a"]}),y()(b,"directives",{ClosePopup:f["a"]});var q={components:{Reminder:g},data(){return{states:[{name:"Available",id:1,color:"#7DBA47"},{name:"Not available",id:3,color:"#EB5757"}],state:1,expanded:!1,dlgReminder:!1}},mounted(){this.getUserInfo()},computed:{stateObj(){return this.states.find((t=>t.id===this.state))}},watch:{state(t,e){1===t&&3===e&&(this.dlgReminder=!0)}},methods:{async getUserInfo(){const t=await this.$getUserInfo();t&&(this.state=t.user.status)},async changeState(t){this.state=t,this.$q.loading.show(),await this.$api.put("/users/change_status",{status:t}).then((t=>{this.$q.loading.hide(),t&&this.$q.notify({color:"positive",textColor:"white",message:"Your status has been changed!"})})),this.expanded=!1}}},x=q,_=(s("ac8a"),s("3b73")),C=s("4074"),w=s("58a81"),S=s("66e5"),$=s("0170"),Q=s("24e8"),k=Object(l["a"])(x,i,a,!1,null,"efd595be",null);e["a"]=k.exports;y()(k,"components",{QExpansionItem:_["a"],QItemSection:C["a"],QBadge:w["a"],QItem:S["a"],QItemLabel:$["a"],QDialog:Q["a"]})},9424:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var i=s("f508");const a={data(){return{insert:!0}},async mounted(){"function"===typeof this.beforeMounted&&this.beforeMounted(),console.log(this.id,"id"),this.id&&(await this.getRecord(),this.insert=!1),"function"===typeof this.afterMounted&&this.afterMounted()},methods:{async getRecord(){i["a"].show(),await this.$api.get(`${this.route}/${this.id}`).then((t=>{this.form=t,"function"===typeof this.afterGetRecord&&this.afterGetRecord(t),i["a"].hide()}))},save(){if("function"===typeof this.beforeValidate&&this.beforeValidate(),this.$v.form.$touch(),"function"===typeof this.afterValidate&&this.afterValidate(),console.log("save",this.$v.form,this.form,"form"),!this.$v.form.$error)if(this.$q.loading.show(),"function"===typeof this.beforeSave&&this.beforeSave(),this.insert)if(this.formData){const t=new FormData;for(const e in this.form)t.append(e,this.form[e]);console.log(t,"formData"),this.$api.post(this.route,t,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{this.$q.loading.hide(),t&&("function"===typeof this.afterSave&&this.afterSave(t),this.stayAfterSave&&this.$router.go(-1))}))}else this.$api.post(this.route,this.form).then((t=>{this.$q.loading.hide(),t&&("function"===typeof this.afterSave&&this.afterSave(t),this.stayAfterSave&&this.$router.go(-1))}));else this.$api.put(`${this.route}/${this.id}`,this.form).then((t=>{this.$q.loading.hide(),t&&("function"===typeof this.afterSave&&this.afterSave(t),this.$q.notify({type:"positive",message:"registry modified successfully"}),this.stayAfterSave&&this.$router.go(-1))}))}},created(){}}},"94c3":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"col-12 card-style row items-center",on:{click:t.selectCategory}},[s("section",{staticClass:"col-12 q-gutter-y-sm"},[s("div",{staticClass:"col-12 row justify-center",staticStyle:{position:"relative"}},[s("q-avatar",{attrs:{size:"90px"}},[s("img",{attrs:{src:t.$api_url()+"image/categories/"+t.id,width:"100%",height:"100%"}})])],1),s("div",{staticClass:"text-center col-12 text-primary",staticStyle:{"font-size":"15px","font-weight":"700"}},[t._v(t._s(t.name))])])])},a=[],n={props:["name","id"],methods:{selectCategory(){this.$emit("selectCategory",this.id)}}},o=n,c=(s("c0d0"),s("2877")),r=s("f09f"),l=s("cb32"),d=s("714f"),m=s("eebe"),u=s.n(m),p=Object(c["a"])(o,i,a,!1,null,"0fcbeadc",null);e["a"]=p.exports;u()(p,"components",{QCard:r["a"],QAvatar:l["a"]}),u()(p,"directives",{Ripple:d["a"]})},"9b6e":function(t,e,s){},ac8a:function(t,e,s){"use strict";s("9b6e")},c0d0:function(t,e,s){"use strict";s("5762")},c43d:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-expansion-item",{staticClass:"col-12 bg-primary overflow-hidden",staticStyle:{"border-radius":"12px"},attrs:{"expand-icon-class":"text-white"},scopedSlots:t._u([{key:"header",fn:function(){return[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",{staticClass:"bg-white"},[s("img",{staticClass:"q-pa-sm",attrs:{src:"vectors/gps2.svg",alt:"asd"}})])],1),s("q-item-section",[s("q-item-label",{staticStyle:{color:"#B1ECE3"}},[t._v("Your location")]),s("q-item-label",{staticStyle:{color:"#FFF","font-size":"14px","font-weight":"700"}},[t._v(" "+t._s(t.label)+" ")])],1)]},proxy:!0}]),model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[s("q-list",{attrs:{bordered:""}},t._l(t.addresses,(function(e){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticClass:"text-white",attrs:{clickable:""},on:{click:function(s){return t.selectAddress(e)}}},[s("q-item-section",[s("q-item-label",{staticClass:"text-bold"},[t._v(" "+t._s(e.name)+" ")]),s("q-item-label",{staticClass:"text-white",attrs:{caption:""}},[t._v(" "+t._s(e.address)+" ")])],1),s("q-item-section",{attrs:{side:"",center:""}},[s("q-icon",{attrs:{name:"chevron_right",color:"primary"}})],1)],1)})),1)],1)},a=[],n={props:["value"],data(){return{dlgLocation:!1,addresses:[],label:"",valueSelect:this.value,expanded:!1}},watch:{valueSelect:{handler(t){console.log("valueSelect",this.valueSelect),this.$emit("input",t)},immediate:!0}},async mounted(){const t=JSON.parse(localStorage.getItem("JAGAO_SESSION_INFO"));t&&await this.getAddress(),this.value&&this.changeAddress(this.value)},methods:{async getAddress(){const t=await this.$api.get("addresses/status/1");this.addresses=t,this.addresses.length>0&&!this.value&&this.changeAddress(this.addresses[0].id)},selectAddress(t){this.label=t.name+" "+t.address,this.valueSelect=t.id,this.expanded=!1},changeAddress(t){const e=this.addresses.find((e=>e.id===t));e?(this.label=e.name+" "+e.address,this.valueSelect=e.id):this.addresses.length>0&&this.changeAddress(this.addresses[0].id)}}},o=n,c=s("2877"),r=s("3b73"),l=s("4074"),d=s("cb32"),m=s("0170"),u=s("1c1c"),p=s("66e5"),h=s("0016"),f=s("714f"),v=s("eebe"),y=s.n(v),b=Object(c["a"])(o,i,a,!1,null,null,null);e["a"]=b.exports;y()(b,"components",{QExpansionItem:r["a"],QItemSection:l["a"],QAvatar:d["a"],QItemLabel:m["a"],QList:u["a"],QItem:p["a"],QIcon:h["a"]}),y()(b,"directives",{Ripple:f["a"]})},e2b3:function(t,e,s){},ee22:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-item",{staticClass:"q-py-lg"},[s("q-item-section",[s("q-item-label",{staticClass:"text-primary text-h6 text-bold"},[t._v(t._s(t.category_name))]),s("q-item-label",{staticClass:"q-pl-md",attrs:{caption:""}},t._l(t.detail_request_service,(function(e){return s("li",{key:e.id,staticClass:"q-pt-xs"},[t._v("\n        "+t._s(e.service_name)+"\n      ")])})),0)],1),s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",{attrs:{rounded:"",size:"95px"}},[s("img",{attrs:{src:t.$api_url()+"image/categories/"+t.category_id,alt:"icono"}})])],1)],1)},a=[],n={props:["detail_request_service","category_name","category_id"]},o=n,c=(s("3726"),s("2877")),r=s("66e5"),l=s("4074"),d=s("0170"),m=s("cb32"),u=s("eebe"),p=s.n(u),h=Object(c["a"])(o,i,a,!1,null,"3180f818",null);e["a"]=h.exports;p()(h,"components",{QItem:r["a"],QItemSection:l["a"],QItemLabel:d["a"],QAvatar:m["a"]})},f99b:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var i=s("f508");const a={data(){return{data:[]}},async mounted(){"function"===typeof this.beforeMounted&&this.beforeMounted(),await this.getRecord(),"function"===typeof this.afterMounted&&this.afterMounted()},methods:{async getRecord(){i["a"].show(),await this.$api.get(`${this.route}`).then((t=>{this.data=t,"function"===typeof this.afterGetRecord&&this.afterGetRecord(t),i["a"].hide()}))}}}}}]);