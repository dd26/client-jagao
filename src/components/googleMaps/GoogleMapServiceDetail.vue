<template>
  <GmapMap
    ref="mapRef"
    :center="centerC"
    :zoom="20"
    :options="mapOptions"
    @map-loaded="onMapLoaded"
    style="width: 100%; height: 100%; border-radius: 12px"
  >
    <GmapMarker
      :key="'current'"
      :position="currentLocation"
      :clickable="true"
    />
    <GmapMarker
      :key="'destination'"
      :position="destinationLocation"
      :clickable="true"
    />
    <DirectionsRenderer
      v-if="mapLoaded"
      :origin="currentLocation"
      :destination="destinationLocation"
      :travelMode="travelMode"
      :waypoints="[]"
      :optimizeWaypoints="true"
      @click="() => {}"
      @map-loaded="handleMapLoaded"
    />
  </GmapMap>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'
import DirectionsRenderer from './DirectionsRenderer.vue'

export default {
  components: {
    DirectionsRenderer
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
      };

      const errorCallback = error => {
        alert('Error al obtener la ubicación: ' + error.message);
      };

      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation.watchPosition(successCallback, errorCallback, options);
    }
  },
  async mounted () {
    console.log('mounted', this.destination)
    this.$refs.mapRef.$mapPromise.then(() => {
      this.getCurrentLocation()
      this.watchCurrentLocation()
      this.destinationLocation = this.destination
    })
  }
}
</script>

<style></style>


<!-- <template>
  <div>
    <GmapMap
      :center="center"
      :zoom="12"
      ref="mapRef"
      style="width: 100%; height: 500px"
    >
      <GmapMarker :position="center" />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  data () {
    return {
      center: { lat: 0, lng: 0 }
    }
  },
  props: ['destination'],
  computed: {
    google: gmapApi
  },
  watch: {
    destination (newValue) {
      if (newValue && this.center) {
        this.navigateTo(newValue)
      }
    }
  },
  mounted () {
    this.getUserLocation()
  },
  methods: {
    async getUserLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.center = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          },
          () => {
            console.error('Error al obtener la ubicación')
          }
        )
      }
    },
    navigateTo (destination) {
      const directionsService = new this.google.maps.DirectionsService()
      const directionsRenderer = new this.google.maps.DirectionsRenderer()

      directionsRenderer.setMap(this.$refs.mapRef.$mapObject)

      directionsService.route(
        {
          origin: this.center,
          destination: destination,
          travelMode: this.google.maps.TravelMode.DRIVING
        },
        (response, status) => {
          if (status === this.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(response)
          } else {
            console.error('Error al obtener las direcciones:', status)
          }
        }
      )
    }
  }
}
</script>
 -->
