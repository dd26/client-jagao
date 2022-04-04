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
      <div class="row items-center">
        <div class="text-primary q-ml-sm" style="font-weight: 700; font-size: 20px">Your Profile</div>
        <q-space />
        <q-btn
          :to="`/profile/info/${id}?route=${this.route}&folder=${this.folder}&img_id=${this.img_id}`"
          flat
          dense
          round
          icon="edit"
          color="primary"
        />
      </div>
    </section>

    <section class="row">
      <div class="col-12 row justify-center q-pt-md">
        <q-avatar size="150px">
          <img :src="avatarUrl" width="100%" height="100%">
        </q-avatar>
      </div>
      <div class="text-primary col-12 text-center text-bold text-h6 q-pt-sm"> {{ userInfo.name }} </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">User Name</div>
        <div class="col-12">{{ userInfo.userName }}</div>
      </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">Birth Date</div>
        <div class="col-12">{{ userInfo.birthDate }}</div>
      </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">ID</div>
        <div class="col-12">{{ userInfo.identification }}</div>
      </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">Phone</div>
        <div class="col-12">{{ userInfo.phone }}</div>
      </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">Country</div>
        <div class="col-12">{{ userInfo.country_id }}</div>
      </div>

      <div class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12">Adress</div>
        <div class="col-12">{{ userInfo.address }}</div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      avatarUrl: 'vectors/avatar1.svg',
      userInfo: {
        name: 'John Doe',
        userName: 'johndoe',
        birthDate: '01/01/2000',
        identification: '123456789',
        phone: '123456789',
        country_id: 'USA',
        address: '123 Street, City, State, Country'
      },
      role: null,
      id: null,
      route: null,
      folder: null,
      img_id: null
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const user = await this.$getUserInfo()
      if (user) {
        user.role_id = user.user.role_id
        user.name = user.user.name
        const folder = user.role_id === 3 ? 'customers' : 'specialists'
        this.folder = folder
        this.avatarUrl = `${this.$api_url()}image/${folder}/${user.id}`
        const route = user.role_id === 3 ? 'customer_by_user_id' : 'specialist_by_user_id'
        this.route = route
        console.log(route, 'route', user, 'user INFOOOOOOOOOOOOOOOOOOOO')
        const roleUserInfo = await this.$api.get(`${route}/${user.user_id}`)
        this.userInfo = {
          ...user,
          ...roleUserInfo
        }
        this.id = user.id
        this.role = user.role_id
        this.img_id = roleUserInfo.id
      }
    }
  }

}
</script>

<style>

</style>
