<template>
  <section class="column fit">

    <q-scroll-area class="fit q-pb-xl">

      <section class="column items-start q-px-lg q-pt-lg">
        <q-btn
          @click="$emit('prevStep')"
          icon="arrow_back_ios"
          flat
          rounded
          dense
          color="secondary"
        />
        <div class="text-bold text-primary text-subtitle1" style="font-size: 20px">Create your profile</div>
      </section>

      <section class="row q-pt-lg q-px-md">
        <div class="col-12 row q-pa-md q-col-gutter-y-sm">
          <div class="col-12 row justify-center">
            <q-file
              ref="profileImgRef"
              accept="image/*"
              @input="onInputProfile"
              style="display: none;"
              v-model="profile.file"
            />
            <!--section
              v-if="!profile.file"
              class="img-profile-container row items-center justify-center"
              style="position: relative;"
              :style="`${$v.stateForm.profileImg.$error ? 'border: 1px solid #C10015' : ''}`"
            >
              <div class="text-negative text-bold absolute-top-right" style="font-weight: 700; font-size: 20px;">*</div>
              <q-icon name="person" color="accent" size="110px" />
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
            <section v-else style="position: relative;">
              <div class="text-negative text-bold absolute-top-right" style="font-weight: 700; font-size: 20px;">*</div>
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
            </section>-->
          </div>
        </div>

        <div class="col-12 row">
          <div class="col-12 q-pl-lg">Your Name<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
          <q-input
            v-model="stateForm.name"
            placeholder="your name"
            class="col-12 q-pb-md"
            outlined
            bg-color="white"
            dense
            @blur="$v.stateForm.name.$touch()"
            :error="$v.stateForm.name.$error"
          />
        </div>

        <div class="col-12 row">
          <div class="col-12 q-pl-lg">User Name <b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
          <q-input
            v-model="stateForm.username"
            placeholder="yourusername01"
            @blur="$v.stateForm.username.$touch()"
            :error="$v.stateForm.username.$error"
            class="col-12"
            outlined
            bg-color="white"
            dense
          />
        </div>

        <div class="col-12 row q-pl-xs">
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
              :error="$v.birthdate.$error"
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
              :error="$v.birthdate.$error"
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
              :error="$v.birthdate.$error"
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

        <div class="col-12 row q-pt-sm">
          <div class="col-12 q-pl-lg">ID <b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
          <q-input
            v-model="stateForm.identification"
            placeholder="ID"
            @blur="$v.stateForm.identification.$touch()"
            :error="$v.stateForm.identification.$error"
            class="col-12"
            outlined
            bg-color="white"
            dense
          />
        </div>

        <div class="col-12 row">
          <div class="col-12 q-pl-lg">Phone<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
          <q-input
            v-model="stateForm.phone"
            placeholder="Phone"
            @blur="$v.stateForm.phone.$touch()"
            :error="$v.stateForm.phone.$error"
            class="col-12"
            outlined
            bg-color="white"
            dense
          />
        </div>

        <div class="col-12 row">
          <div class="col-12 q-pl-lg">Country<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
          <q-select
            v-model="stateForm.country"
            @blur="$v.stateForm.country.$touch()"
            :error="$v.stateForm.country.$error"
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

        <div class="col-12 row">
          <div class="col-12 q-pl-lg">City / Town<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
          <q-select
            v-model="stateForm.city"
            @blur="$v.stateForm.city.$touch()"
            :error="$v.stateForm.city.$error"
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

        <div class="col-12 row">
          <div class="col-12 q-pl-lg">Address<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
          <q-input
            v-model="stateForm.address"
            @blur="$v.stateForm.address.$touch()"
            :error="$v.stateForm.address.$error"
            class="col-12"
            outlined
            type="textarea"
            bg-color="white"
            dense
            placeholder="Your Adress #1-02"
          />
        </div>

        <div class="col-12 row">
          <div class="col-12 q-pl-lg">ZIP Code<b class="text-bold text-negative" style="font-size: 20px;">*</b> </div>
          <q-input
            v-model="stateForm.zip_code"
            @blur="$v.stateForm.zip_code.$touch()"
            :error="$v.stateForm.zip_code.$error"
            class="col-12"
            outlined
            bg-color="white"
            dense
            placeholder="Your ZIP Code"
          />
        </div>

        <!-- <section class="col-12 q-px-md row">
          <div class="q-pt-md text-bold text-primary" style="font-size:20px; font-weight: 700;">Important</div>
        </section>

        <section class="col-12 row q-px-md" v-if="form.isEmployee">
          <div class="q-pt-md text-bold text-primary" style="font-size:20px; font-weight: 700;">Attach your CV here</div>
          <div
            class="col-12 text-negative text-caption q-pb-md"
            v-if="$v.stateForm.profileImg.$error"
          >Your cv is required!</div>
          <div
            @click="clickEmployeeFile"
            class="col-12 container-upload-file-employee bg-primary row"
          >
            <div class="col-2 row items-center justify-center">
              <q-icon name="img:vectors/attach1.svg" size="20px" />
            </div>
            <div class="col-10 row justify-start items-center container-name-file-employee">
              <div class="q-pl-md" style="font-size: 16px;font-weight: 300;color: #B3B3B3">
                {{ emploFile ? subCadena(emploFile.name, 19) : 'Attach your CV' }}
              </div>
            </div>
            <q-file
              ref="emploFilePDF"
              accept="application/pdf"
              style="display: none;"
              v-model="emploFile"
            />
          </div>
        </section>

        <section class="col-12 row q-px-md">
          <div class="q-pt-md text-bold text-primary" style="font-size:20px; font-weight: 700;">Attach your ID here</div>
          <div
            class="col-12 text-negative text-caption q-pb-md"
            v-if="$v.stateForm.profileImg.$error"
          >Your ID is required</div>
          <div
            @click="clickIDFile"
            class="col-12 container-upload-file-employee bg-primary row"
          >
            <div class="col-2 row items-center justify-center">
              <q-icon name="img:vectors/attach1.svg" size="20px" />
            </div>
            <div class="col-10 row justify-start items-center container-name-file-employee">
              <div class="q-pl-md" style="font-size: 16px;font-weight: 300;color: #B3B3B3">
                {{ IDFile ? subCadena(IDFile.name, 19) : 'Attach your ID' }}
              </div>
            </div>
            <q-file
              ref="IDFileRF"
              accept=".jpg, image/*"
              style="display: none;"
              v-model="IDFile"
            />
          </div>
        </section>

        <div class="col-12 text-center q-pt-lg" style="font-weight: 400; font-size: 16px; line-height: 20px">When all your information has been validated you can use our tools to get the services!</div>

        <div class="col-12 text-center q-pt-md text-primary" style="font-size: 16px; font-weight: 500; line-height: 20px">You will receive a notification when your profile is validated.</div>

        <div class="col-12 text-center q-pt-md" style="color: #A1A1A1; font-size: 12px; font-weight: 400;">Privacy Policy</div>
-->
        <div class="btn-progress-container col-12 row justify-center items-center q-pt-xl">
          <q-btn
            @click="nextStep"
            icon="arrow_forward"
            round
            class="btn-progress"
            size="lg"
            color="primary"
          />
          <q-circular-progress
            size="80px"
            :indeterminate="isLoading"
            color="primary"
            :thickness="0.07"
          />
        </div>
      </section>

    </q-scroll-area>

    <!--
    <div class="col-3 column items-center">
      <div class="btn-progress-container row justify-center items-center">
        <q-btn
          @click="nextStep"
          icon="arrow_forward"
          round
          class="btn-progress"
          size="lg"
          color="primary"
        />
        <q-circular-progress
          size="80px"
          :value="progressVal"
          color="primary"
          :thickness="0.07"
        />
      </div>
    </div>
     -->

  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  props: ['progressValue', 'form'],
  data () {
    return {
      stateForm: {
        name: '',
        username: '',
        birthdate: '',
        identification: '',
        phone: '',
        country: 1,
        city: '',
        address: '',
        discountCoupon: '',
        profileImg: null
      },
      isPwd: false,
      progressVal: 0,
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
      ],
      emploFile: null,
      IDFile: null,
      isLoading: false
    }
  },
  mounted () {
    // this.$v.$touch()
    // this.progressVal = this.progressValue
    this.getCities()
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
    async nextStep () {
      this.stateForm.profileImg = this.profile.file
      this.stateForm.birthdate = this.birthdate
      console.log(this.$v.stateForm)
      this.$v.$touch()
      this.$v.stateForm.$touch()
      if (this.$v.stateForm.$invalid) {
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          message: 'Please fill all the required fields'
        })
        return
      }

      /* this.stateForm.fileID = this.IDFile ? this.IDFile : null
      this.stateForm.fileEmployee = this.emploFile ? this.emploFile : null */

      console.log(this.stateForm, 'stateForm', this.form, 'this form')
      delete this.form.name
      const form = {
        ...this.form,
        ...this.stateForm
      }
      // this.$emit('nextStep', this.stateForm)
      if (this.form.isEmployee) {
        this.$emit('nextStep', this.stateForm)
        return
      }
      console.log(form, 'form')
      this.isLoading = true
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('userName', form.username)
      formData.append('email', form.email)
      formData.append('password', form.password)
      formData.append('birthDate', form.birthdate)
      formData.append('identification', form.identification)
      formData.append('phone', form.phone)
      formData.append('country', form.country)
      formData.append('city', form.city)
      formData.append('address', form.address)
      formData.append('zip_code', form.zip_code)
      formData.append('discountCoupon', form.discountCoupon)
      formData.append('isEmployee', form.isEmployee)
      // formData.append('profileImg', form.profileImg)

      await this.$api.post('users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        this.isLoading = false
        if (res) {
          this.$emit('nextStep', this.stateForm)
        }
      })
    },
    subCadena (cadena, longitud) {
      if (cadena.length > longitud) {
        return cadena.substring(0, longitud) + '...'
      } else {
        return cadena
      }
    },
    clickEmployeeFile () {
      this.$refs.emploFilePDF.$el.click()
    },
    clickIDFile () {
      this.$refs.IDFileRF.$el.click()
    },
    formatDate () {
      const date = this.birthdate.split('/')
      const month = date[1]
      const day = date[2]
      const year = date[0]
      this.birthdateFormat = {
        month, day, year
      }
      console.log(this.birthdateFormat)
    },
    clickProfileImg () {
      this.$refs.profileImgRef.$el.click()
    },
    onInputProfile () {
      this.profile.img = URL.createObjectURL(this.profile.file)
    }
  },
  validations () {
    return {
      birthdate: {
        required
      },
      stateForm: {
        name: {
          required
        },
        username: {
          required
        },
        birthdate: {
          required
        },
        identification: {
          required
        },
        phone: {
          required
        },
        country: {
          required
        },
        city: {
          required
        },
        address: {
          required
        },
        zip_code: {
          required
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

.container-name-file-employee {
  border: 4px solid $primary;
  padding: 5px;
  border-radius: 8px;
  background-color: #D9F2EE;
}

.container-upload-file-employee {
  cursor: pointer;
  border-radius: 8px;
  height: 60px;
  position: relative;
}
.img-profile-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #FFF;
}
.btn-progress {
  position: absolute;
  z-index: 1;
}

.btn-progress-container {
  position: relative;
}

</style>
