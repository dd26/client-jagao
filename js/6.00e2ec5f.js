(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"059f":function(t,e,s){"use strict";s("9e11")},"0a10":function(t,e,s){"use strict";s("671a")},"3e07":function(t,e,s){},"671a":function(t,e,s){},"70eb":function(t,e,s){"use strict";s("8d4e")},"8d4e":function(t,e,s){},"9e11":function(t,e,s){},be37:function(t,e,s){"use strict";s("3e07")},fda0:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"q-pb-xl"},[s("div",{staticClass:"row q-pt-md q-px-md"},[s("q-btn",{attrs:{to:"/home",dense:"",flat:"",size:"11px",icon:"img:vectors/back1.svg"}}),s("q-space"),s("q-btn",{attrs:{to:"/settings",dense:"",flat:"",round:"",size:"15px",icon:"img:vectors/tools1.svg"}})],1),s("section",{staticClass:"row justify-center"},[s("div",{staticClass:"col-6 row justify-center",staticStyle:{position:"relative","max-width":"150px"}},[s("q-avatar",{attrs:{size:"150px"}},[s("img",{attrs:{src:t.avatarUrl,width:"100%",height:"100%"}})]),s("div",{staticClass:"absolute-bottom-right q-mr-sm verified-style"},[3!==t.role_id?s("q-icon",{attrs:{name:t.hasVerified?"img:vectors/verified2.svg":"img:vectors/verified1.svg",size:"lg"}},[s("q-popup-proxy",[s("q-card",{staticClass:"bg-primary text-white q-pa-md",staticStyle:{"border-radius":"12px"}},[s("div",{staticStyle:{"font-size":"14px"}},[t._v("\n                Hello "+t._s(t.name)+", the Jagao® system is verifying your information, once this stage has finished and your account has been activated you will be able to use all our services!\n                "),s("br"),s("br"),s("b",{staticStyle:{"font-weight":"700"}},[t._v(" You will receive a notification when your account is verified!")])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",round:"",size:"md",color:"white","text-color":"black",label:"Ok!","no-caps":""}})],1)],1)],1)],1):t._e()],1)],1),s("div",{staticClass:"col-12 text-center q-pt-md text-primary",staticStyle:{"font-weight":"700","font-size":"20px"}},[t._v(t._s(t.name))])]),s("section",[s("AddressScroll")],1),s("section",[s("CardScroll")],1),t.isShowSentRequest?s("btn-change-request-role-to-specialist",{staticClass:"row col-12 q-mt-lg q-px-lg"}):t.lastRequestData&&"en espera"===t.lastRequestData.status?s("section",{staticClass:"row col-12 q-mt-lg q-pa-sm q-pt-md q-mx-lg items-center justify-center",staticStyle:{"background-color":"#D9F2EE","border-radius":"12px"}},[s("q-avatar",{attrs:{size:"70px"}},[s("img",{staticStyle:{border:"3px solid #FFF"},attrs:{src:"vectors/avatar-profile-work.png",width:"100%",height:"100%"}})]),s("div",{staticClass:"col q-px-sm q-pt-md"},["en espera"===t.lastRequestData.status?s("p",{staticClass:"column q-gutter-y-sm"},[s("span",{staticClass:"text-h6 text-primary text-bold",staticStyle:{"line-height":"20px"}},[t._v("Your request is pending!")]),s("span",{staticClass:"text-primary text-bold"},[t._v("We will contact you soon.")])]):t._e()])],1):t._e()],1)},i=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row q-pl-xl q-pt-xl"},[s("div",{staticClass:"col-12 text-primary",staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v("Address")]),s("div",{staticClass:"col-12 row q-pt-lg"},[s("q-btn",{staticStyle:{height:"123px",width:"36px"},attrs:{to:"/address/form",icon:"add",color:"primary",dense:"",push:""}}),s("q-scroll-area",{staticClass:"col-10",staticStyle:{height:"125px"},attrs:{"bar-style":t.barStyle,"thumb-style":t.thumbStyle}},[s("div",{staticClass:"row no-wrap q-gutter-x-md q-pl-md"},t._l(t.data,(function(e,a){return s("q-card",{key:a,staticClass:"style-card-item row items-center",style:e.id&&0===e.status?"background-color: rgb(239, 239, 239);":""},[e.id?s("q-btn",{staticStyle:{position:"absolute",right:"10px",top:"10px"},attrs:{flat:"",size:"sm",color:"primary",round:"",icon:"more_horiz"}},[s("q-menu",[s("q-list",[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(s){return t.deleteAddressConfirm(e.id)}}},[s("q-item-section",[s("q-item-label",[t._v("Delete")])],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(s){return t.editAddress(e.id,e.status)}}},[s("q-item-section",[s("q-item-label",[t._v(t._s(1===e.status?"Disable":"Enable"))])],1)],1)],1)],1)],1):t._e(),s("div",{staticClass:"row col-12 items-center"},[s("div",{staticClass:"col-4"},[e.default_name_image?s("img",{staticStyle:{"border-radius":"12px"},attrs:{src:t.$api_url()+"image_two/address/"+e.default_name_image,width:"50px",height:"50px"}}):s("q-icon",{attrs:{name:"img:vectors/home2.svg",size:"42px"}})],1),e.id?s("div",{staticClass:"col-8 q-pl-xs",staticStyle:{overflow:"hidden"}},[s("div",{staticClass:"ellipsis col-12 text-no-wrap text-primary text-bold text-subtitle1"},[t._v(" "+t._s(e.name)+" ")]),s("div",{staticClass:"col-12",staticStyle:{"font-size":"11px",color:"#5C5C5C"}},[t._v(" "+t._s(e.address)+" ")])]):s("div",{staticClass:"col-6 q-gutter-y-xs row"},[s("div",{staticClass:"skeleton-style col-12"}),s("div",{staticClass:"skeleton-style col-12"}),s("div",{staticClass:"skeleton-style col-6"})])])],1)})),1)])],1),s("q-dialog",{attrs:{persistent:"","full-width":""},model:{value:t.deleteItemDlg,callback:function(e){t.deleteItemDlg=e},expression:"deleteItemDlg"}},[s("delete-item",{attrs:{id:t.id,route:t.route},on:{deleted:t.deleted}})],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"q-py-lg",staticStyle:{"border-radius":"8px"}},[s("q-card-section",{staticClass:"row justify-center"},[s("div",{staticClass:"text-center col-12 text-primary",staticStyle:{"font-weight":"700","font-size":"20px"}},[t._v(" "+t._s(t.title?t.title:"Delete this item?")+" ")]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"col-7 q-mt-md",staticStyle:{border:"3px solid #00A58D","font-weight":"900"},attrs:{label:"NO",rounded:"",color:"white","text-color":"primary"}}),s("q-btn",{staticClass:"col-7 q-mt-md",staticStyle:{"font-weight":"900",color:"#FFF !important","background-color":"#00A58D"},attrs:{label:"DELETE","text-color":"white",rounded:""},on:{click:t.deleteItem}})],1)],1)},c=[],n={props:["id","route","title"],methods:{deleteItem(){this.$api.delete(`${this.route}/${this.id}`).then((()=>{this.$emit("deleted")})).catch((t=>{console.log(t)}))}}},d=n,p=s("2877"),u=s("f09f"),m=s("a370"),h=s("9c40"),g=s("7f67"),v=s("eebe"),b=s.n(v),x=Object(p["a"])(d,o,c,!1,null,null,null),y=x.exports;b()(x,"components",{QCard:u["a"],QCardSection:m["a"],QBtn:h["a"]}),b()(x,"directives",{ClosePopup:g["a"]});var f={components:{DeleteItem:y},data(){return{barStyle:{right:"0px",borderRadius:"0px",width:"0px",opacity:0},thumbStyle:{right:"0",borderRadius:"0",backgroundColor:"#027be3",width:"0",opacity:0},data:[],route:"addresses",id:null,deleteItemDlg:!1,disableAddressDlg:!1,status:null}},mounted(){this.getAddresses()},methods:{async editAddress(t,e){this.$q.loading.show(),await this.$api.put(`${this.route}/${t}/status/${e}`).then((t=>{this.$q.loading.hide(),t&&this.getAddresses()}))},async getAddresses(){this.$q.loading.show(),await this.$api.get(this.route).then((t=>{this.$q.loading.hide(),this.data=t.length>0?t:[1,2,3]}))},deleteAddressConfirm(t){this.id=t,this.deleteItemDlg=!0},deleted(){this.deleteItemDlg=!1,this.id=null,this.getAddresses()}}},q=f,C=(s("be37"),s("4983")),w=s("4e73"),_=s("1c1c"),S=s("66e5"),D=s("4074"),k=s("0170"),Q=s("0016"),$=s("24e8"),I=s("714f"),z=Object(p["a"])(q,l,r,!1,null,"45422f6a",null),R=z.exports;b()(z,"components",{QBtn:h["a"],QScrollArea:C["a"],QCard:u["a"],QMenu:w["a"],QList:_["a"],QItem:S["a"],QItemSection:D["a"],QItemLabel:k["a"],QIcon:Q["a"],QDialog:$["a"]}),b()(z,"directives",{Ripple:I["a"],ClosePopup:g["a"]});var A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row q-pl-xl q-pt-xl"},[s("div",{staticClass:"col-12 text-primary",staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v("Cards")]),s("div",{staticClass:"col-12 row q-pt-lg"},[s("q-btn",{staticStyle:{height:"123px",width:"36px"},attrs:{icon:"add",color:"primary",dense:"",push:"",to:"/cards/form"}}),s("q-scroll-area",{staticClass:"col-10",staticStyle:{height:"123px"},attrs:{"bar-style":t.barStyle,"thumb-style":t.thumbStyle}},[s("div",{staticClass:"row no-wrap q-gutter-x-md q-pl-md"},t._l(t.data,(function(e,a){return s("q-card",{key:a,staticClass:"style-card-item row q-pa-md"},[s("div",{staticClass:"row col-12"},[e.id?s("div",{staticClass:"col-12 row items-start"},[s("div",{staticClass:"text-primary",staticStyle:{"line-height":"10px","font-weight":"700","font-size":"12px"}},[t._v(" "+t._s(e.name)+" ")]),s("q-space"),e.id?s("q-btn",{attrs:{icon:"img:vectors/close1.svg",flat:"",dense:"",size:"xs",color:"primary",round:""},on:{click:function(s){return t.deleteCardConfirm(e.id)}}}):t._e()],1):s("div",{staticClass:"col-12 row",staticStyle:{height:"5px"}},[s("div",{staticClass:"skeleton-style col-5"}),s("q-space"),s("div",{staticClass:"skeleton-style col-2"})],1),s("div",{staticClass:"bg-primary col-3",staticStyle:{height:"20px","border-radius":"5px"}}),e.id?s("div",{staticClass:"col-12 q-pt-xs",staticStyle:{"font-size":"11px","font-weight":"400",color:"#5C5C5C"}},[t._v("\n              **** **** **** "+t._s(e.lastDigitsCardNumber)+"\n            ")]):s("div",{staticClass:"skeleton-style col-10",staticStyle:{height:"1px"}}),e.id?s("div",{staticClass:"col-12",staticStyle:{"font-size":"11px","font-weight":"400",color:"#5C5C5C"}},[t._v("\n              ** / "+t._s(e.lastNumberExpirationDate)+"\n            ")]):s("div",{staticClass:"skeleton-style col-4",staticStyle:{height:"1px"}})])])})),1)])],1),s("q-dialog",{attrs:{persistent:"","full-width":""},model:{value:t.deleteItemDlg,callback:function(e){t.deleteItemDlg=e},expression:"deleteItemDlg"}},[s("delete-item",{attrs:{id:t.id,route:t.route},on:{deleted:t.deleted}})],1)],1)},E=[],N={components:{DeleteItem:y},data(){return{barStyle:{right:"0px",borderRadius:"0px",width:"0px",opacity:0},thumbStyle:{right:"0",borderRadius:"0",backgroundColor:"#027be3",width:"0",opacity:0},data:[],deleteItemDlg:!1,id:null,route:"cards"}},mounted(){this.getData()},methods:{getData(){this.$api.get(this.route).then((t=>{this.data=!t.length>0?[1,2,3]:t.map((t=>({...t,lastDigitsCardNumber:t.number.substr(t.number.length-4),lastNumberExpirationDate:t.expiration_date.substr(t.expiration_date.length-2)})))}))},deleteCardConfirm(t){this.id=t,this.deleteItemDlg=!0},deleted(){this.deleteItemDlg=!1,this.id=null,this.getData()}}},F=N,j=(s("059f"),s("2c91")),O=Object(p["a"])(F,A,E,!1,null,"51d80b80",null),B=O.exports;b()(O,"components",{QBtn:h["a"],QScrollArea:C["a"],QCard:u["a"],QSpace:j["a"],QDialog:$["a"]});var P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{on:{click:function(e){return t.$router.push("/profile/change-role")}}},[s("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"style-banner-button-work"},[s("div",[s("q-avatar",{attrs:{size:"70px"}},[s("img",{staticStyle:{border:"3px solid #FFF"},attrs:{src:"vectors/avatar-profile-work.png",width:"100%",height:"100%"}})])],1),t._m(0)])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-h6 text-primary text-bold",staticStyle:{"line-height":"25px"}},[t._v("Do you want to work with us?")]),s("div",{staticClass:"col-12 text-primary text-bold q-pt-sm"},[s("a",{staticStyle:{"text-decoration":"underline"}},[t._v("\n          Be an Employed\n        ")])])])}],J={},L=J,V=(s("0a10"),s("cb32")),T=Object(p["a"])(L,P,U,!1,null,"de5d608e",null),Y=T.exports;b()(T,"components",{QAvatar:V["a"]}),b()(T,"directives",{Ripple:I["a"]});var H={components:{AddressScroll:R,CardScroll:B,BtnChangeRequestRoleToSpecialist:Y},data(){return{hasVerified:!1,name:"Isabel Summerton",avatarUrl:"vectors/avatar2.svg",role_id:null,isShowSentRequest:!1,lastRequestData:{}}},mounted(){this.getUserInfo()},methods:{async getUserInfo(){const t=await this.$getUserInfo();this.hasVerified=t.verified,this.name=t.user.name?t.user.name:this.name,t.role_id=t.user.role_id,this.role_id=t.role_id;const e=3===t.role_id?"customers":"specialists";this.role=t.role_id,this.avatarUrl=`${this.$api_url()}image/${e}/${t.id}`,t.lastRequest&&(this.lastRequestData=t.lastRequest),"rechazado"!==t.lastRequest.status&&t.lastRequest||(this.isShowSentRequest=!0)}}},M=H,W=(s("70eb"),s("9989")),G=s("7cbe"),K=s("4b7e"),X=Object(p["a"])(M,a,i,!1,null,"7270a0b0",null);e["default"]=X.exports;b()(X,"components",{QPage:W["a"],QBtn:h["a"],QSpace:j["a"],QAvatar:V["a"],QIcon:Q["a"],QPopupProxy:G["a"],QCard:u["a"],QCardActions:K["a"]}),b()(X,"directives",{ClosePopup:g["a"]})}}]);