(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{2239:function(t,e,i){"use strict";i("d8c6")},"36a4":function(t,e,i){"use strict";i("f4f1")},d8c6:function(t,e,i){},eff7:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"q-pb-xl",staticStyle:{"background-color":"#D9F2EE",overflow:"auto"}},[i("div",{staticClass:"row q-pt-md q-px-md"},[i("q-btn",{attrs:{to:"/profile/change-role",dense:"",flat:"",size:"11px",icon:"img:vectors/back1.svg"}})],1),i("section",{staticClass:"row q-px-lg"},[i("div",{staticClass:"col-12 text-h6 text-primary text-bold q-pt-sm"},[t._v("\n      Choose the category in wich you want to provide services\n    ")]),t._l(t.categories,(function(e){return i("section",{key:e.id,staticClass:"row col-12 q-gutter-y-md q-pt-md"},[i("CardItemExpansion",t._b({staticClass:"col-12 bg-white",model:{value:e.selected,callback:function(i){t.$set(e,"selected",i)},expression:"b.selected"}},"CardItemExpansion",e,!1))],1)})),i("section",{staticClass:"col-12 row"},[i("div",{staticClass:"col-12 text-primary text-bold q-pt-lg text-h6"},[t._v("\n        Attach your ID here\n      ")]),i("UploadFile",{staticClass:"col-12 q-mt-sm",attrs:{"name-first-holder":"Touch here to upload your ID","filter-file-type":".jpg, .jpeg, .png, .pdf"},model:{value:t.form.fileId,callback:function(e){t.$set(t.form,"fileId",e)},expression:"form.fileId"}}),i("div",{staticClass:"col-12 text-primary text-bold q-pt-lg text-h6"},[t._v("\n        Attach your CV here\n      ")]),i("UploadFile",{staticClass:"col-12 q-mt-sm",attrs:{"name-first-holder":"Touch here to upload your CV","filter-file-type":".pdf"},model:{value:t.form.fileCv,callback:function(e){t.$set(t.form,"fileCv",e)},expression:"form.fileCv"}})],1),i("section",{staticClass:"row q-pt-md q-px-lg"},[i("p",{staticClass:"col-12 text-center",staticStyle:{color:"#5C5C5C"}},[t._v("\n        When all your information has been validated you can use our tools to get the services!\n      ")]),i("p",{staticClass:"text-center col-12 text-primary text-bold"},[t._v("\n        You will receive a notification when your profile is validated.\n      ")])]),i("section",{staticClass:"row col-12 q-pt-md"},[i("q-btn",{staticClass:"col-12 text-bold",attrs:{label:"Send Request","no-caps":"",color:"primary","text-color":"white",rounded:""},on:{click:t.submitData}})],1)],2)])},a=[],o=(i("e9c4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-expansion-item",{staticClass:"style-expansion-item",attrs:{group:"somegroup"},scopedSlots:t._u([{key:"header",fn:function(){return[i("q-item-section",{attrs:{avatar:""}},[i("div",{staticClass:"row q-gutter-x-md items-center"},[[i("div",{staticClass:"checkbox-container"},[i("div",{staticClass:"custom-checkbox",class:{checked:t.isChecked},on:{click:t.toggleCheckbox}},[i("div",{staticClass:"checkmark"},[i("svg",{attrs:{viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}})])])])])],i("q-avatar",{attrs:{size:"50px",color:"primary"}},[i("img",{attrs:{src:t.image_url}})])],2)]),i("q-item-section",{staticClass:"text-primary text-bold"},[t._v("\n      "+t._s(t.name)+"\n    ")])]},proxy:!0}])},[i("q-card",{staticClass:"bg-white",staticStyle:{padding:"0 !important"}},[i("q-card-section",{staticStyle:{padding:"0 !important"}},[i("q-list",{staticClass:"bg-white"},t._l(t.subcategories,(function(e){return i("q-item",{key:e.id},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",{attrs:{size:"40px",color:"primary"}},[i("img",{attrs:{src:e.image_url}})])],1),i("q-item-section",{staticClass:"text-primary text-bold"},[t._v("\n            "+t._s(e.name)+"\n          ")])],1)})),1)],1)],1)],1)}),l=[],r={props:{value:{type:Boolean,default:!1},image_url:{type:String,default:""},name:{type:String,default:""},subcategories:{type:Array,default:()=>[]}},data(){return{isChecked:this.value}},watch:{value(t){this.isChecked=t}},methods:{toggleCheckbox(){this.isChecked=!this.isChecked,this.$emit("input",this.isChecked)}}},n=r,c=(i("2239"),i("2877")),d=i("3b73"),p=i("4074"),h=i("cb32"),m=i("f09f"),u=i("a370"),f=i("1c1c"),g=i("66e5"),v=i("eebe"),C=i.n(v),y=Object(c["a"])(n,o,l,!1,null,"080d99ef",null),x=y.exports;C()(y,"components",{QExpansionItem:d["a"],QItemSection:p["a"],QAvatar:h["a"],QCard:m["a"],QCardSection:u["a"],QList:f["a"],QItem:g["a"]});var q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row style-container-file items-center",on:{click:t.handleClickFile}},[i("div",{staticClass:"col-2 bg-primary style-icon-file row items-center justify-center"},[i("q-icon",{attrs:{name:"attach_file",color:"white",size:"27px"}})],1),i("div",{staticClass:"col-10 q-pl-sm",staticStyle:{color:"#B3B3B3"}},[t._v("\n    "+t._s(t.nameFirstHolderVal)+"\n  ")]),i("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.handleFileChange}})])},b=[],w={props:["value","nameFirstHolder","filterFileType"],data(){return{fileVal:this.value,nameFirstHolderVal:this.nameFirstHolder}},watch:{fileVal(t){this.$emit("input",t)},nameFirstHolder(t){this.nameFirstHolderVal=t}},methods:{handleClickFile(){this.filterFileType&&this.$refs.fileInput.setAttribute("accept",this.filterFileType),this.$refs.fileInput.click()},handleFileChange(t){const e=t.target.files[0];e&&(this.fileVal=e,this.nameFirstHolderVal=e.name||"No se ha seleccionado ningún archivo")}}},k=w,_=(i("36a4"),i("0016")),$=Object(c["a"])(k,q,b,!1,null,"8c9b07da",null),F=$.exports;C()($,"components",{QIcon:_["a"]});var I=i("b5ae"),S={components:{CardItemExpansion:x,UploadFile:F},data(){return{title:"Change Role",categories:[],form:{categories:[],fileId:null,fileCv:null}}},validations(){return{form:{fileId:{required:I["required"]},fileCv:{required:I["required"]}}}},mounted(){this.getCategories()},methods:{async submitData(){this.$q.loading.show();const t=this.categories.filter((t=>t.selected)).map((t=>t.id));if(this.form.categories=t,this.$v.form.$touch(),this.$v.$invalid)return this.$q.loading.hide(),this.$q.notify({message:"Please fill all the fields",color:"negative",icon:"warning"});const e=new FormData;e.append("identity_document",this.form.fileId),e.append("resume",this.form.fileCv),e.append("categories",JSON.stringify(this.form.categories));const i=await this.$api.post("customer_to_specialist",e);console.log(i,"res"),i&&(this.$q.notify({message:"Your request has been sent",color:"positive",icon:"check"}),this.$router.push("/dynamic_success?message=Your request has been sent&to=/profile/client&icon=done")),this.$q.loading.hide()},async getCategories(){this.$q.loading.show();const t=await this.$api.get("categories_actives");this.$q.loading.hide(),this.categories=t.map((t=>({...t,selected:!1})))}}},Q=S,E=i("9989"),V=i("9c40"),H=Object(c["a"])(Q,s,a,!1,null,"73707503",null);e["default"]=H.exports;C()(H,"components",{QPage:E["a"],QBtn:V["a"]})},f4f1:function(t,e,i){}}]);