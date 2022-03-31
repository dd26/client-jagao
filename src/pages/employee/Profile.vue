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
      <q-btn
        to="/settings"
        dense
        flat
        round
        size="15px"
        icon="img:vectors/tools1.svg"
      />
    </div>

    <section class="row justify-center">
      <div class="col-6 row justify-center" style="position:relative;max-width: 150px;">
        <q-avatar size="150px">
          <img :src="avatarUrl" width="100%" height="100%">
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
    </section>

    <section class="col-12 row q-px-xl q-pt-md">
      <q-expansion-item
        v-model="expanded"
        class="style-expansion-item col-12 text-primary"
        style="font-size: 20px; font-weight: 700;"
      >
        <template v-slot:header>

          <q-item-section>
            {{ stateObj.name }}
          </q-item-section>

          <q-item-section side>
            <q-badge rounded :color="stateObj.color" />
          </q-item-section>
        </template>

        <q-item
          v-for="itm in states"
          :key="itm.id"
          @click="changeState(itm.id)"
          clickable
        >
          <q-item-section>
            <q-item-label>
              {{ itm.name }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-badge rounded :color="itm.color" />
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </section>

    <section class="col-12 q-pa-lg row justify-between q-gutter-y-lg">
      <div class="text-primary col-12" style="font-weight: 700; font-size: 20px;">My active services</div>
      <ItemServices
        v-for="itm in services"
        :key="itm.id"
        :itm="itm"
        class="col-5"
      />
      <q-card
        class="card-style-items flex flex-center col-5"
        @click="$router.push('/services/form')"
      >
        <div class="row justify-center">
          <div class="col-6 style-icon row items-center justify-center">
            <q-icon name="add" size="44px" color="primary" />
          </div>
          <div class="col-12 text-center q-pt-sm text-primary" style="font-size:20px; font-weight: 700; line-height: 18px;"> New Service </div>
        </div>
      </q-card>
    </section>

  </q-page>
</template>

<script>
import ItemServices from '../../components/ItemServices.vue'
export default {
  components: {
    ItemServices
  },
  data () {
    return {
      hasVerified: false,
      name: 'Isabel Summerton',
      states: [
        { name: 'Available', id: 1, color: 'positive' },
        { name: 'Occupied', id: 2, color: 'orange' },
        { name: 'Not available', id: 3, color: 'negative' }
      ],
      state: 1,
      expanded: false,
      services: [
        { progress: '00/04', icon: 'img:vectors/cleaning1.svg', title: 'Cleaning', id: 1 },
        { progress: '00/04', icon: 'img:vectors/can1.svg', title: 'House Service', id: 2 },
        { progress: '00/04', icon: 'img:vectors/briefcase1.svg', title: 'Road Service', id: 3 },
        { progress: '00/04', icon: 'img:vectors/wheel1.svg', title: 'Company Service', id: 4 }
      ],
      avatarUrl: 'vectors/avatar2.svg'
    }
  },
  computed: {
    stateObj () {
      return this.states.find(state => state.id === this.state)
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const user = await this.$getUserInfo()
      if (user) {
        this.name = user.name
        this.hasVerified = user.verified
        const folder = user.role_id === 3 ? 'customers' : 'specialists'
        this.role = user.role_id
        this.avatarUrl = `${this.$api_url()}image/${folder}/${user.id}`
      }
    },
    changeState (id) {
      this.state = id
      this.expanded = false
    }
  }
}
</script>

<style scoped lang="scss">
.verified-style {
  background-color: rgb(255, 255, 255);
  padding: 5px;
  border-radius: 50%;
}

.style-expansion-item {
  background-color: #D9F2EE;
  border-radius: 8px;
}

.card-style-items {
  background: #D9F2EE;
  height: 180px;
  border-radius: 16px
}
.style-icon {
  border-radius: 50%;
  background-color: #FFF;
  padding: 15px;
}

</style>
