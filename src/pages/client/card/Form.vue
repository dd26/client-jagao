<template>
  <q-page>
    <div class="row q-pt-md q-px-md">
      <q-btn
        to="/home"
        dense
        flat
        size="11px"
        icon="img:vectors/back1.svg"
      />
      <q-space />
      <q-btn
        dense
        flat
        round
        size="15px"
        icon="img:vectors/tools1.svg"
      />
    </div>

    <div class="text-center text-primary" style="font-size: 25px; font-weight: 700;">Add a card</div>
    <section class="q-pa-lg">
      <q-card class="column card-style">
        <div class="col-7 row" style="position:relative">
          <img src="vectors/card3.svg" height="100%" class="img-card" >
          <div class="blur-bg text-white">
            Cards
          </div>
        </div>
        <div class="col-5 q-pa-md">
          <div class="row">
            <div class="col-12" style="font-weight: 400; font-size: 20px;"> {{ spacedCardNumber ? spacedCardNumber : '**** **** **** ****' }} </div>
            <div class="col-12" style="font-weight: 400; font-size: 20px;"> {{ form.expiredDate ? form.expiredDate : '**/**' }} </div>
          </div>
        </div>
      </q-card>
    </section>

    <section class="row q-pa-md q-px-lg">
      <div class="text-primary" style="font-weight: 700; font-size: 20px">Card Details</div>

      <div class="col-12 row q-pt-md">
        <div class="col-12 q-pb-sm">Name on card</div>
        <q-input
          v-model="form.name"
          dense
          class="col-12"
          bg-color="grey-3"
          placeholder="Name on card"
          outlined
          :error="$v.form.name.$error"
          @blur="$v.form.name.$touch()"
        />
      </div>

      <div class="col-12 row q-pt-md">
        <div class="col-12 q-pb-sm">Card number</div>
        <q-input
          v-model="form.cardNumber"
          dense
          class="col-12"
          bg-color="grey-3"
          maxlength="19"
          unmasked-value
          mask="#### #### #### ####"
          placeholder="1234 5678 9101 1112"
          outlined
          :error="$v.form.cardNumber.$error"
          @blur="$v.form.cardNumber.$touch()"
        />
      </div>

      <div class="col-12 row justify-between">
        <div class="col-5 row q-pt-md">
          <div class="col-12 q-pb-sm">Expiry date</div>
          <q-input
            v-model="form.expiredDate"
            dense
            class="col-12"
            bg-color="grey-3"
            placeholder="12/34"
            outlined
            :error="$v.form.expiredDate.$error"
            @blur="$v.form.expiredDate.$touch()"
          >
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-card class="row q-pa-md" style="min-width: 300px; border-radius: 8px">
                <div class="row col-6 q-px-xs">
                  <div class="col-12">Month</div>
                  <q-select
                    v-model="month"
                    dense
                    class="col-12"
                    :options="months"
                    outlined
                    emit-value
                    map-options
                  />
                </div>
                <div class="row col-6 q-px-xs">
                  <div class="col-12">Year</div>
                  <q-select
                    v-model="year"
                    dense
                    class="col-12"
                    :options="years"
                    outlined
                    emit-value
                    map-options
                  />
                </div>
                <div class="col-12 row justify-end q-pt-md q-pr-sm">
                  <q-btn
                    dense
                    flat
                    color="primary"
                    label="OK"
                    v-close-popup
                    @click="changeExpiredDate"
                  />
                </div>
              </q-card>
            </q-popup-proxy>
          </q-input>
        </div>

        <div class="col-5 row q-pt-md">
          <div class="col-12 q-pb-sm">Security code</div>
          <q-input
            v-model="form.securityCode"
            dense
            class="col-12"
            bg-color="grey-3"
            placeholder="123"
            outlined
            mask="###"
            :error="$v.form.securityCode.$error"
            @blur="$v.form.securityCode.$touch()"
          />
        </div>
      </div>

      <div class="col-12 row q-pt-md">
        <div class="col-12 q-pb-sm">Zip / Postal code</div>
        <q-input
          v-model="form.postalCode"
          dense
          class="col-12"
          bg-color="grey-3"
          placeholder="12345"
          outlined
          :error="$v.form.postalCode.$error"
          @blur="$v.form.postalCode.$touch()"
        />
      </div>

      <div class="col-12 row justify-center q-pt-lg">
        <q-btn
          @click="save"
          dense
          color="primary"
          icon="add"
          round
          size="xl"
        />
      </div>

    </section>
  </q-page>
</template>

<script>
import { FormMixin } from '../../../mixins/Form'
import { required } from 'vuelidate/lib/validators'

const validateDateCV = (value) => {
  if (!value) {
    return false
  }
  console.log(value, 'value2')
  const [month, year] = value.split('/')
  const year2 = '20' + year
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
  const currentYear = currentDate.getFullYear()
  return parseInt(year2) >= currentYear && (parseInt(year2) > currentYear || parseInt(month) >= currentMonth)
}

export default {
  mixins: [FormMixin],
  data () {
    return {
      form: {
        name: null,
        cardNumber: null,
        expiredDate: null,
        securityCode: null,
        postalCode: null
      },
      route: 'cards',
      month: null,
      year: null
    }
  },
  computed: {
    spacedCardNumber () {
      return this.form.cardNumber ? this.form.cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ') : ''
    },
    months () {
      const months = [
        { label: 'Enero', value: '01' }, { label: 'Febrero', value: '02' }, { label: 'Marzo', value: '03' },
        { label: 'Abril', value: '04' }, { label: 'Mayo', value: '05' }, { label: 'Junio', value: '06' },
        { label: 'Julio', value: '07' }, { label: 'Agosto', value: '08' }, { label: 'Septiembre', value: '09' },
        { label: 'Octubre', value: '10' }, { label: 'Noviembre', value: '11' }, { label: 'Diciembre', value: '12' }
      ]
      return months
    },
    years () {
      const years = []
      const currentYear = new Date().getFullYear()
      for (let i = currentYear; i <= currentYear + 78; i++) {
        years.push({
          value: i,
          label: i
        })
      }
      return years
    }
  },
  methods: {
    changeExpiredDate () {
      const month = this.month
      // quitar los dos primeros caracteres del año
      const year = this.year.toString().substr(2)
      this.form.expiredDate = `${month}/${year}`
    },
    afterSave () {
      this.$router.push('/success?message=You successfully added a card!')
    }
  },
  validations: {
    form: {
      name: { required },
      cardNumber: { required },
      expiredDate: { validateDateCV },
      securityCode: { required },
      postalCode: { required }
    }
  }
}
</script>

<style lang="scss" scoped>

.card-style {
  height: 200px;
  border-radius: 12px;
  box-shadow: 0px 8px 11px 0px #0000001F;
}
.img-card {
  object-fit: cover;
  width: 100%;
  border-radius: 12px 12px 0 0;
}

.blur-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #A8E4FF 24.48%, rgba(168, 228, 255, 0.696552) 69.27%, rgba(168, 228, 255, 0) 100%);
  border-radius: 12px 12px 0 0;
  font-weight: 700;
  font-size: 20px;
  padding: 15px;
}

</style>
