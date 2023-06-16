<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="row justify-between">
        <q-btn
          flat
          dense
          round
          size="10px"
          icon="img:vectors/menu1.svg"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-btn
          flat
          round
          dense
          v-if="user.id"
          :to="role === 2 ? '/profile/employee' : '/profile/client'"
        >
          <q-avatar size="26px">
            <img :src="userAvatarUrl" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <section class="fit column text-white">

        <section class="col-2 q-pa-md">
          <div class="row">
            <img src="logos/logo2.svg" width="100px" height="90px" />
          </div>
        </section>

        <section class="col-7 column justify-center">
          <q-list class="text-white">
            <q-item
              v-for="(item, index) in menuItems"
              :key="index"
              clickable
              v-ripple
              :to="item.to"
              active-class="my-menu-link"
            >
              <q-item-section avatar>
                <q-icon
                  :name="item.icon"
                  size="sm"
                  color="white"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label> {{ item.title }} </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </section>

        <section class="col-3 q-pa-md column justify-end">
          <div class="row">
            <q-item
              clickable
              v-ripple
              class="col-12"
              @click="logoutBtnClicked"
            >
              <q-item-section avatar>
                <q-icon
                  name="img:vectors/icon5.svg"
                  size="sm"
                  color="white"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label> Log Out </q-item-label>
              </q-item-section>
            </q-item>

            <section class="row col-12 q-pa-md">
              <div class="text-subtitle1 text-bold col-12">Jagao 2022</div>
              <div class="text-caption col-12">Privacy Policy</div>
            </section>
          </div>
        </section>
      </section>
    </q-drawer>

    <q-footer v-if="user.id">
      <q-tabs v-model="tab">
        <q-tab :name="1" icon="img:vectors/home1.svg" @click="$router.push(routeFooter.home)" />
        <!-- <q-tab :name="2" icon="img:vectors/search1.svg" @click="$router.push(routeFooter.search)" /> -->
        <q-tab :name="3" icon="img:vectors/notify1.svg" @click="$router.push(routeFooter.notifications)">
          <div v-if="hasNotifications" class="badge-style" />
        </q-tab>
      </q-tabs>
    </q-footer>

    <q-page-container class="bg-primary">
      <section class="card-view">
        <router-view />
      </section>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapMutations } from 'vuex'
const menuItemsDataCustomer = [
  {
    title: 'Home',
    icon: 'img:vectors/home1.svg',
    to: '/home'
  },
  {
    title: 'Pending services',
    icon: 'img:vectors/icon7.svg',
    to: '/services/pending/customer'
  },
  {
    title: 'Working services',
    icon: 'img:vectors/icon7.svg',
    to: '/services/working/customer'
  },
  {
    title: 'Successful services',
    icon: 'img:vectors/icon7.svg',
    to: '/services/susuccessful/customer'
  },
  {
    title: 'Help',
    icon: 'img:vectors/icon4.svg',
    to: '/help'
  }
]

const menuItemsDataEmployee = [
  {
    title: 'Home',
    icon: 'img:vectors/home1.svg',
    to: '/home/employee'
  },
  /* {
    title: 'Pending services',
    icon: 'img:vectors/icon7.svg',
    to: '/services/pending/employee'
  }, */
  {
    title: 'Working services',
    icon: 'img:vectors/icon7.svg',
    to: '/services/working/employee'
  },
  {
    title: 'Successful services',
    icon: 'img:vectors/icon7.svg',
    to: '/services/susuccessful/employee'
  },
  {
    title: 'Transactions',
    icon: 'img:vectors/transaction1.svg',
    to: '/home/employee'
  },
  {
    title: 'Help',
    icon: 'img:vectors/icon4.svg',
    to: '/help'
  }
]

const routeEmployee = {
  home: '/home/employee',
  search: '/search',
  notifications: '/notifications/employee'
}

const routeCustomer = {
  home: '/home',
  search: '/search',
  notifications: '/notifications/client'
}

export default {
  name: 'MainLayout',
  data () {
    return {
      tab: 1,
      leftDrawerOpen: false,
      menuItems: menuItemsDataCustomer,
      userAvatarUrl: 'vectors/avatar1.svg',
      role: null,
      routeFooter: {
        home: '/home',
        search: '/search',
        notifications: '/notifications/employee'
      },
      notifications: [],
      hasNotifications: false,
      user: {}
    }
  },
  async mounted () {
    const token = JSON.parse(localStorage.getItem('JAGAO_SESSION_INFO'))
    if (token) {
      const user = await this.$getUserInfo()
      this.getUserInfo()
      if (user) {
        this.getNotifications()
      }
    }
  },
  methods: {
    ...mapMutations('generals', ['logout']),
    logoutBtnClicked () {
      this.logout()
      this.$router.push('/login')
    },
    async getUserInfo () {
      const user = await this.$getUserInfo()
      this.user = user
      if (user) {
        user.role_id = user.user.role_id
        const folder = user.role_id === 3 ? 'customers' : 'specialists'
        this.role = user.role_id
        this.userAvatarUrl = `${this.$api_url()}image/${folder}/${user.id}`
        this.routeFooter = user.role_id === 3 ? routeCustomer : routeEmployee
        this.menuItems = user.role_id === 3 ? menuItemsDataCustomer : menuItemsDataEmployee
      }
    },
    getNotifications () {
      this.$getNotifications().then(res => {
        this.notifications = res
        if (res.length > 0) {
          this.hasNotifications = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.card-view {
  background-color: #FFF;
  border-radius: 20px 20px 0 0;
}

.my-menu-link {
  color: #FFF;
}

.badge-style {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #EB5757;
  border: 2px solid #ffffff;
  position: absolute;
  top: 35%;
  right: -5px;
}
</style>
