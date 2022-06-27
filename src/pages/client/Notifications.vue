<template>
  <q-page class="q-pa-lg">
    <div class="text-primary q-pb-lg" style="font-size: 20px; font-weight: 700;">Notifications</div>
    <div class="q-px-lg row q-gutter-y-lg">
      <ClientItem
        v-for="n in data"
        :key="n.id"
        class="col-12"
        v-bind="n"
      />
    </div>
  </q-page>
</template>

<script>
import ClientItem from 'src/components/notification/ClientItem.vue'
import { GetDataMixin } from 'src/mixins/GetData'
export default {
  components: { ClientItem },
  mixins: [GetDataMixin],
  data () {
    return {
      route: 'notifications'
    }
  },
  methods: {
    afterGetRecord () {
      this.data.reverse()
    }
  }
}
</script>

<style>

</style>
