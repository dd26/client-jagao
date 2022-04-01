<template>
  <q-page style="background-color: #D9F2EE; border-radius: 25px 25px 0 0;">
    <section class="row q-px-lg q-pb-xl">

      <section class="column items-start q-px-lg q-pt-lg">
        <q-btn
          @click="$router.go(-1)"
          icon="arrow_back_ios"
          flat
          rounded
          dense
          color="secondary"
        />
        <div class="text-bold text-primary text-subtitle1" style="font-size: 20px">Edit Profile</div>
      </section>
      <div class="col-12 row q-pa-md q-col-gutter-y-sm q-pt-xl">
        <div class="col-12 row justify-center">
          <q-file
              ref="profileImgRef"
              accept="image/*"
              @input="onInputProfile"
              style="display: none;"
              v-model="profile.file"
            />
            <section
              class="img-profile-container row items-center justify-center"
              style="position: relative;"
            >
              <q-avatar size="150px">
                <img :src="profile.img" width="100%" height="100%" />
              </q-avatar>
              <q-btn
                @click="clickProfileImg"
                class="absolute-bottom-right"
                flat
                color="primary"
                icon="img:vectors/edit1.svg"
                size="lg"
                round
                dense
              />
            </section>
            <!-- <section v-else style="position: relative;">
              <q-avatar size="150px">
                <img :src="profile.img" width="100%" height="100%" />
              </q-avatar>
              <q-btn
                @click="clickProfileImg"
                class="absolute-bottom-right"
                flat
                color="primary"
                icon="img:vectors/edit1.svg"
                size="lg"
                round
                dense
              />
            </section> -->
          <div class="col-12 row">
            <q-field
              borderless
              v-model="form.name"
              class="col-12"
            >
              <template v-slot:control="{ id, value, emitValue }">
                <input
                  :id="id"
                  class="q-field__input text-center text-bold text-primary input-field-style"
                  :value="value"
                  @change="e => emitValue(e.target.value)"
                  @focus="focusName = true"
                  @blur="focusName = false"
                >
                <div style="position: absolute" class="row justify-center fit items-center" v-if="!focusName && !form.name">
                  <div class="col-12 justify-center items-center row">
                    <div class="text-bold text-primary">Your Name</div>
                  </div>
                </div>
                <div style="position: absolute" class="row justify-center fit items-center">
                  <div class="col-7 justify-end items-start row q-pb-lg">
                    <q-icon name="img:vectors/edit2.svg" />
                    <div class="text-bold text-negative" style="font-size: 20px;">*</div>
                  </div>
                </div>
              </template>
            </q-field>
          </div>
        </div>
      </div>

      <div class="col-12 row">
        <div class="col-12 q-pl-lg">User Name <b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
        <q-input
          v-model="form.username"
          placeholder="yourusername01"
          @blur="$v.form.username.$touch()"
          class="col-12"
          outlined
          bg-color="white"
          dense
        />
      </div>

      <div class="col-12 row q-pt-lg">
        <div class="col-12 q-pl-lg">Birth Date <b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
        <div class="col-12 row justify-left q-gutter-x-md">
          <q-input
            class="col-3"
            v-model="birthdateFormat.day"
            outlined
            bg-color="white"
            dense
            placeholder="00"
            @blur="formatDate"
          >
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="birthdate">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-input>
          <q-input
            class="col-3"
            v-model="birthdateFormat.month"
            outlined
            bg-color="white"
            dense
            placeholder="00"
            @blur="formatDate"
          >
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="birthdate">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-input>
          <q-input
            class="col-3"
            v-model="birthdateFormat.year"
            outlined
            bg-color="white"
            dense
            placeholder="00"
            @blur="formatDate"
          >
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="birthdate">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-input>
        </div>
      </div>

      <div class="col-12 row q-pt-lg">
        <div class="col-12 q-pl-lg">ID <b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
        <q-input
          v-model="form.identification"
          placeholder="ID"
          @blur="$v.form.identification.$touch()"
          class="col-12"
          outlined
          bg-color="white"
          dense
        />
      </div>

      <div class="col-12 row q-pt-lg">
        <div class="col-12 q-pl-lg">Phone<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
        <q-input
          v-model="form.phone"
          placeholder="Phone"
          @blur="$v.form.phone.$touch()"
          class="col-12"
          outlined
          bg-color="white"
          dense
        />
      </div>

      <div class="col-12 row q-pt-lg">
        <div class="col-12 q-pl-lg">Country<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
        <q-select
          v-model="form.country"
          @blur="$v.form.country.$touch()"
          class="col-12"
          outlined
          bg-color="white"
          dense
          emit-value
          map-options
          label="Country"
          :options="countries"
        />
      </div>

      <div class="col-12 row q-pt-lg">
        <div class="col-12 q-pl-lg">City / Town<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
        <q-select
          v-model="form.city"
          @blur="$v.form.city.$touch()"
          class="col-12"
          outlined
          bg-color="white"
          dense
          emit-value
          map-options
          label="City"
          :options="cities"
        />
      </div>

      <div class="col-12 row q-pt-lg">
        <div class="col-12 q-pl-lg">Address<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
        <q-input
          v-model="form.address"
          @blur="$v.form.address.$touch()"
          class="col-12"
          outlined
          type="textarea"
          bg-color="white"
          dense
          placeholder="Your Adress #1-02"
        />
      </div>

      <div class="col-12 row justify-center q-pt-lg">
        <q-btn
          icon="save"
          round
          color="primary"
          size="xl"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      form: {
        name: '',
        username: '',
        birthdate: '',
        identification: '',
        phone: '',
        country: '',
        city: '',
        address: ''
      },
      focusName: false,
      profile: {
        file: null,
        img: null
      },
      birthdate: null,
      birthdateFormat: {
        day: '',
        month: '',
        year: ''
      },
      countries: [
        { label: 'Country 1', value: 1 },
        { label: 'Country 2', value: 2 },
        { label: 'Country 3', value: 3 }
      ],
      cities: [
        { label: 'City 1', value: 1 },
        { label: 'City 2', value: 2 },
        { label: 'City 3', value: 3 }
      ]
    }
  },
  mounted () {
    this.profile.img = `${this.$api_url()}image/${this.$route.query.folder}/${this.$route.query.img_id}`
  },
  methods: {
    clickProfileImg () {
      this.$refs.profileImgRef.$el.click()
    },
    onInputProfile () {
      this.profile.img = URL.createObjectURL(this.profile.file)
    },
    formatDate () {
      const date = this.birthdate.split('/')
      const month = date[1]
      const day = date[2]
      const year = date[0]
      this.birthdateFormat = {
        month, day, year
      }
    }
  },
  validations () {
    return {
      form: {
        name: { required },
        username: { required },
        birthdate: { required },
        identification: { required },
        phone: { required },
        country: { required },
        city: { required },
        address: { required }
      }
    }
  }
}
</script>

<style>

</style>
