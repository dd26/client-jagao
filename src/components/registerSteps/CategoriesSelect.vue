<template>
  <section class="q-pt-xl row">
    <div
      class="col-12 text-primary q-px-lg"
      style="font-size: 20px; font-weight: 700;"
    >Choose the category in which <br> you want to provide <br> services.</div>

    <section class="col-12 row q-px-lg q-pt-md">
      <div
        class="col-6 row q-px-sm q-py-md"
        v-for="b in categories"
        :key="b.id"
      >
        <card-item
          class="col-12"
          v-bind="b"
          @selectCategory="selectCategory"
        />
      </div>
    </section>

  </section>
</template>

<script>
import CardItem from '../categories/CardItem.vue'
export default {
  props: ['form'],
  components: { CardItem },
  data () {
    return {
      categories: []
    }
  },
  mounted () {
    this.getCategories()
  },
  methods: {
    async getCategories () {
      this.$q.loading.show()
      const res = await this.$api.get('categories')
      this.$q.loading.hide()
      this.categories = res
    },
    selectCategory (category) {
      this.$emit('nextStep', { category_id: category })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
