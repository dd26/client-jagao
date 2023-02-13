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
        <q-space />
        <q-btn
          @click="openChangeRequestDate"
          icon="edit"
          round
          color="primary"
          size="md"
          flat
        />
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

    <section class="row q-py-lg q-px-xl justify-center q-pt-xl">
      <q-btn
        label="Cancel"
        class="q-py-sm q-px-xl q-mt-md"
        style="border-radius: 8px; background-color: #E23D3D; color: white;"
        @click="cancelServiceDlg = true"
      />
    </section>

    <q-dialog v-model="changeDateDlg">
      <service-date
        @save="changeRequestDate"
      />
    </q-dialog>

    <q-dialog v-model="cancelServiceDlg">
      <dialogs-component
        title="are you sure to cancel the service?"
        confirmLabel="Yes"
        cancelLabel="No"
        @confirm="cancelService"
      />
    </q-dialog>
  </q-page>
</template>

<script>
import DialogsComponent from '../../../components/Dialogs'
import SCategoryItem from '../../../components/services/SCategoryItem'
import ServiceDate from '../../../components/services/ServiceDate.vue'
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

export default {
  components: { SCategoryItem, ServiceDate, DialogsComponent },
  data () {
    return {
      route: 'master_request_services',
      states,
      isOpenStatute: false,
      statuteValue: 0,
      form: null,
      changeDateDlg: false,
      cancelServiceDlg: false
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
    openChangeRequestDate () {
      this.dateRequest = null
      this.changeDateDlg = true
    },
    async changeRequestDate (data) {
      await this.$api.put(`${this.route}/${this.form.id}/date/change`, data).then(res => {
        this.changeDateDlg = false
        this.getData()
      })
    },
    async cancelService () {
      const { id } = this.$route.params
      this.$q.loading.show()
      const res = await this.$api.delete(`${this.route}/${id}`)
      this.$q.loading.hide()
      if (res) {
        this.$router.push('/home')
        this.$q.notify({
          color: 'positive',
          message: 'Service canceled'
        })
      }
    },
    async getData () {
      this.$q.loading.show()
      const res = await this.$api.get(`${this.route}/${this.$route.params.id}`)
      this.$q.loading.hide()
      this.form = res
      this.statuteValue = res.state
      if (this.statuteValue === 2) {
        this.$router.push('/services/detail/' + this.$route.params.id + '/customer/calification')
      }
    },
    openChangeStatus () {
      this.isOpenStatute = !this.isOpenStatute
    },
    changeStatus (id) {
      this.statuteValue = id
      this.isOpenStatute = false
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
