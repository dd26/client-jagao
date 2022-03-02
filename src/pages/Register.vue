<template>
  <q-tab-panels v-model="step" animated class="absolute-full">
    <q-tab-panel :name="1">
      <div class="text-h6">Mails</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel :name="2">
      <div class="text-h6">Alarms</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      step: 1,
      form: {
        email: '',
        password: ''
      },
      repeatPassword: ''
    }
  },
  validations () {
    return {
      form: {
        email: { required },
        password: { required }
      },
      repeatPassword: {
        sameAsPassword: value => value === this.form.password
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.q-tab-panel {
  padding: 0 !important;
}

</style>
