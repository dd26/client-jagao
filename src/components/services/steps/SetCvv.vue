<template>
  <section class="row">

    <section class="col-12 row items-start">
      <div>
        <q-icon
          name="img:vectors/icon13.svg"
        />
      </div>
      <div class="col-11">
        <div class="text-primary q-pl-sm" style="font-weight: 700; font-size: 20px; margin-top: -3px">CVV</div>
        <div class="q-pl-sm" style="font-size: 16px; color: #3C3C3C">Please enter the cvv code on the back of the card you selected.</div>
      </div>
    </section>

    <section class="row col-12 q-pt-lg items-center justify-around q-gutter-x-sm">
      <div class="col-4 row">
        <div class="col-12 row">
          <q-input
            v-model="cvv"
            dense
            flat
            round
            size="15px"
            placeholder="123"
            mask="###"
            input-style="color: #00A58D; text-align: center"
            class="col-12 style-input"
            borderless
            :error="$v.cvv.$error"
            @blur="$v.cvv.$touch()"
          />
        </div>
      </div>
      <q-btn
        dense
        color="primary"
        class="col-5 style-btn"
        no-caps
        unelevated
        label="Pay"
        @click="pay"
      />
    </section>

  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  props: ['value'],
  data () {
    return {
      cvv: this.value
    }
  },
  watch: {
    cvv () {
      this.$emit('input', this.cvv)
    }
  },
  methods: {
    pay () {
      this.$v.cvv.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.$emit('pay')
    }
  },
  validations: {
    cvv: {
      required
    }
  }
}
</script>

<style lang="scss" scoped>
.style-btn {
  background: #00A78E;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.34);
  border-radius: 8px;
  height: 40px;
}

</style>
