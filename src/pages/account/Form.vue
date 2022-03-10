<template>
  <q-page>
    <div class="q-pa-md">
      <q-btn
        color="secondary"
        icon="arrow_back_ios"
        round
        flat
        size="15px"
        to="/accounts"
      />
    </div>

    <div class="q-px-lg text-primary" style="font-size: 20px; font-weight: 700;">Register new account</div>

    <section class="row q-pa-lg q-gutter-y-lg">

      <div class="col-12 row">
        <div class="col-12 q-pl-md q-pb-sm">Bank</div>
        <q-select
          v-model="form.bank"
          :options="banks"
          class="col-12"
          style="background-color: #EDEDED;"
          dense
          outlined
        />
      </div>

      <div class="col-12 row">
        <div class="col-12">Account type</div>
        <q-radio
          v-model="form.accountType"
          val="check"
          label="Checks"
          class="col-12"
          keep-color
          color="primary"
        />
        <q-radio
          v-model="form.accountType"
          val="saving"
          label="Saving"
          class="col-12"
          keep-color
          color="primary"
        />
      </div>

      <div class="col-12 row">
        <div class="col-12 q-pl-md q-pb-sm">Route number</div>
        <q-input
          v-model="form.routeNumber"
          class="col-12"
          placeholder="123456789"
          style="background-color: #EDEDED;"
          dense
          outlined
        />
      </div>

      <div class="col-12 row">
        <div class="col-12 q-pl-md q-pb-sm">Account number</div>
        <q-input
          v-model="form.accountNumber"
          class="col-12"
          placeholder="1234 5678 9101 1213"
          style="background-color: #EDEDED;"
          dense
          outlined
        />
      </div>

      <div class="col-12 row">
        <div class="col-12 q-pl-md q-pb-sm">Full name</div>
        <q-input
          v-model="form.fullName"
          class="col-12"
          placeholder="Your Full Name"
          style="background-color: #EDEDED;"
          dense
          outlined
        />
      </div>

      <div class="col-12 row justify-center q-pt-lg">
        <q-btn
          color="primary"
          icon="add"
          round
          size="lg"
          @click="save"
        />
        <div class="col-12 text-center text-primary q-pt-sm" style="font-size: 20px; font-weight: 700;">Add</div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        bank: '',
        accountType: null,
        routeNumber: '',
        accountNumber: '',
        fullName: ''
      },
      banks: [
        { label: 'Bank 1', value: 1 },
        { label: 'Bank 2', value: 2 },
        { label: 'Bank 3', value: 3 },
        { label: 'Bank 4', value: 4 },
        { label: 'Bank 5', value: 5 },
        { label: 'Bank 6', value: 6 }
      ]
    }
  },
  methods: {
    save () {
      console.log(this.form)
      this.$router.push('/success?message=You successfully added a bank account!')
    }
  }
}
</script>

<style>

</style>
