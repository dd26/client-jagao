(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0b0a":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",[t("div",{staticClass:"q-pa-md"},[t("q-btn",{attrs:{color:"secondary",icon:"arrow_back_ios",round:"",flat:"",size:"15px",to:"/accounts"}})],1),t("div",{staticClass:"q-px-lg text-primary",staticStyle:{"font-size":"20px","font-weight":"700"}},[e._v("Register new account")]),t("section",{staticClass:"row q-pa-lg q-gutter-y-lg"},[t("div",{staticClass:"col-12 row"},[t("div",{staticClass:"col-12 q-pl-md q-pb-sm"},[e._v("Bank")]),t("q-select",{staticClass:"col-12",attrs:{options:e.banks,"bg-color":"grey-3",dense:"",outlined:"","emit-value":"","map-options":"",error:e.$v.form.bank.$error},on:{blur:function(a){return e.$v.form.bank.$touch()}},model:{value:e.form.bank,callback:function(a){e.$set(e.form,"bank",a)},expression:"form.bank"}})],1),t("div",{staticClass:"col-12 row"},[t("div",{staticClass:"col-12"},[e._v("Account type")]),e.$v.form.accountType.$error?t("div",{staticClass:"col-12 text-caption text-negative"},[e._v("Select account type")]):e._e(),t("q-radio",{staticClass:"col-12",attrs:{val:"check",label:"Checks","keep-color":"",color:"primary"},model:{value:e.accountType,callback:function(a){e.accountType=a},expression:"accountType"}}),t("q-radio",{staticClass:"col-12",attrs:{val:"saving",label:"Saving","keep-color":"",color:"primary"},model:{value:e.accountType,callback:function(a){e.accountType=a},expression:"accountType"}})],1),t("div",{staticClass:"col-12 row"},[t("div",{staticClass:"col-12 q-pl-md q-pb-sm"},[e._v("Route number")]),t("q-input",{staticClass:"col-12",attrs:{placeholder:"123456789","bg-color":"grey-3",dense:"",outlined:"",error:e.$v.form.routeNumber.$error},on:{blur:function(a){return e.$v.form.routeNumber.$touch()}},model:{value:e.form.routeNumber,callback:function(a){e.$set(e.form,"routeNumber",a)},expression:"form.routeNumber"}})],1),t("div",{staticClass:"col-12 row"},[t("div",{staticClass:"col-12 q-pl-md q-pb-sm"},[e._v("Account number")]),t("q-input",{staticClass:"col-12",attrs:{placeholder:"1234 5678 9101 1213","bg-color":"grey-3",dense:"",outlined:"",error:e.$v.form.accountNumber.$error},on:{blur:function(a){return e.$v.form.accountNumber.$touch()}},model:{value:e.form.accountNumber,callback:function(a){e.$set(e.form,"accountNumber",a)},expression:"form.accountNumber"}})],1),t("div",{staticClass:"col-12 row"},[t("div",{staticClass:"col-12 q-pl-md q-pb-sm"},[e._v("Full name")]),t("q-input",{staticClass:"col-12",attrs:{placeholder:"Your Full Name","bg-color":"grey-3",dense:"",outlined:"",error:e.$v.form.fullName.$error},on:{blur:function(a){return e.$v.form.fullName.$touch()}},model:{value:e.form.fullName,callback:function(a){e.$set(e.form,"fullName",a)},expression:"form.fullName"}})],1),t("div",{staticClass:"col-12 row justify-center q-pt-lg"},[t("q-btn",{attrs:{color:"primary",icon:"add",round:"",size:"lg"},on:{click:e.save}}),t("div",{staticClass:"col-12 text-center text-primary q-pt-sm",staticStyle:{"font-size":"20px","font-weight":"700"}},[e._v("\n        "+e._s(e.id?"Update":"Add")+"\n      ")])],1)])])},r=[],l=t("9424"),c=t("b5ae"),s={mixins:[l["a"]],data(){return{form:{bank:0,accountType:"check",routeNumber:null,accountNumber:null,fullName:null},accountType:"check",banks:[{label:"Select a bank",value:0},{label:"Bank of America",value:1},{label:"Wells Fargo",value:2},{label:"JPMorgan Chase Bank",value:3},{label:"Truist Bank",value:4},{label:"Regions Bank",value:5},{label:"TD Bank",value:6},{label:"PNC Bank",value:7},{label:"Fifth Third Bank",value:8},{label:"Synovus Bank",value:9},{label:"Citibank",value:10}],route:"banks",id:this.$route.params.id}},methods:{afterSave(){this.id?this.$router.push("/success?message=You successfully updated a bank account!"):this.$router.push("/success?message=You successfully added a bank account!")},afterGetRecord(e){this.form.bank=e.exterior_bank_id,this.form.accountType=e.account_type,this.form.routeNumber=e.route_number,this.form.accountNumber=e.account_number,this.form.fullName=e.full_name,this.accountType=e.account_type},beforeValidate(){this.form.accountType=this.accountType}},validations:{form:{bank:{required:c["required"]},accountType:{required:c["required"]},routeNumber:{required:c["required"]},accountNumber:{required:c["required"]},fullName:{required:c["required"]}}}},u=s,n=t("2877"),i=t("9989"),m=t("9c40"),d=t("ddd8"),b=t("3786"),p=t("27f9"),f=t("eebe"),v=t.n(f),k=Object(n["a"])(u,o,r,!1,null,null,null);a["default"]=k.exports;v()(k,"components",{QPage:i["a"],QBtn:m["a"],QSelect:d["a"],QRadio:b["a"],QInput:p["a"]})}}]);