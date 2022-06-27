<template>
  <section
    class="row"
    @click="$router.push('/services/detail/' + master_request_service_id + '/customer')"
  >
    <div class="col-12" style="font-size: 12px; font-weight: 400; color: #B3B3B3">{{date}}</div>
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
    <q-separator class="col-12 q-mt-md bg-grey-5" style="height: 0.01em;" />
  </section>
</template>

<script>
import { date } from 'quasar'
export default {
  props: ['title', 'content', 'created_at', 'user', 'master_request_service_id', 'employee'],
  computed: {
    date () {
      return date.formatDate(this.created_at, 'MMM DD, YYYY')
    }
  }
}
</script>
