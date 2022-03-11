<template>
  <q-page>
    <div class="col-12 row q-pa-md q-pt-xl q-px-lg">
      <div class="text-primary" style="font-size: 20px; font-weight: 700;">Notifications</div>
      <q-space />
      <q-btn
        icon="done_all"
        round
        color="secondary"
        size="sm"
      />
    </div>

    <section class="row q-pt-lg">
      <q-list class="col-12" separator>
        <q-item clickable v-ripple v-for="n in 4" :key="n">
          <q-item-section>
            <q-item-label>Your password has been successfully changed.</q-item-label>
            <q-item-label style="font-size: 12px; font-weight: 400; color: #B3B3B3">40m ago</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar icon="img:vectors/verified2.svg" size="60px" />
          </q-item-section>
        </q-item>
      </q-list>
    </section>
  </q-page>
</template>

<script>
export default {

}
</script>

<style>

</style>
