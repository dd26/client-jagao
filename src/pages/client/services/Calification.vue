<template>
  <q-page class="q-pb-xl">
    <div class="col-12 row q-pa-md q-pt-xl q-px-lg">
      <q-btn
        icon="arrow_back_ios"
        round
        color="secondary"
        size="sm"
        flat
        @click="$router.push('/services/susuccessful/customer')"
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
        <div class="col-12 text-center">Finished</div>
        <div class="badge-style" :style="`background-color: rgb(0, 167, 142)`"></div>
      </section>
    </section>

    <section class="row q-px-lg q-pt-lg" v-if="form && form.user">
      <section class="col-3">
        <q-avatar size="85px">
          <img :src="$api_url() + 'image/specialists/' + form.customer.id" alt="employee_img" />
        </q-avatar>
      </section>
      <section class="col-8 row q-pl-md">

        <section class="col-12 row">
          <div class="col-12 text-bold text-primary" style="font-size: 16px"> {{ form.user.name }} </div>
          <div style="color: #5C5C5C; font-size: 14px; font-weight: 500;">Employee</div>
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

    <section class="row q-px-lg q-pt-lg">
      <div class="text-bold text-primary text-center col-12" style="font-size: 25px;">What did you think of the service?</div>

      <section class="col-12 flex flex-center">
        <q-rating
          v-model="calification.rating"
          size="3.5em"
          color="primary"
          icon="star_border"
          icon-selected="star"
        />
      </section>

      <section class="col-12 row">
        <div
          class="col-12 q-pb-sm q-pt-md q-pl-sm"
          style="font-size: 16px; font-weight: 400;"
        >Comments</div>
        <q-input
          v-model="calification.comment"
          type="textarea"
          borderless
          class="text-input-area col-12"
          input-style="padding: 15px 15px; color: #00A58D"
        />
      </section>

      <section v-if="!isCalifiqued" class="col-12 flex flex-center row q-pt-md">
        <q-btn
          @click="sendCalification"
          label="Rate"
          color="primary"
          class="col-6"
          style="border-radius: 8px; height: 40px"
          unelevated
          no-caps
        />
      </section>
    </section>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: null,
      route: 'master_request_services',
      calification: {
        rating: 0,
        comment: null
      },
      isCalifiqued: false
    }
  },
  mounted () {
    this.getData()
    this.getCalification()
  },
  methods: {
    async getCalification () {
      const response = await this.$api.get(`/califications/${this.$route.params.id}`)
      if (response && response.rating > 0) {
        this.calification = response
        this.isCalifiqued = true
      }
    },
    async sendCalification () {
      if (this.calification.rating === 0) {
        this.$q.notify({
          color: 'negative',
          message: 'Please rate the service'
        })
        return
      }
      this.$q.loading.show()
      await this.$api.post('califications/' + this.$route.params.id, this.calification).then(res => {
        this.$q.loading.hide()
        this.$q.notify({
          color: 'positive',
          message: 'Calification sent'
        })
        this.isCalifiqued = true
      })
    },
    async getData () {
      this.$q.loading.show()
      const res = await this.$api.get(`${this.route}/${this.$route.params.id}`)
      this.$q.loading.hide()
      this.form = res
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

.text-input-area {
  background-color: #F1F1F1;
  border-radius: 8px;
}
</style>
