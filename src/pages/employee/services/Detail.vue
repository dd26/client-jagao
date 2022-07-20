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
        @click="openChangeStatus"
      >
        <div class="col-12 text-center">{{statuteObj.name}}</div>
        <div class="badge-style" :style="`background-color: ${statuteObj.color}`"></div>
      </section>

      <section v-if="isOpenStatute" class="col-12 row justify-center">
        <section
          v-for="item in states"
          :key="item.id"
          class="row col-12 justify-center items-center"
        >
          <section
            v-if="item.id !== statuteObj.id"
            class="row col-11 text-center status-style justify-around text-bold items-center"
            style="font-size: 20px;"
            @click="changeStatus(item.id)"
          >
            <div class="col-12 text-center">{{item.name}}</div>
            <div class="badge-style" :style="`background-color:${item.color}`"></div>
          </section>
        </section>
        <section
          class="row col-11 text-center status-style justify-around text-bold items-center"
          style="font-size: 20px;"
          @click="acceptServiceDlg = true"
          v-if="statuteObj.id === 0"
        >
          <div class="col-12 text-center">Accept Service</div>
          <div class="badge-style" :style="`background-color: #97DDFD`"></div>
        </section>
      </section>
    </section>

    <section class="row q-px-lg q-pt-lg" v-if="form && form.user">
      <section class="col-3">
        <q-avatar size="85px">
          <img :src="$api_url() + 'image/customers/' + form.customer.id" alt="employee_img" />
        </q-avatar>
      </section>
      <section class="col-8 row q-pl-md">

        <section class="col-12 row">
          <div class="col-12 text-bold text-primary" style="font-size: 16px"> {{ form.user.name }} </div>
          <div style="color: #5C5C5C; font-size: 14px; font-weight: 500;">Customer</div>
          <section class="row col-12 items-center q-pt-xs">
            <q-icon
              name="img:vectors/location2.svg"
            />
            <div class="text-primary q-pl-xs" style="font-size: 12px; font-weight: 400;">{{ form.address_name }}</div>
          </section>
          <section class="row col-12 items-center q-pt-xs">
            <q-icon
              name="img:vectors/phone1.svg"
            />
            <div class="text-primary q-pl-xs" style="font-size: 12px; font-weight: 400;">{{ form.customer.phone }}</div>
          </section>
        </section>

      </section>
    </section>

    <section class="row q-px-lg" v-if="form">
      <div class="text-bold text-primary q-py-md q-pt-lg text-h6">Requeriments</div>
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

    <section class="row q-px-lg q-mt-xl q-mx-lg q-py-md" style="background-color: #D9F2EE; border-radius: 8px" v-if="form">
      <section class="col-12 row justify-between items-center" v-if="form.discount">
        <div style="color: #5C5C5C; font-weight: 700; font-size: 16px">Amount <br>(- Comision)</div>
        <div class="text-primary" style="color: #5C5C5C; font-weight: 700; font-size: 25px">{{form.total}}$ - {{form.discount_amount}}$</div>
      </section>

      <section class="col-12 row justify-between items-center">
        <div style="color: #5C5C5C; font-weight: 700; font-size: 16px">Total</div>
        <div class="text-primary" style="color: #5C5C5C; font-weight: 700; font-size: 32px">{{totalAmount}}$</div>
      </section>
    </section>

    <q-dialog v-model="acceptServiceDlg" full-width>
      <q-card style="border-radius: 12px" class="my-font q-pb-sm">
        <q-card-section>
          <div class="text-bold text-primary text-h6">Accept Service</div>
          <p>Estimated Time of Arrival?</p>

          <section class="row q-gutter-x-sm q-gutter-y-sm justify-between">
            <q-btn
              @click="acceptService(item.value)"
              v-for="item in times"
              :key="item.value"
              :label="item.label"
              color="primary"
              no-caps
              style="border-radius: 5px; width: 80px"
            />
            <q-btn
              label="Cancel"
              color="negative"
              no-caps
              style="border-radius: 5px;width: 80px"
              v-close-popup
            />
          </section>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import SCategoryItem from '../../../components/services/SCategoryItem'

const states = [
  {
    id: 1,
    name: 'Working',
    color: '#97DDFD'
  },
  {
    id: 0,
    name: 'Pending',
    color: '#EEA414'
  },
  {
    id: 2,
    name: 'Finished',
    color: '#00A78E'
  }
]

const timeEstimates = [
  { label: '15 Min', value: 15 },
  { label: '30 Min', value: 30 },
  { label: '60 Min', value: 60 },
  { label: '90 Min', value: 90 },
  { label: '120 Min', value: 120 }
]

export default {
  components: { SCategoryItem },
  data () {
    return {
      route: 'master_request_services',
      states,
      isOpenStatute: false,
      statuteValue: 0,
      form: null,
      acceptServiceDlg: false,
      times: timeEstimates
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    statuteObj () {
      return this.states.find(item => item.id === this.statuteValue)
    },
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
    async cancelService () {
      const { id } = this.$route.params
      this.$q.loading.show()
      const res = await this.$api.delete(`${this.route}/${id}`)
      this.$q.loading.hide()
      if (res) {
        this.$router.go(-1)
      }
    },
    async getData () {
      this.$q.loading.show()
      const res = await this.$api.get(`${this.route}/${this.$route.params.id}`)
      this.$q.loading.hide()
      this.form = res
      this.statuteValue = res.state
      if (this.statuteValue === 2) {
        this.$router.push('/services/detail/' + this.$route.params.id + '/employee/calification')
      }
    },
    openChangeStatus () {
      this.isOpenStatute = !this.isOpenStatute
    },
    async changeStatus (id) {
      if (id === 2) {
        this.$q.loading.show()
        const res = await this.$api.put(`${this.route}/${this.form.id}/status/${id}`)
        this.$q.loading.hide()
        this.getData()
        console.log({
          res
        })
      }
      this.isOpenStatute = false
    },
    async acceptService (estimateTime) {
      const time = estimateTime + ' minutes'
      this.$q.loading.show()
      const res = await this.$api.put(`${this.route}/${this.form.id}/status/1`, { time })
      this.$q.loading.hide()
      if (res) {
        this.$q.notify({
          color: 'positive',
          message: 'Service accepted'
        })
        this.getData()
        this.acceptServiceDlg = false
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
