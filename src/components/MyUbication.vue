<template>
  <q-expansion-item
    class="col-12 bg-primary overflow-hidden"
    style="border-radius: 12px;"
    expand-icon-class="text-white"
    v-model="expanded"
  >
    <template v-slot:header>
      <q-item-section avatar>
        <q-avatar class="bg-white">
          <img src="vectors/gps2.svg" alt="asd" class="q-pa-sm">
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label style="color: #B1ECE3">Your location</q-item-label>
        <q-item-label style="color: #FFF; font-size: 14px; font-weight: 700;"> {{label}} </q-item-label>
      </q-item-section>
    </template>
    <q-list bordered>
      <q-item
        v-for="b in addresses"
        :key="b.id"
        v-ripple
        clickable
        @click="selectAddress(b)"
        class="text-white"
      >
        <q-item-section>
          <q-item-label class="text-bold"> {{b.name}} </q-item-label>
          <q-item-label caption class="text-white"> {{b.address}} </q-item-label>
        </q-item-section>
        <q-item-section side center>
          <q-icon
            name="chevron_right"
            color="primary"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-expansion-item>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      dlgLocation: false,
      addresses: [],
      label: '',
      valueSelect: this.value,
      expanded: false
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
    const token = JSON.parse(localStorage.getItem('JAGAO_SESSION_INFO'))
    if (token) {
      await this.getAddress()
    }
    if (this.value) {
      this.changeAddress(this.value)
    }
  },
  methods: {
    async getAddress () {
      const response = await this.$api.get('addresses/status/1')
      this.addresses = response
      if (this.addresses.length > 0 && !this.value) {
        this.changeAddress(this.addresses[0].id)
      }
    },
    selectAddress (address) {
      this.label = address.name + ' ' + address.address
      this.valueSelect = address.id
      this.expanded = false
    },
    changeAddress (id) {
      const address = this.addresses.find(a => a.id === id)
      if (address) {
        this.label = address.name + ' ' + address.address
        this.valueSelect = address.id
      } else {
        if (this.addresses.length > 0) {
          this.changeAddress(this.addresses[0].id)
        }
      }
    }
  }
}
</script>

<style>

</style>
