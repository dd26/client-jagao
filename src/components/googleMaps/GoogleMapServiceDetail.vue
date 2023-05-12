<template>
  <section
    style="width: 100%; height: 100%; border-radius: 12px; position: relative"
  >
    <GmapMap
      ref="mapRef"
      :center="centerC"
      :zoom="15"
      :options="mapOptions"
      @map-loaded="onMapLoaded"
      style="width: 100%; height: 100%; border-radius: 12px"
    >
    </GmapMap>

    <section
      v-if="centerC"
      class="footer-info-service-detail-map"
    >
      <footer-info-service-detail-map
        :estimatedTravelTime="estimatedTravelTime"
        :distanceInKm="distanceInKm"
      />

    </section>

  </section>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

import FooterInfoServiceDetailMap from 'src/components/googleMaps/FooterInfoServiceDetailMap.vue'

export default {
  components: {
    FooterInfoServiceDetailMap
  },
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
      startMarker: null,
      endMarker: null,
      distanceInKm: null,
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
      this.destinationLocation = val
      this.$nextTick(() => {
        this.drawRoute()
      })
    },
    mapLoaded (newValue) {
      if (newValue) {
        this.getCurrentLocation()
        this.watchCurrentLocation()
        this.destinationLocation = this.destination
        this.drawRoute()
      }
    }
  },
  methods: {
    onMapLoaded (map) {
      this.mapObject = map
      this.$emit('map-loaded')
      this.handleMapLoaded()
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
            this.centerC = this.currentLocation
            this.drawRoute()
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
        alert('Geolocation no está disponible en tu dispositivo.')
        return
      }

      const successCallback = position => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.centerC = this.currentLocation
      }

      const errorCallback = error => {
        alert('Error al obtener la ubicación: ' + error.message)
      }

      const options = {
        enableHighAccuracy: true,
        // timeout: 10000,
        maximumAge: 0
      }

      const id = navigator.geolocation.watchPosition(successCallback, errorCallback, options)
      this.$emit('changeWatch', id)
    },
    // Función para calcular la distancia entre dos coordenadas en kilómetros
    haversineDistance (lat1, lon1, lat2, lon2) {
      const toRadians = (degrees) => degrees * (Math.PI / 180)

      const R = 6371 // Radio de la Tierra en km
      const dLat = toRadians(lat2 - lat1)
      const dLon = toRadians(lon2 - lon1)

      lat1 = toRadians(lat1)
      lat2 = toRadians(lat2)

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

      return R * c
    },
    drawRoute () {
      console.log('Dibujando ruta...', this.currentLocation, this.destination)
      if (
        !this.currentLocation ||
        !this.destination ||
        !this.currentLocation.lat ||
        !this.currentLocation.lng ||
        !this.destination.lat ||
        !this.destination.lng
      ) {
        return
      }

      if (this.directionsRenderer) {
        this.directionsRenderer.setMap(null)
      }

      /* eslint-disable */
      const directionsService = new google.maps.DirectionsService()

      this.directionsRenderer = new google.maps.DirectionsRenderer({
        map: this.$refs.mapRef.$mapObject,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: "#00A78E",
          strokeOpacity: 1.0,
          strokeWeight: 5,
        },
      })

      if (this.startMarker) {
        this.startMarker.setMap(null);
      }
      if (this.endMarker) {
        this.endMarker.setMap(null);
      }

      this.startMarker = new google.maps.Marker({
        position: this.currentLocation,
        map: this.$refs.mapRef.$mapObject,
        icon: {
          url: "https://jagao.co/admin/vectors/person4.svg",
          scaledSize: new google.maps.Size(32, 32),
        },
      });

      this.endMarker = new google.maps.Marker({
        position: this.destination,
        map: this.$refs.mapRef.$mapObject,
        icon: {
          url: "https://jagao.co/admin/vectors/gps2.svg",
          scaledSize: new google.maps.Size(32, 32),
        },
      });

      const request = {
        origin: this.currentLocation,
        destination: this.destination,
        travelMode: google.maps.TravelMode.DRIVING
      }

      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsRenderer.setDirections(result)

          // Extraer y almacenar el tiempo de viaje estimado
          const leg = result.routes[0].legs[0]
          this.estimatedTravelTime = leg.duration
          console.log('Tiempo estimado de viaje:', this.estimatedTravelTime.text)

          // Obtener la distancia en kilómetros
          const distanceInKm = this.haversineDistance(
            this.currentLocation.lat,
            this.currentLocation.lng,
            this.destination.lat,
            this.destination.lng
          );
          this.distanceInKm = distanceInKm.toFixed(2)
        } else {
          console.error('Error al obtener las direcciones:', status)
        }
      })
      /* eslint-enable */
    }
  },
  mounted () {
    this.$refs.mapRef.$mapPromise.then(() => {
      this.handleMapLoaded() // Reemplaza las llamadas a los métodos en esta sección por handleMapLoaded
    })
  }
}
</script>

<style lang="scss" scoped>
.footer-info-service-detail-map {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 33%;
  width: auto;
  height: auto;
}
</style>
