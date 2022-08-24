<template>
  <q-tab-panels v-model="step" animated class="absolute-full">
    <q-tab-panel :name="1">
      <step-one
        v-model="code"
        @nextStep="nextStep"
      />
    </q-tab-panel>

    <q-tab-panel :name="2">
      <step-two
        @nextStep="nextStep"
        v-model="code"
      />
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import StepTwo from '../components/ResetPassword/Steps/StepTwo.vue'
import StepOne from '../components/ResetPassword/Steps/StepOne.vue'
export default {
  components: {
    StepOne, StepTwo
  },
  data () {
    return {
      step: 1,
      code: ''
    }
  },
  methods: {
    nextStep () {
      this.step++
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
