<template>
  <section class="column fit">

    <div class="col-9 row justify-center items-center">
        <section class="row q-pt">
          <div class="col-12 row justify-center">
            <div class="container-icon">
              <q-icon name="img:vectors/mail1.svg" size="63px" />
            </div>
            <div class="text-primary col-12 text-center q-pt-sm" style="font-size: 20px; font-weight: 700;">You registered successfully</div>
            <div class="col-7 text-center q-px-sm" style="font-size: 16px; font-weight: 400;">We sent you the details to access Jagao to your email address.</div>
          </div>
        </section>
    </div>

    <div class="col-3 column items-center justify-start">
      <div class="btn-progress-container row justify-center items-center">
        <q-btn
          icon="arrow_forward"
          round
          class="btn-progress"
          size="lg"
          color="primary"
          @click="nextStep"
        />
        <q-circular-progress
          size="80px"
          :indeterminate="isLoading"
          color="primary"
          :thickness="0.07"
        />
      </div>
      <div class="text-center q-pt-sm" style="font-weight: 400; font-size: 12px">Skip, I’ll view later</div>
    </div>

  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['progressValue', 'form'],
  data () {
    return {
      progressVal: 0,
      isLoading: false
    }
  },
  mounted () {
    this.progressVal = this.progressValue
  },
  methods: {
    ...mapMutations('generals', ['login']),
    nextStep () {
      // this.$router.push('/login')
      console.log(this.form, 'form')
      this.$emit('nextStep')
      // this.logueo()
    },
    async logueo () {
      this.$q.loading.show()
      await this.$api.post('login_app', { email: this.form.email, password: this.form.password }).then(res => {
        this.$q.loading.hide()
        if (res) {
          this.login(res)
          if (res.role_id === 3) {
            this.$router.push('/home')
          } else {
            this.$router.push('/home/employee')
          }
        }
      })
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

.container-icon {
  padding: 15px;
  background-color: #FFFFFF;
  border-radius: 10px;
}

</style>
