<template>
  <section class="row q-pt-lg">
    <div
      class="col-12 q-pt-lg q-px-lg text-primary"
      style="font-size: 20px; font-weight: 700;"
    >Attach the documents to finalize <br> the registration.</div>

    <section class="col-12 justify-center q-pt-lg flex">
      <img src="illustrations/13.svg" alt="">
    </section>

    <section class="col-12 row q-px-md q-pt-md">
      <div class="q-pt-md text-bold text-primary" style="font-size:20px; font-weight: 700;">Attach your CV here</div>
      <div
        class="col-12 text-negative text-caption q-pb-md"
        v-if="$v.stateForm.profileImg.$error"
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
      <div class="row q-px-md">
        <div class="col-1">
          <q-icon name="img:vectors/icon12.svg" />
        </div>
        <div class="col">
          It will take a few minutes for the system to validate that your documents are in order. <b class="text-primary" style="font-weight: 400; font-size: 16px;"> We will notify you when it has been approved.</b>
        </div>
      </div>
      <div class="col-12 text-center q-pt-md" style="color: #A1A1A1; font-size: 12px; font-weight: 400;">Privacy Policy</div>
    </section>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  props: ['form'],
  data () {
    return {
      stateForm: {},
      employeeFile: null
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
    }
  },
  validations: {
    stateForm: {
      profileImg: { required }
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

</style>
