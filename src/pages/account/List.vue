<template>
  <q-page>
    <div class="q-pa-md">
      <q-btn
        color="secondary"
        icon="arrow_back_ios"
        round
        flat
        size="15px"
        to="/settings"
      />
    </div>

    <div style="height: 166px" class="q-pa-sm">
      <img src="illustrations/3.svg" alt="illustration" width="100%" height="100%">
    </div>

    <div class="text-primary q-pa-md q-pt-lg" style="font-weight: 700; font-size: 20px">
      Registered Accounts
    </div>

    <div
      v-for="(item, index) in data"
      :key="index"
      style="height: 160px"
      class="column q-pa-md"
    >
      <div
        style="background-color: #D9F2EE; border-radius: 5px; position: relative"
        class="col-12 column"
        v-ripple
        clickable
        @click="$router.push('/accounts/form/' + item.id)"
      >
        <div class="col-9 row">
          <div class="col-12 column q-pa-md q-px-lg">
            <div class="col-5 text-primary lines-card-bottom" style="font-size: 8px; font-weight: 700;">
              {{ returnAccountName(item.exterior_bank_id) }}
            </div>
            <div class="col-5 text-primary lines-card-bottom" style="font-size: 8px; font-weight: 700;">{{ item.full_name }}</div>
            <div class="col-5 text-primary lines-card-bottom" style="font-size: 8px; font-weight: 700;">{{ returnAccounTypeName(item.account_type) }}</div>
          </div>
        </div>
        <div class="col-3 row q-px-lg lines-card" style="font-weight: 400; font-size: 10px;">
          <div class="col-5">
            ****    ****    ****    {{ item.lastDigitsAccountNumber}}
          </div>
          <div class="col-6">
            ****    ****    ****    {{ item.lastDigitsRouteNumber }}
          </div>
        </div>
        <q-icon
          :name="'img:' + returnAccountImg(item.exterior_bank_id)"
          size="50px"
          :style="{
            position: 'absolute',
            top: '38px',
            right: '10px'
          }"
        />
      </div>
    </div>

    <div class="row q-px-md q-py-md">
      <q-btn
        to="/accounts/form"
        icon="add"
        color="primary"
        class="col-12"
      />
    </div>

  </q-page>
</template>

<script>
import { GetDataMixin } from '../../mixins/GetData'
export default {
  mixins: [GetDataMixin],
  data () {
    return {
      route: 'banks',
      dataBank: [
        { label: 'Bank of America', value: 1, img: 'banks/bankofamerica.jpg' },
        { label: 'Wells Fargo', value: 2, img: 'banks/wellsfargo.jpg' },
        { label: 'JPMorgan Chase Bank', value: 3, img: 'banks/jpmorganchase.jpg' },
        { label: 'Truist Bank', value: 4, img: 'banks/truist.jpg' },
        { label: 'Regions Bank', value: 5, img: 'banks/regions.jpg' },
        { label: 'TD Bank', value: 6, img: 'banks/tdbank.jpg' },
        { label: 'PNC Bank', value: 7, img: 'banks/pncbank.jpg' },
        { label: 'Fifth Third Bank', value: 8, img: 'banks/fifththirdbank.jpg' },
        { label: 'Synovus Bank', value: 9, img: 'banks/synovusbank.jpg' },
        { label: 'Citibank', value: 10, img: 'banks/citybank.jpg' }
      ]
    }
  },
  methods: {
    afterMounted () {
      const data = this.data.map(item => {
        return {
          ...item,
          lastDigitsAccountNumber: item.account_number.slice(-4),
          lastDigitsRouteNumber: item.route_number.slice(-4)
        }
      })
      this.data = data
    },
    returnAccounTypeName (accountType) {
      if (accountType === 'check') {
        return 'Checks'
      } else if (accountType === 'saving') {
        return 'Saving'
      }
    },
    returnAccountName (val) {
      const dataBank = [...this.dataBank]
      const find = dataBank.find(item => item.value === val)
      return find.label
    },
    returnAccountImg (val) {
      const dataBank = [...this.dataBank]
      const find = dataBank.find(item => item.value === val)
      return find.img
    }
  }
}
</script>

<!-- #E2E2E2 -->

<style lang="scss" scoped>

.lines-card {
  position: relative;
}

.lines-card::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #E2E2E2;
}

.lines-card-bottom {
  position: relative;
}

.lines-card-bottom::before {
  content: '';
  position: absolute;
  bottom: 7px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #E2E2E2;
}

</style>
