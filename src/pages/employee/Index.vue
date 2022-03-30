<template>
  <q-page class="q-pt-lg">
    <section class="row q-pa-md">
      <div class="col-12 text-primary text-bold q-pb-sm q-pt-lg"> Hi, {{ name }} </div>

      <q-card class="col-12 card-style text-white q-px-md q-pt-sm" flat>
        <div class="col-12 row">
          <section class="col-12 row">
            <div class="text-bold">My account</div>
            <q-space />
            <div class="row">
              <q-icon name="img:logos/logo3.svg" size="lg" />
            </div>
          </section>

          <section class="row col-12">
            <div class="col-12" style="font-weight: 700; font-size: 37px;">$68,84</div>
            <hr class="col-12 bg-white" style="border-top: 1px;" />
          </section>

          <section class="row col-12 justify-center q-pt-sm">

            <div class="column items-center">
              <q-icon name="img:vectors/arrow1.svg" size="sm" />
              <div>Lorem</div>
            </div>

            <div class="column items-center q-pl-lg">
              <q-icon name="img:vectors/help1.svg" size="sm" />
              <div>Lorem</div>
            </div>

          </section>
        </div>
      </q-card>

      <section class="col-12 row q-pt-lg">
        <div class="col-12 text-primary" style="font-weight: 700; font-size: 18px;">Discover</div>
        <section class="col-12 row q-pt-sm justify-around">
          <div
            v-for="itm in discovers"
            :key="itm.value"
            class="row justify-center"
            :class="mod(itm.value)"
            style="border-radius: 100%; position: relative; width: 70px; height: 70px;"
            v-ripple
            clickable
          >
            <div
              class="q-pa-md"
              style="width: 70px; height: 70px;"
            >
              <img :src="itm.icon" width="100%" height="100%" style="object-fit: contain;" />
            </div>
            <div class="q-pt-xs"> {{itm.title}} </div>
          </div>

        </section>
      </section>

      <section class="q-pa-md q-px-md col-12 q-pt-xl">
        <q-input
          v-model="search"
          dense
          borderless
          placeholder="Find new services"
          class="q-px-md"
          style="background-color: #D9F2EE; border-radius: 100px"
        >
          <q-icon name="search" slot="prepend" color="primary" />
        </q-input>
      </section>

      <section class="row col-12">
        <div class="col-12 text-primary q-pb-sm" style="font-weight: 700; font-size: 18px;">Seggestion</div>
        <q-scroll-area
          class="col-12"
          style="height: 150px;"
          horizontal
        >
          <div class="row no-wrap">
            <q-card
              v-for="n in 3"
              :key="n"
              style="width: 250px; height: 140px; border-radius: 12px; background: #D9F2EE;"
              class="q-my-xs q-ml-sm row text-primary"
            >
              <div class="col-4 row items-center justify-center">
                <q-icon
                  name="img:vectors/home4.svg"
                  size="60px"
                />
              </div>
              <div class="col-8 q-pa-xs q-px-sm row items-center">
                <div style="font-weight: 700; font-size: 16px;">Home Cleaning</div>
                <div class="text-caption" style="color: #B3B3B3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div class="row q-gutter-x-sm">
                  <q-icon name="img:vectors/location1.svg" size="xs" color="primary" />
                  <div class="text-caption">20/03/2022</div>
                </div>
              </div>
            </q-card>
          </div>
        </q-scroll-area>
      </section>

      <section
        class="col-12 row text-primary q-pt-md q-pb-sm"
      >
        <q-icon
          name="keyboard_double_arrow_right"
          size="sm"
          color="primary"
        />
        <div>see more</div>
      </section>

    </section>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      search: null,
      name: 'Elizabeth',
      discovers: [
        { title: 'Lorem', value: 1, icon: 'vectors/home3.svg' },
        { title: 'Lorem', value: 2, icon: 'vectors/can2.svg' },
        { title: 'Lorem', value: 3, icon: 'vectors/icon2.svg' },
        { title: 'Lorem', value: 4, icon: 'vectors/icon3.svg' }
      ]
    }
  },
  methods: {
    mod (value) {
      return value % 2 === 0 ? 'bg-secondary' : 'bg-primary'
    }
  }
}
</script>

<style lang="scss" scoped>
.card-style {
  background: linear-gradient(254.28deg, #00A58D 4.05%, #85D6D6 98.2%);
  height: 180px;
  border-radius: 10px;
}

</style>
