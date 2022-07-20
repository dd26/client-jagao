<template>
  <q-card class="q-pa-md row" style="border-radius: 8px;">
    <section class="col-12 row justify-center">
      <div class="col-12 text-center text-primary text-bold" style="font-size: 20px; font-weight: 700;">Cancel this <br> service?</div>
      <q-btn
        label="Yes"
        class="q-mt-md style-yes col-7 text-bold"
        unelevated
        no-caps
        @click="$emit('cancelService')"
      />

      <q-btn
        @click="$emit('clickCancelDlg')"
        label="No"
        class="q-mt-md style-no col-7 text-bold"
        unelevated
        no-caps
        v-close-popup
      />
    </section>
  </q-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.style-yes {
  background-color: #ffffff;
  border-radius: 10px;
  border: 4px solid $primary;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.14);
  color: $primary;
  font-weight: 700;
  font-size: 16px;
}

.style-no {
  background-color: #E23D3D;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  font-size: 16px;
}

</style>
