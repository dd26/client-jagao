<template>
  <q-page>
    <section
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
      <div class="text-primary" style="font-weight: 700; font-size: 25px;">New Service</div>
    </section>
    <section
      v-else
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
        :src="$api_url() + 'image/categories/' + form.category_id"
        alt="categori_img"
        width="100%"
        height="100%"
        style="object-fit: fill"
      >
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

      <div class="col-12 text-primary text-bold" style="font-size: 25px; font-weight: 700;">Subcategory</div>
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
      <!-- <section
        v-if="hasDocumentSCategories"
        class="col-12 row q-px-md"
        style="position: relative"
      >
        <q-separator class="col-12" style="position:absolute; top: 0; left: 0; border-top: 0.1em solid #737373" />
        <div class="text-primary col-12 text-bold text-h6 q-pt-md">Documentation</div>
        <div class="col-12" style="line-height: 18px; color: #5C5C5C; font-size: 16px">Add the necessary documentation or licenses to verify that you are eligible to perform this service.</div>

        <div
          v-for="(item, index) in subcategoriesCheck"
          :key="index"
          class="q-pt-md col-12"
        >
          <section
            v-if="item.has_document === 1"
            class="col-12 row"
            style="color: #5C5C5C; font-size: 16px"
          >
            <div class="text-primary text-bold col-12" style="font-size: 20px">{{item.name}}</div>
            <div
              v-if="$v.subcategoriesCheck.$each[index].documentFile.$error"
              class="text-negative col-12 text-caption q-pl-xs"
            > Document is required! </div>
            <div
              @click="clickFileSCategory('IDFileRF_' + index)"
              class="col-12 row style-input-document"
            >
              <section class="col-12 row">
                <div class="col-2 row items-center justify-center">
                  <q-icon name="img:vectors/attach1.svg" size="20px" />
                </div>
                <div class="col-10 row justify-start items-center container-name-file">
                  <div class="q-pl-md" style="font-size: 16px;font-weight: 300;color: #B3B3B3">
                    {{ item.documentFile ? subCadena(item.documentFile.name, 19) : 'Attach your ID' }}
                  </div>
                </div>
              </section>
              <q-file
                :ref="'IDFileRF_' + index"
                accept=".jpg, image/*"
                style="display: none;"
                v-model="item.documentFile"
              />
            </div>
          </section>
        </div>

        <section class="row items-start q-pt-lg">
          <q-icon name="img:vectors/icon11.svg" class="col-1 q-pt-xs" />
          <p class="col-11 q-px-xs">
            It will take a few minutes for the system to validate that your documents are in order. <b class="text-primary" style="font-weight: 400;"> We will notify you when it has been approved.</b>
          </p>
        </section>
      </section> -->

      <div
        v-if="!subcategories || subcategories.length == 0"
        class="col-12 row justify-center"
      >
        <img src="illustrations/6.svg" alt="ilus1">
      </div>

      <div
        v-if="subcategoriesCheck.length > 0"
        class="col-12 row justify-center q-pt-lg"
      >
        <!-- <q-btn
          to="/success?message=You successfully added a service!"
          color="primary"
          style="background-color: #EDEDED;"
          icon="add"
          round
          size="20px"
        /> -->
        <q-btn
          @click="saveService"
          color="primary"
          style="background-color: #EDEDED;"
          icon="add"
          round
          size="20px"
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
      let resSub = []
      await this.$api.get('subcategories_by_category_id/' + this.form.category_id)
        .then(response => {
          resSub = response.map(itm => {
            return {
              ...itm,
              select: false,
              documentFile: null
            }
          })
          this.subcategories = resSub
        })
      /* await this.$api.get('/specialist_services/category/' + this.form.category_id).then(res => {
        console.log(this.subcategories, 'getData', resSub)
        this.subcategories = resSub.map(itm => {
          return {
            ...itm,
            select: res.some(itm2 => itm2.subcategory_id === itm.id)
          }
        })
        console.log(this.subcategories, 'getData', resSub)
      }) */
    },
    chekerUserSCategories (data) {
      this.$api.get('/specialist_services/category/' + this.form.category_id).then(res => {
        if (res) {
          console.log(res, 'res cheker', this.subcategories, 'subcategories')
          this.subcategories.forEach(itm => {
            itm.select = res.some(item => item.subcategory_id === itm.id)
          })
          console.log(this.subcategories, 'subcategories')
          /* console.log(data, 'data cheker')
          this.subcategories = []
          this.subcategories = data */
        }
      })
    },
    async saveService () {
      console.log(this.$v.subcategoriesCheck, 'subcategoriesCheck')
      this.$v.subcategoriesCheck.$touch()
      if (this.$v.subcategoriesCheck.$invalid) {
        return null
      }
      const formData = new FormData()
      formData.append('category_id', this.form.category_id)
      this.subcategoriesCheck.forEach((item, index) => {
        if (item.documentFile) {
          formData.append('documentFile' + item.id, item.documentFile)
        }
      })
      formData.append('subcategories', JSON.stringify(this.subcategoriesCheck.map(itm => {
        return {
          id: itm.id,
          has_document: itm.has_document,
          price: itm.price
        }
      })))
      this.$q.loading.show()
      await this.$api.post('specialist_services', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          this.$q.loading.hide()
          if (res) {
            this.$router.push('/success?message=You successfully added a service!')
          }
        })
    },
    clickFileSCategory (refName) {
      console.log(refName, this.$refs[refName][0], 'refs')
      this.$refs[refName][0].$el.click()
    },
    async getCategories () {
      this.$q.loading.show()
      const response = await this.$api.get('categories')
      this.$q.loading.hide()
      if (response) {
        this.categories = response
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
