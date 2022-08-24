<template>
  <section class="fit column">

    <div class="col-7 row items-center">
      <section class="row q-pt">
        <div class="col-12 row justify-center">
          <div class="container-icon">
            <q-icon name="img:vectors/mail1.svg" size="63px" />
          </div>
          <div class="text-primary col-12 text-center q-pt-lg" style="font-size: 20px; font-weight: 700;">Check your mail</div>
          <div class="col-7 text-center q-px-sm q-pt-md" style="font-size: 16px; font-weight: 400;">We have sent a verification link to your email.</div>
        </div>
      </section>
    </div>

    <div class="col-1 row items-center justify-center">
      <!-- <div class="col-12 text-center text-primary" style="font-weight: bold; font-size: 16px;" @click="nextStep">Continue</div> -->
      <div style="display: flex; flex-direction: row; justify-content: center;">
        <v-otp-input
          ref="otpInput"
          input-classes="otp-input"
          separator=""
          :num-inputs="4"
          :should-auto-focus="true"
          :is-input-num="true"
          @on-complete="handleOnComplete"
        />
      </div>
    </div>

    <div class="col-4 row items-end q-pb-xl">
      <div class="col-12 text-center q-px-lg" style="font-weight: 600; font-size: 12px;">
        Did not receive the email? Chek your spam filter, or <b class="text-primary" @click="$router.push('/login')"> try to send the mail again </b>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    nextStep () {
      this.$emit('nextStep')
    },
    handleOnComplete (value) {
      console.log(value, 'value')
      this.verifyCode(value)
    },
    async verifyCode (code) {
      this.$q.loading.show({
        message: 'Verifying code...'
      })
      await this.$api.get('verify_code/' + code).then(res => {
        this.$q.loading.hide()
        if (res && !res.error) {
          this.$emit('input', code)
          this.nextStep()
        } else {
          if (res.error) {
            this.$q.notify({
              color: 'negative',
              message: res.error
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
.container-icon {
  padding: 15px;
  background-color: #FFFFFF;
  border-radius: 10px;
}

.otp-input {
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 0 10px;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
    &.error {
      border: 1px solid red !important;
    }
  }
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
