<template>
  <q-page>
    <q-tab-panels v-model="panel" animated>
        <q-tab-panel name="selection">
          <selection-services
            @nextStep="nextStep"
          />
        </q-tab-panel>

        <q-tab-panel name="confirm">
          <confirm-services
            @nextStep="nextStep"
            @previousStep="previousStep"
            v-bind="form"
            :form="form"
          />
        </q-tab-panel>

        <q-tab-panel name="movies">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
  </q-page>
</template>

<script>
import SelectionServices from '../../../components/services/steps/Selection.vue'
import ConfirmServices from '../../../components/services/steps/Confirm.vue'
export default {
  components: { SelectionServices, ConfirmServices },
  data () {
    return {
      panel: 'selection',
      form: {
        services: []
      }
    }
  },
  methods: {
    previousStep (name) {
      this.panel = name
    },
    nextStep (name, form) {
      this.panel = name
      console.log(form)
      if (form) {
        const data = { ...this.form, ...form }
        this.form = data
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.q-tab-panels {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 12px 12px 0 0;
}

.q-tab-panel {
  padding: 0;
}

</style>
