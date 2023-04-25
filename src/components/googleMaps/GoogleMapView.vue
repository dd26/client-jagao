<template>
  <GmapMap
    ref="mapRef"
    :center="centerC"
    :zoom="15"
    style="width: 100%; height: 100%; border-radius: 12px"
    @gmap-ready="gmapReady = true"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="centerC = m.position"
    />
  </GmapMap>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'
export default {
  props: ['center'],
  computed: {
    google: gmapApi
  },
  data () {
    return {
      centerC: {
        lat: 10.18422090935222,
        lng: -67.97418734919233
      },
      gmapReady: false,
      markers: [
        {
          title: 'Envio',
          position: {
            lat: 10, lng: 10
          }
        },
        {
          title: 'Metropolis',
          position: {
            lat: 10, lng: 11
          }
        }
      ],
      travelMode: 'DRIVING'
    }
  },
  watch: {
    gmapReady (value) {
      if (value) {
        this.getCurrentLocation()
      }
    }
  },
  methods: {
    getDirections () {
      const directionsService = new this.google.maps.DirectionsService()
      const directionsRenderer = new this.google.maps.DirectionsRenderer()

      directionsRenderer.setMap(this.$refs.mapRef.$mapObject)

      const request = {
        origin: this.markers[0].position,
        destination: this.markers[1].position,
        travelMode: this.google.maps.TravelMode.DRIVING
      }

      directionsService.route(request, (result, status) => {
        if (status === this.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result)
        } else {
          console.error('Error al obtener las direcciones:', status)
        }
      })
    },
    getRandomVenezuelaPosition () {
      const minLat = 0.647535 // Latitud mínima de Venezuela
      const maxLat = 12.699729 // Latitud máxima de Venezuela
      const minLng = -73.430201 // Longitud mínima de Venezuela
      const maxLng = -59.808784 // Longitud máxima de Venezuela

      const lat = Math.random() * (maxLat - minLat) + minLat
      const lng = Math.random() * (maxLng - minLng) + minLng

      return { lat, lng }
    },
    getCurrentLocation () {
      if (!('geolocation' in navigator)) {
        alert('Geolocation no está disponible en tu dispositivo.')
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.centerC = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }

          this.markers = [
            { title: 'Mi ubicacion', position: this.centerC },
            { title: 'Metropolis', position: { lat: 10.18422090935222, lng: -67.97418734919233 } }
          ]

          this.getDirections()
        },
        (error) => {
          alert('Error al obtener la ubicación: ' + error.message)
        },
        {
          enableHighAccuracy: true
        }
      )
    }
  },
  mounted () {
    /* this.centerC = this.center || this.getRandomVenezuelaPosition()
    this.markers = [
      { title: 'Envio', position: this.centerC }
    ] */
    /* try {
      this.getCurrentLocation()
    } catch (error) {
      alert(error)
    } */
  }
}
</script>

<style></style>

<!-- <template>
  <div>
    <div class="q-pa-md">
      <q-btn label="Obtener ubicación" @click="getCurrentLocation" />
      <div v-if="location">
        <h3>Ubicación actual:</h3>
        <p>Latitud: {{ location.latitude }}</p>
        <p>Longitud: {{ location.longitude }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      location: null
    }
  },
  methods: {
    getCurrentLocation () {
      if (!('geolocation' in navigator)) {
        alert('Geolocation no está disponible en tu dispositivo.')
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        },
        (error) => {
          alert('Error al obtener la ubicación: ' + error.message)
        },
        {
          enableHighAccuracy: true
        }
      )
    }
  }
}
</script> -->
