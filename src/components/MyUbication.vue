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
    <q-list
      v-if="addresses.length > 0"
      bordered
    >
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
    <q-list
      v-else
    >
      <!-- No tienes direcciones agregadas, para agregar una haga click aqui -->
      <q-item
        @click="goToNewAddress"
        clickable
        v-ripple
        class="text-white q-py-md"
      >
        <q-item-section>
          <q-item-label class="text-bold"> You don't have addresses added, to add one CLICK HERE </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-expansion-item>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: null
    },
    isShowFirstLocated: {
      type: Boolean,
      default: false
    },
    validateCoords: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dlgLocation: false,
      addresses: [],
      label: 'Select your location',
      valueSelect: this.value,
      expanded: false
    }
  },
  watch: {
    valueSelect: {
      handler (val) {
        console.log('valueSelect', this.valueSelect)
        this.$emit('input', val)

        if (this.validateCoords) {
          // valido si la direccion tiene coordenadas

          // busco la direccion
          const address = this.addresses.find(a => a.id === val)
          console.log('address', address)

          /*
            valido si tiene coordenadas, latitude y longitude en el objeto
            si no tiene alguna de las 2, mando un emit a 'errorCoords'
          */
          if (address && (!address.latitude || !address.longitude)) {
            console.log('no tiene coordenadas')
            this.$emit('error-coords', address)
          } else {
            console.log('tiene coordenadas')
            this.$emit('success-coords', address)
          }
        }
      },
      immediate: true
    }
  },
  async mounted () {
    const token = JSON.parse(localStorage.getItem('JAGAO_SESSION_INFO'))
    if (token) {
      await this.getAddress()
    }
    console.log('value', this.value)
    if (this.value) {
      this.changeAddress(this.value)
    }
  },
  methods: {
    async getAddress () {
      const response = await this.$api.get('addresses/status/1')
      this.addresses = response
      if (this.addresses.length > 0 && this.isShowFirstLocated) {
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
    },
    goToNewAddress () {
      if (localStorage.getItem('JAGAO_SESSION_INFO') === null) {
        this.$q.notify({
          color: 'negative',
          message: 'Please login to continue'
        })
      } else {
        this.$router.push('/address/form')
      }
    }
  }
}
</script>

<style>

</style>
