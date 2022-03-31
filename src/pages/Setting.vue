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
      </q-list>
    </section>

    <section class="row q-pa-md items-center">
      <q-space />
      <div class="row" @click="$router.push('/login')">
        <div>Log out</div>
        <q-icon name="img:vectors/logout1.svg" size="xs" class="q-pl-sm" />
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      configs: [
        { icon: 'img:vectors/edit3.svg', title: 'Edit Profile', to: '/profile/info' },
        { icon: 'settings', title: 'Skilss' },
        { icon: 'img:vectors/bank1.svg', title: 'Bank info', to: '/accounts' },
        { icon: 'lock', title: 'Password & Security', to: '/' },
        { icon: 'img:vectors/notification1.svg', title: 'Notifications' }
        /* { icon: 'img:vectors/info1.svg', title: 'Technical Support' } */
      ]
    }
  }
}
</script>

<style>

</style>
