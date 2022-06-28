<template>
  <section class="bg-style-card flex flex-center row q-gutter-x-sm">
    <q-icon
      name="img:vectors/wallet1.svg"
      size="sm"
    />
    <div class="text-primary" style="font-size: 15px; font-weight: 700;"> ${{amount}} </div>
  </section>
</template>

<script>
export default {
  props: ['amount']

}
</script>

<style lang="scss" scoped>

.bg-style-card {
  background-color: #D9F2EE;
  width: auto;
  height: 50px;
  border-radius: 10px;
  padding: 0px 10px;
}

</style>
