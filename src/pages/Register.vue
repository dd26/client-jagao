<template>
  <q-tab-panels v-model="step" animated class="absolute-full">
    <q-tab-panel :name="1">
      <step-one
        @nextStep="nextStep"
        :progressValue="23"
      />
    </q-tab-panel>

    <q-tab-panel :name="2">
      <step-two
        @nextStep="nextStep"
        :progressValue="55"
      />
    </q-tab-panel>

    <q-tab-panel :name="3">
      <step-three
        @nextStep="nextStep"
        :progressValue="75"
        @prevStep="prevStep"
      />
    </q-tab-panel>

    <q-tab-panel :name="4">
      <step-four
        @nextStep="nextStep"
        :progressValue="100"
        :name="form.name"
      />
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import StepOne from '../components/registerSteps/StepOne.vue'
import StepTwo from '../components/registerSteps/StepTwo.vue'
import StepThree from '../components/registerSteps/StepThree.vue'
import StepFour from '../components/registerSteps/StepFour.vue'

export default {
  components: { StepOne, StepTwo, StepThree, StepFour },
  data () {
    return {
      step: 4,
      form: {
        email: '',
        password: '',
        name: 'Isabel'
      }
    }
  },
  methods: {
    nextStep (stateStep) {
      console.log(stateStep, 'nexxx')
      if (stateStep) this.form = { ...this.form, ...stateStep }
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
