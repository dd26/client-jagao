<template>
  <q-page>
    <div class="col-12 row q-pa-md q-pt-xl q-px-lg">
      <q-btn
        icon="arrow_back_ios"
        round
        color="secondary"
        size="sm"
        flat
        @click="$router.go(-1)"
      />
      <div
        class="text-primary col-12 text-center"
        style="font-size: 20px; font-weight: 700; margin-top: -20px"
      >Working services</div>
    </div>

    <section class="row q-px-lg q-pb-md">
      <q-list class="col-12 q-gutter-y-md">
        <item
          v-for="item in data"
          :key="item.id"
          v-bind="item"
          @clickItem="clickItem"
          :isCancel="false"
        />
      </q-list>
    </section>
  </q-page>
</template>

<script>
import Item from '../../../components/services/Item'
import { GetDataMixin } from '../../../mixins/GetData'
export default {
  mixins: [GetDataMixin],
  components: {
    Item
  },
  data () {
    return {
      route: '/master_request_services/status/1/specialist'
    }
  },
  methods: {
    async cancelService (id) {
      this.$q.loading.show()
      const res = await this.$api.delete(`${this.route}/${id}`)
      this.$q.loading.hide()
      if (res) {
        this.getRecord()
      }
    },
    clickItem (id) {
      this.$router.push('/services/detail/' + id + '/employee')
    }
  }
}
</script>

<style>

</style>
