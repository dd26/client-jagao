<template>
  <section style="padding-bottom: 150px;">
    <section
      style="position: relative; height: 175px; border-radius: 12px 12px 0 0; background-color: #97DDFD;overflow:hidden"
    >
      <q-btn
        @click="$router.go(-1)"
        dense
        flat
        round
        size="15px"
        icon="arrow_back_ios"
        color="white"
        style="position: absolute; left: 16px; top: 16px;"
      />
      <img
        :src="$api_url() + 'image/categories/' + category_id"
        alt="categori_img"
        width="100%"
        height="100%"
        style="object-fit: fill"
      >
    </section>

    <section class="row col-12 q-pa-lg">
      <div class="text-primary text-bold" style="font-size: 25px;">{{category.name}}</div>
      <p class="">
        Select the services you need from each category, <b class="text-primary"> the services you mark will be added.</b>
        <br><br>
        When you finish confirm them to continue with the process.
      </p>
    </section>

    <section
        v-if="category_id"
        class="row col-12 q-px-md q-pt-md"
      >
        <q-list
          class="col-12 q-gutter-y-md"
          v-if="render = render"
        >
          <select-s-category-item
            v-for="(item, index) in services"
            :key="index"
            v-model="item.select"
            v-bind="item"
          />
        </q-list>
      </section>

      <section class="row col-12 q-px-md q-pt-sm">
        <div class="row col-12">
          <div class="text-primary" style="font-size: 25px; font-weight: 700;">Selected services:</div>
          <q-space />
          <div class="text-black q-pr-sm" style="font-size: 25px; font-weight: 700;"> {{quantityServices}} </div>
        </div>

        <section class="col-12 row q-pt-md q-gutter-y-sm">
          <div
            class="col-12 row justify-between"
            v-for="item in servicesCheck"
            :key="item.id"
          >
            <div style="font-size: 20px">{{item.name}}</div>
            <div class="text-primary" style="font-size: 20px; font-weight: 700;">{{item.price}}$</div>
            <q-btn
              icon="img:vectors/icon_trash.svg"
              flat
              round
              dense
              size="md"
              @click="unselectService(item.id)"
            />
          </div>
        </section>
      </section>
    <footer-s
      :amount="totalAmount"
      @nextStep="nextStep"
    />
  </section>
</template>

<script>
import FooterS from '../../../components/services/Footer.vue'
import SelectSCategoryItem from '../../../components/services/SelectSCategoryItem.vue'
export default {
  components: { SelectSCategoryItem, FooterS },
  data () {
    return {
      services: [],
      category_id: this.$route.params.category_id,
      category: {},
      render: true
    }
  },
  computed: {
    totalAmount () {
      return this.services.reduce((total, item) => {
        if (item.select) {
          return total + parseFloat(item.price)
        }
        return total
      }, 0)
    },
    quantityServices () {
      return this.services.reduce((total, item) => {
        if (item.select) {
          return total + 1
        }
        return total
      }, 0)
    },
    servicesCheck () {
      return this.services.filter(itm => itm.select)
    }
  },
  mounted () {
    this.getServices()
    this.getCategory()
  },
  methods: {
    nextStep () {
      this.$emit('nextStep', 'alarms')
    },
    unselectService (id) {
      this.services.find(itm => itm.id === id).select = false
      this.$nextTick(() => {
        this.render = true
      })
      this.render = false
    },
    async getServices () {
      await this.$api.get('subcategories_by_category_id/' + this.$route.params.category_id)
        .then(response => {
          this.services = response.map(itm => {
            return {
              ...itm
            }
          })
        })
    },
    async getCategory () {
      await this.$api.get('categories/' + this.$route.params.category_id)
        .then(response => {
          this.category = response
        })
    }
  }
}
</script>

<style>

</style>
