<template>
  <q-card
    @click="selectCategory"
    class="col-12 card-style row items-center"
    v-ripple
  >
    <section class="col-12 q-gutter-y-sm">
      <div class="col-12 row justify-center" style="position: relative">
        <q-avatar size="90px">
          <img :src="$api_url() + 'image/categories/' + id" width="100%" height="100%">
        </q-avatar>
      </div>
      <div class="text-center col-12 text-primary" style="font-size: 15px; font-weight: 700;">{{name}}</div>
    </section>
  </q-card>
</template>

<script>
export default {
  props: ['name', 'id'],
  methods: {
    selectCategory () {
      this.$emit('selectCategory', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-style {
  background-color: #f5f5f5;
  border-radius: 16px;
  border: 2px solid #9FD3CB;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.14);
  height: 170px;
}

</style>
