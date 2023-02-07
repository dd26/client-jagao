<template>
  <q-page class="q-pb-md q-pt-lg">
    <div class="row q-px-xl q-pb-md">
      <div class="col-12 text-primary" style="font-weight: 700; font-size: 20px;">Hello, {{user.name ? user.name : user.user.name}}! </div>
      <div class="col-12" style="font-weight: 400; font-size: 16px; color: #5C5C5C">Let’s start work! </div>
    </div>

    <div class="row q-px-lg">
      <my-ubication />
    </div>

    <section class="row q-pt-md q-px-lg justify-center">
      <img src="illustrations/14.svg" alt="" width="100%" height="100%">
    </section>

    <section class="row q-pt-xl">
      <div class="col-12 text-primary q-px-lg" style="font-size: 25px; font-weight: 700">Find services</div>

      <section class="row col-12 q-pt-lg q-px-md">
        <div
          class="col-6 row q-px-sm q-py-md"
          v-for="b in services"
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
  </q-page>
</template>

<script>
import CardItem from '../components/categories/CardItem.vue'
import MyUbication from '../components/MyUbication.vue'
export default {
  name: 'PageIndex',
  components: { CardItem, MyUbication },
  data () {
    return {
      search: '',
      user: {
        name: 'Isabel'
      },
      services: [
        { icon: 'img:vectors/cleaning1.svg', title: 'Cleaning', id: 1 },
        { icon: 'img:vectors/can1.svg', title: 'House Service', id: 2 },
        { icon: 'img:vectors/briefcase1.svg', title: 'Road Service', id: 3 },
        { icon: 'img:vectors/wheel1.svg', title: 'Company Service', id: 4 }
      ]
    }
  },
  mounted () {
    this.getUserInfo()
    this.getCategories()
  },
  methods: {
    async getUserInfo () {
      this.user = await this.$getUserInfo()
    },
    async getCategories () {
      this.$q.loading.show()
      const res = await this.$api.get('categories_actives')
      this.$q.loading.hide()
      this.services = res
    },
    selectCategory (category) {
      this.$router.push('/services/customer/process/' + category)
    }
  }
}
</script>

<style lang="scss" scoped>

.style-icon {
  border-radius: 50%;
  background-color: #FFF;
  padding: 15px;
}

.bg-image-card {
  background-image: url('../../public/vectors/card1.svg');
  background-size: cover;
  background-position: center;
  height: 175px;
  width: 100%;
  border-radius: 20px 20px 0 0;
}

.card-style-items {
  background: #D9F2EE;
  height: 180px;
  border-radius: 16px
}

</style>
