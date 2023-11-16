<template>
  <q-item class="q-py-lg">
    <q-item-section>
      <q-item-label class="text-primary text-h6 text-bold">{{category_name}}</q-item-label>
      <q-item-label caption>
        <div class="col-12 row">
          <div class="col-3 text-left">
            <strong>Cant.</strong>
          </div>
          <div class="col-9"><strong>Description</strong></div>
        </div>
        <div class="col-12 row q-pb-xs">
          <div class="col-7" style="border-top: solid 2px rgba(0, 0, 0, 0.54);"></div>
        </div>
        <div class="col-12 row" v-for="n in detail_request_service" :key="n.id">
          <div class="col-3 text-left q-pl-md">{{n.quantity}}</div>
          <div class="col-9">{{n.service_name}}</div>
        </div>

        <!-- <li v-for="n in detail_request_service" :key="n.id" class="q-pt-xs">
          {{n.quantity}}  {{n.service_name}}
        </li> -->
      </q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-avatar rounded size="95px">
        <img
          :src="$api_url() + 'image/categories/' + category_id"
          alt="icono"
        >
      </q-avatar>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ['detail_request_service', 'category_name', 'category_id']
}
</script>

<style lang="scss" scoped>

.q-item {
  background-color: #D9F2EE;
  border-radius: 12px;
}

</style>
