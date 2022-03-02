<template>
  <section class="absolute-full flex flex-center">
    <img src="logos/logo1.svg" alt="logo_jagao_1">
    <div
      class="text-uppercase text-bold text-primary fixed-bottom full-width text-center q-pb-xl"
      style="font-size: 20px;"
    >Welcome</div>
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
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>

section {
  background: linear-gradient(192.12deg, rgba(0, 167, 142, 0.15) 0.44%, rgba(0, 167, 142, 0.124536) 47.5%, rgba(0, 167, 142, 0) 99.21%);
}

</style>
