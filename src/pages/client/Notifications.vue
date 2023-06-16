<template>
  <q-page class="q-pa-lg">
    <section class="row items-center q-gutter-x-sm">
      <q-btn
        @click="$router.go(-1)"
        dense
        flat
        size="11px"
        icon="img:vectors/back1.svg"
      />
      <div class="text-primary" style="font-size: 20px; font-weight: 700;">Notifications</div>
    </section>
    <div
      v-if="data.length > 0"
      class="q-px-lg row q-gutter-y-lg"
    >
      <ClientItem
        v-for="n in data"
        :key="n.id"
        class="col-12"
        v-bind="n"
      />
    </div>
    <div
      class="q-px-sm"
      v-else
    >
      <div class="text-center text-grey absolute-center" style="font-size: 20px;">
        <!-- No posee notificaciones en este momento -->
        No notifications at this time
      </div>
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
