<template>
  <div
    class="bg-primary fit container-footer-info flex flex-center q-pa-md"
  >
    <section class="row q-gutter-x-lg">
      <section class="column items-center">
        <div
          class="section-container-icon flex flex-center"
        >
          <q-icon
            name="img:vectors/car1.svg"
            size="2em"
          />
        </div>
        <span
          class="text-center text-bold q-pt-xs"
          style="color: #C1E4A1; font-size: 16px;"
        >
          {{ estimatedTravelTime.text }}
        </span>
        <span
          class="text-center text-bold text-white"
          style="font-size: 12px;"
        >
          Remaining
        </span>
      </section>

      <section class="column items-center">
        <div
          class="section-container-icon flex flex-center"
        >
          <q-icon
            name="img:vectors/km.svg"
            size="2em"
          />
        </div>
        <span
          class="text-center text-bold q-pt-xs"
          style="color: #C1E4A1; font-size: 16px;"
        >
          {{ distanceInKm }} km
        </span>
        <span
          class="text-center text-bold text-white"
          style="font-size: 12px;"
        >
          Remaining
        </span>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  props: ['estimatedTravelTime', 'distanceInKm'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.container-footer-info {
  border-radius: 12px;
  color: white;
}

.section-container-icon {
  background-color: #FFF;
  border-radius: 100px;
  width: 40px;
  height: 40px;
}
</style>
