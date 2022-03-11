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
          to="/profile/other"
        >
          <q-avatar size="26px">
            <img src="vectors/avatar1.svg" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer>
      <q-tabs v-model="tab">
        <q-tab :name="1" icon="img:vectors/home1.svg" @click="$router.push('/home')" />
        <q-tab :name="2" icon="img:vectors/search1.svg" />
        <q-tab :name="3" icon="img:vectors/icon1.svg" @click="$router.push('/notifications/employee')" />
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
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      tab: 1,
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style lang="scss" scoped>

.card-view {
  background-color: #FFF;
  border-radius: 20px 20px 0 0;
}

</style>
