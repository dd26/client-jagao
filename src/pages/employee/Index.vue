<template>
  <q-page class="q-pt-lg q-pb-lg window-height">
    <section class="row q-pa-md items-center q-px-lg">
      <div class="col-6 row items-center">
        <div class="col-12 text-primary text-bold" style="font-size: 20px"> Hello, {{ name }} </div>
        <div class="col-12" style="font-size: 16px; color: #5C5C5C;">Let’s start working!</div>
      </div>
      <div class="col-6 row justify-end">
        <wallet
          class="col-12"
          :amount="amount"
        />
      </div>
    </section>

    <section
      class="row justify-center q-pt-lg q-px-lg"
    >
      <status-employee />
    </section>

    <section class="row q-px-xl q-pt-lg">
      <div
        v-if="!servicesFilters && !servicesFilters.message"
        class="col-12 text-center q-pb-lg text-primary text-bold"
        style="font-size: 25px;"
      >Available services</div>
      <q-list class="col-12 q-gutter-y-md" v-if="servicesFilters && !servicesFilters.message && servicesFilters.length > 0">
        <Item
          v-for="itm in servicesFilters"
          :key="itm.id"
          v-bind="itm"
          :isCancel="false"
          @clickItem="clickItem"
        />
      </q-list>
      <section
        class="row q-pa-xl justify-center items-center q-py-xl"
        style="background-color: #D9F2EE; border-radius: 12px;"
        v-else-if="servicesFilters && servicesFilters.message"
      >
        <div class="col-12 text-center text-primary text-bold">{{ servicesFilters.message }}</div>
        <img
          src="illustrations/18.png"
          alt="illustration_18"
          width="100%"
        >
      </section>
      <section v-else class="col-12">
        <img
          src="vectors/card5.svg"
          alt=""
          width="100%"
          height="110px"
          style="object-fit: fill"
        >
      </section>
    </section>
  </q-page>
</template>

<script>
import StatusEmployee from '../../components/status/StatusEmployee.vue'
import Wallet from '../../components/wallet/Wallet.vue'
import Item from 'src/components/services/Item.vue'
export default {
  components: {
    Wallet,
    StatusEmployee,
    Item
  },
  data () {
    return {
      name: 'Elizabeth',
      services: [],
      servicesPending: [],
      amount: '0,00',
      user: {}
    }
  },
  computed: {
    servicesFilters () {
      if (this.user.user.verified) {
        const userCategories = this.user.specialistServices.map(item => item.category_id)
        console.log({
          userCategories,
          filtro: this.services.filter(item => userCategories.includes(item.category_id))
        })
        return this.services.filter(item => userCategories.includes(item.category_id))
      } else {
        return { message: 'We are reviewing your information, you will receive a notification soon' }
      }
    }
  },
  async mounted () {
    this.getUserInfo()
    this.getAmount()
    this.services = await this.getServices(0)
  },
  methods: {
    async getUserInfo () {
      const user = await this.$getUserInfo()
      this.name = user.user.name
      this.user = user
    },
    async getServices (status) {
      this.$q.loading.show()
      const data = await this.$api.get('/master_request_services/status/' + status)
      this.$q.loading.hide()
      return data
    },
    clickItem (id) {
      this.$router.push('/services/detail/' + id + '/employee')
    },
    async getAmount () {
      this.$q.loading.show()
      const res = await this.$api.get('/specialists/amount/total')
      this.$q.loading.hide()
      if (res) {
        this.amount = res
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-style {
  background: linear-gradient(254.28deg, #00A58D 4.05%, #85D6D6 98.2%);
  height: 180px;
  border-radius: 10px;
}

</style>
