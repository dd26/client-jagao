<template>
  <section class="absolute-full column" style="background-color: #D9F2EE;">
    <Success
      class="col-12"
      :message="$route.query.message"
      :to="$route.query.to"
      :icon="$route.query.icon"
    />
  </section>
</template>

<script>
import Success from 'src/components/DynamicSuccess.vue'
export default {
  components: { Success },
  mounted () {
    console.log(this.$route.query, 'this.$route.query')
  }
}
</script>

<style>

</style>
