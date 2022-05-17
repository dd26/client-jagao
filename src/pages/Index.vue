<template>
  <q-page class="q-pb-md">
    <section class="bg-image-card row items-center justify-start q-px-xl">
      <div class="row">
        <div class="col-12" style="font-weight: 400; font-size: 16px;">Hello, {{user.name ? user.name : user.user.name}}! </div>
        <div class="text-primary col-12" style="font-weight: 700; font-size: 20px;">Let’s start work! </div>
      </div>
    </section>

    <section class="q-pa-md q-px-lg">
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

    <section class="q-px-lg row">
      <div class="col-12 text-left text-primary" style="font-size: 25px; font-weight: 700">Active Services</div>
      <q-scroll-area
        class="col-12"
        style="height: 140px;"
        horizontal
      >
        <div class="row no-wrap">
          <q-card
            v-for="n in 3"
            :key="n"
            style="width: 250px; height: 130px; border-radius: 12px;"
            class="bg-primary q-my-xs q-ml-sm row no-shadow"
          >
            <div class="col-4 row items-center justify-center">
              <q-icon
                name="img:vectors/home1.svg"
                size="40px"
              />
            </div>
            <div class="col-8 q-pa-xs q-px-sm row items-center">
              <div class="text-white" style="font-weight: 700; font-size: 16px;">Home Cleaning</div>
              <div class="text-white text-caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div class="row q-gutter-x-sm">
                <q-icon name="bi-calendar-event" size="xs" color="white" />
                <div class="text-caption text-white">20/03/2022</div>
              </div>
            </div>
          </q-card>
        </div>
      </q-scroll-area>
    </section>

    <section class="row q-pt-xl">
      <div class="col-12 text-center text-primary" style="font-size: 25px; font-weight: 700">Services</div>

      <section class="row col-12 justify-around q-gutter-y-lg q-pt-lg">
        <q-card
          v-for="itm in services"
          :key="itm.id"
          class="card-style-items col-5 flex flex-center"
        >
          <div class="row justify-center">
            <div class="col-6 style-icon row items-center justify-center">
              <q-icon :name="itm.icon" size="44px" />
            </div>
            <div class="col-12 text-center q-pt-sm text-primary" style="font-size:20px; font-weight: 700; line-height: 18px;"> {{itm.title}} </div>
          </div>
        </q-card>
      </section>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      search: '',
      user: {
        name: 'Isabel'
      },
      services: [
        { icon: 'img:vectors/cleaning1.svg', title: 'Cleaning', id: 1 },
        { icon: 'img:vectors/can1.svg', title: 'House Service', id: 2 },
        { icon: 'img:vectors/briefcase1.svg', title: 'Road Service', id: 3 },
        { icon: 'img:vectors/wheel1.svg', title: 'Company Service', id: 4 }
      ]
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      this.user = await this.$getUserInfo()
    }
  }
}
</script>

<style lang="scss" scoped>

.style-icon {
  border-radius: 50%;
  background-color: #FFF;
  padding: 15px;
}

.bg-image-card {
  background-image: url('../../public/vectors/card1.svg');
  background-size: cover;
  background-position: center;
  height: 175px;
  width: 100%;
  border-radius: 20px 20px 0 0;
}

.card-style-items {
  background: #D9F2EE;
  height: 180px;
  border-radius: 16px
}

</style>
