<template>
  <q-page>
    <Service />
  </q-page>
</template>

<script>
import Service from 'src/components/services/Service.vue'
export default {
  components: { Service },
  data () {
    return {
      panel: 1
    }
  }
}
</script>

<style>

</style>
