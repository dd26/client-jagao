<template>
  <q-page style="background-color: #D9F2EE; border-radius: 25px 25px 0 0;">
    <section class="row q-px-lg q-pb-xl">

      <section class="row items-center q-px-lg q-pt-lg justify-between col-12">
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
          v-model="form.userName"
          placeholder="yourusername01"
          @blur="$v.form.userName.$touch()"
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

      <!-- <div class="col-12 row q-pt-lg">
        <div class="col-12 q-pl-lg">Country<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
        <q-select
          v-model="form.country_id"
          @blur="$v.form.country_id.$touch()"
          class="col-12"
          outlined
          bg-color="white"
          dense
          emit-value
          map-options
          label="Country"
          :options="countries"
        />
      </div> -->

      <div class="col-12 row q-pt-lg">
        <div class="col-12 q-pl-lg">City / Town<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
        <q-select
          v-model="form.city_id"
          @blur="$v.form.city_id.$touch()"
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
          @click="save"
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
import { date } from 'quasar'

export default {
  data () {
    return {
      form: {
        name: '',
        userName: '',
        birthDate: '',
        identification: '',
        phone: '',
        country_id: '',
        city_id: '',
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
        { label: 'United States', value: 1 }
      ],
      cities: [
        { label: 'City 1', value: 1 },
        { label: 'City 2', value: 2 }
      ]
    }
  },
  mounted () {
    this.getCities()
    this.profile.img = `${this.$api_url()}image/${this.$route.query.folder}/${this.$route.query.img_id}`
    this.getUserInfo()
    console.log(this.form, 'form')
  },
  methods: {
    async getCities () {
      await this.$api.get('cities').then(res => {
        this.cities = res.map(city => {
          return {
            label: city.name,
            value: city.id
          }
        })
      })
    },
    async save () {
      this.form.birthDate = this.birthdate
      this.$v.form.$touch()
      console.log(this.$v.form, 'invalid')
      if (this.$v.form.$invalid) {
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          message: 'Please fill all required fields'
        })
        return
      }
      this.form.birthDate = date.formatDate(this.form.birthDate, 'YYYY-MM-DD')
      const route = this.$route.query.folder + `/profile/${this.$route.params.id}`
      await this.$api.put(route, this.form).then(res => {
        this.$q.notify({
          color: 'positive',
          textColor: 'white',
          message: 'Profile updated'
        })
      })
      console.log(this.form, 'form')
    },
    async getUserInfo () {
      const user = await this.$getUserInfo()
      this.form.name = user.user.name
      this.form.userName = user.userName
      this.form.identification = user.identification
      this.form.phone = user.phone
      this.form.country_id = user.country_id
      this.form.city_id = user.city_id
      this.form.address = user.address

      this.birthdate = date.formatDate(user.birthDate, 'YYYY/MM/DD')
      this.formatDate()
    },
    clickProfileImg () {
      this.$refs.profileImgRef.$el.click()
    },
    onInputProfile () {
      console.log('files')
      this.profile.img = URL.createObjectURL(this.profile.file)
      const formData = new FormData()
      formData.append('image', this.profile.file)
      this.$api.post(`image/${this.$route.query.folder}/${this.$route.query.img_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res, 'res')
        if (res.success) {
          this.$q.notify({
            color: 'positive',
            textColor: 'white',
            message: 'Image updated'
          })
        }
        location.reload()
      })
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
        userName: { required },
        birthDate: { required },
        identification: { required },
        phone: { required },
        country_id: { required },
        city_id: { required },
        address: { required }
      }
    }
  }
}
</script>

<style>

</style>
