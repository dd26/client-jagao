<template>
  <q-page class="column">
    <section class="column q-pa-md">
      <div>
        <q-btn
          color="secondary"
          icon="arrow_back_ios"
          round
          flat
          size="15px"
          to="/home"
        />
      </div>
      <div class="text-primary q-ml-sm" style="font-weight: 700; font-size: 20px">Settings</div>
    </section>

    <section class="row col">
      <q-list class="col-12">
        <q-item
          clickable
          v-ripple
          v-for="(itm, ind) in configs"
          :key="ind"
          :to="itm.to"
          exact
        >
          <q-item-section>
            <q-item-label class="row items-center q-pl-xl">
              <q-icon :name="itm.icon" size="20px" color="primary" />
              <div class="q-pl-md"> {{itm.title}} </div>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          @click="deleteAccount"
          v-ripple
          clickable
        >
          <q-item-section>
            <q-item-label class="q-pl-xl row items-center">
              <q-icon
                name="close"
                size="20px"
                color="negative"
              />
              <div class="q-pl-md text-negative"> Disable Account </div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </section>

    <section class="row q-pa-md items-center">
      <q-space />
      <div class="row" @click="logoutBtnClicked">
        <div>Log out</div>
        <q-icon name="img:vectors/logout1.svg" size="xs" class="q-pl-sm" />
      </div>
    </section>
  </q-page>
</template>

<script>
import { mapMutations } from 'vuex'
const routeCustomer = {
  notification: '/notifications/client',
  profile: '/profile/info/',
  accounts: '/accounts'
}

const routeEmployee = {
  notification: '/notifications/employee',
  profile: '/profile/info/',
  accounts: '/accounts'
}

export default {
  data () {
    return {
      routes: {
        notification: '/notifications/client',
        profile: '/profile/info/',
        accounts: '/accounts'
      },
      profileRoute: ''
    }
  },
  computed: {
    configs () {
      const data = [
        { icon: 'img:vectors/edit3.svg', title: 'Edit Profile', to: this.routes.profile },
        /* { icon: 'settings', title: 'Skilss' }, */
        { icon: 'img:vectors/bank1.svg', title: 'Bank info', to: this.routes.accounts },
        /* { icon: 'lock', title: 'Password & Security', to: '/' }, */
        { icon: 'img:vectors/notification1.svg', title: 'Notifications', to: this.routes.notification }
      ]
      return data
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    ...mapMutations('generals', ['logout']),
    logoutBtnClicked () {
      this.logout()
      this.$router.push('/login')
    },
    async getUserInfo () {
      const user = await this.$getUserInfo()
      user.role_id = user.user.role_id
      this.routes = user.role_id === 3 ? routeCustomer : routeEmployee
      console.log(user, 'user info')
      const routeCus = user.role_id === 3 ? 'customer_by_user_id' : 'specialist_by_user_id'
      const folder = user.role_id === 3 ? 'customers' : 'specialists'
      this.routes.profile = `/profile/info/${user.id}?route=${routeCus}&folder=${folder}&img_id=${user.id}`
    },
    deleteAccount () {
      this.$q.dialog({
        title: 'Disable Account',
        message: 'Are you sure you want to disable your account?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.loading.show()
        this.$api.put('/users/logged/status/deleted').then((res) => {
          this.$q.loading.hide()
          this.$q.notify({
            message: 'Account deleted successfully',
            color: 'positive',
            icon: 'check_circle'
          })
          this.logout()
          this.$router.push('/login')
        }).catch(() => {
          this.$q.loading.hide()
          this.$q.notify({
            message: 'Something went wrong',
            color: 'negative',
            icon: 'warning'
          })
        })
      })
    }
  }
}
</script>

<style>

</style>
