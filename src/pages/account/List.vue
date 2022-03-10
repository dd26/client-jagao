<template>
  <q-page>
    <div class="q-pa-md">
      <q-btn
        color="secondary"
        icon="arrow_back_ios"
        round
        flat
        size="15px"
        to="/settings"
      />
    </div>

    <div style="height: 166px" class="q-pa-sm">
      <img src="illustrations/3.svg" alt="illustration" width="100%" height="100%">
    </div>

    <div class="text-primary q-pa-md q-pt-lg" style="font-weight: 700; font-size: 20px">
      Registered Accounts
    </div>

    <div
      v-for="n in 2"
      :key="n"
      style="height: 160px"
      class="column q-pa-md"
    >
      <div style="background-color: #D9F2EE; border-radius: 5px;" class="col-12 column">
        <div class="col-9 row">
          <div class="col-12 column q-pa-md q-px-lg">
            <div class="col-5 text-primary" style="font-size: 8px; font-weight: 700;">Bank of America</div>
            <div class="col-5 text-primary" style="font-size: 8px; font-weight: 700;">Isabel Summerton</div>
          </div>
        </div>
        <div class="col-3 row q-px-lg" style="font-weight: 400; font-size: 10px;">
          <div class="col-5">
            ****    ****    ****    1234
          </div>
          <div class="col-6">
            ****    ****    ****    1234
          </div>
        </div>
      </div>
    </div>

    <div class="row q-px-md q-pt-md">
      <q-btn
        to="/accounts/form"
        icon="add"
        color="primary"
        class="col-12"
      />
    </div>

  </q-page>
</template>

<script>
export default {

}
</script>

<style>

</style>
