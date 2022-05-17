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
          bg-color="grey-3"
          dense
          outlined
          emit-value
          map-options
          :error="$v.form.bank.$error"
          @blur="$v.form.bank.$touch()"
        />
      </div>

      <div class="col-12 row">
        <div class="col-12">Account type</div>
        <div
          v-if="$v.form.accountType.$error"
          class="col-12 text-caption text-negative"
        >Select account type</div>
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
          bg-color="grey-3"
          dense
          outlined
          :error="$v.form.routeNumber.$error"
          @blur="$v.form.routeNumber.$touch()"
        />
      </div>

      <div class="col-12 row">
        <div class="col-12 q-pl-md q-pb-sm">Account number</div>
        <q-input
          v-model="form.accountNumber"
          class="col-12"
          placeholder="1234 5678 9101 1213"
          bg-color="grey-3"
          dense
          outlined
          :error="$v.form.accountNumber.$error"
          @blur="$v.form.accountNumber.$touch()"
        />
      </div>

      <div class="col-12 row">
        <div class="col-12 q-pl-md q-pb-sm">Full name</div>
        <q-input
          v-model="form.fullName"
          class="col-12"
          placeholder="Your Full Name"
          bg-color="grey-3"
          dense
          outlined
          :error="$v.form.fullName.$error"
          @blur="$v.form.fullName.$touch()"
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
        <div
          class="col-12 text-center text-primary q-pt-sm"
          style="font-size: 20px; font-weight: 700;"
        >Add</div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { FormMixin } from '../../mixins/Form'
import { required } from 'vuelidate/lib/validators'
export default {
  mixins: [FormMixin],
  data () {
    return {
      form: {
        bank: 0,
        accountType: null,
        routeNumber: null,
        accountNumber: null,
        fullName: null
      },
      banks: [
        { label: 'Select a bank', value: 0 },
        { label: 'Bank 1', value: 1 },
        { label: 'Bank 2', value: 2 },
        { label: 'Bank 3', value: 3 },
        { label: 'Bank 4', value: 4 },
        { label: 'Bank 5', value: 5 },
        { label: 'Bank 6', value: 6 }
      ],
      route: 'banks'
    }
  },
  methods: {
    afterSave () {
      console.log('afterSave')
      this.$router.push('/success?message=You successfully added a bank account!')
    }
  },
  validations: {
    form: {
      bank: { required },
      accountType: { required },
      routeNumber: { required },
      accountNumber: { required },
      fullName: { required }
    }
  }
}
</script>

<style>

</style>
