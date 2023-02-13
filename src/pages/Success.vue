<template>
  <section class="absolute-full window-height column" style="background-color: #D9F2EE;">
    <Success class="col-12" :message="$route.query.message" />
  </section>
</template>

<script>
import Success from 'src/components/Success.vue'
export default {
  components: { Success }
}
</script>

<style>

</style>
