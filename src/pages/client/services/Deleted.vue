<template>
  <q-page class="q-pb-xl">
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
        style="font-size: 25px; font-weight: 700;"
      >Service #{{this.$route.params.id}}</div>
    </div>

    <section class="row q-px-xl justify-center" style="position: relative">
      <section
        class="row col-11 text-center status-style justify-around text-bold items-center"
        style="font-size: 20px;"
      >
        <div class="col-12 text-center">Canceled</div>
        <div class="badge-style" :style="`background-color: #C10015`"></div>
      </section>
    </section>

    <section class="row q-px-lg q-pt-lg" v-if="form && form.specialist">
      <section class="col-3">
        <q-avatar size="85px">
          <img :src="$api_url() + 'image/specialists/' + form.specialist.id" alt="employee_img" />
        </q-avatar>
      </section>
      <section class="col-8 row q-pl-md">

        <section class="col-12 row">
          <div class="col-12 text-bold text-primary" style="font-size: 16px">{{form.specialist.user.name}}</div>
          <div style="color: #5C5C5C; font-size: 14px; font-weight: 500;">Employee</div>
          <!-- <section class="row col-12 items-center q-pt-xs">
            <q-icon
              name="img:vectors/location2.svg"
            />
            <div class="text-primary q-pl-xs" style="font-size: 12px; font-weight: 400;"></div>
          </section> -->
          <section class="row col-12 items-center q-pt-xs">
            <q-icon
              name="img:vectors/phone1.svg"
            />
            <div class="text-primary q-pl-xs" style="font-size: 12px; font-weight: 400;">{{form.specialist.phone}}</div>
          </section>
        </section>

      </section>
    </section>

    <section class="row q-px-lg" v-if="form">
      <div class="text-bold text-primary q-py-md q-pt-xl text-h6">Requeriments</div>
      <s-category-item
        class="col-12"
        v-bind="form"
      />
    </section>

    <section class="col-12 row q-px-lg q-pt-md" v-if="form">
      <div class="text-bold text-primary q-pb-md text-h6 col-12">Date and time</div>
      <section class="col-12 row q-pa-md items-center" style="background-color: #D9F2EE; border-radius: 11px;color: #5C5C5C">
        <div>{{ form.right_now ? 'Right now' : formatDate }}</div>
      </section>
    </section>

    <section class="row q-px-lg" v-if="form && form.observations">
      <div class="text-bold text-primary q-py-md text-h6">Observations</div>
      <section class="col-12 row q-pa-md" style="background-color: #D9F2EE; border-radius: 11px">
        <div class="col-12" style="color: #5C5C5C">{{ form.observations }}</div>
      </section>
    </section>

    <section
      class="row q-px-lg q-mt-xl q-mx-lg q-py-md"
      style="background-color: #D9F2EE; border-radius: 8px"
      v-if="form"
    >
      <section class="col-12 row justify-between items-center" v-if="form.discount">
        <div style="color: #5C5C5C; font-weight: 700; font-size: 16px">Amount <br>(- Comision)</div>
        <div class="text-primary" style="color: #5C5C5C; font-weight: 700; font-size: 25px">{{form.total}}$ - {{form.discount_amount}}$</div>
      </section>

      <section class="col-12 row justify-between items-center">
        <div style="color: #5C5C5C; font-weight: 700; font-size: 16px">Total</div>
        <div class="text-primary" style="color: #5C5C5C; font-weight: 700; font-size: 32px">{{totalAmount}}$</div>
      </section>
    </section>
  </q-page>
</template>

<script>
import SCategoryItem from '../../../components/services/SCategoryItem'
export default {
  components: { SCategoryItem },
  data () {
    return {
      route: 'master_request_services',
      form: null
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    totalAmount () {
      if (this.form.discount) {
        return this.form.total - this.form.discount_amount
      }
      return this.form.total
    },
    formatDate () {
      return this.$formatDate(this.form.date_request, 'D/M/YYYY HH:mm A')
    }
  },
  methods: {
    async getData () {
      this.$q.loading.show()
      const res = await this.$api.get(`${this.route}/${this.$route.params.id}`)
      this.$q.loading.hide()
      this.form = res
      this.statuteValue = res.state
      if (this.statuteValue === 2) {
        this.$router.push('/services/detail/' + this.$route.params.id + '/customer/calification')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.status-style {
  background-color: #D9F2EE;
  border-radius: 8px;
  height: 45px;
  color: $primary;
  position: relative;
}

.badge-style {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  right: 20px;
  top: 40%;
}

.q-banner::before {
  content: '';
  position: absolute;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  width: 25px;
  height: 25px;
  background-color: $primary;
  top: 34%;
  left: 46%;
}

</style>
