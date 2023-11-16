<template>
  <section class="row q-pb-xl">
    <section class="row col-12 q-pa-md">
      <q-btn
        @click="$emit('previousStep','confirm')"
        dense
        flat
        round
        size="15px"
        icon="arrow_back_ios"
        style="color: #7DBA47"
      />
      <div class="text-primary col-12 text-center" style="font-weight: 700; font-size: 25px; margin-top: -25px;">Pay</div>
    </section>

    <section class="row col-12 q-px-lg q-pt-md">
      <my-ubication
        v-model="formPay.address_id"
      />
    </section>

    <section class="row q-px-lg q-pt-lg col-12">
      <div class="col-12 row items-center">
        <div class="text-primary" style="font-size: 20px;">Order details</div>
        <q-space />
        <q-btn
          dense
          flat
          round
          size="15px"
          icon="img:vectors/edit4.svg"
          @click="modeEdit = true"
        />
      </div>
    </section>

    <section class="col-12 row q-pt-md q-gutter-y-sm q-px-lg">
      <div
        class="col-12 row justify-between"
        v-for="item in formPay.services"
        :key="item.id"
      >
        <div class="row">
          <q-btn
            v-if="modeEdit && formPay.services.length > 1"
            icon="img:vectors/icon_trash.svg"
            flat
            round
            dense
            size="md"
            class="q-mr-sm"
            @click="deleteService(item.id)"
          />
          <div style="font-size: 20px">{{item.quantity > 1 ? item.quantity : ''}} {{item.name}}</div>
        </div>
        <div v-if="item.comision_is_porcentage" class="text-primary" style="font-size: 20px; font-weight: 700;">{{item.price * item.quantity}}$</div>
        <div v-if="!item.comision_is_porcentage" class="text-primary" style="font-size: 20px; font-weight: 700;">{{(parseFloat(item.price) + parseFloat(item.comision_app) + parseFloat(item.comision_espcialist)) * item.quantity}}$</div>
      </div>
    </section>
    <hr class="col-11" style="border-top: 0.1em solid #000000;">
    <section class="row col-12 q-px-lg">
      <q-space />
      <div class="text-black" style="font-size: 20px;">Subtotal</div>
      <div class="text-primary text-bold col-4 text-right" style="font-size: 20px;">{{totalAmount}}$</div>
    </section>
    <section class="row col-12 q-px-lg">
      <q-space />
      <div class="text-black" style="font-size: 20px;">Fee</div>
      <div class="text-primary text-bold col-4 text-right" style="font-size: 20px;">{{fee}}$</div>
    </section>
    <section class="row col-12 q-px-lg">
      <q-space />
      <div class="text-black" style="font-size: 20px;">Total</div>
      <div class="text-primary text-bold col-4 text-right" style="font-size: 20px;">{{totalAmount + fee}}$</div>
    </section>

    <section class="col-12 row">
      <div class="text-primary col-12 text-center q-pt-lg" style="font-weight: 700; font-size: 25px;">Payment</div>

      <section class="col-12 row q-px-lg q-pt-md">
        <div class="text-primary col-12 q-pb-sm" style="font-size: 20px;">Discount coupon</div>
        <q-input
          v-model="formPay.coupon"
          dense
          flat
          round
          size="15px"
          placeholder="ABCD12345"
          input-style="color: #00A58D"
          class="col-7 style-input"
          borderless
        />
        <div class="row col-5 justify-center">
          <q-btn
            dense
            label="Redeem"
            unelevated
            no-caps
            color="primary"
            :class="!hasDiscount ? 'style-btn' : 'style-btn-disabled'"
            class="col-12 q-ml-sm"
            @click="verifyCoupon"
          />
          <div
            class="col-12 text-center text-primary q-pt-xs"
            style="font-weight: 600; font-size: 14px"
          > {{discountObj.label}} </div>
        </div>
      </section>
    </section>

    <section class="col-12 row q-px-lg q-pt-lg">
      <div class="text-primary col-12 q-pb-sm" style="font-size: 20px;">Amount</div>
      <q-list
        bordered
        class="col-12"
        style="border-radius: 12px;"
        separator
      >
        <q-item tag="label" :disable="!hasDiscount">
          <q-item-section avatar>
            <q-radio v-model="isDiscount" :val="0" :disable="!hasDiscount" />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="hasDiscount ? 'text-primary' : 'text-grey'" style="font-size: 20px;">With discount</q-item-label>
          </q-item-section>
          <q-item-section side center>
            <q-item-label class="text-bold" :class="hasDiscount ? 'text-primary' : 'text-grey'" style="font-size: 20px;">{{$formatPrice(discountObj.totalAmount)}}$</q-item-label>
          </q-item-section>
        </q-item>
        <q-item tag="label">
          <q-item-section avatar>
            <q-radio v-model="isDiscount" :val="1" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-primary" style="font-size: 20px;">Total amount</q-item-label>
          </q-item-section>
          <q-item-section side center>
            <q-item-label class="text-primary text-bold" style="font-size: 20px;">{{$formatPrice(totalAmount + fee)}}$</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </section>

    <section class="col-12 row q-px-lg q-pt-lg">
      <div class="text-primary col-12 q-pb-sm" style="font-size: 20px;">Payment method</div>
      <p class="text-negative" v-if="$v.formPay.card_id.$error"> Select your payment method </p>
      <q-list
        v-if="cards.length > 0"
        bordered
        class="col-12"
        style="border-radius: 12px;"
        separator
      >
        <q-item
          tag="label"
          v-for="item in cards"
          :key="item.id"
        >
          <q-item-section avatar style="padding: 0 !important!">
            <q-radio
              v-model="formPay.card_id"
              :val="item.id"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-primary" style="font-size: 20px;">
              ...{{getLastNumbers(item.number)}}
            </q-item-label>
          </q-item-section>
          <q-item-section side center avatar>
            <div class="row items-center">
              <div class="text-primary text-bold q-pr-sm" style="font-size: 16px">{{item.new ? 'New!' : null }}</div>
              <q-icon
                :name="comprobateTypeCard(item.number)"
                size="40px"
                color="primary"
              />
            </div>

          </q-item-section>
        </q-item>
      </q-list>
      <section v-else class="col-12">
        <q-list
          bordered
          class="col-12 q-pa-md"
          style="border-radius: 12px;"
          separator
        >
          <div class="text-primary col-12 q-pb-sm" style="font-size: 20px;">No cards, please add new</div>
        </q-list>
      </section>

      <q-btn
        v-if="!modeAddCard"
        label="Add new card"
        class="q-mt-md"
        style="height: 40px;border-radius: 8px;border: 1px solid #00A58D;"
        no-caps
        flat
        color="primary"
        @click="openCardFormSection"
      />
    </section>

    <section v-if="modeAddCard" class="q-px-lg q-pt-lg">
      <add-card
        @cancelAddCard="modeAddCard = false"
        @addedCard="addedCard"
      />
    </section>

    <section class="col-12 row q-pt-xl q-pb-lg q-px-lg">
      <q-btn
        dense
        :disable="modeAddCard"
        :color="!modeAddCard ? 'primary' : 'grey'"
        class="col-12 style-btn-continue"
        no-caps
        unelevated
        label="Confirm"
        @click="confirmClick"
      />
    </section>

    <section v-if="isConfirm" class="q-px-lg">
      <set-cvv
        v-model="formPay.cvv"
        @pay="pay"
      />
    </section>
    <q-dialog
      v-model="isDlg"
      persistent
    >
      <q-card class="full-width q-py-md q-pa-md" style="border-radius: 10px">
        <q-card-section>
          <div class="text-h5 text-primary">Sign up</div>
          <p class="text-subtitle1 q-pt-md" style="line-height: 20px;">
            Don't miss the chance to choose from the various services we offer in our application! Register to access this feature and enjoy all the benefits we offer. Don't wait any longer!
          </p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            label="Cancel"
            color="primary"
            flat
            no-caps
            @click="isDlg = false"
          />
          <q-btn
            to="/register"
            color="primary"
            label="Sign up"
            no-caps
            class="q-px-md"
            rounded
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import MyUbication from '../../MyUbication.vue'
import AddCard from './AddCard.vue'
import SetCvv from './SetCvv.vue'
export default {
  props: ['form'],
  components: { MyUbication, AddCard, SetCvv },
  data () {
    return {
      formPay: {
        ...this.form
      },
      modeEdit: false,
      isDiscount: 1,
      hasDiscount: false,
      cards: [],
      modeAddCard: false,
      isConfirm: false,
      route: 'master_request_services',
      totalDiscount: 10,
      discountObj: {
        label: '',
        totalAmount: 0
      },
      token: null,
      isDlg: false,
      fee: 0
    }
  },
  async mounted () {
    const token = JSON.parse(localStorage.getItem('JAGAO_SESSION_INFO'))
    const user = await this.$getUserInfo()
    this.fee = user.fee
    if (token) {
      this.token = token
      this.getCards()
    }
  },
  computed: {
    totalAmount () {
      return this.formPay.services.reduce((total, item) => {
        if (item.select) {
          if (item.comision_is_porcentage) {
            return total + (parseFloat(item.price) * parseInt(item.quantity))
          } else {
            return total + ((parseFloat(item.price) + parseFloat(item.comision_app) + parseFloat(item.comision_espcialist)) * parseInt(item.quantity))
          }
        }
        return total
      }, 0)
    }
  },
  methods: {
    async verifyCoupon () {
      if (!this.token) {
        this.isDlg = true
        return false
      }
      this.$q.loading.show()
      await this.$api.get('/coupons/check/code/' + this.formPay.coupon).then(res => {
        this.$q.loading.hide()
        if (res) {
          console.log(res)
          this.hasDiscount = true
          this.discountObj = res
          this.discountObj.label = res.type === 2 ? `$${res.value} of dicount!` : `${res.value}% of dicount!`
          this.discountObj.withDiscountValue = res.type === 2 ? res.value : (this.totalAmount * res.value) / 100
          this.discountObj.totalAmount = this.totalAmount - this.discountObj.withDiscountValue
          this.isDiscount = 0
        } else {
          this.$q.notify({
            color: 'negative',
            message: 'Invalid coupon'
          })
          this.hasDiscount = false
          this.isDiscount = 1
        }
      })
    },
    confirmClick () {
      if (!this.token) {
        this.isDlg = true
        return false
      }
      this.$v.formPay.card_id.$touch()
      if (this.$v.formPay.card_id.$invalid) {
        return
      }
      this.isConfirm = true
    },
    async pay () {
      this.formPay.category_id = this.$route.params.category_id
      this.formPay.discount = this.isDiscount
      this.$q.loading.show()
      await this.$api.post(`${this.route}`, this.formPay).then(res => {
        this.$q.loading.hide()
        console.log(res, 'res no error')
        if (res && !res.error) {
          this.$emit('nextStep', 'finished', this.formPay)
        } else {
          this.$emit('nextStep', 'error')
          if ((res.error && res.message) || res.error) {
            this.$q.notify({
              color: 'negative',
              message: res.message ? res.message : res.error
            })
          }
        }
      })
    },
    async addedCard (card) {
      await this.getCards()
      this.formPay.card_id = card.id
      this.cards = this.cards.map(item => {
        if (item.id === card.id) {
          item.new = true
        }
        return item
      })
      this.modeAddCard = false
    },
    cancelAddCard () {
      this.modeAddCard = false
    },
    continueStep () {
      this.$emit('continue', this.formPay)
    },
    comprobateTypeCard (number) {
      if (number[0] === '4') {
        return 'img:vectors/visa1.svg'
      } else if (number[0] === '5') {
        return 'img:vectors/master1.svg'
      }
      return 'payment'
    },
    deleteService (id) {
      this.formPay.services = this.formPay.services.filter(item => item.id !== id)
      this.modeEdit = false
    },
    async getCards () {
      this.$q.loading.show()
      const res = await this.$api.get('cards')
      this.$q.loading.hide()
      this.cards = res
      /* if (this.cards.length > 0) {
        this.formPay.card_id = this.cards[0].id

      } */
    },
    getLastNumbers (str) {
      return str.substring(str.length - 4)
    },
    openCardFormSection () {
      if (!this.token) {
        this.isDlg = true
        return false
      }
      this.modeAddCard = true
    }
  },
  validations: {
    formPay: {
      card_id: {
        required
      },
      cvv: {
        required
      }
    }
  }
}
</script>

<style scoped lang="scss">

.style-input {
  background-color: #EDEDED;
  border-radius: 8px;
  padding: 0 10px;
  height: 40px;
}

.style-btn {
  background: #00A78E;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.34);
  border-radius: 8px;
  height: 40px;
}

.style-btn-disabled {
  background: #00A78E;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.34);
  border-radius: 8px;
  height: 40px;
  opacity: 0.5;
}

.style-btn-continue {
  background-color: $primary;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
}
</style>
