<template>
  <q-page>
    <section class="flex flex-center" style="background: #97DDFD; position: relative; height: 175px; border-radius: 12px 12px 0 0">
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

    <section class="row q-pa-md q-gutter-y-lg">
      <div class="row col-12">
        <div class="col-12 text-primary" style="font-weight: 700; font-size: 25px;">Category</div>
        <q-select
          v-model="form.category"
          :options="categories"
          outlined
          label="Cleaning"
          style="background-color: #EDEDED;"
          class="col-12 q-mt-sm"
          dense
        />
      </div>

      <div class="row col-12">
        <div class="col-12 text-primary" style="font-weight: 700; font-size: 25px;">Subcategory</div>
        <q-select
          v-model="form.subcategory"
          :options="subcategories"
          outlined
          label="Room"
          style="background-color: #EDEDED;"
          class="col-12 q-mt-sm"
          dense
        />
      </div>

      <div class="row col-12">
        <div class="col-12 text-primary" style="font-weight: 700; font-size: 25px;">Description</div>
        <q-input
          v-model="form.description"
          outlined
          style="background-color: #EDEDED;"
          class="col-12 q-mt-sm"
          dense
          type="textarea"
        />
      </div>

      <div class="col-12 row justify-center q-pt-lg">
        <q-btn
          to="/success?message=You successfully added a service!"
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
export default {
  data () {
    return {
      form: {
        category: '',
        subcategory: '',
        description: ''
      },
      categories: [
        { label: 'Cleaning', value: 'cleaning' },
        { label: 'Delivery', value: 'delivery' },
        { label: 'Other', value: 'other' }
      ],
      subcategories: [
        { label: 'Cleaning', value: 'cleaning' },
        { label: 'Delivery', value: 'delivery' },
        { label: 'Other', value: 'other' }
      ]
    }
  }
}
</script>

<style>

</style>
