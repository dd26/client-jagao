(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"070a":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("q-page",{staticClass:"q-pb-xl"},[s("div",{staticClass:"col-12 row q-pa-md q-pt-xl q-px-lg"},[s("q-btn",{attrs:{icon:"arrow_back_ios",round:"",color:"secondary",size:"sm",flat:""},on:{click:function(i){return t.$router.push("/services/susuccessful/employee")}}}),s("div",{staticClass:"text-primary col-12 text-center",staticStyle:{"font-size":"25px","font-weight":"700"}},[t._v("Service #"+t._s(this.$route.params.id))])],1),s("section",{staticClass:"row q-px-xl justify-center",staticStyle:{position:"relative"}},[s("section",{staticClass:"row col-11 text-center status-style justify-around text-bold items-center",staticStyle:{"font-size":"20px"}},[s("div",{staticClass:"col-12 text-center"},[t._v("Finished")]),s("div",{staticClass:"badge-style",style:"background-color: rgb(0, 167, 142)"})])]),t.form&&t.form.user?s("section",{staticClass:"row q-px-lg q-pt-lg"},[s("section",{staticClass:"col-3"},[s("q-avatar",{attrs:{size:"85px"}},[s("img",{attrs:{src:t.$api_url()+"image/customers/"+t.form.customer.id,alt:"employee_img"}})])],1),s("section",{staticClass:"col-8 row q-pl-md"},[s("section",{staticClass:"col-12 row"},[s("div",{staticClass:"col-12 text-bold text-primary",staticStyle:{"font-size":"16px"}},[t._v(" "+t._s(t.form.user.name)+" ")]),s("div",{staticStyle:{color:"#5C5C5C","font-size":"14px","font-weight":"500"}},[t._v("Customer")]),s("section",{staticClass:"row col-12 items-center q-pt-xs"},[s("q-icon",{attrs:{name:"img:vectors/location2.svg"}}),s("div",{staticClass:"text-primary q-pl-xs",staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v(t._s(t.form.address_name))])],1),s("section",{staticClass:"row col-12 items-center q-pt-xs"},[s("q-icon",{attrs:{name:"img:vectors/phone1.svg"}}),s("div",{staticClass:"text-primary q-pl-xs",staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v(t._s(t.form.customer.phone))])],1)])])]):t._e(),s("section",{staticClass:"row q-px-lg q-pt-lg"},[s("div",{staticClass:"text-bold text-primary text-center col-12",staticStyle:{"font-size":"25px"}},[t._v("What did you think of the service?")]),s("section",{staticClass:"col-12 flex flex-center"},[s("q-rating",{attrs:{size:"3.5em",color:"primary",icon:"star_border","icon-selected":"star",readonly:t.isCalifiqued},model:{value:t.calification.rating,callback:function(i){t.$set(t.calification,"rating",i)},expression:"calification.rating"}})],1),s("section",{staticClass:"col-12 row"},[s("div",{staticClass:"col-12 q-pb-sm q-pt-md q-pl-sm",staticStyle:{"font-size":"16px","font-weight":"400"}},[t._v("Comments")]),s("q-input",{staticClass:"text-input-area col-12",attrs:{type:"textarea",borderless:"","input-style":"padding: 15px 15px; color: #00A58D",readonly:t.isCalifiqued},model:{value:t.calification.comment,callback:function(i){t.$set(t.calification,"comment",i)},expression:"calification.comment"}})],1),t.isCalifiqued?t._e():s("section",{staticClass:"col-12 flex flex-center row q-pt-md"},[s("q-btn",{staticClass:"col-6",staticStyle:{"border-radius":"8px",height:"40px"},attrs:{label:"Rate",color:"primary",unelevated:"","no-caps":""},on:{click:t.sendCalification}})],1),t.isCalifiqued?s("section",[t.form?s("section",{staticClass:"row"},[s("div",{staticClass:"text-bold text-primary q-py-md q-pt-lg text-h6"},[t._v("Description Service")]),s("s-category-item",t._b({staticClass:"col-12"},"s-category-item",t.form,!1))],1):t._e()]):t._e()])])},a=[],o=s("ee22"),c={components:{SCategoryItem:o["a"]},data(){return{form:null,route:"master_request_services",calification:{rating:0,comment:null},isCalifiqued:!1}},mounted(){this.getData(),this.getCalification()},methods:{async getCalification(){const t=await this.$api.get(`/califications/${this.$route.params.id}`);t&&t.rating>0&&(this.calification=t,this.isCalifiqued=!0)},async sendCalification(){0!==this.calification.rating?(this.$q.loading.show(),await this.$api.post("califications/"+this.$route.params.id,this.calification).then((t=>{this.$q.loading.hide(),this.$q.notify({color:"positive",message:"Calification sent"}),this.isCalifiqued=!0}))):this.$q.notify({color:"negative",message:"Please rate the service"})},async getData(){this.$q.loading.show();const t=await this.$api.get(`${this.route}/${this.$route.params.id}`);this.$q.loading.hide(),this.form=t}}},l=c,n=(s("7b97"),s("2877")),r=s("9989"),p=s("9c40"),m=s("cb32"),d=s("0016"),f=s("daf4"),u=s("27f9"),g=s("eebe"),x=s.n(g),h=Object(n["a"])(l,e,a,!1,null,"7995d26d",null);i["default"]=h.exports;x()(h,"components",{QPage:r["a"],QBtn:p["a"],QAvatar:m["a"],QIcon:d["a"],QRating:f["a"],QInput:u["a"]})},"7b97":function(t,i,s){"use strict";s("8014")},8014:function(t,i,s){}}]);