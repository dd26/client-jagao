<template>
  <q-page class="q-pa-lg">
    <div class="text-primary q-pb-lg" style="font-size: 20px; font-weight: 700;">Notifications</div>
    <div class="q-px-lg row q-gutter-y-lg">
      <ClientItem :client="true" v-for="n in 3" :key="n" class="col-12" />
    </div>
  </q-page>
</template>

<script>
import ClientItem from 'src/components/notification/ClientItem.vue'
export default {
  components: { ClientItem }
}
</script>

<style>

</style>
