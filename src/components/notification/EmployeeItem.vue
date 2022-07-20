<template>
  <section
    class="row"
    @click="goRoute"
  >
    <section class="col-12 row" v-if="type == 2">
      <div class="col-12" style="font-size: 12px; font-weight: 400; color: #B3B3B3">{{date}}</div>
      <div class="row items-center q-col-gutter-x-md">
        <div class="column col-9">
          <div>{{title}}</div>
          <div class="row">
            <section class="col-6 column items-start">
              <div class="" style="color: #B3B3B3; font-size: 12px;">Before</div>
              <div
                class="text-bold"
                style="color: #80D3C6; font-size: 16px; text-decoration-line: line-through;"
              > {{contentObject.before ? formatDate(contentObject.before, 'DD/MM/YYYY HH:mm') : 'Right Now'}} </div>
            </section>
            <section class="col-6 column items-start">
              <div style="color: #B3B3B3; font-size: 12px;">After</div>
              <div class="text-bold" style="color: #00A78E; font-size: 16px"> {{contentObject.after ? formatDate(contentObject.after, 'DD/MM/YYYY HH:mm') : 'Right Now'}} </div>
            </section>
          </div>
        </div>
        <div class="col-3">
          <q-avatar>
            <img :src="$api_url() + 'image/customers/' + customer.id" />
          </q-avatar>
        </div>
      </div>
      <q-separator class="col-12 q-mt-md bg-grey-5" style="height: 0.01em;" />
    </section>
    <section
      class="col-12 row"
      v-else
    >
      <!-- <div class="col-12" style="font-size: 12px; font-weight: 400; color: #B3B3B3">{{date}}</div>
      <div class="row items-center q-col-gutter-x-md">
        <div class="column col-9">
          <div>{{title}}</div>
          <div class="text-primary q-pt-sm" style="font-size: 16px; font-weight: 600;">{{content}}</div>
        </div>
        <div class="col-3">
          <q-avatar>
            <img :src="$api_url() + 'image/customers/' + employee.id" />
          </q-avatar>
        </div>
      </div>
      <q-separator class="col-12 q-mt-md bg-grey-5" style="height: 0.01em;" /> -->
      <div class="col-12" style="font-size: 12px; font-weight: 400; color: #B3B3B3">{{date}}</div>
      <div class="row items-start q-col-gutter-x-md">
        <div class="column col-9">
          <div>{{title}}</div>
          <q-expansion-item
            expand-separator
            label="See required services"
            :header-class="master_request_service.state !== 404 ? 'text-primary' : 'text-negative'"
            style="font-weight: 700; font-size: 13px; padding: 0 !important"
            expand-icon-class="text-primary"
          >
            <q-card class="q-pl-xl" style="font-weight: 400;">
              <div class="text-bold"> {{master_request_service.category_name}} </div>
              <li
                v-for="item in detail_request_services"
                :key="item.id"
              >{{item.quantity}} {{ item.service_name }}</li>
            </q-card>
          </q-expansion-item>
          <!-- <div v-if="item === 1" class="row items-center text-negative">
            <div class="col-1">
              <q-icon name="close" color="negative" size="sm" />
            </div>
            <div class="col-11 q-pl-sm">You declined the request for services.</div>
          </div> -->
        </div>
        <div class="col-3">
          <q-avatar>
            <img :src="$api_url() + 'image/customers/' + customer.id" />
          </q-avatar>
        </div>
      </div>
      <q-separator class="col-12 q-mt-md bg-grey-5" style="height: 0.01em;" />
    </section>
  </section>
</template>

<script>
import { date } from 'quasar'
export default {
  props: [
    'title', 'content', 'created_at', 'user', 'master_request_service_id', 'employee', 'user_id',
    'master_request_service', 'type', 'customer', 'detail_request_services'
  ],
  computed: {
    date () {
      return date.formatDate(this.created_at, 'MMM DD, YYYY')
    },
    contentObject () {
      if (this.type === '2') {
        return JSON.parse(this.content)
      }
      return this.content
    }
  },
  methods: {
    formatDate (dateFormat, format) {
      return date.formatDate(dateFormat, format)
    },
    goRoute () {
      if (this.type === '2') {
        this.$router.push('/services/detail/' + this.master_request_service_id + '/employee')
      }
    }
  }
}
</script>
