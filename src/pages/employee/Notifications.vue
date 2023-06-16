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
      class="q-px-sm row q-gutter-y-lg"
      v-if="data.length > 0"
    >
      <EmployeeItem
        v-for="n in data"
        :key="n.id"
        v-bind="n"
        class="col-12"
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
import EmployeeItem from 'src/components/notification/EmployeeItem.vue'
import { GetDataMixin } from 'src/mixins/GetData'
export default {
  components: { EmployeeItem },
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
