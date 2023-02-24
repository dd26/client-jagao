(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"713b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",[i("q-toolbar",{staticClass:"row justify-between"},[i("q-btn",{attrs:{flat:"",dense:"",round:"",size:"10px",icon:"img:vectors/menu1.svg","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),t.user.id?i("q-btn",{attrs:{flat:"",round:"",dense:"",to:2===t.role?"/profile/employee":"/profile/client"}},[i("q-avatar",{attrs:{size:"26px"}},[i("img",{attrs:{src:t.userAvatarUrl}})])],1):t._e()],1)],1),i("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-primary"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("section",{staticClass:"fit column text-white"},[i("section",{staticClass:"col-2 q-pa-md"},[i("div",{staticClass:"row"},[i("img",{attrs:{src:"logos/logo2.svg",width:"100px",height:"90px"}})])]),i("section",{staticClass:"col-7 column justify-center"},[i("q-list",{staticClass:"text-white"},t._l(t.menuItems,(function(e,s){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s,attrs:{clickable:"",to:e.to,"active-class":"my-menu-link"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:e.icon,size:"sm",color:"white"}})],1),i("q-item-section",[i("q-item-label",[t._v(" "+t._s(e.title)+" ")])],1)],1)})),1)],1),i("section",{staticClass:"col-3 q-pa-md column justify-end"},[i("div",{staticClass:"row"},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"col-12",attrs:{clickable:""},on:{click:t.logoutBtnClicked}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"img:vectors/icon5.svg",size:"sm",color:"white"}})],1),i("q-item-section",[i("q-item-label",[t._v(" Log Out ")])],1)],1),i("section",{staticClass:"row col-12 q-pa-md"},[i("div",{staticClass:"text-subtitle1 text-bold col-12"},[t._v("Jagao 2022")]),i("div",{staticClass:"text-caption col-12"},[t._v("Privacy Policy")])])],1)])])]),t.user.id?i("q-footer",[i("q-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("q-tab",{attrs:{name:1,icon:"img:vectors/home1.svg"},on:{click:function(e){return t.$router.push(t.routeFooter.home)}}}),i("q-tab",{attrs:{name:2,icon:"img:vectors/search1.svg"},on:{click:function(e){return t.$router.push(t.routeFooter.search)}}}),i("q-tab",{attrs:{name:3,icon:"img:vectors/notify1.svg"},on:{click:function(e){return t.$router.push(t.routeFooter.notifications)}}},[t.hasNotifications?i("div",{staticClass:"badge-style"}):t._e()])],1)],1):t._e(),i("q-page-container",{staticClass:"bg-primary"},[i("section",{staticClass:"card-view"},[i("router-view")],1)])],1)},o=[],a=i("2f62");const c=[{title:"Home",icon:"img:vectors/home1.svg",to:"/home"},{title:"Pending services",icon:"img:vectors/icon7.svg",to:"/services/pending/customer"},{title:"Working services",icon:"img:vectors/icon7.svg",to:"/services/working/customer"},{title:"Successful services",icon:"img:vectors/icon7.svg",to:"/services/susuccessful/customer"},{title:"Help",icon:"img:vectors/icon4.svg",to:"/help"}],r=[{title:"Home",icon:"img:vectors/home1.svg",to:"/home/employee"},{title:"Working services",icon:"img:vectors/icon7.svg",to:"/services/working/employee"},{title:"Successful services",icon:"img:vectors/icon7.svg",to:"/services/susuccessful/employee"},{title:"Transactions",icon:"img:vectors/transaction1.svg",to:"/home/employee"},{title:"Help",icon:"img:vectors/icon4.svg",to:"/help"}],n={home:"/home/employee",search:"/search",notifications:"/notifications/employee"},l={home:"/home",search:"/search",notifications:"/notifications/client"};var m={name:"MainLayout",data(){return{tab:1,leftDrawerOpen:!1,menuItems:c,userAvatarUrl:"vectors/avatar1.svg",role:null,routeFooter:{home:"/home",search:"/search",notifications:"/notifications/employee"},notifications:[],hasNotifications:!1,user:{}}},async mounted(){const t=JSON.parse(localStorage.getItem("JAGAO_SESSION_INFO"));if(t){const t=await this.$getUserInfo();this.getUserInfo(),t&&this.getNotifications()}},methods:{...Object(a["b"])("generals",["logout"]),logoutBtnClicked(){this.logout(),this.$router.push("/login")},async getUserInfo(){const t=await this.$getUserInfo();if(this.user=t,t){t.role_id=t.user.role_id;const e=3===t.role_id?"customers":"specialists";this.role=t.role_id,this.userAvatarUrl=`${this.$api_url()}image/${e}/${t.id}`,this.routeFooter=3===t.role_id?l:n,this.menuItems=3===t.role_id?c:r}},getNotifications(){this.$getNotifications().then((t=>{this.notifications=t,t.length>0&&(this.hasNotifications=!0)}))}}},u=m,v=(i("bca9"),i("2877")),g=i("4d5a"),f=i("e359"),h=i("65c6"),p=i("9c40"),d=i("cb32"),b=i("9404"),w=i("1c1c"),q=i("66e5"),y=i("4074"),_=i("0016"),k=i("0170"),C=i("7ff0"),Q=i("429b"),I=i("7460"),O=i("09e3"),x=i("714f"),$=i("eebe"),N=i.n($),F=Object(v["a"])(u,s,o,!1,null,"fc477abe",null);e["default"]=F.exports;N()(F,"components",{QLayout:g["a"],QHeader:f["a"],QToolbar:h["a"],QBtn:p["a"],QAvatar:d["a"],QDrawer:b["a"],QList:w["a"],QItem:q["a"],QItemSection:y["a"],QIcon:_["a"],QItemLabel:k["a"],QFooter:C["a"],QTabs:Q["a"],QTab:I["a"],QPageContainer:O["a"]}),N()(F,"directives",{Ripple:x["a"]})},abe1:function(t,e,i){},bca9:function(t,e,i){"use strict";i("abe1")}}]);