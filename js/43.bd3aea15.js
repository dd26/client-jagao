(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{"7f06":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticStyle:{"background-color":"#D9F2EE","border-radius":"25px 25px 0 0"}},[i("section",{staticClass:"row q-px-lg q-pb-xl"},[i("section",{staticClass:"row items-center q-px-lg q-pt-lg justify-between col-12"},[i("q-btn",{attrs:{icon:"arrow_back_ios",flat:"",rounded:"",dense:"",color:"secondary"},on:{click:function(e){return t.$router.go(-1)}}}),i("div",{staticClass:"text-bold text-primary text-subtitle1",staticStyle:{"font-size":"20px"}},[t._v("Edit Profile")])],1),i("div",{staticClass:"col-12 row q-pa-md q-col-gutter-y-sm q-pt-xl"},[i("div",{staticClass:"col-12 row justify-center"},[i("q-file",{ref:"profileImgRef",staticStyle:{display:"none"},attrs:{accept:"image/*"},on:{input:t.onInputProfile},model:{value:t.profile.file,callback:function(e){t.$set(t.profile,"file",e)},expression:"profile.file"}}),i("section",{staticClass:"img-profile-container row items-center justify-center",staticStyle:{position:"relative"}},[i("q-avatar",{attrs:{size:"150px"}},[i("img",{attrs:{src:t.profile.img,width:"100%",height:"100%"}})]),i("q-btn",{staticClass:"absolute-bottom-right",attrs:{flat:"",color:"primary",icon:"img:vectors/edit1.svg",size:"lg",round:"",dense:""},on:{click:t.clickProfileImg}})],1),i("div",{staticClass:"col-12 row"},[i("q-field",{staticClass:"col-12",attrs:{borderless:""},scopedSlots:t._u([{key:"control",fn:function(e){var o=e.id,s=e.value,a=e.emitValue;return[i("input",{staticClass:"q-field__input text-center text-bold text-primary input-field-style",attrs:{id:o},domProps:{value:s},on:{change:function(t){return a(t.target.value)},focus:function(e){t.focusName=!0},blur:function(e){t.focusName=!1}}}),t.focusName||t.form.name?t._e():i("div",{staticClass:"row justify-center fit items-center",staticStyle:{position:"absolute"}},[i("div",{staticClass:"col-12 justify-center items-center row"},[i("div",{staticClass:"text-bold text-primary"},[t._v("Your Name")])])]),i("div",{staticClass:"row justify-center fit items-center",staticStyle:{position:"absolute"}},[i("div",{staticClass:"col-7 justify-end items-start row q-pb-lg"},[i("q-icon",{attrs:{name:"img:vectors/edit2.svg"}}),i("div",{staticClass:"text-bold text-negative",staticStyle:{"font-size":"20px"}},[t._v("*")])],1)])]}}]),model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1)]),i("div",{staticClass:"col-12 row"},[i("div",{staticClass:"col-12 q-pl-lg"},[t._v("User Name "),i("b",{staticClass:"text-bold text-negative",staticStyle:{"font-size":"20px"}},[t._v("*")])]),i("q-input",{staticClass:"col-12",attrs:{placeholder:"yourusername01",outlined:"","bg-color":"white",dense:""},on:{blur:function(e){return t.$v.form.userName.$touch()}},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}})],1),i("div",{staticClass:"col-12 row q-pt-lg"},[i("div",{staticClass:"col-12 q-pl-lg"},[t._v("Birth Date "),i("b",{staticClass:"text-bold text-negative",staticStyle:{"font-size":"20px"}},[t._v("*")])]),i("div",{staticClass:"col-12 row justify-left q-gutter-x-md"},[i("q-input",{staticClass:"col-3",attrs:{outlined:"","bg-color":"white",dense:"",placeholder:"00"},on:{blur:t.formatDate},model:{value:t.birthdateFormat.day,callback:function(e){t.$set(t.birthdateFormat,"day",e)},expression:"birthdateFormat.day"}},[i("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[i("q-date",{model:{value:t.birthdate,callback:function(e){t.birthdate=e},expression:"birthdate"}},[i("div",{staticClass:"row items-center justify-end"},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1),i("q-input",{staticClass:"col-3",attrs:{outlined:"","bg-color":"white",dense:"",placeholder:"00"},on:{blur:t.formatDate},model:{value:t.birthdateFormat.month,callback:function(e){t.$set(t.birthdateFormat,"month",e)},expression:"birthdateFormat.month"}},[i("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[i("q-date",{model:{value:t.birthdate,callback:function(e){t.birthdate=e},expression:"birthdate"}},[i("div",{staticClass:"row items-center justify-end"},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1),i("q-input",{staticClass:"col-3",attrs:{outlined:"","bg-color":"white",dense:"",placeholder:"00"},on:{blur:t.formatDate},model:{value:t.birthdateFormat.year,callback:function(e){t.$set(t.birthdateFormat,"year",e)},expression:"birthdateFormat.year"}},[i("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[i("q-date",{model:{value:t.birthdate,callback:function(e){t.birthdate=e},expression:"birthdate"}},[i("div",{staticClass:"row items-center justify-end"},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)],1)]),i("div",{staticClass:"col-12 row q-pt-lg"},[i("div",{staticClass:"col-12 q-pl-lg"},[t._v("ID "),i("b",{staticClass:"text-bold text-negative",staticStyle:{"font-size":"20px"}},[t._v("*")])]),i("q-input",{staticClass:"col-12",attrs:{placeholder:"ID",outlined:"","bg-color":"white",dense:""},on:{blur:function(e){return t.$v.form.identification.$touch()}},model:{value:t.form.identification,callback:function(e){t.$set(t.form,"identification",e)},expression:"form.identification"}})],1),i("div",{staticClass:"col-12 row q-pt-lg"},[i("div",{staticClass:"col-12 q-pl-lg"},[t._v("Phone"),i("b",{staticClass:"text-bold text-negative",staticStyle:{"font-size":"20px"}},[t._v("*")])]),i("q-input",{staticClass:"col-12",attrs:{placeholder:"Phone",outlined:"","bg-color":"white",dense:""},on:{blur:function(e){return t.$v.form.phone.$touch()}},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),i("div",{staticClass:"col-12 row q-pt-lg"},[i("div",{staticClass:"col-12 q-pl-lg"},[t._v("City / Town"),i("b",{staticClass:"text-bold text-negative",staticStyle:{"font-size":"20px"}},[t._v("*")])]),i("q-select",{staticClass:"col-12",attrs:{outlined:"","bg-color":"white",dense:"","emit-value":"","map-options":"",label:"City",options:t.cities},on:{blur:function(e){return t.$v.form.city_id.$touch()}},model:{value:t.form.city_id,callback:function(e){t.$set(t.form,"city_id",e)},expression:"form.city_id"}})],1),i("div",{staticClass:"col-12 row q-pt-lg"},[i("div",{staticClass:"col-12 q-pl-lg"},[t._v("Address"),i("b",{staticClass:"text-bold text-negative",staticStyle:{"font-size":"20px"}},[t._v("*")])]),i("q-input",{staticClass:"col-12",attrs:{outlined:"",type:"textarea","bg-color":"white",dense:"",placeholder:"Your Adress #1-02"},on:{blur:function(e){return t.$v.form.address.$touch()}},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),i("div",{staticClass:"col-12 row justify-center q-pt-lg"},[i("q-btn",{attrs:{icon:"save",round:"",color:"primary",size:"xl"},on:{click:t.save}})],1)])])},s=[],a=(i("ddb0"),i("2b3d"),i("9861"),i("b5ae")),r=i("bd4c"),l={data(){return{form:{name:"",userName:"",birthDate:"",identification:"",phone:"",country_id:"",city_id:"",address:""},focusName:!1,profile:{file:null,img:null},birthdate:null,birthdateFormat:{day:"",month:"",year:""},countries:[{label:"United States",value:1}],cities:[{label:"City 1",value:1},{label:"City 2",value:2}]}},mounted(){this.getCities(),this.profile.img=`${this.$api_url()}image/${this.$route.query.folder}/${this.$route.query.img_id}`,this.getUserInfo(),console.log(this.form,"form")},methods:{async getCities(){await this.$api.get("cities").then((t=>{this.cities=t.map((t=>({label:t.name,value:t.id})))}))},async save(){if(this.form.birthDate=this.birthdate,this.$v.form.$touch(),console.log(this.$v.form,"invalid"),this.$v.form.$invalid)return void this.$q.notify({color:"negative",textColor:"white",message:"Please fill all required fields"});this.form.birthDate=r["b"].formatDate(this.form.birthDate,"YYYY-MM-DD");const t=this.$route.query.folder+`/profile/${this.$route.params.id}`;await this.$api.put(t,this.form).then((t=>{this.$q.notify({color:"positive",textColor:"white",message:"Profile updated"})})),console.log(this.form,"form")},async getUserInfo(){const t=await this.$getUserInfo();this.form.name=t.user.name,this.form.userName=t.userName,this.form.identification=t.identification,this.form.phone=t.phone,this.form.country_id=t.country_id,this.form.city_id=t.city_id,this.form.address=t.address,this.birthdate=r["b"].formatDate(t.birthDate,"YYYY/MM/DD"),this.formatDate()},clickProfileImg(){this.$refs.profileImgRef.$el.click()},onInputProfile(){console.log("files"),this.profile.img=URL.createObjectURL(this.profile.file);const t=new FormData;t.append("image",this.profile.file),this.$api.post(`image/${this.$route.query.folder}/${this.$route.query.img_id}`,t,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{console.log(t,"res"),t.success&&this.$q.notify({color:"positive",textColor:"white",message:"Image updated"}),location.reload()}))},formatDate(){const t=this.birthdate.split("/"),e=t[1],i=t[2],o=t[0];this.birthdateFormat={month:e,day:i,year:o}}},validations(){return{form:{name:{required:a["required"]},userName:{required:a["required"]},birthDate:{required:a["required"]},identification:{required:a["required"]},phone:{required:a["required"]},country_id:{required:a["required"]},city_id:{required:a["required"]},address:{required:a["required"]}}}}},n=l,c=i("2877"),d=i("9989"),u=i("9c40"),f=i("7d53"),m=i("cb32"),p=i("8572"),h=i("0016"),b=i("27f9"),v=i("7cbe"),y=i("52ee"),g=i("ddd8"),q=i("7f67"),x=i("eebe"),C=i.n(x),w=Object(c["a"])(n,o,s,!1,null,null,null);e["default"]=w.exports;C()(w,"components",{QPage:d["a"],QBtn:u["a"],QFile:f["a"],QAvatar:m["a"],QField:p["a"],QIcon:h["a"],QInput:b["a"],QPopupProxy:v["a"],QDate:y["a"],QSelect:g["a"]}),C()(w,"directives",{ClosePopup:q["a"]})}}]);