<template>
  <q-tab-panels v-model="step" class="absolute-full" animated>
    <q-tab-panel name="work">
      <div style="overflow: hidden">
        <img src="illustrations/4.svg" alt="logo" class="img-illustrations">
        <q-btn
          @click="$emit('prevStep')"
          flat
          icon="arrow_back_ios"
          color="secondary"
          class="pos-btn"
        />
      </div>
      <section class="row q-pt-md q-px-xl">
        <div class="col-12 text-center text-primary text-bold text-h5 text-uppercase">Jagao from work</div>
        <div class="col-12 text-center"></div>
        <div class="col-12 text-center q-pt-lg" style="line-height: 17px; color: #838383; font-size: 13px">-</div>
        <div class="q-pt-lg text-primary col-12 text-center text-subtitle1">-</div>
      </section>

      <div class="btn-progress-container col-12 row justify-center items-center q-pt-xl">
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
    </q-tab-panel>
    <q-tab-panel name="clean">
      <div style="overflow: hidden">
        <img src="illustrations/5.svg" alt="logo" class="img-illustrations">
        <q-btn
          @click="$emit('prevStep')"
          flat
          icon="arrow_back_ios"
          color="secondary"
          class="pos-btn"
        />
      </div>
      <section class="row q-pt-md q-px-xl">
        <div class="col-12 text-center text-primary text-bold text-h5 text-uppercase">Jagao services</div>
        <div class="col-12 text-center">-</div>
        <div class="col-12 text-center q-pt-lg" style="line-height: 17px; color: #838383; font-size: 13px"></div>
        <div class="q-pt-lg text-primary col-12 text-center text-subtitle1"></div>
      </section>

      <div class="btn-progress-container col-12 row justify-center items-center q-pt-xl">
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
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
export default {
  props: ['isEmployee'],
  data () {
    return {
      step: 'work',
      isLoading: false
    }
  },
  mounted () {
    console.log(this.isEmployee, 'isEMployee')
    if (!this.isEmployee) {
      this.step = 'clean'
    }
  },
  methods: {
    nextStep () {
      this.$emit('nextStep')
    }
  }
}
</script>

<style lang="scss" scoped>

.img-illustrations {
  height: 300px;
  width: 130%;
  position: relative;
  left: -15%;
  object-fit: cover;
  border-radius: 0 0 100% 100%;
}
.q-tab-panel {
  padding: 0 !important;
  background-color: #D9F2EE;
}

.pos-btn {
  position: absolute;
  z-index: 99;
  top: 10px;
  left: 10px;
}

.btn-progress {
  position: absolute;
  z-index: 1;
}

.btn-progress-container {
  position: relative;
}

</style>
