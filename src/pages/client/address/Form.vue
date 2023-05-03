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
          option-label="name"
          option-value="id"
          map-options
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

      <div class="col-12 row q-pt-md">
        <div class="col-12">Upload an image (Optional)</div>
        <q-file
          v-model="addressImage"
          outlined
          dense
          label="click here to upload an image"
          accept="image/*"
          class="col-12 q-pt-xs"
          bg-color="grey-3"
        />
      </div>

      <div class="col-12 q-pt-md">
        <p>
          <span class="text-primary">Note:</span> You must select your address on the map
        </p>
        <q-btn
          icon="place"
          :label="coordinates ? 'Change Location' : 'Select Location'"
          @click="showMapDlg = true"
          color="primary"
          :outline="coordinates !== null"
        />
      </div>

      <q-dialog
        v-model="showMapDlg"
        persistent
        maximized
        full-screen
      >
        <q-card
          class="bg-white"
        >
          <q-btn
            style="position: absolute; top: 10px; right: 10px; z-index: 9999;"
            @click="showMapDlg = false, coordinates = null"
            color="negative"
            icon="close"
          />
          <GoogleMapView
            v-model="coordinates"
          />
          <q-btn
            style="position: absolute; bottom: 25px; right: 10px; z-index: 9999;"
            @click="showMapDlg = false"
            color="primary"
            icon="check"
            label="Confirm Location"
          />
        </q-card>
      </q-dialog>

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
import GoogleMapView from 'src/components/googleMaps/GoogleMapView.vue'

export default {
  mixins: [FormMixin],
  components: {
    GoogleMapView
  },
  data () {
    return {
      form: {
        name: null,
        city_id: null,
        address: null,
        postalCode: null,
        latitude: null,
        longitude: null
      },
      route: 'addresses',
      formData: true,
      cities: [],
      addressImage: null,
      showMapDlg: false,
      coordinates: null
    }
  },
  mounted () {
    this.getCities()
  },
  methods: {
    beforeValidate () {
      if (this.addressImage) {
        this.form.image = this.addressImage
        this.form.latitude = this.coordinates.lat
        this.form.longitude = this.coordinates.lng
      }
    },
    afterSave () {
      this.$router.push('/success?message=You successfully added an address!')
    },
    async getCities () {
      const res = await this.$api.get('cities')
      this.cities = res
    }
  },
  validations: {
    form: {
      name: { required },
      city_id: { required },
      address: { required },
      postalCode: { required },
      latitude: { required },
      longitude: { required }
    },
    coordinates: { required }
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
