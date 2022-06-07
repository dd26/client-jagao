<template>
  <section class="column fit">

    <div class="col-12 column">

      <section class="q-px-lg col-12 column justify-center">
        <div class="q-pb-sm q-pl-lg text-primary" style="font-size: 20px; font-weight: 700;">Choose your role</div>
        <div class="row">
          <div
            v-for="item in options"
            :key="item.value"
            style="height: 210px; position: relative"
            class="col-12"
          >
            <img
              :src="item.icon"
              style="object-fit: fill;"
              width="100%"
              height="210px"
              class="col-12"
              @click="nextStep(item.value)"
            />
            <div
              class="text-white"
              style="position: absolute; bottom: 30px; left: 30px; font-size: 20px; font-weight: 700;"
            >{{item.label}}</div>
          </div>
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
        { label: 'Work with us', value: 'work', icon: 'illustrations/12.png' },
        { label: 'Order a service', value: 'clean', icon: 'illustrations/13.png' }
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
