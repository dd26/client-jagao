<template>
  <section class="row">
    <section class="row col-12 q-pa-md">
      <q-btn
        @click="$emit('previousStep','selection')"
        dense
        flat
        round
        size="15px"
        icon="arrow_back_ios"
        style="color: #7DBA47"
      />
      <div class="text-primary col-12 text-center" style="font-weight: 700; font-size: 25px; margin-top: -25px;">Confirmation</div>
    </section>

    <section class="row col-12 q-px-lg q-pt-md">
      <div
        v-if="$v.form.address_id.$error"
        class="text-negative"
        style="font-size: 15px;"
      >Select your location</div>
      <my-ubication
        v-model="form.address_id"
        validate-coords
        @error-coords="errorCoords()"
        @success-coords="successCoords()"
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
        v-for="item in form.services"
        :key="item.id"
      >
        <div class="row">
          <q-btn
            v-if="modeEdit && form.services.length > 1"
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

    <section class="col-12 row q-pa-lg">
      <div class="text-primary" style="font-size: 20px;">Date</div>
      <div v-if="$v.form.date.$error" class="text-negative text-bold col-12"> The date is required!</div>
      <q-checkbox
        keep-color
        v-model="form.right_now"
        :val="true"
        label="Right now"
        color="primary"
        class="col-12 text-primary"
        size="lg"
      />
      <q-date
        v-model="form.date"
        minimal
        color="red"
        class="col-12 no-shadow"
        :disable="form.right_now"
      />

      <section class="col-12 row">
        <div :class="form.right_now ? 'text-grey' : 'text-primary'" style="font-size: 20px">Hour</div>
        <q-input
          v-model="form.time"
          mask="time"
          :rules="['time']"
          class="col-12 style-time q-mt-md"
          borderless
          dense
          :error="$v.form.time.$error"
          :disable="form.right_now"
          input-style="color: #00A58D"
        >
          <template v-slot:append>
            <q-icon
              name="access_time"
              class="cursor-pointer"
              :color="form.right_now ? 'grey' : 'primary'"

            >
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="form.time">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </section>

      <section class="col-12 row q-pt-lg">
        <div class="text-primary" style="font-size: 20px">Remarks and input code</div>
        <q-input
          v-model="form.observations"
          class="col-12 style-input q-mt-md"
          borderless
          type="textarea"
          input-style="color: #00A58D"
        />
      </section>

      <section class="col-12 row q-pt-xl q-pb-lg">
        <q-btn
          @click="continueStep"
          dense
          color="primary"
          class="col-12 style-btn"
          label="Continue"
          no-caps
          unelevated
        />
      </section>
    </section>
  </section>
</template>

<script>
import MyUbication from '../../MyUbication.vue'
import { requiredIf, required } from 'vuelidate/lib/validators'
export default {
  props: ['services'],
  components: {
    MyUbication
  },
  data () {
    return {
      form: {
        address_id: null,
        services: this.services,
        right_now: false
      },
      modeEdit: false,
      isErrorCoords: false,
      fee: 0
    }
  },
  computed: {
    totalAmount () {
      return this.form.services.reduce((total, item) => {
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
    continueStep () {
      if (localStorage.getItem('JAGAO_SESSION_INFO') === null) {
        this.$q.notify({
          color: 'negative',
          message: 'Please login to continue'
        })
        return
      }

      // validar coordenadas
      if (this.isErrorCoords) {
        this.$q.notify({
          color: 'negative',
          message: 'Please select other location'
        })
        return
      }

      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        this.$q.notify({
          color: 'negative',
          message: 'Please fill all required fields'
        })
        return
      }
      this.$emit('nextStep', 'pay', this.form)
    },
    deleteService (id) {
      this.form.services = this.form.services.filter(item => item.id !== id)
      this.modeEdit = false
    },
    errorCoords () {
      console.log('error confirmar ubicacion')
      this.isErrorCoords = true
      this.$q.notify({
        color: 'negative',
        // mensaje que indica que no se pudo obtener la ubicacion, por lo que se debe seleccionar una que si se pueda
        message: 'We could not get your location, please select other location'
      })
    },
    successCoords () {
      console.log('success confirmar ubicacion')
      this.isErrorCoords = false
    }
  },
  async mounted () {
    this.fee = await this.$getFee()
  },
  validations: {
    form: {
      time: {
        requiredIf: requiredIf(v => !v.right_now)
      },
      date: {
        requiredIf: requiredIf(v => !v.right_now)
      },
      address_id: {
        required
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.style-time {
  background-color: #EDEDED;
  border-radius: 8px;
  padding: 5px 10px 5px 20px;
  height: 50px;
}

.style-input {
  background-color: #EDEDED;
  border-radius: 8px;
  padding: 5px 10px 5px 20px;
}

.style-btn {
  background-color: $primary;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
}

</style>
