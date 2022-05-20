<template>
  <q-item class="q-py-lg">
    <q-item-section>
      <q-item-label class="text-primary text-h6 text-bold">Cleaning</q-item-label>
      <q-item-label class="q-pl-md" caption>
        <li v-for="n in data" :key="n" class="q-pt-xs">
          {{n}}
        </li>
      </q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-avatar rounded size="95px">
        <img src="vectors/icon10.svg" alt="icono">
      </q-avatar>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  data () {
    return {
      data: ['Kitchen cleaning', 'Room cleaning', 'Garage cleaning', 'Window cleaning']
    }
  }
}
</script>

<style lang="scss" scoped>

.q-item {
  background-color: #D9F2EE;
  border-radius: 12px;
}

</style>
