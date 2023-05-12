(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1c40":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"q-pb-xl"},[s("div",{staticClass:"col-12 row q-pa-md q-pt-xl q-px-lg"},[s("q-btn",{attrs:{icon:"arrow_back_ios",round:"",color:"secondary",size:"sm",flat:""},on:{click:function(e){return t.$router.go(-1)}}}),s("div",{staticClass:"text-primary col-12 text-center",staticStyle:{"font-size":"25px","font-weight":"700"}},[t._v("Service #"+t._s(this.$route.params.id))])],1),s("section",{staticClass:"row q-px-xl justify-center",staticStyle:{position:"relative"}},[s("section",{staticClass:"row col-11 text-center status-style justify-around text-bold items-center",staticStyle:{"font-size":"20px"},on:{click:t.openChangeStatus}},[s("div",{staticClass:"col-12 text-center"},[t._v(t._s(t.statuteObj.name))]),s("div",{staticClass:"badge-style",style:"background-color: "+t.statuteObj.color})]),t.isOpenStatute?s("section",{staticClass:"col-12 row justify-center"},[t._l(t.states,(function(e){return s("section",{key:e.id,staticClass:"row col-12 justify-center items-center"},[e.id!==t.statuteObj.id?s("section",{staticClass:"row col-11 text-center status-style justify-around text-bold items-center",staticStyle:{"font-size":"20px"},on:{click:function(s){return t.changeStatus(e.id)}}},[s("div",{staticClass:"col-12 text-center"},[t._v(t._s(e.name))]),s("div",{staticClass:"badge-style",style:"background-color:"+e.color})]):t._e()])})),0===t.statuteObj.id?s("section",{staticClass:"row col-11 text-center status-style justify-around text-bold items-center",staticStyle:{"font-size":"20px"},on:{click:function(e){t.acceptServiceDlg=!0}}},[s("div",{staticClass:"col-12 text-center"},[t._v("Accept Service")]),s("div",{staticClass:"badge-style",style:"background-color: #97DDFD"})]):t._e()],2):t._e()]),t.form&&t.form.user?s("section",{staticClass:"row q-px-lg q-pt-lg"},[s("section",{staticClass:"col-3"},[s("q-avatar",{attrs:{size:"85px"}},[s("img",{attrs:{src:t.$api_url()+"image/customers/"+t.form.customer.id,alt:"employee_img"}})])],1),s("section",{staticClass:"col-8 row q-pl-md"},[s("section",{staticClass:"col-12 row"},[s("div",{staticClass:"col-12 text-bold text-primary",staticStyle:{"font-size":"16px"}},[t._v(" "+t._s(t.form.user.name)+" ")]),s("div",{staticStyle:{color:"#5C5C5C","font-size":"14px","font-weight":"500"}},[t._v("Customer")]),s("section",{staticClass:"row col-12 items-center q-pt-xs"},[s("q-icon",{attrs:{name:"img:vectors/location2.svg"}}),s("div",{staticClass:"text-primary q-pl-xs",staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v(t._s(t.form.address_name))])],1),s("section",{staticClass:"row col-12 items-center q-pt-xs"},[s("q-icon",{attrs:{name:"img:vectors/phone1.svg"}}),s("div",{staticClass:"text-primary q-pl-xs",staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v(t._s(t.form.customer.phone))])],1),s("section",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"row col-12 items-center q-pt-xs cursor-pointer",style:{position:"relative"},attrs:{clickable:""},on:{click:t.showLocation}},[s("q-icon",{attrs:{name:"visibility",size:"sm",color:"primary"}}),s("div",{staticClass:"text-primary q-pl-xs",staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v("\n            Show location service\n          ")])],1)])])]):t._e(),t.form?s("section",{staticClass:"row q-px-lg"},[s("div",{staticClass:"text-bold text-primary q-py-md q-pt-lg text-h6"},[t._v("Requeriments")]),s("s-category-item",t._b({staticClass:"col-12"},"s-category-item",t.form,!1))],1):t._e(),t.form?s("section",{staticClass:"col-12 row q-px-lg q-pt-md"},[s("div",{staticClass:"text-bold text-primary q-pb-md text-h6 col-12"},[t._v("Date and time")]),s("section",{staticClass:"col-12 row q-pa-md items-center",staticStyle:{"background-color":"#D9F2EE","border-radius":"11px",color:"#5C5C5C"}},[s("div",[t._v(t._s(t.form.right_now?"Right now":t.formatDate))])])]):t._e(),t.form&&t.form.observations?s("section",{staticClass:"row q-px-lg"},[s("div",{staticClass:"text-bold text-primary q-py-md text-h6"},[t._v("Observations")]),s("section",{staticClass:"col-12 row q-pa-md",staticStyle:{"background-color":"#D9F2EE","border-radius":"11px"}},[s("div",{staticClass:"col-12",staticStyle:{color:"#5C5C5C"}},[t._v(t._s(t.form.observations))])])]):t._e(),t.form?s("section",{staticClass:"row q-px-lg q-mt-xl q-mx-lg q-py-md",staticStyle:{"background-color":"#D9F2EE","border-radius":"8px"}},[t.form.discount?s("section",{staticClass:"col-12 row justify-between items-center"},[s("div",{staticStyle:{color:"#5C5C5C","font-weight":"700","font-size":"16px"}},[t._v("Amount "),s("br"),t._v("(- Comision)")]),s("div",{staticClass:"text-primary",staticStyle:{color:"#5C5C5C","font-weight":"700","font-size":"25px"}},[t._v(t._s(t.form.total)+"$ - "+t._s(t.form.discount_amount)+"$")])]):t._e(),s("section",{staticClass:"col-12 row justify-between items-center"},[s("div",{staticStyle:{color:"#5C5C5C","font-weight":"700","font-size":"16px"}},[t._v("Total")]),s("div",{staticClass:"text-primary",staticStyle:{color:"#5C5C5C","font-weight":"700","font-size":"32px"}},[t._v(t._s(t.totalAmount)+"$")])])]):t._e(),s("q-dialog",{attrs:{"full-width":""},model:{value:t.acceptServiceDlg,callback:function(e){t.acceptServiceDlg=e},expression:"acceptServiceDlg"}},[s("q-card",{staticClass:"my-font q-pb-sm",staticStyle:{"border-radius":"12px"}},[s("q-card-section",[s("div",{staticClass:"text-bold text-primary text-h6"},[t._v("Accept Service")]),s("p",[t._v("Estimated Time of Arrival?")]),s("section",{staticClass:"row q-gutter-x-sm q-gutter-y-sm justify-between"},[t._l(t.times,(function(e){return s("q-btn",{key:e.value,staticStyle:{"border-radius":"5px",width:"80px"},attrs:{label:e.label,color:"primary","no-caps":""},on:{click:function(s){return t.acceptService(e.value)}}})})),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticStyle:{"border-radius":"5px",width:"80px"},attrs:{label:"Cancel",color:"negative","no-caps":""}})],2)])],1)],1),s("q-dialog",{attrs:{persistent:"",maximized:""},model:{value:t.showMapDlg,callback:function(e){t.showMapDlg=e},expression:"showMapDlg"}},[s("q-card",{staticClass:"bg-white"},[s("q-btn",{staticStyle:{position:"absolute",top:"10px",right:"10px","z-index":"9999"},attrs:{color:"negative",icon:"close"},on:{click:function(e){t.showMapDlg=!1,t.coordinates=null}}}),s("GoogleMapServiceDetail",{attrs:{destination:t.coordinates},on:{changeWatch:t.changeWatch}})],1)],1)],1)},a=[],o=s("ee22"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticStyle:{width:"100%",height:"100%","border-radius":"12px",position:"relative"}},[s("GmapMap",{ref:"mapRef",staticStyle:{width:"100%",height:"100%","border-radius":"12px"},attrs:{center:t.centerC,zoom:15,options:t.mapOptions},on:{"map-loaded":t.onMapLoaded}}),t.centerC?s("section",{staticClass:"footer-info-service-detail-map"},[s("footer-info-service-detail-map",{attrs:{estimatedTravelTime:t.estimatedTravelTime,distanceInKm:t.distanceInKm}})],1):t._e()],1)},r=[],c=(s("d9e2"),s("755e")),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-primary fit container-footer-info flex flex-center q-pa-md"},[s("section",{staticClass:"row q-gutter-x-lg"},[s("section",{staticClass:"column items-center"},[s("div",{staticClass:"section-container-icon flex flex-center"},[s("q-icon",{attrs:{name:"img:vectors/car1.svg",size:"2em"}})],1),s("span",{staticClass:"text-center text-bold q-pt-xs",staticStyle:{color:"#C1E4A1","font-size":"16px"}},[t._v("\n        "+t._s(t.estimatedTravelTime.text)+"\n      ")]),s("span",{staticClass:"text-center text-bold text-white",staticStyle:{"font-size":"12px"}},[t._v("\n        Remaining\n      ")])]),s("section",{staticClass:"column items-center"},[s("div",{staticClass:"section-container-icon flex flex-center"},[s("q-icon",{attrs:{name:"img:vectors/km.svg",size:"2em"}})],1),s("span",{staticClass:"text-center text-bold q-pt-xs",staticStyle:{color:"#C1E4A1","font-size":"16px"}},[t._v("\n        "+t._s(t.distanceInKm)+" km\n      ")]),s("span",{staticClass:"text-center text-bold text-white",staticStyle:{"font-size":"12px"}},[t._v("\n        Remaining\n      ")])])])])},d=[],p={props:["estimatedTravelTime","distanceInKm"],data(){return{}}},m=p,u=(s("8467"),s("2877")),h=s("0016"),g=s("eebe"),v=s.n(g),f=Object(u["a"])(m,l,d,!1,null,"1a45ce0a",null),x=f.exports;v()(f,"components",{QIcon:h["a"]});var C={components:{FooterInfoServiceDetailMap:x},props:["destination"],computed:{google:c["gmapApi"]},data(){return{centerC:{lat:10.18422090935222,lng:-67.97418734919233},currentLocation:null,destinationLocation:null,estimatedTravelTime:null,directionsRenderer:null,startMarker:null,endMarker:null,distanceInKm:null,travelMode:"DRIVING",mapObject:null,mapOptions:{mapTypeControl:!1,zoomControl:!1,streetViewControl:!1,fullscreenControl:!1,gestureHandling:"cooperative"},mapLoaded:!1}},watch:{destination(t){this.destinationLocation=t,this.$nextTick((()=>{this.drawRoute()}))},mapLoaded(t){t&&(this.getCurrentLocation(),this.watchCurrentLocation(),this.destinationLocation=this.destination,this.drawRoute())}},methods:{onMapLoaded(t){this.mapObject=t,this.$emit("map-loaded"),this.handleMapLoaded()},handleMapLoaded(){this.mapLoaded=!0,this.$nextTick((()=>{this.$refs.mapRef.resize()}))},getCurrentLocation(){return new Promise(((t,e)=>{if(!("geolocation"in navigator))return alert("Geolocation no está disponible en tu dispositivo."),void e(new Error("Geolocation not supported"));navigator.geolocation.getCurrentPosition((e=>{this.currentLocation={lat:e.coords.latitude,lng:e.coords.longitude},this.centerC=this.currentLocation,this.drawRoute(),t()}),(t=>{alert("Error al obtener la ubicación: "+t.message),e(t)}),{enableHighAccuracy:!0})}))},watchCurrentLocation(){if(!("geolocation"in navigator))return void alert("Geolocation no está disponible en tu dispositivo.");const t=t=>{this.currentLocation={lat:t.coords.latitude,lng:t.coords.longitude},this.centerC=this.currentLocation},e=t=>{alert("Error al obtener la ubicación: "+t.message)},s={enableHighAccuracy:!0,maximumAge:0},i=navigator.geolocation.watchPosition(t,e,s);this.$emit("changeWatch",i)},haversineDistance(t,e,s,i){const a=t=>t*(Math.PI/180),o=6371,n=a(s-t),r=a(i-e);t=a(t),s=a(s);const c=Math.sin(n/2)*Math.sin(n/2)+Math.sin(r/2)*Math.sin(r/2)*Math.cos(t)*Math.cos(s),l=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c));return o*l},drawRoute(){if(console.log("Dibujando ruta...",this.currentLocation,this.destination),!this.currentLocation||!this.destination||!this.currentLocation.lat||!this.currentLocation.lng||!this.destination.lat||!this.destination.lng)return;this.directionsRenderer&&this.directionsRenderer.setMap(null);const t=new google.maps.DirectionsService;this.directionsRenderer=new google.maps.DirectionsRenderer({map:this.$refs.mapRef.$mapObject,suppressMarkers:!0,polylineOptions:{strokeColor:"#00A78E",strokeOpacity:1,strokeWeight:5}}),this.startMarker&&this.startMarker.setMap(null),this.endMarker&&this.endMarker.setMap(null),this.startMarker=new google.maps.Marker({position:this.currentLocation,map:this.$refs.mapRef.$mapObject,icon:{url:"https://jagao.co/admin/vectors/person4.svg",scaledSize:new google.maps.Size(32,32)}}),this.endMarker=new google.maps.Marker({position:this.destination,map:this.$refs.mapRef.$mapObject,icon:{url:"https://jagao.co/admin/vectors/gps2.svg",scaledSize:new google.maps.Size(32,32)}});const e={origin:this.currentLocation,destination:this.destination,travelMode:google.maps.TravelMode.DRIVING};t.route(e,((t,e)=>{if(e===google.maps.DirectionsStatus.OK){this.directionsRenderer.setDirections(t);const e=t.routes[0].legs[0];this.estimatedTravelTime=e.duration,console.log("Tiempo estimado de viaje:",this.estimatedTravelTime.text);const s=this.haversineDistance(this.currentLocation.lat,this.currentLocation.lng,this.destination.lat,this.destination.lng);this.distanceInKm=s.toFixed(2)}else console.error("Error al obtener las direcciones:",e)}))}},mounted(){this.$refs.mapRef.$mapPromise.then((()=>{this.handleMapLoaded()}))}},w=C,b=(s("23e5"),Object(u["a"])(w,n,r,!1,null,"49d2dda7",null)),y=b.exports;const _=[{id:1,name:"Working",color:"#97DDFD"},{id:0,name:"Pending",color:"#EEA414"},{id:2,name:"Finished",color:"#00A78E"}],q=[{label:"15 Min",value:15},{label:"30 Min",value:30},{label:"60 Min",value:60},{label:"90 Min",value:90},{label:"120 Min",value:120}];var S={components:{SCategoryItem:o["a"],GoogleMapServiceDetail:y},data(){return{route:"master_request_services",states:_,isOpenStatute:!1,statuteValue:0,form:null,acceptServiceDlg:!1,times:q,showLocationDlg:!1,showMapDlg:!1,coordinates:null,watchId:null}},mounted(){this.getData()},computed:{statuteObj(){return this.states.find((t=>t.id===this.statuteValue))},totalAmount(){return this.form.discount?this.form.total-this.form.discount_amount:this.form.total},formatDate(){return this.$formatDate(this.form.date_request,"D/M/YYYY HH:mm A")}},watch:{showMapDlg(){navigator.geolocation.clearWatch(this.watchId)}},methods:{changeWatch(t){console.log("changeWatch",t),this.watchId=t},async cancelService(){const{id:t}=this.$route.params;this.$q.loading.show();const e=await this.$api.delete(`${this.route}/${t}`);this.$q.loading.hide(),e&&this.$router.go(-1)},async getData(){this.$q.loading.show();const t=await this.$api.get(`${this.route}/${this.$route.params.id}`);this.$q.loading.hide(),this.form=t,this.statuteValue=t.state,2===this.statuteValue&&this.$router.push("/services/detail/"+this.$route.params.id+"/employee/calification")},openChangeStatus(){this.isOpenStatute=!this.isOpenStatute},async changeStatus(t){if(2===t){this.$q.loading.show();const e=await this.$api.put(`${this.route}/${this.form.id}/status/${t}`);this.$q.loading.hide(),this.getData(),console.log({res:e})}this.isOpenStatute=!1},async acceptService(t){const e=t+" minutes";this.$q.loading.show();const s=await this.$api.put(`${this.route}/${this.form.id}/status/1`,{time:e});this.$q.loading.hide(),s&&(this.$q.notify({color:"positive",message:"Service accepted"}),this.getData(),this.acceptServiceDlg=!1)},showLocation(){console.log("show location",this.form),this.coordinates={lat:parseFloat(this.form.address.latitude),lng:parseFloat(this.form.address.longitude)},console.log("coordinates",this.coordinates),this.showMapDlg=!0}}},$=S,M=(s("370f"),s("9989")),D=s("9c40"),k=s("cb32"),z=s("24e8"),L=s("f09f"),j=s("a370"),O=s("54e1"),R=s("714f"),T=s("7f67"),E=Object(u["a"])($,i,a,!1,null,"a626bb92",null);e["default"]=E.exports;v()(E,"components",{QPage:M["a"],QBtn:D["a"],QAvatar:k["a"],QIcon:h["a"],QDialog:z["a"],QCard:L["a"],QCardSection:j["a"],QBanner:O["a"]}),v()(E,"directives",{Ripple:R["a"],ClosePopup:T["a"]})},"23e5":function(t,e,s){"use strict";s("a65e")},"2a1a":function(t,e,s){},"370f":function(t,e,s){"use strict";s("88bc")},8467:function(t,e,s){"use strict";s("2a1a")},"88bc":function(t,e,s){},a65e:function(t,e,s){}}]);