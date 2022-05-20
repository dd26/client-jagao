<template>
  <q-page>
    <div class="col-12 row q-pa-md q-pt-xl q-px-lg">
      <q-btn
        icon="arrow_back_ios"
        round
        color="secondary"
        size="sm"
        flat
        @click="$router.go(-1)"
      />
      <div
        class="text-primary col-12 text-center"
        style="font-size: 25px; font-weight: 700;"
      >Service #123456</div>
    </div>

    <section class="row q-px-xl justify-center" style="position: relative">
      <section
        class="row col-11 text-center status-style justify-around text-bold items-center"
        style="font-size: 20px;"
      >
        <div class="col-1" />
        <div>Pending</div>
        <div class="badge-style" :class="'bg-red'"></div>
      </section>
      <q-popup-proxy
        transition-show="flip-up"
        transition-hide="flip-down"
      >
        <q-banner
          class="bg-primary text-white q-pa-lg"
          style="border-radius: 10px;"
        >
          <p>
            When you start to perform the service, remember to mark that it is <b> already in </b> progress to notify the applicant.
            <br> <br>
            Likewise when you finish, <b> remember to mark it as finished! </b>

          </p>
          <div class="row justify-end">
            <q-btn
              label="Ok!"
              round
              color="white"
              class="text-bold"
              no-caps
              text-color="primary"
              v-close-popup
            />
          </div>
        </q-banner>
      </q-popup-proxy>
    </section>

    <section class="row q-px-lg">
      <div class="text-bold text-primary q-py-lg text-h6">Requeriments</div>
      <s-category-item class="col-12" />
    </section>

    <section class="row q-py-lg q-px-xl justify-center q-pt-xl">
      <q-btn
        label="Cancel"
        class="q-py-sm q-px-xl q-mt-md"
        style="border-radius: 8px; background-color: #E23D3D; color: white;"
      />
    </section>
  </q-page>
</template>

<script>
import SCategoryItem from '../../../components/services/SCategoryItem'
export default {
  components: { SCategoryItem }
}
</script>

<style lang="scss" scoped>

.status-style {
  background-color: #D9F2EE;
  border-radius: 8px;
  height: 45px;
  color: $primary;
}

.badge-style {
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.q-banner::before {
  content: '';
  position: absolute;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  width: 25px;
  height: 25px;
  background-color: $primary;
  top: 34%;
  left: 46%;
}

</style>
