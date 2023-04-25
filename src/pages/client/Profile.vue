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
          <q-icon v-if="role_id !== 3" :name="!hasVerified ? 'img:vectors/verified1.svg' : 'img:vectors/verified2.svg'" size="lg">
            <q-popup-proxy>
              <q-card class="bg-primary text-white q-pa-md" style="border-radius: 12px;">
                <div style="font-size: 14px;">
                  Hello {{ name }}, the Jagao® system is verifying your information, once this stage has finished and your account has been activated you will be able to use all our services!
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
      <div
        class="col-12 text-center q-pt-md text-primary"
        style="font-weight: 700; font-size: 20px;"
      >{{ name }}</div>
    </section>

    <section>
      <AddressScroll />
    </section>

    <section>
      <CardScroll />
    </section>

    <btn-change-request-role-to-specialist
      v-if="isShowSentRequest"
      class="row col-12 q-mt-lg q-px-lg"
    />
    <section
      v-else-if="lastRequestData && lastRequestData.status === 'en espera'"
      class="row col-12 q-mt-lg q-pa-sm q-pt-md q-mx-lg items-center justify-center"
      style="background-color: #D9F2EE; border-radius: 12px;"
    >
      <q-avatar
        size="70px"
      >
        <img
          src="vectors/avatar-profile-work.png"
          width="100%"
          height="100%"
          style="border: 3px solid #FFF"
        >
      </q-avatar>
      <div class="col q-px-sm q-pt-md">
        <!-- Mensaje de que la solicitud esta en espera -->
        <p v-if="lastRequestData.status === 'en espera'" class="column q-gutter-y-sm">
          <span
            class="text-h6 text-primary text-bold"
            style="line-height: 20px;"
          >Your request is pending!</span>

          <span class="text-primary text-bold">We will contact you soon.</span>
        </p>
      </div>
    </section>

  </q-page>
</template>

<script>
import AddressScroll from '../../components/AddressScroll.vue'
import CardScroll from '../../components/CardScroll.vue'
import BtnChangeRequestRoleToSpecialist from '../../components/BtnChangeRequestRoleToSpecialist.vue'

export default {
  components: { AddressScroll, CardScroll, BtnChangeRequestRoleToSpecialist },
  data () {
    return {
      hasVerified: false,
      name: 'Isabel Summerton',
      avatarUrl: 'vectors/avatar2.svg',
      role_id: null,
      isShowSentRequest: false,
      lastRequestData: {}
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const user = await this.$getUserInfo()
      this.hasVerified = user.verified
      this.name = user.name ? user.user.name : this.name
      user.role_id = user.user.role_id
      this.role_id = user.role_id
      const folder = user.role_id === 3 ? 'customers' : 'specialists'
      this.role = user.role_id
      this.avatarUrl = `${this.$api_url()}image/${folder}/${user.id}`

      if (user.lastRequest) {
        this.lastRequestData = user.lastRequest
      }

      if (user.lastRequest.status === 'rechazado' || !user.lastRequest) {
        this.isShowSentRequest = true
      }
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

</style>
