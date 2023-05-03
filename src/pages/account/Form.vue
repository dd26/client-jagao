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
          v-model="accountType"
          val="check"
          label="Checks"
          class="col-12"
          keep-color
          color="primary"
        />
        <q-radio
          v-model="accountType"
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
        >
          {{ id ? 'Update' : 'Add' }}
        </div>
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
        accountType: 'check',
        routeNumber: null,
        accountNumber: null,
        fullName: null
      },
      accountType: 'check',
      banks: [
        { label: 'Select a bank', value: 0 },
        { label: 'Bank of America', value: 1 },
        { label: 'Wells Fargo', value: 2 },
        { label: 'JPMorgan Chase Bank', value: 3 },
        { label: 'Truist Bank', value: 4 },
        { label: 'Regions Bank', value: 5 },
        { label: 'TD Bank', value: 6 },
        { label: 'PNC Bank', value: 7 },
        { label: 'Fifth Third Bank', value: 8 },
        { label: 'Synovus Bank', value: 9 },
        { label: 'Citibank', value: 10 }

      ],
      route: 'banks',
      id: this.$route.params.id
    }
  },
  methods: {
    afterSave () {
      if (this.id) {
        this.$router.push('/success?message=You successfully updated a bank account!')
        return
      }
      this.$router.push('/success?message=You successfully added a bank account!')
    },
    afterGetRecord (data) {
      this.form.bank = data.exterior_bank_id
      this.form.accountType = data.account_type
      this.form.routeNumber = data.route_number
      this.form.accountNumber = data.account_number
      this.form.fullName = data.full_name

      this.accountType = data.account_type
    },
    beforeValidate () {
      this.form.accountType = this.accountType
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
