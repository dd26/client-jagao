<template>
  <div class="footer row">
    <div class="col-6 row items-start">
      <div class="col-12 q-pt-md" style="font-weight: 700; font-size: 25px; line-height: 1px;">Amount</div>
      <div class="col-12" style="font-weight: 700; font-size: 25px; line-height: 1px;">{{$formatPrice(amount)}}</div>
    </div>
    <div class="col-6 flex flex-center">
      <q-btn
        color="white"
        text-color="primary"
        label="Confirm"
        no-caps
        @click="$emit('nextStep')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['amount']
}
</script>

<style lang="scss" scoped>
.footer {
  margin-bottom: 48px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: $primary;
  padding: 10px;
  color: #FFF;
  height: 90px;
}

.q-btn {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.34);
  height: 40px;
  width: 120px;
  border-radius: 8px;
}

</style>
