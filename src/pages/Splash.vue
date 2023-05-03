<template>
  <section class="absolute-full flex flex-center">
    <img src="logos/logo1.svg" alt="logo_jagao_1">
    <div
      class="text-uppercase text-bold text-primary fixed-bottom full-width text-center q-pb-xl"
      style="font-size: 20px;"
    >Welcome</div>
  <!-- <GoogleMapView /> -->
  </section>
</template>

<script>

export default {
  data () {
    return {
      timer: ''
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  mounted () {
    this.timer = setInterval(this.redirectToLogin, 4000)
  },
  methods: {
    redirectToLogin () {
      const getLs = localStorage.getItem('JAGAO_SESSION_INFO')
      if (getLs) {
        this.$api.post('verify_token', { api_token: JSON.parse(getLs).api_token }).then(res => {
          console.log(res, 'VERIFY TOKEN')
          if (!res.status === 'error') {
            if (res.user.role_id === 3) {
              this.$router.push('/home')
            } else {
              this.$router.push('/home/employee')
            }
          } else {
            this.$router.push('/login')
          }
        })
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

section {
  background: linear-gradient(192.12deg, rgba(0, 167, 142, 0.15) 0.44%, rgba(0, 167, 142, 0.124536) 47.5%, rgba(0, 167, 142, 0) 99.21%);
}

</style>
