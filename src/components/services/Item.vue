<template>
  <q-item class="bg-color-item">
    <q-item-section avatar>
      <q-avatar size="70px" rounded>
        <img src="vectors/icon9.svg" alt="icotest">
      </q-avatar>
    </q-item-section>
    <q-item-section top>
      <q-item-label class="text-primary text-bold">House Cleaning</q-item-label>
      <q-item-label lines="3" caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </q-item-label>
      <q-item-label class="q-pt-sm">
        <div class="row">
          <q-icon name="img:vectors/location2.svg" size="xs" />
          <div class="text-primary" style="font-size: 10px; font-weight: 400;">Lorem ipsum dolor</div>
        </div>
      </q-item-label>
    </q-item-section>
    <q-item-section side top>
      <q-item-label>#123123123</q-item-label>
    </q-item-section>
    <q-btn
      icon="more_vert"
      size="md"
      flat
      dense
      round
      color="primary"
      style="position: absolute; right: 5px; bottom: 5px;"
    >
      <q-menu>
        <q-list style="width: 150px">
          <q-item
            v-ripple
            clickable
            class="bg-negative text-white"
          >
            <q-item-section>
              <q-item-label>
                <div class="row items-center">
                  <q-icon name="close" size="md" />
                  <div class="text-bold q-pt-xs q-pl-xs" style="font-size: 16px">Cancel</div>
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-item>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">

.q-item {
  border-radius: 8px;
  background-color: #D9F2EE;
}

</style>
