<template>
  <section class="row">
    <div class="text-primary text-bold col-12" style="font-size: 20px">Add new card</div>

    <section class="col-12 row q-pt-md q-gutter-y-md">

      <div class="col-12 row">
        <div class="text-primary col-12" style="font-size: 20px">Card number</div>
        <div class="col-12 row">
          <q-input
            v-model="form.cardNumber"
            dense
            flat
            round
            size="15px"
            placeholder="1234 5678 9012 3456"
            input-style="color: #00A58D"
            maxlength="19"
            unmasked-value
            mask="#### #### #### ####"
            class="col-12 q-mt-sm style-input"
            borderless
            :error="$v.form.cardNumber.$error"
            @blur="$v.form.cardNumber.$touch()"
          />
        </div>
      </div>

      <div class="col-12 row">
        <div class="text-primary col-12" style="font-size: 20px">Card name</div>
        <div class="col-12 row">
          <q-input
            v-model="form.name"
            dense
            flat
            round
            size="15px"
            placeholder="Jhon Doe Rodriguez"
            input-style="color: #00A58D"
            class="col-12 q-mt-sm style-input"
            borderless
            :error="$v.form.name.$error"
            @blur="$v.form.name.$touch()"
          />
        </div>
      </div>

      <section class="col-12 row justify-between">
        <div class="col-3 row">
          <div class="text-primary col-12" style="font-size: 20px">CVV</div>
          <div class="col-12 row">
            <q-input
              v-model="form.securityCode"
              dense
              flat
              round
              size="15px"
              placeholder="123"
              mask="###"
              input-style="color: #00A58D; text-align: center"
              class="col-12 q-mt-sm style-input"
              borderless
              :error="$v.form.securityCode.$error"
              @blur="$v.form.securityCode.$touch()"
            />
          </div>
        </div>

        <div class="col-4 row">
          <div class="text-primary col-12" style="font-size: 20px">Date</div>
          <div class="col-12 row">
            <q-input
              v-model="form.expiredDate"
              dense
              flat
              round
              size="15px"
              placeholder="09/23"
              input-style="color: #00A58D; text-align: center"
              class="col-12 q-mt-sm style-input"
              borderless
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
        </div>
      </section>
    </section>

    <section class="col-12 row justify-around q-pt-md">
      <div class="row col-6 q-pr-sm">
        <q-btn
          label="Add"
          class="q-mt-md col-12"
          style="height: 40px;border-radius: 8px;border: 1px solid #00A58D; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);"
          no-caps
          flat
          color="primary"
          @click="save"
        />
      </div>
      <div class="row col-6 q-pl-sm">
        <q-btn
          label="Cancel"
          class="q-mt-md col-12"
          style="height: 40px;border-radius: 8px;"
          no-caps
          unelevated
          color="negative"
          @click="$emit('cancelAddCard')"
        />
      </div>
    </section>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { FormMixin } from '../../../mixins/Form'
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
        securityCode: null
      },
      month: null,
      year: null,
      route: 'cards'
    }
  },
  computed: {
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
    afterSave (data) {
      this.$emit('addedCard', data)
    },
    changeExpiredDate () {
      const month = this.month
      const year = this.year.toString().substr(2)
      this.form.expiredDate = `${month}/${year}`
    }
  },
  validations: {
    form: {
      name: { required },
      cardNumber: { required },
      expiredDate: { validateDateCV },
      securityCode: { required }
    }
  }
}
</script>

<style lang="scss" scoped>
.style-btn {
  background: #00A78E;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.34);
  border-radius: 8px;
  height: 40px;
}

</style>
