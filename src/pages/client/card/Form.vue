<template>
  <q-page>
    <div class="row q-pt-md q-px-md">
      <q-btn
        to="/home"
        dense
        flat
        size="11px"
        icon="img:vectors/back1.svg"
      />
      <q-space />
      <q-btn
        dense
        flat
        round
        size="15px"
        icon="img:vectors/tools1.svg"
      />
    </div>

    <div class="text-center text-primary" style="font-size: 25px; font-weight: 700;">Add a card</div>
    <section class="q-pa-lg">
      <q-card class="column card-style">
        <div class="col-7 row" style="position:relative">
          <img src="vectors/card3.svg" height="100%" class="img-card" >
          <div class="blur-bg text-white">
            Cards
          </div>
        </div>
        <div class="col-5 q-pa-md">
          <div class="row">
            <div class="col-12" style="font-weight: 400; font-size: 20px;"> {{ form.cardNumber ? form.cardNumber : '**** **** **** ****' }} </div>
            <div class="col-12" style="font-weight: 400; font-size: 20px;"> {{ form.expiredDate ? form.expiredDate : '**/**' }} </div>
          </div>
        </div>
      </q-card>
    </section>

    <section class="row q-pa-md q-px-lg">
      <div class="text-primary" style="font-weight: 700; font-size: 20px">Card Details</div>

      <div class="col-12 row q-pt-md">
        <div class="col-12 q-pb-sm">Name on card</div>
        <q-input
          v-model="form.name"
          dense
          class="col-12"
          style="background: #EDEDED"
          placeholder="Name on card"
          outlined
        />
      </div>

      <div class="col-12 row q-pt-md">
        <div class="col-12 q-pb-sm">Card number</div>
        <q-input
          v-model="form.cardNumber"
          dense
          class="col-12"
          style="background: #EDEDED"
          placeholder="1234 5678 9101 1112"
          outlined
        />
      </div>

      <div class="col-12 row justify-between">
        <div class="col-5 row q-pt-md">
          <div class="col-12 q-pb-sm">Expiry date</div>
          <q-input
            v-model="form.expiredDate"
            dense
            class="col-12"
            style="background: #EDEDED"
            placeholder="12/34"
            outlined
            mask="##/##"
          />
        </div>

        <div class="col-5 row q-pt-md">
          <div class="col-12 q-pb-sm">Security code</div>
          <q-input
            v-model="form.securityCode"
            dense
            class="col-12"
            style="background: #EDEDED"
            placeholder="123"
            outlined
          />
        </div>
      </div>

      <div class="col-12 row q-pt-md">
        <div class="col-12 q-pb-sm">Zip / Postal code</div>
        <q-input
          v-model="form.postalCode"
          dense
          class="col-12"
          style="background: #EDEDED"
          placeholder="12345"
          outlined
        />
      </div>

      <div class="col-12 row justify-center q-pt-lg">
        <q-btn
          to="/success?message=You successfully added a card!"
          dense
          color="primary"
          icon="add"
          round
          size="xl"
        />
      </div>

    </section>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {

      }
    }
  }
}
</script>

<style lang="scss" scoped>

.card-style {
  height: 200px;
  border-radius: 12px;
  box-shadow: 0px 8px 11px 0px #0000001F;
}
.img-card {
  object-fit: cover;
  width: 100%;
  border-radius: 12px 12px 0 0;
}

.blur-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #A8E4FF 24.48%, rgba(168, 228, 255, 0.696552) 69.27%, rgba(168, 228, 255, 0) 100%);
  border-radius: 12px 12px 0 0;
  font-weight: 700;
  font-size: 20px;
  padding: 15px;
}

</style>
