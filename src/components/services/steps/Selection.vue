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
          <div
            v-for="(item, index) in services"
            :key="index"
            class="row"
          >
            <select-s-category-item
              v-model="item.select"
              v-bind="item"
              class="col-11"
              @increment="increment"
              @decrement="decrement"
            />
            <div
              v-if="item.select"
              class="col-1 flex flex-center text-bold text-primary"
              style="font-size: 20px;"
            > {{item.quantity}} </div>
          </div>
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
            <div style="font-size: 20px" class="col-4">{{item.quantity > 1 ? item.quantity : ''}} {{item.name}}</div>
            <div v-if="item.comision_is_porcentage" class="text-primary col-5" style="font-size: 20px; font-weight: 700;">{{item.price * item.quantity}}$</div>
            <div v-if="!item.comision_is_porcentage" class="text-primary col-5" style="font-size: 20px; font-weight: 700;">{{(parseFloat(item.price) + parseFloat(item.comision_app) + parseFloat(item.comision_espcialist)) * item.quantity}}$</div>
            <q-btn
              icon="img:vectors/icon_trash.svg"
              flat
              round
              dense
              size="md"
              @click="unselectService(item.id)"
            />
          </div>
          <div v-if="servicesCheck.length > 0" class="col-12 row" style="border-top: 3px solid #000">
            <div class="col-12 row justify-between text-black q-pr-sm" style="font-size: 20px; font-weight: 700;">
              <div class="col-4">Subtotal</div>
              <div class="col-5">{{ totalAmount }}$</div>
              <q-btn
                icon="img:vectors/icon_trash.svg"
                style="visibility: hidden;" flat round dense size="md"
              />
            </div>
            <div class="col-12 row justify-between text-black q-pr-sm" style="font-size: 20px; font-weight: 700;">
              <div class="col-4">Fee </div>
              <div class="col-5">{{ fee }}$</div>
              <q-btn
                icon="img:vectors/icon_trash.svg"
                style="visibility: hidden;" flat round dense size="md"
              />
            </div>
            <div class="col-12 row justify-between q-pr-sm text-primary" style="font-size: 20px; font-weight: 700;">
              <div class="col-4">Total </div>
              <div class="col-5">{{ $formatPrice(totalAmount + fee)  }}$</div>
              <q-btn
                icon="img:vectors/icon_trash.svg"
                style="visibility: hidden;" flat round dense size="md"
              />
            </div>
          </div>
        </section>
      </section>
    <footer-s
      :amount="totalAmount"
      @nextStep="nextStep"
      :isConfirm="servicesCheck.length > 0"
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
      render: true,
      fee: 0
    }
  },
  computed: {
    totalAmount () {
      return this.services.reduce((total, item) => {
        if (item.select) {
          if (item.comision_is_porcentage) {
            return total + (parseFloat(item.price) * parseInt(item.quantity))
          } else {
            return total + ((parseFloat(item.price) + parseFloat(item.comision_app) + parseFloat(item.comision_espcialist)) * parseInt(item.quantity))
          }
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
  async mounted () {
    const token = JSON.parse(localStorage.getItem('JAGAO_SESSION_INFO'))
    if (token) {
      const user = await this.$getUserInfo()
      if (user) {
        await this.getCategory()
        if (this.$route.query.services) {
          this.requestAgain()
        }
      }
    }
    this.fee = await this.$getFee()
    await this.getServices()
  },
  methods: {
    requestAgain () {
      const servicesAgainJsonParse = JSON.parse(this.$route.query.services)
      const services = this.services.map(itm => {
        const service = servicesAgainJsonParse.find(itm2 => itm2.service_id === itm.id)
        if (service) {
          itm.select = true
          itm.quantity = service.quantity
        }
        return itm
      })
      this.services = services
    },
    increment (id) {
      this.services.find(itm => itm.id === id).quantity++
    },
    decrement (id) {
      if (this.services.find(itm => itm.id === id).quantity > 0) {
        this.services.find(itm => itm.id === id).quantity--
      }
    },
    nextStep () {
      this.$emit('nextStep', 'confirm', { services: this.servicesCheck })
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
              ...itm,
              quantity: 0
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

<style lang="scss" scoped>

</style>
