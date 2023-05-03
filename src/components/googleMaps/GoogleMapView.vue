<template>
  <GmapMap
    ref="mapRef"
    :center="centerC"
    :zoom="20"
    :options="mapOptions"
    @gmap-click="onMapClick"
    style="width: 100%; height: 100%; border-radius: 12px"
  >

    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="centerC = m.position"
      @dragend="onMarkerDragEnd(index, $event)"
    />
  </GmapMap>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'
export default {
  props: ['center', 'value'],
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
      markers: [],
      travelMode: 'DRIVING',
      mapOptions: {
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: 'cooperative'
      }
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
          this.centerC = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }

          this.markers = [
            { title: 'Mi ubicacion', position: this.centerC }
          ]

          this.$emit('input', this.markers[0].position)
        },
        (error) => {
          alert('Error al obtener la ubicación: ' + error.message)
        },
        {
          enableHighAccuracy: true
        }
      )
    },
    onMapClick (event) {
      this.markers[0].position = event.latLng
      this.$emit('input', {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      })
    },
    onMarkerDragEnd (index, event) {
      this.markers[index].position = event.latLng
      this.$emit('input', {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      })
    }
  },
  mounted () {
    this.$refs.mapRef.$mapPromise.then(() => {
      if (this.value && this.value.lat && this.value.lng) {
        this.centerC = this.value
        this.markers = [{ title: 'Mi ubicacion', position: this.centerC }]
      } else {
        this.getCurrentLocation()
      }
    })
  }
}
</script>

<style></style>
