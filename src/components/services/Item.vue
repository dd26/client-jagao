<template>
  <section style="position: relative">
    <q-item
      class="bg-color-item"
      clickable
    >
      <q-item-section top>
        <q-item-label class="text-primary text-bold">{{ category_name }}</q-item-label>
        <q-item-label class="q-pt-sm">
          <div class="row">
            <q-icon name="img:vectors/location2.svg" size="xs" />
            <div class="q-pl-xs" style="font-size: 10px; font-weight: 400; color: #B3B3B3">{{address_name}}</div>
          </div>
        </q-item-label>
        <q-item-label class="q-pt-sm" v-if="!right_now">
          <div class="row items-center">
            <q-icon name="img:vectors/time1.svg" size="xs" />
            <div class="row">
              <div class="q-pl-xs col-12" style="font-size: 10px; font-weight: 700; color: #5C5C5C">{{dateData}}</div>
              <div class="q-pl-xs col-12" style="font-size: 10px; font-weight: 400; color: #5C5C5C">{{timeData}}</div>
            </div>
          </div>
        </q-item-label>
        <q-item-label class="q-pt-sm" v-else>
          <div class="row items-center">
            <q-icon name="img:vectors/time1.svg" size="xs" />
            <div class="q-pl-xs" style="font-size: 10px; font-weight: 700; color: #5C5C5C">RIGHT NOW</div>
          </div>
        </q-item-label>
      </q-item-section>
      <q-item-section side top>
        <section
          class="row items-end"
          style="position: relative; right: -10px"
        >
          <div
            style="position: relative; bottom: 4px"
          >
            #{{ id }}
          </div>
          <q-btn
            icon="more_vert"
            size="md"
            flat
            dense
            round
            color="primary"
          >
            <q-menu>
              <section class="row" style="min-width: 90px; border-radius: 19px;">
                <div
                  @click="$emit('clickItem', id)"
                  class="col-12 bg-primary text-white text-center row justify-left q-pa-sm q-pl-md"
                >
                  <q-icon name="remove_red_eye" size="xs" />
                  <div class="q-pl-xs" style="font-size: 10px; font-weight: 700">View</div>
                </div>
                <div
                  @click="$emit('clickItemDecline', id)"
                  class="col-12 bg-negative text-white text-center row justify-left q-pa-sm q-pl-md"
                >
                  <q-icon name="close" size="xs" />
                  <div class="q-pl-xs" style="font-size: 10px; font-weight: 700">Decline</div>
                </div>

              </section>
            </q-menu>
          </q-btn>
        </section>
      </q-item-section>

      <div class="total-price-style text-primary text-bold">
        ${{total}}
      </div>
    </q-item>
    <q-btn
      v-if="isCancel"
      icon="more_vert"
      size="md"
      flat
      dense
      round
      color="primary"
      style="position: absolute; right: 5px; top: 5px;"
    >
      <q-menu>
        <q-list style="width: 150px">
          <q-item
            v-ripple
            clickable
            class="bg-negative text-white"
            @click="$emit('cancelService', id)"
          >
            <q-item-section>
              <q-item-label>
                <div class="row items-center">
                  <q-icon name="close" size="md" />
                  <div class="text-bold q-pt-xs q-pl-xs" style="font-size: 16px">Cancel</div>
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </section>
</template>

<script>
import { date } from 'quasar'
export default {
  props: ['category_name', 'observations', 'id', 'address_name', 'address', 'right_now', 'date_request', 'total', 'isCancel'],
  computed: {
    timeData () {
      return date.formatDate(new Date(this.date_request), 'HH:mm A')
    },
    dateData () {
      return date.formatDate(new Date(this.date_request), 'DD/MM/YYYY')
    }
  },
  methods: {
    handleClick (id) {
      this.$emit('clickItem', id)
    }
  }
}
</script>

<style scoped lang="scss">

.q-item {
  border-radius: 8px;
  background-color: #D9F2EE;
}

.total-price-style {
  position: absolute;
  right: 20px;
  bottom: 5px;
  font-size: 25px;
}

</style>
