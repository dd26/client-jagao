<template>
  <q-page>
    <q-tab-panels v-model="panel" animated>
        <q-tab-panel name="selection">
          <selection-services
            @nextStep="nextStep"
          />
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
export default {
  components: { SelectionServices },
  data () {
    return {
      panel: 'selection'
    }
  },
  methods: {
    nextStep (name) {
      this.panel = name
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
