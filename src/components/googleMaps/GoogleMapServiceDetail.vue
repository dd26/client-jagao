<template>
  <GmapMap
    ref="mapRef"
    :center="centerC"
    :zoom="15"
    :options="mapOptions"
    @map-loaded="onMapLoaded"
    style="width: 100%; height: 100%; border-radius: 12px"
  >
  </GmapMap>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  props: ['destination'],
  computed: {
    google: gmapApi
  },
  data () {
    return {
      centerC: {
        lat: 10.18422090935222,
        lng: -67.97418734919233
      },
      currentLocation: null,
      destinationLocation: null,
      estimatedTravelTime: null,
      directionsRenderer: null,
      travelMode: 'DRIVING',
      mapObject: null,
      mapOptions: {
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: 'cooperative'
      },
      mapLoaded: false
    }
  },
  watch: {
    destination (val) {
      console.log('Destino:', val);
      this.drawRoute();
    }
  },
  methods: {
    onMapLoaded (map) {
      this.mapObject = map
      this.$emit('map-loaded')
    },
    handleMapLoaded () {
      this.mapLoaded = true
      this.$nextTick(() => {
        this.$refs.mapRef.resize()
      })
    },
    getCurrentLocation () {
      return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
          alert('Geolocation no está disponible en tu dispositivo.')
          reject(new Error('Geolocation not supported'))
          return
        }

        navigator.geolocation.getCurrentPosition(
          position => {
            this.currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            console.log('Ubicación actual:', this.currentLocation);
            this.centerC = this.currentLocation
            this.drawerRouteBetweenTwoCors()
            resolve() // Resuelve la promesa aquí
          },
          error => {
            alert('Error al obtener la ubicación: ' + error.message)
            reject(error) // Rechaza la promesa aquí
          },
          {
            enableHighAccuracy: true
          }
        )
      })
    },
    watchCurrentLocation () {
      if (!('geolocation' in navigator)) {
        alert('Geolocation no está disponible en tu dispositivo.');
        return;
      }

      const successCallback = position => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.centerC = this.currentLocation;
        // timeout para ejecutar el drawerRouteBetweenTwoCors() después de 5 segundos
        setTimeout(() => {
          this.drawerRouteBetweenTwoCors();
        }, 3000);
      };

      const errorCallback = error => {
        alert('Error al obtener la ubicación: ' + error.message);
      };

      const options = {
        enableHighAccuracy: true,
        // timeout: 10000,
        maximumAge: 0
      };

      navigator.geolocation.watchPosition(successCallback, errorCallback, options);
    },
    drawerRouteBetweenTwoCors () {
      const directionsService = new google.maps.DirectionsService()
      const directionsRenderer = new google.maps.DirectionsRenderer()
      directionsRenderer.setMap(this.$refs.mapRef.$mapObject)
      console.log('Destino:', this.destination);
      console.log('Centro:', this.centerC);
      console.log('Viaje:', this.travelMode);
      const request = {
        origin: this.centerC,
        destination: this.destination,
        travelMode: google.maps.TravelMode.DRIVING,
      }

      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result)

          // Extraer y almacenar el tiempo de viaje estimado
          const leg = result.routes[0].legs[0];
          this.estimatedTravelTime = leg.duration;
          console.log('Tiempo estimado de viaje:', this.estimatedTravelTime.text);
        } else {
          console.error('Error al obtener las direcciones:', status)
        }
      })
    },
    drawRoute() {
      if (!this.currentLocation || !this.destination) {
        return;
      }

      if (this.directionsRenderer) {
        this.directionsRenderer.setMap(null);
      }

      const directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.directionsRenderer.setMap(this.$refs.mapRef.$mapObject);

      const request = {
        origin: this.currentLocation,
        destination: this.destination,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsRenderer.setDirections(result);

          // Extraer y almacenar el tiempo de viaje estimado
          const leg = result.routes[0].legs[0];
          this.estimatedTravelTime = leg.duration;
          console.log("Tiempo estimado de viaje:", this.estimatedTravelTime.text);
        } else {
          console.error("Error al obtener las direcciones:", status);
        }
      });
    }
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then(() => {
      this.getCurrentLocation();
      this.watchCurrentLocation();
      this.destinationLocation = this.destination;
      this.drawRoute(); // Llama a drawRoute aquí en lugar de drawerRouteBetweenTwoCors
    });
  }
}
</script>
