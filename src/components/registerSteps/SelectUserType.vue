<template>
  <section class="column fit">

    <div class="col-10 column">

      <section class="column items-start q-px-lg q-pt-lg col-2">
        <div class="row full-width">
          <q-btn
            @click="$emit('prevStep')"
            icon="arrow_back_ios"
            flat
            rounded
            dense
            color="secondary"
            class="col-1"
          />
          <div class="text-subtitle1 col-10 text-center">Service or Work</div>
        </div>
        <div class="text-bold text-primary text-subtitle1">What do you want?</div>
      </section>

      <section class="q-pt-xl q-pa-lg q-px-xl col-10 column justify-center">
        <div class="row q-gutter-y-lg">
          <q-card
            v-for="item in options"
            :key="item.value"
            v-ripple
            clickable
            class="row q-pa-md col-12 bg-primary text-white justify-between"
            style="border-radius: 12px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); height: 100px;"
            @click="nextStep(item.value)"
          >
            <q-avatar style="background-color: #D9F2EE; clip-path: circle();" size="70px">
              <q-icon :name="item.icon" size="lg" color="primary" />
            </q-avatar>
            <div class="column justify-center">
              <div class="text-bold text-h6" style="line-height: 18px;">Jagao</div>
              <div class="text-h6 text-right text-bold">{{ item.label }}</div>
            </div>
          </q-card>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      options: [
        { label: 'Work', value: 'work', icon: 'img:vectors/cleaning1.svg' },
        { label: 'Clean', value: 'clean', icon: 'img:vectors/home2.svg' }
      ]
    }
  },
  methods: {
    async nextStep (val) {
      const isEmployee = val === 'work'
      this.$emit('nextStep', { isEmployee: isEmployee })
    }
  }
}
</script>

<style scoped lang="scss">
.btn-progress {
  position: absolute;
  z-index: 1;
}

.btn-progress-container {
  position: relative;
}

</style>
