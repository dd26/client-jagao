<template>
  <section class="row q-pl-xl q-pt-xl">
    <div class="col-12 text-primary" style="font-size: 20px; font-weight: 700;">Address</div>
    <div class="col-12 row q-pt-lg">
      <q-btn
        to="/address/form"
        icon="add"
        style="height: 123px; width:36px"
        color="primary"
        dense
        push
      />
      <q-scroll-area
        class="col-10"
        style="height:125px"
        :bar-style="barStyle"
        :thumb-style="thumbStyle"
      >
        <div class="row no-wrap q-gutter-x-md q-pl-md">
          <q-card
            v-for="(n, index) in data"
            :key="index"
            class="style-card-item row items-center"
            :style="n.id && n.status === 0 ? 'background-color: rgb(239, 239, 239);' : ''"
          >
            <q-btn
              v-if="n.id"
              flat
              size="sm"
              color="primary"
              round
              style="position: absolute; right: 10px; top: 10px;"
              icon="more_horiz"
            >
            <q-menu>
              <q-list>
                <q-item
                  @click="deleteAddressConfirm(n.id)"
                  v-ripple
                  clickable
                  v-close-popup
                >
                  <q-item-section>
                    <q-item-label>Delete</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  v-ripple
                  clickable
                  v-close-popup
                  @click="editAddress(n.id, n.status)"
                >
                  <q-item-section>
                    <q-item-label>{{ n.status === 1 ? 'Disable' : 'Enable' }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>

            </q-btn>
            <div class="row col-12 items-center">
              <div class="col-4">
                <q-icon
                  v-if="!n.default_name_image"
                  name="img:vectors/home2.svg"
                  size="42px"
                />
                <img
                  v-else
                  :src="`${$api_url()}image_two/address/${n.default_name_image}`"
                  width="50px"
                  height="50px"
                  style="border-radius: 12px"
                />
              </div>
              <div v-if="!n.id" class="col-6 q-gutter-y-xs row">
                <div class="skeleton-style col-12"></div>
                <div class="skeleton-style col-12"></div>
                <div class="skeleton-style col-6"></div>
              </div>
              <div v-else class="col-8 q-pl-xs" style="overflow: hidden;">
                <div class="ellipsis col-12 text-no-wrap text-primary text-bold text-subtitle1"> {{ n.name }} </div>
                <div class="col-12" style="font-size: 11px; color: #5C5C5C"> {{n.address}} </div>
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
import DeleteItem from './DeleteItem.vue'
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
      route: 'addresses',
      id: null,
      deleteItemDlg: false,
      disableAddressDlg: false,
      status: null
    }
  },
  mounted () {
    this.getAddresses()
  },
  methods: {
    async editAddress (id, status) {
      this.$q.loading.show()
      await this.$api.put(`${this.route}/${id}/status/${status}`).then(res => {
        this.$q.loading.hide()
        if (res) {
          this.getAddresses()
        }
      })
    },
    async getAddresses () {
      this.$q.loading.show()
      await this.$api.get(this.route).then(res => {
        this.$q.loading.hide()
        this.data = res.length > 0 ? res : [1, 2, 3]
      })
    },
    deleteAddressConfirm (id) {
      this.id = id
      this.deleteItemDlg = true
    },
    deleted () {
      this.deleteItemDlg = false
      this.id = null
      this.getAddresses()
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
  background-color: #D9F2EE;;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 10px;
  height: 121px;
  width: 200px;
  overflow: hidden;
}
</style>
