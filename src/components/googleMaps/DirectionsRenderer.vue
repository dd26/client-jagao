<template>
  <div>
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'
export default {
  name: 'DirectionsRenderer',
  props: ['origin', 'destination', 'travelMode'],
  data () {
    return {
      directionsService: null,
      directionsRenderer: null
    }
  },
  computed: {
    google: gmapApi
  },
  methods: {
    getDirections () {
      if (!this.origin || !this.destination) return
      this.directionsService.route(
        {
          origin: this.origin,
          destination: this.destination,
          travelMode: this.travelMode
        },
        (result, status) => {
          if (status === 'OK') {
            this.directionsRenderer.setDirections(result)
          } else {
            console.error('Error al obtener las direcciones:', status)
          }
        }
      )
    }
  },
  watch: {
    origin () {
      this.getDirections()
    },
    destination () {
      this.getDirections()
    },
    travelMode () {
      this.getDirections()
    }
  },
  mounted () {
    this.$gmapApiPromiseLazy().then(() => {
      this.directionsService = new this.google.maps.DirectionsService()
      this.directionsRenderer = new this.google.maps.DirectionsRenderer()
      console.log('DirectionsRenderer:', this.directionsRenderer)
      console.log('MapObject:', this.$parent.mapObject)
      this.directionsRenderer.setMap(this.$parent.mapObject) // Modificar esta línea
      this.getDirections()
    })
  }
}
</script>
