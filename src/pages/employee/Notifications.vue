<template>
  <q-page class="q-pa-lg window-height">
    <div class="text-primary q-pb-lg" style="font-size: 20px; font-weight: 700;">Notifications</div>
    <div class="q-px-sm row q-gutter-y-lg">
      <EmployeeItem
        v-for="n in data"
        :key="n.id"
        v-bind="n"
        class="col-12"
      />
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
