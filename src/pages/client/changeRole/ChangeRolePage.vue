<template>
  <q-page class="q-pb-xl">
    <div class="row q-pt-md q-px-md">
      <q-btn
        to="/profile/client"
        dense
        flat
        size="11px"
        icon="img:vectors/back1.svg"
      />
    </div>
    <section
      class="row"
    >
      <!-- Avatar, Name, Role -->
      <section class="row justify-center col-12">
        <q-avatar
          size="120px"
        >
          <img :src="avatarUrl">
        </q-avatar>

        <div class="col-12 text-center">
          <div
            class="text-h6 q-px-md text-primary"
            style="font-size: 20px;"
          >{{ UserInfo.name }}</div>
          <div
            class="q-px-md text-grey-6"
            style="font-size: 12px;"
          >Customer</div>
        </div>
      </section>

      <!-- Profile information -->
      <section
        v-if="UserInfo && customer"
        class="col-12 q-px-md row q-gutter-y-md"
      >
        <div
          class="row col-12 text-primary text-bold q-pt-lg"
          style="font-size: 20px;"
        >
          Profile information
        </div>

        <!-- Your Name -->
        <div
          class="col-12 row"
        >
          <div
            class="q-pb-xs"
            style="font-size: 16px; color: #3C3C3C"
          >Your name</div>
          <q-input
            v-model="UserInfo.name"
            dense
            class="col-12"
            readonly
            borderless
            :input-style="inputsStyle"
          />
        </div>

        <!-- User Name -->
        <div
          class="col-12 row"
        >
          <div
            class="q-pb-xs"
            style="font-size: 16px; color: #3C3C3C"
          >User name</div>
          <q-input
            v-model="customer.userName"
            dense
            class="col-12"
            readonly
            borderless
            :input-style="inputsStyle"
          />
        </div>

        <!-- Birth Date, separado por 3 inputs, DD MM YYYY -->
        <div
          class="col-12 row"
        >
          <div
            class="q-pb-xs"
            style="font-size: 16px; color: #3C3C3C"
          >Birth date</div>
          <div class="row col-12 q-pt-xs justify-between">
            <div
              :style="inputsStyle"
              style="width: 20%; height: 45px"
              class="row items-center justify-center"
            >
              {{ birthDate.day }}
            </div>
            <div
              :style="inputsStyle"
              style="width: 20%; height: 45px"
              class="row items-center justify-center"
            >
              {{ birthDate.month }}
            </div>
            <div
              :style="inputsStyle"
              style="width: 40%; height: 45px"
              class="row items-center justify-center"
            >
              {{ birthDate.year }}
            </div>
          </div>
        </div>

        <!-- ID -->
        <div
          class="col-12 row"
        >
          <div
            class="q-pb-xs"
            style="font-size: 16px; color: #3C3C3C"
          >ID</div>
          <q-input
            v-model="customer.identification"
            dense
            class="col-12"
            readonly
            borderless
            :input-style="inputsStyle"
          />
        </div>

        <!-- Phone -->
        <div
          class="col-12 row"
        >
          <div
            class="q-pb-xs"
            style="font-size: 16px; color: #3C3C3C"
          >Phone</div>
          <q-input
            v-model="customer.phone"
            dense
            class="col-12"
            readonly
            borderless
            :input-style="inputsStyle"
          />
        </div>

        <!-- Country -->
        <div
          class="col-12 row"
        >
          <div
            class="q-pb-xs"
            style="font-size: 16px; color: #3C3C3C"
          >Country</div>
          <q-input
            v-model="country"
            dense
            class="col-12"
            readonly
            borderless
            :input-style="inputsStyle"
          />
        </div>

        <!-- City -->
        <div
          class="col-12 row"
        >
          <div
            class="q-pb-xs"
            style="font-size: 16px; color: #3C3C3C"
          >City</div>
          <q-input
            v-model="customer.city.name"
            dense
            class="col-12"
            readonly
            borderless
            :input-style="inputsStyle"
          />
        </div>

        <!-- Address -->
        <div
          class="col-12 row"
        >
          <div
            class="q-pb-xs"
            style="font-size: 16px; color: #3C3C3C"
          >Address</div>
          <q-input
            v-model="customer.address"
            dense
            class="col-12"
            readonly
            borderless
            :input-style="inputsStyle"
          />
        </div>

        <!-- Zipcode -->
        <div
          class="col-12 row"
        >
          <div
            class="q-pb-xs"
            style="font-size: 16px; color: #3C3C3C"
          >Zipcode</div>
          <q-input
            v-model="customer.zip_code"
            dense
            class="col-12"
            readonly
            borderless
            :input-style="inputsStyle"
          />
        </div>
      </section>

      <!-- Button Next -->
      <div class="col-12 row justify-end q-pa-md">
        <q-btn
          class="col-12"
          label="Next"
          no-caps
          color="primary"
          text-color="white"
          rounded
          @click="next"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ChangeRolePage',
  data () {
    return {
      title: 'Change Role',
      avatarUrl: 'vectors/avatar2.svg',
      customer: null,
      inputsStyle: {
        border: '1px solid #D4D4D4',
        borderRadius: '8px',
        padding: '10px',
        color: '#B3B3B3'
      }
    }
  },
  mounted () {
    this.getAvatarUrl()
  },
  computed: {
    birthDate () {
      const date = new Date(this.customer.birthDate)
      return {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      }
    },
    country () {
      return 'United States'
    }
  },
  methods: {
    ...mapGetters('generals', ['UserInfo']),
    getAvatarUrl () {
      const userState = this.UserInfo()
      if (userState) {
        this.avatarUrl = `${this.$api_url()}image/customers/${userState.customer.id}`
        this.customer = userState.customer
      } else {
        this.avatarUrl = 'vectors/avatar2.svg'
      }
    },
    next () {
      this.$router.push('/profile/change-role/form')
    }
  }
}
</script>

<style lang="scss" scoped>
// cuando el input es readonly
.input-readonly {
  background-color: #F5F5F5;
  color: #000;
  font-size: 20px;
}
</style>
