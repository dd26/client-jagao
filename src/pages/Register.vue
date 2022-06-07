<template>
  <q-tab-panels v-model="step" animated class="absolute-full">
    <q-tab-panel :name="1">
      <step-one
        @nextStep="nextStep"
        :progressValue="23"
      />
    </q-tab-panel>

    <q-tab-panel :name="2">
      <mail-step
        @nextStep="nextStep"
        :progressValue="100"
        :form="form"
      />
    </q-tab-panel>

    <q-tab-panel :name="3">
      <select-user-type
        @nextStep="nextStep"
        @prevStep="prevStep"
        :progressValue="55"
      />
    </q-tab-panel>

    <q-tab-panel :name="4">
      <form-data
        @nextStep="nextStep"
        :progressValue="75"
        @prevStep="prevStep"
        :form="form"
      />
    </q-tab-panel>

    <q-tab-panel :name="5">
      <categories-select
        @nextStep="nextStep"
        :progressValue="75"
        @prevStep="prevStep"
        :form="form"
      />
    </q-tab-panel>

    <q-tab-panel :name="6">
      <upload-document
        @nextStep="nextStep"
        :progressValue="75"
        @prevStep="prevStep"
        :form="form"
      />
    </q-tab-panel>

    <!-- <q-tab-panel :name="2">
      <select-user-type
        @nextStep="nextStep"
        @prevStep="prevStep"
        :progressValue="55"
      />
    </q-tab-panel>

    <q-tab-panel :name="3">
      <illustration-info
        v-bind="form"
        @nextStep="nextStep"
        @prevStep="prevStep"
      />
    </q-tab-panel>

    <q-tab-panel :name="4">
      <form-data
        @nextStep="nextStep"
        :progressValue="75"
        @prevStep="prevStep"
        :form="form"
      />
    </q-tab-panel>

    <q-tab-panel :name="5">
      <step-four
        @nextStep="nextStep"
        :progressValue="100"
        :name="form.name"
        :isEmployee="form.isEmployee"
      />
    </q-tab-panel>

    <q-tab-panel :name="6">
      <mail-step
        @nextStep="nextStep"
        :progressValue="100"
        :form="form"
      />
    </q-tab-panel> -->
  </q-tab-panels>
</template>

<script>
import StepOne from '../components/registerSteps/StepOne.vue'
/* import FormData from '../components/registerSteps/FormData.vue'
import StepFour from '../components/registerSteps/StepFour.vue'
import SelectUserType from 'src/components/registerSteps/SelectUserType.vue'
import IllustrationInfo from 'src/components/registerSteps/IllustrationInfo.vue'
import MailStep from 'src/components/registerSteps/MailStep.vue' */
import MailStep from 'src/components/registerSteps/MailStep.vue'
import SelectUserType from 'src/components/registerSteps/SelectUserType.vue'
import FormData from '../components/registerSteps/FormData.vue'
import CategoriesSelect from '../components/registerSteps/CategoriesSelect.vue'
import UploadDocument from '../components/registerSteps/uploadDocument.vue'

export default {
  components: { StepOne, MailStep, SelectUserType, FormData, CategoriesSelect, UploadDocument/* , FormData, StepFour, SelectUserType, IllustrationInfo, MailStep */ },
  data () {
    return {
      step: 1,
      form: {
        email: '',
        password: '',
        name: 'Isabel'
      }
    }
  },
  methods: {
    nextStep (stateStep) {
      if (stateStep) this.form = { ...this.form, ...stateStep }
      console.log(stateStep, 'stateStep', this.form, 'form')
      this.step++
    },
    prevStep () {
      this.step--
    }
  }
}
</script>

<style lang="scss" scoped>

.q-tab-panel {
  padding: 0 !important;
  background-color: #D9F2EE;
}

</style>
