<template>
  <q-item
    class="col-12 bg-primary"
    style="border-radius: 12px;"
    v-ripple
    clickable
    @click="dlgLocation = true"
  >
    <q-item-section avatar>
      <q-avatar class="bg-white">
        <img src="vectors/gps2.svg" alt="asd" class="q-pa-sm">
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label style="color: #B1ECE3">Your location</q-item-label>
      <q-item-label style="color: #FFF; font-size: 14px; font-weight: 700;"> {{label}} </q-item-label>
    </q-item-section>
    <q-item-section side center>
      <q-icon
        name="expand_more"
        color="white"
        size="30px"
      />
    </q-item-section>
    <q-dialog v-model="dlgLocation" full-width>
      <q-card class="row">
        <q-list class="col-12">
          <q-item
            v-for="b in addresses"
            :key="b.id"
            v-ripple
            clickable
            @click="selectAddress(b)"
          >
            <q-item-section>
              <q-item-label> {{b.name}} </q-item-label>
              <q-item-label caption> {{b.address}} </q-item-label>
            </q-item-section>
            <q-item-section side center>
              <q-icon
                name="chevron_right"
                color="primary"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-dialog>
  </q-item>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      dlgLocation: false,
      addresses: [],
      label: '',
      valueSelect: this.value
    }
  },
  watch: {
    valueSelect: {
      handler (val) {
        console.log('valueSelect', this.valueSelect)
        this.$emit('input', val)
      },
      immediate: true
    }
  },
  async mounted () {
    await this.getAddress()
    if (this.value) {
      this.changeAddress(this.value)
    }
  },
  methods: {
    async getAddress () {
      const response = await this.$api.get('addresses')
      this.addresses = response
    },
    selectAddress (address) {
      this.label = address.name + ' ' + address.address
      this.valueSelect = address.id
      this.dlgLocation = false
    },
    changeAddress (id) {
      const address = this.addresses.find(a => a.id === id)
      this.label = address.name + ' ' + address.address
      this.valueSelect = address.id
    }
  }
}
</script>

<style>

</style>
