<template>
  <q-page>
    <!-- <section
      v-if="!form.category_id"
      class="flex flex-center"
      style="background: #97DDFD; position: relative; height: 175px; border-radius: 12px 12px 0 0"
    >
      <q-btn
        to="/profile/employee"
        dense
        flat
        round
        size="15px"
        icon="arrow_back_ios"
        color="white"
        style="position: absolute; left: 16px; top: 16px;"
      />
      <div class="text-white" style="font-weight: 700; font-size: 25px;">New Service</div>
    </section> -->
    <section
      style="position: relative; height: 175px; border-radius: 12px 12px 0 0; background-color: #97DDFD;overflow:hidden"
    >
      <q-btn
        to="/profile/employee"
        dense
        flat
        round
        size="15px"
        icon="arrow_back_ios"
        color="white"
        style="position: absolute; left: 16px; top: 16px;"
      />
      <img
        v-if="form.category_id"
        :src="$api_url() + 'image/categories/' + form.category_id"
        alt="categori_img"
        width="100%"
        height="100%"
        style="object-fit: fill"
      >
      <img
        v-else
        src="illustrations/14.png"
        alt="categori_img"
        width="100%"
        height="100%"
        style="object-fit: fill"
      >
      <div
        v-if="!form.category_id"
        class="text-primary"
        style="font-weight: 700; font-size: 25px;position: absolute; left: 16px; top: 35%;"
      >New Service</div>
    </section>

    <section class="row q-pa-md q-gutter-y-lg">
      <div class="row col-12">
        <div class="col-12 text-primary" style="font-weight: 700; font-size: 25px;">Category</div>
        <q-select
          v-model="form.category_id"
          :options="categories"
          style="background-color: #EDEDED;"
          class="col-12 q-mt-sm no-border-inputs"
          dense
          borderless
          option-value="id"
          option-label="name"
          map-options
          emit-value
        >
          <template v-slot:selected-item="scope">
            <div class="text-primary">{{ scope.opt.name }}</div>
          </template>
        </q-select>
      </div>

      <div v-if="form.category_id" class="col-12 text-primary text-bold" style="font-size: 25px; font-weight: 700;">Subcategory</div>
      <!-- <div class="col-12" style="font-size: 16px;color: #5C5C5C">Select category</div> -->

      <section
        v-if="form.category_id"
        class="row col-12"
      >
        <q-list class="col-12 q-gutter-y-md">
          <select-s-category-item
            v-for="(item, index) in subcategories"
            :key="index"
            v-model="item.select"
            v-bind="item"
            :hasOperatorBtn="false"
          />
        </q-list>
      </section>

      <div
        v-if="form.category_id && (!subcategories || subcategories.length == 0)"
        class="col-12 row justify-center"
      >
        <img src="illustrations/6.svg" alt="ilus1">
      </div>

      <div class="col-12 row justify-center q-pt-lg" v-if="form.category_id">
        <q-btn
          @click="saveService"
          label="Work"
          color="primary"
          unelevated
          class="col-12 style-btn"
          no-caps
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import SelectSCategoryItem from '../../../components/services/SelectSCategoryItem.vue'
import { requiredIf } from 'vuelidate/lib/validators'
export default {
  components: { SelectSCategoryItem },
  data () {
    return {
      form: {
        category_id: ''
      },
      categories: [],
      subcategories: []
    }
  },
  watch: {
    'form.category_id' (newValue) {
      if (newValue) {
        this.getData()
      }
    }
  },
  computed: {
    subcategoriesCheck () {
      return this.subcategories.filter(itm => itm.select)
    },
    hasDocumentSCategories () {
      return this.subcategoriesCheck.find(itm => itm.has_document === 1)
    }
  },
  mounted () {
    this.getCategories()
    if (this.$route.query.category_id) {
      this.form.category_id = parseInt(this.$route.query.category_id)
    }
  },
  methods: {
    async getData () {
      await this.$api.get('subcategories_by_category_id/' + this.form.category_id)
        .then(response => {
          this.subcategories = response
        })
    },
    chekerUserSCategories (data) {
      this.$api.get('/specialist_services/category/' + this.form.category_id).then(res => {
        if (res) {
          console.log(res, 'res cheker', this.subcategories, 'subcategories')
          this.subcategories.forEach(itm => {
            itm.select = res.some(item => item.subcategory_id === itm.id)
          })
          console.log(this.subcategories, 'subcategories')
        }
      })
    },
    async saveService () {
      this.$q.loading.show()
      await this.$api.post('specialist_services/category/' + this.form.category_id).then(res => {
        this.$q.loading.hide()
        if (res) {
          this.$router.go(-1)
        }
      })
    },
    clickFileSCategory (refName) {
      console.log(refName, this.$refs[refName][0], 'refs')
      this.$refs[refName][0].$el.click()
    },
    async getCategories () {
      this.$q.loading.show()
      const response = await this.$api.get('categories/specialist/not_worked')
      this.$q.loading.hide()
      if (response) {
        this.categories = response
        this.categories = this.categories.filter(item => item.is_parent !== true)
      }
    },
    subCadena (cadena, longitud) {
      if (cadena.length > longitud) {
        return cadena.substring(0, longitud) + '...'
      } else {
        return cadena
      }
    }
  },
  validations: {
    subcategoriesCheck: {
      $each: {
        documentFile: {
          required: requiredIf(it => it.has_document === 1)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

.style-btn {
  background-color: $primary;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
}

.style-input-document {
  cursor: pointer;
  border-radius: 8px;
  height: 60px;
  background-color: $primary;
}

.container-name-file {
  border: 4px solid $primary;
  padding: 5px;
  border-radius: 8px;
  background-color: #D9F2EE;
}

</style>
