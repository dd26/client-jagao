<template>
  <q-page
    class="q-pb-xl"
    style="background-color: #D9F2EE; overflow: auto;"
  >
    <div class="row q-pt-md q-px-md">
      <q-btn
        to="/profile/change-role"
        dense
        flat
        size="11px"
        icon="img:vectors/back1.svg"
      />
    </div>

    <section
      class="row q-px-lg"
    >
      <div
        class="col-12 text-h6 text-primary text-bold q-pt-sm"
      >
        Choose the category in wich you want to provide services
      </div>

      <section
        v-for="b in categories"
        :key="b.id"
        class="row col-12 q-gutter-y-md q-pt-md"
      >
        <CardItemExpansion
          v-model="b.selected"
          v-bind="b"
          class="col-12 bg-white"
        />
      </section>

      <section class="col-12 row">
        <div
          class="col-12 text-primary text-bold q-pt-lg text-h6"
        >
          Attach your ID here
        </div>
        <UploadFile
          v-model="form.fileId"
          name-first-holder="Touch here to upload your ID"
          class="col-12 q-mt-sm"
          filter-file-type=".jpg, .jpeg, .png, .pdf"
        />

        <div
          class="col-12 text-primary text-bold q-pt-lg text-h6"
        >
          Attach your CV here
        </div>
        <UploadFile
          v-model="form.fileCv"
          name-first-holder="Touch here to upload your CV"
          class="col-12 q-mt-sm"
          filter-file-type=".pdf"
        />

      </section>

      <section class="row q-pt-md q-px-lg">
        <p
          class="col-12 text-center"
          style="color: #5C5C5C"
        >
          When all your information has been validated you can use our tools to get the services!
        </p>

        <p class="text-center col-12 text-primary text-bold">
          You will receive a notification when your profile is validated.
        </p>
      </section>

      <section class="row col-12 q-pt-md">
        <q-btn
          @click="submitData"
          class="col-12 text-bold"
          label="Send Request"
          no-caps
          color="primary"
          text-color="white"
          rounded
        />
      </section>
    </section>
  </q-page>
</template>

<script>
import CardItemExpansion from 'src/components/categories/CardItemExpansion.vue'
import UploadFile from 'src/components/UploadFile.vue'
import { required } from 'vuelidate/lib/validators'
export default {
  components: {
    CardItemExpansion,
    UploadFile
  },
  data () {
    return {
      title: 'Change Role',
      categories: [],
      form: {
        categories: [],
        fileId: null,
        fileCv: null
      }
    }
  },
  validations () {
    return {
      form: {
        fileId: {
          required
        },
        fileCv: {
          required
        }
      }
    }
  },
  mounted () {
    this.getCategories()
  },
  methods: {
    async submitData () {
      this.$q.loading.show()
      const categories = this.categories.filter((b) => b.selected).map((b) => b.id)
      this.form.categories = categories
      // console.log(categories, 'categories')
      this.$v.form.$touch()
      if (this.$v.$invalid) {
        this.$q.loading.hide()
        return this.$q.notify({
          message: 'Please fill all the fields',
          color: 'negative',
          icon: 'warning'
        })
      }

      const formData = new FormData()
      formData.append('identity_document', this.form.fileId)
      formData.append('resume', this.form.fileCv)
      formData.append('categories', JSON.stringify(this.form.categories))
      const res = await this.$api.post('customer_to_specialist', formData)

      console.log(res, 'res')
      if (res) {
        this.$q.notify({
          message: 'Your request has been sent',
          color: 'positive',
          icon: 'check'
        })
        this.$router.push('/dynamic_success?message=Your request has been sent&to=/profile/client&icon=done')
      }
      this.$q.loading.hide()
    },
    async getCategories () {
      this.$q.loading.show()
      const res = await this.$api.get('categories_actives')
      this.$q.loading.hide()
      this.categories = res.map((b) => {
        return {
          ...b,
          selected: false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
