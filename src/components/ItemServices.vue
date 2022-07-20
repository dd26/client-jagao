<template>
  <div
    class="column"
    @click="$emit('click', category_id)"
  >
    <q-card
      class="col-12 card-style row items-center"
      v-ripple
    >
      <section class="col-12 q-gutter-y-sm">
        <div class="col-12 row justify-center" style="position: relative">
          <q-avatar size="90px">
            <img :src="$api_url() + 'image/categories/' + category_id" width="100%" height="100%">
          </q-avatar>
        </div>
        <div class="text-center col-12 text-primary" style="font-size: 15px; font-weight: 700;">{{category_name}}</div>
      </section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['category_name', 'category_id']

}
</script>

<style lang="scss" scoped>
.card-style {
  background-color: #ffffff;
  border-radius: 16px;
  border: 2px solid #9FD3CB;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.14);
  height: 170px;
}

</style>
