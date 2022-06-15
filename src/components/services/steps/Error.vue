<template>
  <section class="column absolute-full" style="background-color: #D9F2EE; overflow: hidden">
    <div class="col-6 container-img-2"></div>
    <div class="text-uppercase text-negative text-bold text-error-style">error</div>
    <div class="col column">
      <div class="q-pt-lg window-width row justify-center col-1">
        <div
          class="text-bold text-center col-12 text-primary q-pt-xl q-px-xl"
          style="font-weight: 700; font-size: 20px; margin-top: 45px"
        >
          Something went wrong <br> with the payment.
        </div>

        <div class="q-pt-md text-center" style="font-size: 16px; color: #5C5C5C">We invite you to try the payment with <br> another card.</div>

        <div class="col-12 row q-px-xl q-pt-xl justify-center q-pb-xl">
          <q-btn
            @click="$emit('previousStep', 'pay')"
            class="col-12 btn-progress"
            color="primary"
            unelevated
            label="Reselect another card"
            no-caps
          />
        </div>
      </div>
    </div>
</section>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      progressVal: 0
    }
  },
  methods: {
    nextStep () {
      console.log('nextStep')
    }
  }
}
</script>

<style style="scss" scoped>

.text-error-style {
  position: absolute;
  top: 20px;
  font-size: 50px;
  text-align: center;
  width: 100%
}

img {
  border-radius: 0 0 40px 40px;
  box-shadow: inset 0 -103px 0  rgb(255, 0, 0);
}

.btn-progress {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.34);
  border-radius: 8px;
  max-width: 200px;
}

.container-buttom {
  position: relative;
  width: 100vw;
}

.container-img-2 {
  position: relative;
  background-image: url("../../../../public/illustrations/16.svg");
  background-size: countain;
  background-position: center;
  box-shadow: inset 0 -9px 0  rgb(255, 255, 255);
  border-radius: 0 0 100% 100%;
  width: 140%;
  left: -20%;
  top: 10%;
  background-repeat: no-repeat;

}

</style>
