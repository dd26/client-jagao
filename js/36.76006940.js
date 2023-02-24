(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"0619":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"column"},[i("section",{staticClass:"column q-pa-md"},[i("div",[i("q-btn",{attrs:{color:"secondary",icon:"arrow_back_ios",round:"",flat:"",size:"15px",to:"/home"}})],1),i("div",{staticClass:"text-primary q-ml-sm",staticStyle:{"font-weight":"700","font-size":"20px"}},[t._v("Settings")])]),i("section",{staticClass:"row col"},[i("q-list",{staticClass:"col-12"},[t._l(t.configs,(function(e,o){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:o,attrs:{clickable:"",to:e.to,exact:""}},[i("q-item-section",[i("q-item-label",{staticClass:"row items-center q-pl-xl"},[i("q-icon",{attrs:{name:e.icon,size:"20px",color:"primary"}}),i("div",{staticClass:"q-pl-md"},[t._v(" "+t._s(e.title)+" ")])],1)],1)],1)})),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.deleteAccount}},[i("q-item-section",[i("q-item-label",{staticClass:"q-pl-xl row items-center"},[i("q-icon",{attrs:{name:"close",size:"20px",color:"negative"}}),i("div",{staticClass:"q-pl-md text-negative"},[t._v(" Delete Account ")])],1)],1)],1)],2)],1),i("section",{staticClass:"row q-pa-md items-center"},[i("q-space"),i("div",{staticClass:"row",on:{click:t.logoutBtnClicked}},[i("div",[t._v("Log out")]),i("q-icon",{staticClass:"q-pl-sm",attrs:{name:"img:vectors/logout1.svg",size:"xs"}})],1)],1)])},s=[],c=i("2f62");const n={notification:"/notifications/client",profile:"/profile/info/",accounts:"/accounts"},a={notification:"/notifications/employee",profile:"/profile/info/",accounts:"/accounts"};var l={data(){return{routes:{notification:"/notifications/client",profile:"/profile/info/",accounts:"/accounts"},profileRoute:""}},computed:{configs(){const t=[{icon:"img:vectors/edit3.svg",title:"Edit Profile",to:this.routes.profile},{icon:"img:vectors/bank1.svg",title:"Bank info",to:this.routes.accounts},{icon:"img:vectors/notification1.svg",title:"Notifications",to:this.routes.notification}];return t}},mounted(){this.getUserInfo()},methods:{...Object(c["b"])("generals",["logout"]),logoutBtnClicked(){this.logout(),this.$router.push("/login")},async getUserInfo(){const t=await this.$getUserInfo();t.role_id=t.user.role_id,this.routes=3===t.role_id?n:a,console.log(t,"user info");const e=3===t.role_id?"customer_by_user_id":"specialist_by_user_id",i=3===t.role_id?"customers":"specialists";this.routes.profile=`/profile/info/${t.id}?route=${e}&folder=${i}&img_id=${t.id}`},deleteAccount(){this.$q.dialog({title:"Delete Account",message:"Are you sure you want to delete your account?",cancel:!0,persistent:!0}).onOk((()=>{this.$q.loading.show(),this.$api.put("/users/logged/status/deleted").then((t=>{this.$q.loading.hide(),this.$q.notify({message:"Account deleted successfully",color:"positive",icon:"check_circle"}),this.logout(),this.$router.push("/login")})).catch((()=>{this.$q.loading.hide(),this.$q.notify({message:"Something went wrong",color:"negative",icon:"warning"})}))}))}}},r=l,u=i("2877"),p=i("9989"),d=i("9c40"),m=i("1c1c"),f=i("66e5"),g=i("4074"),h=i("0170"),v=i("0016"),q=i("2c91"),_=i("714f"),w=i("eebe"),b=i.n(w),y=Object(u["a"])(r,o,s,!1,null,null,null);e["default"]=y.exports;b()(y,"components",{QPage:p["a"],QBtn:d["a"],QList:m["a"],QItem:f["a"],QItemSection:g["a"],QItemLabel:h["a"],QIcon:v["a"],QSpace:q["a"]}),b()(y,"directives",{Ripple:_["a"]})}}]);