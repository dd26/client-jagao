<template>
  <q-page>
    <div class="row q-px-md q-pt-md">
      <q-btn
        @click="$router.go(-1)"
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

    <div class="text-center text-primary" style="font-size: 25px; font-weight: 700;">Add an Address</div>
    <section class="q-pa-lg">
      <img src="vectors/illustration1.svg">
    </section>

    <section class="row q-pa-md q-px-lg">

      <div class="col-12 row q-pt-md">
        <div class="col-12 q-pb-sm">Name</div>
        <q-input
          v-model="form.name"
          dense
          class="col-12"
          bg-color="grey-3"
          placeholder="Mom’s House"
          outlined
          :error="$v.form.name.$error"
          @blur="$v.form.name.$touch()"
        />
      </div>

      <div class="col-12 row q-pt-md">
        <div class="col-12 q-pb-sm">City / Town</div>
        <q-select
          v-model="form.city_id"
          dense
          :options="cities"
          class="col-12"
          bg-color="grey-3"
          placeholder="1234 5678 9101 1112"
          outlined
          map-options
          option-value="value"
          option-label="name"
          emit-value
          :error="$v.form.city_id.$error"
          @blur="$v.form.city_id.$touch()"
        />
      </div>

      <div class="col-12 row justify-between">
        <div class="col-12 row q-pt-md">
          <div class="col-12 q-pb-sm">Address</div>
          <q-input
            v-model="form.address"
            dense
            class="col-12"
            bg-color="grey-3"
            placeholder="Your Adress #1-02"
            outlined
            type="textarea"
            :error="$v.form.address.$error"
            @blur="$v.form.address.$touch()"
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
export default {
  mixins: [FormMixin],
  data () {
    return {
      form: {
        name: null,
        city_id: null,
        address: null,
        postalCode: null
      },
      route: 'addresses',
      cities: [
        { name: 'New York', value: 'NY' },
        { name: 'Rome', value: 'RM' },
        { name: 'London', value: 'LDN' },
        { name: 'Istanbul', value: 'IST' },
        { name: 'Paris', value: 'PRS' }
      ]
    }
  },
  methods: {
    beforeValidate () {
      console.log('beforeValidate', this.form)
    },
    afterSave () {
      console.log('afterSave')
      this.$router.push('/success?message=You successfully added an address!')
    }
  },
  validations: {
    form: {
      name: { required },
      city_id: { required },
      address: { required },
      postalCode: { required }
    }
  }
}
</script>

<style lang="scss" scoped>

.q-tab-panel {
  border-radius: 12px 12px 0 0;
  padding: 0 !important;
}

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
