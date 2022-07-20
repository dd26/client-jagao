<template>
  <q-card class="q-pt-sm q-px-sm q-pb-md" style="border-radius: 12px;">
    <q-card-section class="row">
      <section class="col-12 row">
        <div class="text-primary" style="font-size: 20px;">Change date</div>
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
      </section>
    </q-card-section>
    <q-card-actions align="right" class="row justify-center q-pt-xl">
      <q-btn
        label="Cancel"
        flat
        color="negative"
        unelevated
        v-close-popup
        no-caps
        class="text-bold style-btn-cancel"
      />
      <q-btn
        label="Save"
        class="style-btn"
        unelevated
        @click="save"
        no-caps
        :disabled="$v.form.$invalid"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { requiredIf } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {
        right_now: false,
        date: '',
        time: ''
      }
    }
  },
  methods: {
    save () {
      if (this.$v.form.$invalid) {
        return
      }
      this.$emit('save', this.form)
    }
  },
  validations: {
    form: {
      date: {
        requiredIf: requiredIf(v => !v.right_now)
      },
      time: {
        requiredIf: requiredIf(v => !v.right_now)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.style-btn {
  background-color: $primary;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  width: 100px;
}
.style-btn-cancel {
  background-color: $negative;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 40px;
  font-weight: 700;
  color: #fff !important;
  font-size: 16px;
  width: 100px;
}
.style-time {
  background-color: #EDEDED;
  border-radius: 8px;
  padding: 5px 10px 5px 20px;
  height: 50px;
}

</style>
