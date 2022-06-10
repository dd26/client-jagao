<template>
  <section class="row">
    <section class="row col-12 q-pa-md">
      <q-btn
        @click="$emit('previousStep','selection')"
        dense
        flat
        round
        size="15px"
        icon="arrow_back_ios"
        style="color: #7DBA47"
      />
      <div class="text-primary col-12 text-center" style="font-weight: 700; font-size: 25px; margin-top: -25px;">Confirmation</div>
    </section>

    <section class="row col-12 q-px-lg q-pt-md">
      <my-ubication
        v-model="form.address_id"
      />
    </section>

    <section class="row q-px-lg q-pt-lg col-12">
      <div class="col-12 row items-center">
        <div class="text-primary" style="font-size: 20px;">Order details</div>
        <q-space />
        <q-btn
          dense
          flat
          round
          size="15px"
          icon="img:vectors/edit4.svg"
          @click="modeEdit = true"
        />
      </div>
    </section>

    <section class="col-12 row q-pt-md q-gutter-y-sm q-px-lg">
      <div
        class="col-12 row justify-between"
        v-for="item in form.services"
        :key="item.id"
      >
        <div class="row">
          <q-btn
            v-if="modeEdit && form.services.length > 1"
            icon="img:vectors/icon_trash.svg"
            flat
            round
            dense
            size="md"
            class="q-mr-sm"
            @click="deleteService(item.id)"
          />
          <div style="font-size: 20px">{{item.name}}</div>
        </div>
        <div class="text-primary" style="font-size: 20px; font-weight: 700;">{{item.price}}$</div>
      </div>
    </section>
    <hr class="col-11" style="border-top: 0.1em solid #000000;">
    <section class="row col-12 q-px-lg">
      <q-space />
      <div class="text-black q-pr-lg" style="font-size: 20px;">Total</div>
      <div class="text-primary text-bold" style="font-size: 20px;">100$</div>
    </section>

    <section class="col-12 row q-pa-lg">
      <div class="text-primary" style="font-size: 20px;">Date</div>
      <q-checkbox
        keep-color
        v-model="form.right_now"
        :val="true"
        label="Right now"
        color="primary"
        class="col-12 text-primary"
        size="lg"
      />
    </section>
  </section>
</template>

<script>
import MyUbication from '../../MyUbication.vue'
export default {
  props: ['services'],
  components: {
    MyUbication
  },
  data () {
    return {
      form: {
        address_id: 2,
        services: this.services,
        right_now: false
      },
      modeEdit: false
    }
  },
  methods: {
    deleteService (id) {
      this.form.services = this.form.services.filter(item => item.id !== id)
      this.modeEdit = false
    }
  }
}
</script>

<style>

</style>
