<template>
  <section class="row">
    <q-item
      class="col-12"
      v-ripple
      clickable
      tag="label"
    >
      <q-item-section thumbnail class="bg-red" style="width: 120px">
        <q-img
          :src="$api_url() + 'image/subcategories/' + id"
          class="q-ml-md"
          width="100%"
          height="100%"
        />
      </q-item-section>

      <q-item-section class="q-py-sm q-px-md">
        <q-item-label class="text-primary" style="font-size: 20px; font-weight: 700;"> {{name}} </q-item-label>
        <q-item-label style="font-size: 14px; font-weight: 400; color: #5C5C5C">{{description}}</q-item-label>
        <q-item-label class="text-primary text-bold q-pt-xs" style="font-size: 20px"> {{price}}$ </q-item-label>
      </q-item-section>

      <div class="check-style">
        <q-checkbox v-model="selection" keep-color color="secondary" />
      </div>
    </q-item>
  </section>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      selection: this.value
    }
  },
  watch: {
    selection (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style scoped lang="scss">

.q-item {
  background-color: #CEEFEA;
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  min-height: 130px;
  height: auto;
}

.check-style {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

</style>
