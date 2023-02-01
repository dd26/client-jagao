<template>
  <section>
    <q-toolbar class="row justify-between bg-primary text-white">
      <div class="text-bold text-h6">Services</div>
    </q-toolbar>

    <div class="row q-px-lg q-pb-md q-pt-lg">
      <div class="col-12 text-primary" style="font-weight: 700; font-size: 20px;">Welcome! </div>
      <div class="col-12" style="font-weight: 400; font-size: 16px; color: #5C5C5C">Let’s start work! </div>
    </div>

    <section class="row q-pt-md q-px-lg justify-center">
      <img src="illustrations/14.svg" alt="ilustratio" width="100%" height="100%">
    </section>

    <section class="row col-12 q-pt-lg q-px-md">
      <div
        class="col-6 row q-px-sm q-py-md"
        v-for="b in services"
        :key="b.id"
      >
        <card-item
          class="col-12"
          v-bind="b"
          @selectCategory="isDlg = true"
        />
      </div>
    </section>

    <q-dialog
      v-model="isDlg"
      persistent
    >
      <q-card class="full-width q-py-md q-pa-md" style="border-radius: 10px">
        <q-card-section>
          <div class="text-h5 text-primary">Sign up</div>
          <p class="text-subtitle1 q-pt-md" style="line-height: 20px;">
            Don't miss the chance to choose from the various services we offer in our application! Register to access this feature and enjoy all the benefits we offer. Don't wait any longer!
          </p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            label="Cancel"
            color="primary"
            flat
            no-caps
            @click="isDlg = false"
          />
          <q-btn
            to="/register"
            color="primary"
            label="Sign up"
            no-caps
            class="q-px-md"
            rounded
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
import CardItem from 'src/components/categories/CardItem.vue'
export default {
  name: 'HomeNoLogout',
  components: { CardItem },
  data () {
    return {
      services: [
        { icon: 'img:vectors/cleaning1.svg', title: 'Cleaning', id: 1 },
        { icon: 'img:vectors/can1.svg', title: 'House Service', id: 2 },
        { icon: 'img:vectors/briefcase1.svg', title: 'Road Service', id: 3 },
        { icon: 'img:vectors/wheel1.svg', title: 'Company Service', id: 4 }
      ],
      isDlg: false
    }
  },
  mounted () {
    this.getCategories()
  },
  methods: {
    async getCategories () {
      this.$q.loading.show()
      const res = await this.$api.get('categories_actives')
      this.$q.loading.hide()
      this.services = res
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
