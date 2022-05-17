<template>
  <q-card style="border-radius: 8px;" class="q-py-lg">
    <q-card-section class="row justify-center">
      <div
        style="font-weight: 700; font-size: 20px;"
        class="text-center col-12 text-primary"
      > {{ !title ? 'Delete this item?' : title }} </div>
      <q-btn
        label="NO"
        rounded
        v-close-popup
        color="white"
        text-color="primary"
        class="col-7 q-mt-md"
        style="border: 3px solid #00A58D; font-weight: 900;"
      />
      <q-btn
        label="DELETE"
        class="col-7 q-mt-md"
        text-color="white"
        style="font-weight: 900; color: #FFF !important; background-color: #00A58D;"
        rounded
        @click="deleteItem"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ['id', 'route', 'title'],
  methods: {
    deleteItem () {
      this.$api.delete(`${this.route}/${this.id}`)
        .then(() => {
          this.$emit('deleted')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

}
</script>

<style>

</style>
