<template>
  <section class="row">
    <q-item
      class="col-12"
    >
      <q-item-section thumbnail style="width: 120px">
        <q-img
          :src="$api_url() + 'image/subcategories/' + id"
          class="q-ml-md"
          width="100%"
          height="100%"
          style="object-fit: fill"
        />
      </q-item-section>

      <q-item-section class="q-py-xs q-px-md q-pr-xl">
        <q-item-label class="text-primary" style="font-size: 20px; font-weight: 700;"> {{name}} </q-item-label>
        <q-item-label lines="3" style="font-size: 14px; font-weight: 400; color: #5C5C5C">{{description}}</q-item-label>
        <q-item-label class="text-primary text-bold q-pt-xs" style="font-size: 20px"> {{price}}$ </q-item-label>
      </q-item-section>

      <div class="check-style">
        <q-checkbox v-model="selection" keep-color color="secondary" />
      </div>

      <div class="operators-style column" v-if="hasOperatorBtn">
        <div class="col-6 column q-pb-xs">
          <q-btn
            @click="$emit('increment', id)"
            icon="add"
            class="col-12"
            dense
            size="sm"
            color="primary"
            unelevated
            style="width: 100%"
          />
        </div>
        <div class="col-6 column q-pt-xs">
          <q-btn
            @click="$emit('decrement', id)"
            label="-"
            class="col-12"
            dense
            size="sm"
            color="primary"
            unelevated
            style="width: 100%; font-size: 22px"
          />
        </div>
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
    },
    quantity: {
      type: Number,
      default: 0
    },
    hasOperatorBtn: {
      type: Boolean,
      default: true
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
    },
    quantity () {
      if (this.quantity > 0) {
        this.selection = true
      }
    }
  }
}
</script>

<style scoped lang="scss">

.q-item {
  background-color: #E3F8F4;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  min-height: 100px;
  height: 125px;
}

.check-style {
  position: absolute;
  bottom: 0px;
  right: 25px;
  display: none;
}

.operators-style {
  width: 25px;
}

</style>
