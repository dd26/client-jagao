<template>
  <section class="row q-pl-xl q-pt-xl">
    <div class="col-12 text-primary" style="font-size: 20px; font-weight: 700;">Cards</div>
    <div class="col-12 row q-pt-lg">
      <q-btn
        icon="add"
        style="height: 123px; width:36px"
        color="primary"
        dense
        push
        to="/cards/form"
      />
      <q-scroll-area
        class="col-10"
        style="height:123px"
        :bar-style="barStyle"
        :thumb-style="thumbStyle"
      >
        <div class="row no-wrap q-gutter-x-md q-pl-md">
          <q-card
            v-for="(n, index) in data"
            :key="index"
            class="style-card-item row q-pa-md"
          >
            <div class="row col-12">
              <div v-if="!n.id" class="col-12 row" style="height:5px">
                <div class="skeleton-style col-5"></div>
                <q-space />
                <div class="skeleton-style col-2"></div>
              </div>
              <div v-else class="col-12 row items-start">
                <div style="line-height: 10px; font-weight: 700; font-size: 12px;" class="text-primary"> {{n.name}} </div>
                <q-space />
                <q-btn
                  v-if="n.id"
                  icon="img:vectors/close1.svg"
                  flat
                  dense
                  size="xs"
                  color="primary"
                  round
                  @click="deleteCardConfirm(n.id)"
                />
              </div>
              <div class="bg-primary col-3" style="height:20px; border-radius: 5px;"/>

              <div v-if="!n.id" class="skeleton-style col-10" style="height:1px" />
              <div v-else class="col-12 q-pt-xs" style="font-size: 11px; font-weight: 400; color: #5C5C5C">
                **** **** **** {{n.lastDigitsCardNumber}}
              </div>

              <div v-if="!n.id" class="skeleton-style col-4" style="height:1px" />
              <div v-else class="col-12" style="font-size: 11px; font-weight: 400; color: #5C5C5C">
                ** / {{n.lastNumberExpirationDate}}
              </div>

            </div>
          </q-card>
        </div>
      </q-scroll-area>
    </div>
    <q-dialog
      v-model="deleteItemDlg"
      persistent
      full-width
    >
      <delete-item
        :id="id"
        :route="route"
        @deleted="deleted"
      />
    </q-dialog>
  </section>
</template>

<script>
import DeleteItem from '../components/DeleteItem'
export default {
  components: { DeleteItem },
  data () {
    return {
      barStyle: {
        right: '0px',
        borderRadius: '0px',
        width: '0px',
        opacity: 0
      },
      thumbStyle: {
        right: '0',
        borderRadius: '0',
        backgroundColor: '#027be3',
        width: '0',
        opacity: 0
      },
      data: [],
      deleteItemDlg: false,
      id: null,
      route: 'cards'
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get(this.route).then(res => {
        this.data = !res.length > 0
          ? [1, 2, 3]
          : res.map(item => {
            return {
              ...item,
              lastDigitsCardNumber: item.number.substr(item.number.length - 4),
              lastNumberExpirationDate: item.expiration_date.substr(item.expiration_date.length - 2)
            }
          })
      })
    },
    deleteCardConfirm (id) {
      this.id = id
      this.deleteItemDlg = true
    },
    deleted () {
      this.deleteItemDlg = false
      this.id = null
      this.getData()
    }
  }
}
</script>

<style scoped lang="scss">

.skeleton-style {
  background-color: #C4DDD9;
  padding-top: 6px;
  border-radius: 20px;
}

.style-card-item {
  background-color: #D9F2EE;
  border-radius: 20px;
  margin-bottom: 10px;
  height: 121px;
  width: 201px;
}
</style>
