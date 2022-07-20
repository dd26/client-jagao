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
      <div style="background-color: #D9F2EE; border-radius: 5px;" class="col-12 column">
        <div class="col-9 row">
          <div class="col-12 column q-pa-md q-px-lg">
            <!-- <div class="col-5 text-primary lines-card-bottom" style="font-size: 8px; font-weight: 700;">Bank of America</div> -->
            <div class="col-5 text-primary lines-card-bottom" style="font-size: 8px; font-weight: 700;">{{ item.full_name }}</div>
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
      route: 'banks'
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
