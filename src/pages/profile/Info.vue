<template>
  <q-page class="q-pt-lg">
    <section class="column q-pa-md">
      <div>
        <q-btn
          color="secondary"
          icon="arrow_back_ios"
          round
          flat
          size="15px"
          @click="$router.go(-1)"
        />
      </div>
      <div class="text-primary q-ml-sm" style="font-weight: 700; font-size: 20px">Your Profile</div>
    </section>

    <section class="row">
      <div class="col-12 row justify-center q-pt-md">
        <q-avatar size="150px">
          <img :src="avatarUrl" width="100%" height="100%">
        </q-avatar>
      </div>
      <div class="text-primary col-12 text-center text-bold text-h6 q-pt-sm"> Your name </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">User Name</div>
        <div class="col-12">yourusername01</div>
      </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">Birth Date</div>
        <div class="col-12">01/01/2022</div>
      </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">ID</div>
        <div class="col-12">123456789</div>
      </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">Phone</div>
        <div class="col-12">123456789</div>
      </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">Country</div>
        <div class="col-12">Florida</div>
      </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">Adress</div>
        <div class="col-12">Your Adress #1-02</div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      avatarUrl: 'vectors/avatar1.svg'
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const user = await this.$getUserInfo()
      if (user) {
        this.name = user.name
        this.hasVerified = user.verified
        // const folder = user.role_id === 3 ? 'customers' : 'specialists'
        this.role = user.role_id
        // this.avatarUrl = `${this.$api_url()}image/${folder}/${user.id}`
      }
    }
  }

}
</script>

<style>

</style>
