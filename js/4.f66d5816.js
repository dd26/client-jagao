(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"02b0":function(t,e,s){"use strict";s("50d8")},"056f":function(t,e,s){"use strict";s("6574")},"0788":function(t,e,s){},"115b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("q-tab-panels",{attrs:{animated:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[s("q-tab-panel",{attrs:{name:"selection"}},[s("selection-services",{on:{nextStep:t.nextStep}})],1),s("q-tab-panel",{attrs:{name:"confirm"}},[s("confirm-services",t._b({attrs:{form:t.form},on:{nextStep:t.nextStep,previousStep:t.previousStep}},"confirm-services",t.form,!1))],1),s("q-tab-panel",{attrs:{name:"pay"}},[s("pay-services",t._b({attrs:{form:t.form},on:{nextStep:t.nextStep,previousStep:t.previousStep}},"pay-services",t.form,!1))],1),s("q-tab-panel",{attrs:{name:"finished"}},[s("finished",t._b({attrs:{form:t.form},on:{nextStep:t.nextStep,previousStep:t.previousStep}},"finished",t.form,!1))],1),s("q-tab-panel",{attrs:{name:"error"}},[s("error-component",t._b({attrs:{form:t.form},on:{nextStep:t.nextStep,previousStep:t.previousStep}},"error-component",t.form,!1))],1)],1)],1)},a=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticStyle:{"padding-bottom":"150px"}},[s("section",{staticStyle:{position:"relative",height:"175px","border-radius":"12px 12px 0 0","background-color":"#97DDFD",overflow:"hidden"}},[s("q-btn",{staticStyle:{position:"absolute",left:"16px",top:"16px"},attrs:{dense:"",flat:"",round:"",size:"15px",icon:"arrow_back_ios",color:"white"},on:{click:function(e){return t.$router.go(-1)}}}),s("img",{staticStyle:{"object-fit":"fill"},attrs:{src:t.$api_url()+"image/categories/"+t.category_id,alt:"categori_img",width:"100%",height:"100%"}})],1),s("section",{staticClass:"row col-12 q-pa-lg"},[s("div",{staticClass:"text-primary text-bold",staticStyle:{"font-size":"25px"}},[t._v(t._s(t.category.name))]),t._m(0)]),t.category_id?s("section",{staticClass:"row col-12 q-px-md q-pt-md"},[(t.render=t.render)?s("q-list",{staticClass:"col-12 q-gutter-y-md"},t._l(t.services,(function(e,i){return s("div",{key:i,staticClass:"row"},[s("select-s-category-item",t._b({staticClass:"col-11",on:{increment:t.increment,decrement:t.decrement},model:{value:e.select,callback:function(s){t.$set(e,"select",s)},expression:"item.select"}},"select-s-category-item",e,!1)),e.select?s("div",{staticClass:"col-1 flex flex-center text-bold text-primary",staticStyle:{"font-size":"20px"}},[t._v(" "+t._s(e.quantity)+" ")]):t._e()],1)})),0):t._e()],1):t._e(),s("section",{staticClass:"row col-12 q-px-md q-pt-sm"},[s("div",{staticClass:"row col-12"},[s("div",{staticClass:"text-primary",staticStyle:{"font-size":"25px","font-weight":"700"}},[t._v("Selected services:")]),s("q-space"),s("div",{staticClass:"text-black q-pr-sm",staticStyle:{"font-size":"25px","font-weight":"700"}},[t._v(" "+t._s(t.quantityServices)+" ")])],1),s("section",{staticClass:"col-12 row q-pt-md q-gutter-y-sm"},t._l(t.servicesCheck,(function(e){return s("div",{key:e.id,staticClass:"col-12 row justify-between"},[s("div",{staticClass:"col-5",staticStyle:{"font-size":"20px"}},[t._v(t._s(e.quantity>1?e.quantity:"")+" "+t._s(e.name))]),s("div",{staticClass:"text-primary col-5",staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v(t._s(e.price*e.quantity)+"$")]),s("q-btn",{attrs:{icon:"img:vectors/icon_trash.svg",flat:"",round:"",dense:"",size:"md"},on:{click:function(s){return t.unselectService(e.id)}}})],1)})),0)]),s("footer-s",{attrs:{amount:t.totalAmount,isConfirm:t.servicesCheck.length>0},on:{nextStep:t.nextStep}})],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{},[t._v("\n      Select the services you need from each category, "),s("b",{staticClass:"text-primary"},[t._v(" the services you mark will be added.")]),s("br"),s("br"),t._v("\n      When you finish confirm them to continue with the process.\n    ")])}],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer row",class:{footerNoUser:!t.user.id}},[s("div",{staticClass:"col-6 row items-start"},[s("div",{staticClass:"col-12 q-pt-md",staticStyle:{"font-weight":"700","font-size":"25px","line-height":"1px"}},[t._v("Amount")]),s("div",{staticClass:"col-12",staticStyle:{"font-weight":"700","font-size":"25px","line-height":"1px"}},[t._v(t._s(t.$formatPrice(t.amount))+"$")])]),s("div",{staticClass:"col-6 flex flex-center"},[t.isConfirm?s("q-btn",{attrs:{color:"white","text-color":"primary",label:"Confirm","no-caps":""},on:{click:function(e){return t.$emit("nextStep")}}}):t._e()],1)])},n=[],l={props:["amount","isConfirm"],data(){return{user:{}}},async created(){const t=JSON.parse(localStorage.getItem("JAGAO_SESSION_INFO"));t&&(this.user=await this.$getUserInfo())}},d=l,u=(s("3587"),s("2877")),p=s("9c40"),m=s("eebe"),v=s.n(m),f=Object(u["a"])(d,c,n,!1,null,"47582ae2",null),y=f.exports;v()(f,"components",{QBtn:p["a"]});var h=s("2645"),x={components:{SelectSCategoryItem:h["a"],FooterS:y},data(){return{services:[],category_id:this.$route.params.category_id,category:{},render:!0}},computed:{totalAmount(){return this.services.reduce(((t,e)=>e.select?t+parseFloat(e.price)*parseInt(e.quantity):t),0)},quantityServices(){return this.services.reduce(((t,e)=>e.select?t+1:t),0)},servicesCheck(){return this.services.filter((t=>t.select))}},async mounted(){const t=JSON.parse(localStorage.getItem("JAGAO_SESSION_INFO"));if(t){const t=await this.$getUserInfo();t&&(await this.getCategory(),this.$route.query.services&&this.requestAgain())}await this.getServices()},methods:{requestAgain(){const t=JSON.parse(this.$route.query.services),e=this.services.map((e=>{const s=t.find((t=>t.service_id===e.id));return s&&(e.select=!0,e.quantity=s.quantity),e}));this.services=e},increment(t){this.services.find((e=>e.id===t)).quantity++},decrement(t){this.services.find((e=>e.id===t)).quantity>0&&this.services.find((e=>e.id===t)).quantity--},nextStep(){this.$emit("nextStep","confirm",{services:this.servicesCheck})},unselectService(t){this.services.find((e=>e.id===t)).select=!1,this.$nextTick((()=>{this.render=!0})),this.render=!1},async getServices(){await this.$api.get("subcategories_by_category_id/"+this.$route.params.category_id).then((t=>{this.services=t.map((t=>({...t,quantity:0})))}))},async getCategory(){await this.$api.get("categories/"+this.$route.params.category_id).then((t=>{this.category=t}))}}},b=x,C=s("1c1c"),g=s("2c91"),q=Object(u["a"])(b,r,o,!1,null,null,null),_=q.exports;v()(q,"components",{QBtn:p["a"],QList:C["a"],QSpace:g["a"]});var w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row"},[s("section",{staticClass:"row col-12 q-pa-md"},[s("q-btn",{staticStyle:{color:"#7DBA47"},attrs:{dense:"",flat:"",round:"",size:"15px",icon:"arrow_back_ios"},on:{click:function(e){return t.$emit("previousStep","selection")}}}),s("div",{staticClass:"text-primary col-12 text-center",staticStyle:{"font-weight":"700","font-size":"25px","margin-top":"-25px"}},[t._v("Confirmation")])],1),s("section",{staticClass:"row col-12 q-px-lg q-pt-md"},[t.$v.form.address_id.$error?s("div",{staticClass:"text-negative",staticStyle:{"font-size":"15px"}},[t._v("Select your location")]):t._e(),s("my-ubication",{attrs:{"validate-coords":""},on:{"error-coords":function(e){return t.errorCoords()},"success-coords":function(e){return t.successCoords()}},model:{value:t.form.address_id,callback:function(e){t.$set(t.form,"address_id",e)},expression:"form.address_id"}})],1),s("section",{staticClass:"row q-px-lg q-pt-lg col-12"},[s("div",{staticClass:"col-12 row items-center"},[s("div",{staticClass:"text-primary",staticStyle:{"font-size":"20px"}},[t._v("Order details")]),s("q-space"),s("q-btn",{attrs:{dense:"",flat:"",round:"",size:"15px",icon:"img:vectors/edit4.svg"},on:{click:function(e){t.modeEdit=!0}}})],1)]),s("section",{staticClass:"col-12 row q-pt-md q-gutter-y-sm q-px-lg"},t._l(t.form.services,(function(e){return s("div",{key:e.id,staticClass:"col-12 row justify-between"},[s("div",{staticClass:"row"},[t.modeEdit&&t.form.services.length>1?s("q-btn",{staticClass:"q-mr-sm",attrs:{icon:"img:vectors/icon_trash.svg",flat:"",round:"",dense:"",size:"md"},on:{click:function(s){return t.deleteService(e.id)}}}):t._e(),s("div",{staticStyle:{"font-size":"20px"}},[t._v(t._s(e.quantity>1?e.quantity:"")+" "+t._s(e.name))])],1),s("div",{staticClass:"text-primary",staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v(t._s(e.price*e.quantity)+"$")])])})),0),s("hr",{staticClass:"col-11",staticStyle:{"border-top":"0.1em solid #000000"}}),s("section",{staticClass:"row col-12 q-px-lg"},[s("q-space"),s("div",{staticClass:"text-black q-pr-lg",staticStyle:{"font-size":"20px"}},[t._v("Total")]),s("div",{staticClass:"text-primary text-bold",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.totalAmount)+"$")])],1),s("section",{staticClass:"col-12 row q-pa-lg"},[s("div",{staticClass:"text-primary",staticStyle:{"font-size":"20px"}},[t._v("Date")]),t.$v.form.date.$error?s("div",{staticClass:"text-negative text-bold col-12"},[t._v(" The date is required!")]):t._e(),s("q-checkbox",{staticClass:"col-12 text-primary",attrs:{"keep-color":"",val:!0,label:"Right now",color:"primary",size:"lg"},model:{value:t.form.right_now,callback:function(e){t.$set(t.form,"right_now",e)},expression:"form.right_now"}}),s("q-date",{staticClass:"col-12 no-shadow",attrs:{minimal:"",color:"red",disable:t.form.right_now},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}}),s("section",{staticClass:"col-12 row"},[s("div",{class:t.form.right_now?"text-grey":"text-primary",staticStyle:{"font-size":"20px"}},[t._v("Hour")]),s("q-input",{staticClass:"col-12 style-time q-mt-md",attrs:{mask:"time",rules:["time"],borderless:"",dense:"",error:t.$v.form.time.$error,disable:t.form.right_now,"input-style":"color: #00A58D"},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time",color:t.form.right_now?"grey":"primary"}},[s("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-time",{model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}})],1),s("section",{staticClass:"col-12 row q-pt-lg"},[s("div",{staticClass:"text-primary",staticStyle:{"font-size":"20px"}},[t._v("Remarks and input code")]),s("q-input",{staticClass:"col-12 style-input q-mt-md",attrs:{borderless:"",type:"textarea","input-style":"color: #00A58D"},model:{value:t.form.observations,callback:function(e){t.$set(t.form,"observations",e)},expression:"form.observations"}})],1),s("section",{staticClass:"col-12 row q-pt-xl q-pb-lg"},[s("q-btn",{staticClass:"col-12 style-btn",attrs:{dense:"",color:"primary",label:"Continue","no-caps":"",unelevated:""},on:{click:t.continueStep}})],1)],1)])},S=[],$=s("c43d"),k=s("b5ae"),D={props:["services"],components:{MyUbication:$["a"]},data(){return{form:{address_id:null,services:this.services,right_now:!1},modeEdit:!1,isErrorCoords:!1}},computed:{totalAmount(){return this.form.services.reduce(((t,e)=>t+parseFloat(e.price)*parseFloat(e.quantity)),0)}},methods:{continueStep(){this.isErrorCoords?this.$q.notify({color:"negative",message:"Please select other location"}):(this.$v.form.$touch(),this.$v.form.$invalid?this.$q.notify({color:"negative",message:"Please fill all required fields"}):this.$emit("nextStep","pay",this.form))},deleteService(t){this.form.services=this.form.services.filter((e=>e.id!==t)),this.modeEdit=!1},errorCoords(){console.log("error confirmar ubicacion"),this.isErrorCoords=!0,this.$q.notify({color:"negative",message:"We could not get your location, please select other location"})},successCoords(){console.log("success confirmar ubicacion"),this.isErrorCoords=!1}},validations:{form:{time:{requiredIf:Object(k["requiredIf"])((t=>!t.right_now))},date:{requiredIf:Object(k["requiredIf"])((t=>!t.right_now))},address_id:{required:k["required"]}}}},z=D,A=(s("056f"),s("8f8e")),P=s("52ee"),Q=s("27f9"),E=s("0016"),O=s("7cbe"),j=s("ca78"),I=s("7f67"),N=Object(u["a"])(z,w,S,!1,null,"2c3e2af2",null),F=N.exports;v()(N,"components",{QBtn:p["a"],QSpace:g["a"],QCheckbox:A["a"],QDate:P["a"],QInput:Q["a"],QIcon:E["a"],QPopupProxy:O["a"],QTime:j["a"]}),v()(N,"directives",{ClosePopup:I["a"]});var J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row q-pb-xl"},[s("section",{staticClass:"row col-12 q-pa-md"},[s("q-btn",{staticStyle:{color:"#7DBA47"},attrs:{dense:"",flat:"",round:"",size:"15px",icon:"arrow_back_ios"},on:{click:function(e){return t.$emit("previousStep","confirm")}}}),s("div",{staticClass:"text-primary col-12 text-center",staticStyle:{"font-weight":"700","font-size":"25px","margin-top":"-25px"}},[t._v("Pay")])],1),s("section",{staticClass:"row col-12 q-px-lg q-pt-md"},[s("my-ubication",{model:{value:t.formPay.address_id,callback:function(e){t.$set(t.formPay,"address_id",e)},expression:"formPay.address_id"}})],1),s("section",{staticClass:"row q-px-lg q-pt-lg col-12"},[s("div",{staticClass:"col-12 row items-center"},[s("div",{staticClass:"text-primary",staticStyle:{"font-size":"20px"}},[t._v("Order details")]),s("q-space"),s("q-btn",{attrs:{dense:"",flat:"",round:"",size:"15px",icon:"img:vectors/edit4.svg"},on:{click:function(e){t.modeEdit=!0}}})],1)]),s("section",{staticClass:"col-12 row q-pt-md q-gutter-y-sm q-px-lg"},t._l(t.formPay.services,(function(e){return s("div",{key:e.id,staticClass:"col-12 row justify-between"},[s("div",{staticClass:"row"},[t.modeEdit&&t.formPay.services.length>1?s("q-btn",{staticClass:"q-mr-sm",attrs:{icon:"img:vectors/icon_trash.svg",flat:"",round:"",dense:"",size:"md"},on:{click:function(s){return t.deleteService(e.id)}}}):t._e(),s("div",{staticStyle:{"font-size":"20px"}},[t._v(t._s(e.quantity>1?e.quantity:"")+" "+t._s(e.name))])],1),s("div",{staticClass:"text-primary",staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v(t._s(e.price*e.quantity)+"$")])])})),0),s("hr",{staticClass:"col-11",staticStyle:{"border-top":"0.1em solid #000000"}}),s("section",{staticClass:"row col-12 q-px-lg"},[s("q-space"),s("div",{staticClass:"text-black q-pr-lg",staticStyle:{"font-size":"20px"}},[t._v("Total")]),s("div",{staticClass:"text-primary text-bold",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.totalAmount)+"$")])],1),s("section",{staticClass:"col-12 row"},[s("div",{staticClass:"text-primary col-12 text-center q-pt-lg",staticStyle:{"font-weight":"700","font-size":"25px"}},[t._v("Payment")]),s("section",{staticClass:"col-12 row q-px-lg q-pt-md"},[s("div",{staticClass:"text-primary col-12 q-pb-sm",staticStyle:{"font-size":"20px"}},[t._v("Discount coupon")]),s("q-input",{staticClass:"col-7 style-input",attrs:{dense:"",flat:"",round:"",size:"15px",placeholder:"ABCD12345","input-style":"color: #00A58D",borderless:""},model:{value:t.formPay.coupon,callback:function(e){t.$set(t.formPay,"coupon",e)},expression:"formPay.coupon"}}),s("div",{staticClass:"row col-5 justify-center"},[s("q-btn",{staticClass:"col-12 q-ml-sm",class:t.hasDiscount?"style-btn-disabled":"style-btn",attrs:{dense:"",label:"Redeem",unelevated:"","no-caps":"",color:"primary"},on:{click:t.verifyCoupon}}),s("div",{staticClass:"col-12 text-center text-primary q-pt-xs",staticStyle:{"font-weight":"600","font-size":"14px"}},[t._v(" "+t._s(t.discountObj.label)+" ")])],1)],1)]),s("section",{staticClass:"col-12 row q-px-lg q-pt-lg"},[s("div",{staticClass:"text-primary col-12 q-pb-sm",staticStyle:{"font-size":"20px"}},[t._v("Amount")]),s("q-list",{staticClass:"col-12",staticStyle:{"border-radius":"12px"},attrs:{bordered:"",separator:""}},[s("q-item",{attrs:{tag:"label",disable:!t.hasDiscount}},[s("q-item-section",{attrs:{avatar:""}},[s("q-radio",{attrs:{val:0,disable:!t.hasDiscount},model:{value:t.isDiscount,callback:function(e){t.isDiscount=e},expression:"isDiscount"}})],1),s("q-item-section",[s("q-item-label",{class:t.hasDiscount?"text-primary":"text-grey",staticStyle:{"font-size":"20px"}},[t._v("With discount")])],1),s("q-item-section",{attrs:{side:"",center:""}},[s("q-item-label",{staticClass:"text-bold",class:t.hasDiscount?"text-primary":"text-grey",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.$formatPrice(t.discountObj.totalAmount))+"$")])],1)],1),s("q-item",{attrs:{tag:"label"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-radio",{attrs:{val:1},model:{value:t.isDiscount,callback:function(e){t.isDiscount=e},expression:"isDiscount"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"text-primary",staticStyle:{"font-size":"20px"}},[t._v("Total amount")])],1),s("q-item-section",{attrs:{side:"",center:""}},[s("q-item-label",{staticClass:"text-primary text-bold",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.$formatPrice(t.totalAmount))+"$")])],1)],1)],1)],1),s("section",{staticClass:"col-12 row q-px-lg q-pt-lg"},[s("div",{staticClass:"text-primary col-12 q-pb-sm",staticStyle:{"font-size":"20px"}},[t._v("Payment method")]),t.$v.formPay.card_id.$error?s("p",{staticClass:"text-negative"},[t._v(" Select your payment method ")]):t._e(),t.cards.length>0?s("q-list",{staticClass:"col-12",staticStyle:{"border-radius":"12px"},attrs:{bordered:"",separator:""}},t._l(t.cards,(function(e){return s("q-item",{key:e.id,attrs:{tag:"label"}},[s("q-item-section",{staticStyle:{padding:"0 !important!"},attrs:{avatar:""}},[s("q-radio",{attrs:{val:e.id},model:{value:t.formPay.card_id,callback:function(e){t.$set(t.formPay,"card_id",e)},expression:"formPay.card_id"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"text-primary",staticStyle:{"font-size":"20px"}},[t._v("\n            ..."+t._s(t.getLastNumbers(e.number))+"\n          ")])],1),s("q-item-section",{attrs:{side:"",center:"",avatar:""}},[s("div",{staticClass:"row items-center"},[s("div",{staticClass:"text-primary text-bold q-pr-sm",staticStyle:{"font-size":"16px"}},[t._v(t._s(e.new?"New!":null))]),s("q-icon",{attrs:{name:t.comprobateTypeCard(e.number),size:"40px",color:"primary"}})],1)])],1)})),1):s("section",{staticClass:"col-12"},[s("q-list",{staticClass:"col-12 q-pa-md",staticStyle:{"border-radius":"12px"},attrs:{bordered:"",separator:""}},[s("div",{staticClass:"text-primary col-12 q-pb-sm",staticStyle:{"font-size":"20px"}},[t._v("No cards, please add new")])])],1),t.modeAddCard?t._e():s("q-btn",{staticClass:"q-mt-md",staticStyle:{height:"40px","border-radius":"8px",border:"1px solid #00A58D"},attrs:{label:"Add new card","no-caps":"",flat:"",color:"primary"},on:{click:t.openCardFormSection}})],1),t.modeAddCard?s("section",{staticClass:"q-px-lg q-pt-lg"},[s("add-card",{on:{cancelAddCard:function(e){t.modeAddCard=!1},addedCard:t.addedCard}})],1):t._e(),s("section",{staticClass:"col-12 row q-pt-xl q-pb-lg q-px-lg"},[s("q-btn",{staticClass:"col-12 style-btn-continue",attrs:{dense:"",disable:t.modeAddCard,color:t.modeAddCard?"grey":"primary","no-caps":"",unelevated:"",label:"Confirm"},on:{click:t.confirmClick}})],1),t.isConfirm?s("section",{staticClass:"q-px-lg"},[s("set-cvv",{on:{pay:t.pay},model:{value:t.formPay.cvv,callback:function(e){t.$set(t.formPay,"cvv",e)},expression:"formPay.cvv"}})],1):t._e(),s("q-dialog",{attrs:{persistent:""},model:{value:t.isDlg,callback:function(e){t.isDlg=e},expression:"isDlg"}},[s("q-card",{staticClass:"full-width q-py-md q-pa-md",staticStyle:{"border-radius":"10px"}},[s("q-card-section",[s("div",{staticClass:"text-h5 text-primary"},[t._v("Sign up")]),s("p",{staticClass:"text-subtitle1 q-pt-md",staticStyle:{"line-height":"20px"}},[t._v("\n          Don't miss the chance to choose from the various services we offer in our application! Register to access this feature and enjoy all the benefits we offer. Don't wait any longer!\n        ")])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{attrs:{label:"Cancel",color:"primary",flat:"","no-caps":""},on:{click:function(e){t.isDlg=!1}}}),s("q-btn",{staticClass:"q-px-md",attrs:{to:"/register",color:"primary",label:"Sign up","no-caps":"",rounded:""}})],1)],1)],1)],1)},B=[],T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row"},[s("div",{staticClass:"text-primary text-bold col-12",staticStyle:{"font-size":"20px"}},[t._v("Add new card")]),s("section",{staticClass:"col-12 row q-pt-md q-gutter-y-md"},[s("div",{staticClass:"col-12 row"},[s("div",{staticClass:"text-primary col-12",staticStyle:{"font-size":"20px"}},[t._v("Card number")]),s("div",{staticClass:"col-12 row"},[s("q-input",{staticClass:"col-12 q-mt-sm style-input",attrs:{dense:"",flat:"",round:"",size:"15px",placeholder:"1234 5678 9012 3456","input-style":"color: #00A58D",maxlength:"19","unmasked-value":"",mask:"#### #### #### ####",borderless:"",error:t.$v.form.cardNumber.$error},on:{blur:function(e){return t.$v.form.cardNumber.$touch()}},model:{value:t.form.cardNumber,callback:function(e){t.$set(t.form,"cardNumber",e)},expression:"form.cardNumber"}})],1)]),s("div",{staticClass:"col-12 row"},[s("div",{staticClass:"text-primary col-12",staticStyle:{"font-size":"20px"}},[t._v("Card name")]),s("div",{staticClass:"col-12 row"},[s("q-input",{staticClass:"col-12 q-mt-sm style-input",attrs:{dense:"",flat:"",round:"",size:"15px",placeholder:"Jhon Doe Rodriguez","input-style":"color: #00A58D",borderless:"",error:t.$v.form.name.$error},on:{blur:function(e){return t.$v.form.name.$touch()}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)]),s("section",{staticClass:"col-12 row justify-between"},[s("div",{staticClass:"col-3 row"},[s("div",{staticClass:"text-primary col-12",staticStyle:{"font-size":"20px"}},[t._v("CVV")]),s("div",{staticClass:"col-12 row"},[s("q-input",{staticClass:"col-12 q-mt-sm style-input",attrs:{dense:"",flat:"",round:"",size:"15px",placeholder:"123",mask:"###","input-style":"color: #00A58D; text-align: center",borderless:"",error:t.$v.form.securityCode.$error},on:{blur:function(e){return t.$v.form.securityCode.$touch()}},model:{value:t.form.securityCode,callback:function(e){t.$set(t.form,"securityCode",e)},expression:"form.securityCode"}})],1)]),s("div",{staticClass:"col-4 row"},[s("div",{staticClass:"text-primary col-12",staticStyle:{"font-size":"20px"}},[t._v("Date")]),s("div",{staticClass:"col-12 row"},[s("q-input",{staticClass:"col-12 q-mt-sm style-input",attrs:{dense:"",flat:"",round:"",size:"15px",placeholder:"09/23","input-style":"color: #00A58D; text-align: center",borderless:"",error:t.$v.form.expiredDate.$error},on:{blur:function(e){return t.$v.form.expiredDate.$touch()}},model:{value:t.form.expiredDate,callback:function(e){t.$set(t.form,"expiredDate",e)},expression:"form.expiredDate"}},[s("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-card",{staticClass:"row q-pa-md",staticStyle:{"min-width":"300px","border-radius":"8px"}},[s("div",{staticClass:"row col-6 q-px-xs"},[s("div",{staticClass:"col-12"},[t._v("Month")]),s("q-select",{staticClass:"col-12",attrs:{dense:"",options:t.months,outlined:"","emit-value":"","map-options":""},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1),s("div",{staticClass:"row col-6 q-px-xs"},[s("div",{staticClass:"col-12"},[t._v("Year")]),s("q-select",{staticClass:"col-12",attrs:{dense:"",options:t.years,outlined:"","emit-value":"","map-options":""},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),s("div",{staticClass:"col-12 row justify-end q-pt-md q-pr-sm"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",color:"primary",label:"OK"},on:{click:t.changeExpiredDate}})],1)])],1)],1)],1)])])]),s("section",{staticClass:"col-12 row justify-around q-pt-md"},[s("div",{staticClass:"row col-6 q-pr-sm"},[s("q-btn",{staticClass:"q-mt-md col-12",staticStyle:{height:"40px","border-radius":"8px",border:"1px solid #00A58D","box-shadow":"0px 4px 4px rgba(0, 0, 0, 0.25)"},attrs:{label:"Add","no-caps":"",flat:"",color:"primary"},on:{click:t.save}})],1),s("div",{staticClass:"row col-6 q-pl-sm"},[s("q-btn",{staticClass:"q-mt-md col-12",staticStyle:{height:"40px","border-radius":"8px"},attrs:{label:"Cancel","no-caps":"",unelevated:"",color:"negative"},on:{click:function(e){return t.$emit("cancelAddCard")}}})],1)])])},V=[],R=(s("ddb0"),s("9424"));const M=t=>{if(!t)return!1;console.log(t,"value2");const[e,s]=t.split("/"),i="20"+s,a=new Date,r=a.getMonth()+1,o=a.getFullYear();return parseInt(i)>=o&&(parseInt(i)>o||parseInt(e)>=r)};var L={mixins:[R["a"]],data(){return{form:{name:null,cardNumber:null,expiredDate:null,securityCode:null},month:null,year:null,route:"cards"}},computed:{months(){const t=[{label:"Enero",value:"01"},{label:"Febrero",value:"02"},{label:"Marzo",value:"03"},{label:"Abril",value:"04"},{label:"Mayo",value:"05"},{label:"Junio",value:"06"},{label:"Julio",value:"07"},{label:"Agosto",value:"08"},{label:"Septiembre",value:"09"},{label:"Octubre",value:"10"},{label:"Noviembre",value:"11"},{label:"Diciembre",value:"12"}];return t},years(){const t=[],e=(new Date).getFullYear();for(let s=e;s<=e+78;s++)t.push({value:s,label:s});return t}},methods:{afterSave(t){this.$emit("addedCard",t)},changeExpiredDate(){const t=this.month,e=this.year.toString().substr(2);this.form.expiredDate=`${t}/${e}`}},validations:{form:{name:{required:k["required"]},cardNumber:{required:k["required"]},expiredDate:{validateDateCV:M},securityCode:{required:k["required"]}}}},U=L,W=(s("5e31"),s("f09f")),G=s("ddd8"),Y=Object(u["a"])(U,T,V,!1,null,"4dee2e3a",null),H=Y.exports;v()(Y,"components",{QInput:Q["a"],QPopupProxy:O["a"],QCard:W["a"],QSelect:G["a"],QBtn:p["a"]}),v()(Y,"directives",{ClosePopup:I["a"]});var K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row"},[s("section",{staticClass:"col-12 row items-start"},[s("div",[s("q-icon",{attrs:{name:"img:vectors/icon13.svg"}})],1),t._m(0)]),s("section",{staticClass:"row col-12 q-pt-lg items-center justify-around q-gutter-x-sm"},[s("div",{staticClass:"col-4 row"},[s("div",{staticClass:"col-12 row"},[s("q-input",{staticClass:"col-12 style-input",attrs:{dense:"",flat:"",round:"",size:"15px",placeholder:"123",mask:"###","input-style":"color: #00A58D; text-align: center",borderless:"",error:t.$v.cvv.$error},on:{blur:function(e){return t.$v.cvv.$touch()}},model:{value:t.cvv,callback:function(e){t.cvv=e},expression:"cvv"}})],1)]),s("q-btn",{staticClass:"col-5 style-btn",attrs:{dense:"",color:"primary","no-caps":"",unelevated:"",label:"Pay"},on:{click:t.pay}})],1)])},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-11"},[s("div",{staticClass:"text-primary q-pl-sm",staticStyle:{"font-weight":"700","font-size":"20px","margin-top":"-3px"}},[t._v("CVV")]),s("div",{staticClass:"q-pl-sm",staticStyle:{"font-size":"16px",color:"#3C3C3C"}},[t._v("Please enter the cvv code on the back of the card you selected.")])])}],Z={props:["value"],data(){return{cvv:this.value}},watch:{cvv(){this.$emit("input",this.cvv)}},methods:{pay(){this.$v.cvv.$touch(),this.$v.$invalid||this.$emit("pay")}},validations:{cvv:{required:k["required"]}}},tt=Z,et=(s("df15"),Object(u["a"])(tt,K,X,!1,null,"c6898084",null)),st=et.exports;v()(et,"components",{QIcon:E["a"],QInput:Q["a"],QBtn:p["a"]});var it={props:["form"],components:{MyUbication:$["a"],AddCard:H,SetCvv:st},data(){return{formPay:{...this.form},modeEdit:!1,isDiscount:1,hasDiscount:!1,cards:[],modeAddCard:!1,isConfirm:!1,route:"master_request_services",totalDiscount:10,discountObj:{label:"",totalAmount:0},token:null,isDlg:!1}},mounted(){const t=JSON.parse(localStorage.getItem("JAGAO_SESSION_INFO"));t&&(this.token=t,this.getCards())},computed:{totalAmount(){return this.formPay.services.reduce(((t,e)=>t+parseFloat(e.price)*parseInt(e.quantity)),0)}},methods:{async verifyCoupon(){if(!this.token)return this.isDlg=!0,!1;this.$q.loading.show(),await this.$api.get("/coupons/check/code/"+this.formPay.coupon).then((t=>{this.$q.loading.hide(),t?(console.log(t),this.hasDiscount=!0,this.discountObj=t,this.discountObj.label=2===t.type?`$${t.value} of dicount!`:`${t.value}% of dicount!`,this.discountObj.withDiscountValue=2===t.type?t.value:this.totalAmount*t.value/100,this.discountObj.totalAmount=this.totalAmount-this.discountObj.withDiscountValue,this.isDiscount=0):(this.$q.notify({color:"negative",message:"Invalid coupon"}),this.hasDiscount=!1,this.isDiscount=1)}))},confirmClick(){if(!this.token)return this.isDlg=!0,!1;this.$v.formPay.card_id.$touch(),this.$v.formPay.card_id.$invalid||(this.isConfirm=!0)},async pay(){this.formPay.category_id=this.$route.params.category_id,this.formPay.discount=this.isDiscount,this.$q.loading.show(),await this.$api.post(`${this.route}`,this.formPay).then((t=>{this.$q.loading.hide(),console.log(t,"res no error"),t&&!t.error?this.$emit("nextStep","finished",this.formPay):(this.$emit("nextStep","error"),(t.error&&t.message||t.error)&&this.$q.notify({color:"negative",message:t.message?t.message:t.error}))}))},async addedCard(t){await this.getCards(),this.formPay.card_id=t.id,this.cards=this.cards.map((e=>(e.id===t.id&&(e.new=!0),e))),this.modeAddCard=!1},cancelAddCard(){this.modeAddCard=!1},continueStep(){this.$emit("continue",this.formPay)},comprobateTypeCard(t){return"4"===t[0]?"img:vectors/visa1.svg":"5"===t[0]?"img:vectors/master1.svg":"payment"},deleteService(t){this.formPay.services=this.formPay.services.filter((e=>e.id!==t)),this.modeEdit=!1},async getCards(){this.$q.loading.show();const t=await this.$api.get("cards");this.$q.loading.hide(),this.cards=t},getLastNumbers(t){return t.substring(t.length-4)},openCardFormSection(){if(!this.token)return this.isDlg=!0,!1;this.modeAddCard=!0}},validations:{formPay:{card_id:{required:k["required"]},cvv:{required:k["required"]}}}},at=it,rt=(s("bf27"),s("66e5")),ot=s("4074"),ct=s("3786"),nt=s("0170"),lt=s("24e8"),dt=s("a370"),ut=s("4b7e"),pt=Object(u["a"])(at,J,B,!1,null,"b60162de",null),mt=pt.exports;v()(pt,"components",{QBtn:p["a"],QSpace:g["a"],QInput:Q["a"],QList:C["a"],QItem:rt["a"],QItemSection:ot["a"],QRadio:ct["a"],QItemLabel:nt["a"],QIcon:E["a"],QDialog:lt["a"],QCard:W["a"],QCardSection:dt["a"],QCardActions:ut["a"]});var vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"column absolute-full",staticStyle:{"background-color":"#D9F2EE"}},[s("div",{staticClass:"col-7 container-img-2"}),s("div",{staticClass:"col- column"},[s("div",{staticClass:"q-pt-lg window-width row justify-center col-1"},[t._m(0),s("div",{staticClass:"btn-progress-container row justify-center items-center col-12 q-pt-md"},[s("q-btn",{staticClass:"btn-progress",attrs:{icon:"arrow_forward",round:"",size:"lg",color:"primary"},on:{click:function(e){return t.$router.push("/home")}}}),s("q-circular-progress",{attrs:{size:"80px",value:100,color:"primary",thickness:.07}})],1)])])])},ft=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-bold text-center col-12 text-primary q-pt-lg q-px-xl",staticStyle:{"font-weight":"700","font-size":"20px"}},[t._v("\n          Order made "),s("br"),t._v(" successfully!\n        ")])}],yt={props:["message"],data(){return{progressVal:0}},methods:{nextStep(){console.log("nextStep")}}},ht=yt,xt=(s("f871"),s("58ea")),bt=Object(u["a"])(ht,vt,ft,!1,null,"2f1156e5",null),Ct=bt.exports;v()(bt,"components",{QBtn:p["a"],QCircularProgress:xt["a"]});var gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"column absolute-full",staticStyle:{"background-color":"#D9F2EE",overflow:"hidden"}},[s("div",{staticClass:"col-6 container-img-2"}),s("div",{staticClass:"text-uppercase text-negative text-bold text-error-style"},[t._v("error")]),s("div",{staticClass:"col column"},[s("div",{staticClass:"q-pt-lg window-width row justify-center col-1"},[t._m(0),t._m(1),s("div",{staticClass:"col-12 row q-px-xl q-pt-xl justify-center q-pb-xl"},[s("q-btn",{staticClass:"col-12 btn-progress",attrs:{color:"primary",unelevated:"",label:"Reselect another card","no-caps":""},on:{click:function(e){return t.$emit("previousStep","pay")}}})],1)])])])},qt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-bold text-center col-12 text-primary q-pt-xl q-px-xl",staticStyle:{"font-weight":"700","font-size":"20px","margin-top":"45px"}},[t._v("\n          Something went wrong "),s("br"),t._v(" with the payment.\n        ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pt-md text-center",staticStyle:{"font-size":"16px",color:"#5C5C5C"}},[t._v("We invite you to try the payment with "),s("br"),t._v(" another card.")])}],_t={props:["message"],data(){return{progressVal:0}},methods:{nextStep(){console.log("nextStep")}}},wt=_t,St=(s("02b0"),Object(u["a"])(wt,gt,qt,!1,null,"9e895694",null)),$t=St.exports;v()(St,"components",{QBtn:p["a"]});var kt={components:{SelectionServices:_,ConfirmServices:F,PayServices:mt,Finished:Ct,ErrorComponent:$t},data(){return{panel:"selection",form:{services:[]}}},methods:{previousStep(t){this.panel=t},nextStep(t,e){if(this.panel=t,console.log(e),e){const t={...this.form,...e};this.form=t}}}},Dt=kt,zt=(s("9b55"),s("9989")),At=s("adad"),Pt=s("823b"),Qt=Object(u["a"])(Dt,i,a,!1,null,"2cc41c66",null);e["default"]=Qt.exports;v()(Qt,"components",{QPage:zt["a"],QTabPanels:At["a"],QTabPanel:Pt["a"]})},"2da0":function(t,e,s){},3587:function(t,e,s){"use strict";s("7909")},"50d8":function(t,e,s){},"5e31":function(t,e,s){"use strict";s("f950")},"627e":function(t,e,s){},6574:function(t,e,s){},7909:function(t,e,s){},"9b55":function(t,e,s){"use strict";s("2da0")},bf27:function(t,e,s){"use strict";s("627e")},df15:function(t,e,s){"use strict";s("0788")},f4d0:function(t,e,s){},f871:function(t,e,s){"use strict";s("f4d0")},f950:function(t,e,s){}}]);