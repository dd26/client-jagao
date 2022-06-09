<template>
  <section class="row q-pt-lg fit">
    <q-scroll-area class="fit">
      <div
        class="col-12 q-pt-lg q-px-lg text-primary"
        style="font-size: 20px; font-weight: 700;"
      >Attach the documents to finalize <br> the registration.</div>

      <section class="col-12 justify-center q-pt-lg flex">
        <img src="illustrations/13.svg" alt="">
      </section>

      <section class="col-12 row q-px-lg q-pt-md">
        <div class="q-pt-md text-bold text-primary" style="font-size:20px; font-weight: 700;">Attach your CV here</div>
        <div
          class="col-12 text-negative text-caption q-pb-md"
          v-if="$v.employeeFile.$error"
        >Your cv is required!</div>
        <div
          @click="clickEmployeeFile"
          class="col-12 container-upload-file-employee bg-primary row q-mt-md"
        >
          <div class="col-2 row items-center justify-center">
            <q-icon name="img:vectors/attach1.svg" size="20px" />
          </div>
          <div class="col-10 row justify-start items-center container-name-file-employee">
            <div class="q-pl-md" style="font-size: 16px;font-weight: 300;color: #B3B3B3">
              {{ employeeFile ? subCadena(employeeFile.name, 19) : 'Attach your CV' }}
            </div>
          </div>
          <q-file
            ref="emploFilePDF"
            accept="application/pdf"
            style="display: none;"
            v-model="employeeFile"
          />
        </div>
      </section>

      <section class="col-12 row q-pt-lg">
        <div class="row q-px-lg">
          <div class="col-1">
            <q-icon name="img:vectors/icon12.svg" />
          </div>
          <div class="col">
            It will take a few minutes for the system to validate that your documents are in order. <b class="text-primary" style="font-weight: 400; font-size: 16px;"> We will notify you when it has been approved.</b>
          </div>
        </div>
        <div class="col-12 text-center q-pt-md" style="text-decoration: underline; color: #A1A1A1; font-size: 12px; font-weight: 400;">Privacy Policy</div>

        <div class="btn-progress-container col-12 row justify-center items-center q-pt-xl q-pb-xl">
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
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  props: ['form'],
  data () {
    return {
      stateForm: {},
      employeeFile: null,
      isLoading: false
    }
  },
  mounted () {
    if (!this.form.isEmployee) {
      this.$emit('nextStep')
    }
  },
  methods: {
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
    async nextStep () {
      this.$v.employeeFile.$touch()
      if (this.$v.$invalid) {
        return false
      }
      this.stateForm.fileEmployee = this.employeeFile

      const form = { ...this.form, ...this.stateForm }

      const formData = new FormData()
      this.isLoading = true
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
      formData.append('profileImg', form.profileImg)
      formData.append('fileEmployee', form.fileEmployee)
      formData.append('category_id', form.category_id)

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
      this.$emit('nextStep', this.stateForm)
    }
  },
  validations: {
    employeeFile: {
      required
    }
  }
}
</script>

<style scoped lang="scss">

.container-upload-file-employee {
  cursor: pointer;
  border-radius: 8px;
  height: 60px;
  position: relative;
}

.container-name-file-employee {
  border: 4px solid $primary;
  padding: 5px;
  border-radius: 8px;
  background-color: #D9F2EE;
}

.btn-progress {
  position: absolute;
  z-index: 1;
}

.btn-progress-container {
  position: relative;
}

</style>
