<template>
  <div class="column" @click="$router.push('/services/form?category_id=' + category_id)">
    <q-card
      class="card-style-items flex flex-center no-shadow"
    >
      <div class="row justify-center">
        <div class="col-6 style-icon row items-center justify-center">
          <img
            :src="$api_url() + 'image/categories/' + category_id"
            alt="icono_"
            width="50px"
            height="50px"
            style="clip-path: circle(50%);"
          >
        </div>
        <div
          class="col-12 text-center q-pt-sm text-primary"
          style="font-size:20px; font-weight: 700; line-height: 18px;"
        > {{category_name}} </div>
      </div>
    </q-card>
    <div class="text-center q-pt-xs"> 00/00 </div>
  </div>
</template>

<script>
export default {
  props: ['category_name', 'category_id']

}
</script>

<style lang="scss" scoped>
.card-style-items {
  background: #D9F2EE;
  height: 180px;
  border-radius: 16px
}
.style-icon {
  border-radius: 50%;
  background-color: #FFF;
  padding: 15px;
}

</style>
