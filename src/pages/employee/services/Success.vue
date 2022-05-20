<template>
  <q-page>
    <div class="col-12 row q-pa-md q-pt-xl q-px-lg">
      <q-btn
        icon="arrow_back_ios"
        round
        color="secondary"
        size="sm"
        flat
        @click="$router.go(-1)"
      />
      <div class="text-primary col-12" style="font-size: 20px; font-weight: 700;">Successful services</div>
    </div>

    <section class="row q-px-lg q-pb-md">
      <q-list class="col-12 q-gutter-y-md">
        <item v-for="n in 5" :key="n" />
      </q-list>
    </section>
  </q-page>
</template>

<script>
import Item from '../../../components/services/Item'
export default {
  components: {
    Item
  },
  data () {
    return {
      data: []
    }
  }
}
</script>

<style>

</style>
