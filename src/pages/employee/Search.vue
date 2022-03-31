<template>
  <q-page class="q-pt-lg">
    <section class="row">
      <div class="col-12 q-px-lg">
        <q-btn
          icon="arrow_back_ios"
          flat
          rounded
          dense
          color="secondary"
        />
      </div>
      <section class="q-pa-md q-px-lg row justify-center col-12">
        <q-input
          v-model="search"
          dense
          borderless
          placeholder="Find new services"
          class="q-px-md col-12"
          style="background-color: #D9F2EE; border-radius: 100px"
        >
          <q-icon name="search" slot="prepend" color="primary" />
        </q-input>
      </section>

      <section class="col-12 row justify-center q-pt-xl" v-if="servicesFilter.length === 0 && !search">
        <img src="illustrations/6.svg" alt="ilustration1" width="100%" height="250px">
        <div class="text-primary text-center text-bold text-h5 q-px-xl q-pt-lg">Find new Services with Jagao</div>
      </section>
      <section v-else-if="servicesFilter.length === 0 && search">
        <img src="illustrations/6.svg" alt="ilustration2" width="100%" height="250px">
        <div class="text-primary text-h4 text-bold q-pt-lg text-center">Sorry</div>
        <div class="text-primary text-center text-bold text-h6 q-px-xl q-pt-sm" style="line-height: 25px;">we didn't find any results matching this search</div>
      </section>
      <section v-else class="row col-12 q-pt-lg q-pa-lg q-gutter-y-lg">
        <q-card
          v-for="n in servicesFilter"
          :key="n"
          class="col-12 text-primary q-pa-sm"
          style="background-color: #D9F2EE; border-radius: 12px; height: 130px"
        >
          <section class="row fit">
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
          </section>
        </q-card>
      </section>
    </section>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      search: null,
      services: [
        'Service 1', 'Service 2', 'Service 3', 'Service 4', 'Service 5'
      ]
    }
  },
  computed: {
    servicesFilter () {
      if (this.search) {
        return this.services.filter(service => service.toLowerCase().includes(this.search.toLowerCase()))
      }
      return this.services
    }
  }
}
</script>

<style>

</style>
