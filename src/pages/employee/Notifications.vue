<template>
  <q-page class="q-pa-lg">
    <div class="text-primary q-pb-lg" style="font-size: 20px; font-weight: 700;">Notifications</div>
    <div class="q-px-sm row q-gutter-y-lg">
      <EmployeeItem
        v-for="n in 2"
        :key="n"
        :item="n"
        class="col-12"
      />
    </div>
  </q-page>
</template>

<script>
import EmployeeItem from 'src/components/notification/EmployeeItem.vue'
export default {
  components: { EmployeeItem }
}
</script>

<style>

</style>
