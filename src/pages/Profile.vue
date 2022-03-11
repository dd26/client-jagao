<template>
  <q-page class="q-pb-xl">
    <div class="row q-pt-md q-px-md">
      <q-btn
        to="/home"
        dense
        flat
        size="11px"
        icon="img:vectors/back1.svg"
      />
      <q-space />
      <div class="column items-center justify-center q-gutter-y-xs">
        <q-btn
          dense
          round
          color="primary"
          size="15px"
          icon="img:vectors/call1.svg"
        />
        <div>Call</div>
      </div>
    </div>

    <section class="row justify-center">
      <div class="col-6 row justify-center" style="position:relative;max-width: 150px;">
        <q-avatar size="150px">
          <img src="vectors/avatar2.svg" width="100%" height="100%">
        </q-avatar>
        <div class="absolute-bottom-right q-mr-sm verified-style">
          <q-icon :name="!hasVerified ? 'img:vectors/verified1.svg' : 'img:vectors/verified2.svg'" size="lg">
            <q-popup-proxy>
              <q-card class="bg-primary text-white q-pa-md" style="border-radius: 12px;">
                <div style="font-size: 14px;">
                  Hello Isabel, the Jagao® system is verifying your information, once this stage has finished and your account has been activated you will be able to use all our services!
                  <br> <br>
                  <b style="font-weight: 700;"> You will receive a notification when your account is verified!</b>
                </div>
                <q-card-actions align="right">
                  <q-btn
                    dense
                    round
                    size="md"
                    color="white"
                    text-color="black"
                    label="Ok!"
                    no-caps
                    v-close-popup
                  />
                </q-card-actions>
              </q-card>
            </q-popup-proxy>
          </q-icon>
        </div>
      </div>
      <div class="col-12 text-center q-pt-md text-primary" style="font-weight: 700; font-size: 20px;">{{ name }}</div>
      <div class="col-12 text-center q-pt-md" style="font-size: 16px; font-weight: 400;">Miami, Florida, United States.</div>
    </section>

    <section class="q-pt-xl">
      <q-separator inset />
    </section>

    <section class="row q-pt-xl">
      <div class="text-primary q-pl-xl col-12" style="font-size: 20px; font-weight: 700;">Jacob’s addresses</div>

      <section class="row justify-around col-12 q-pt-lg q-gutter-y-md">
        <ItemAddressesProfile
          v-for="n in 4"
          :key="n"
          class="col-5"
        />
      </section>
    </section>

  </q-page>
</template>

<script>
import ItemAddressesProfile from '../components/ItemAddressesProfile.vue'
export default {
  components: { ItemAddressesProfile },
  data () {
    return {
      hasVerified: true,
      name: 'Isabel Summerton'
    }
  }
}
</script>

<style scoped lang="scss">
</style>
