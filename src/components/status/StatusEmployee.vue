<template>
  <q-expansion-item
    v-model="expanded"
    class="style-expansion-item col-12 text-primary"
    style="font-size: 20px; font-weight: 700;"
  >
    <template v-slot:header>

      <q-item-section>
        {{ stateObj.name }}
      </q-item-section>

      <q-item-section side>
        <q-badge rounded :style="`background-color: ${stateObj.color}`" />
      </q-item-section>
    </template>

    <q-item
      v-for="itm in states"
      :key="itm.id"
      @click="changeState(itm.id)"
      clickable
    >
      <q-item-section>
        <q-item-label>
          {{ itm.name }}
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-badge rounded :style="`background-color: ${itm.color}`" />
      </q-item-section>
    </q-item>
  </q-expansion-item>
</template>

<script>
export default {
  data () {
    return {
      states: [
        { name: 'Available', id: 1, color: '#7DBA47' },
        { name: 'Not available', id: 3, color: '#EB5757' }
      ],
      state: 1,
      expanded: false
    }
  },
  mounted () {
    this.getUserInfo()
  },
  computed: {
    stateObj () {
      return this.states.find(state => state.id === this.state)
    }
  },
  methods: {
    async getUserInfo () {
      const user = await this.$getUserInfo()
      if (user) {
        this.state = user.user.status
      }
    },
    async changeState (id) {
      this.state = id
      this.$q.loading.show()
      await this.$api.put('/users/change_status', { status: id }).then(res => {
        this.$q.loading.hide()
        if (res) {
          this.$q.notify({
            color: 'positive',
            textColor: 'white',
            message: 'Your status has been changed!'
          })
        }
      })
      this.expanded = false
    }
  }
}

</script>

<style scoped lang="scss">

.style-expansion-item {
  background-color: #D9F2EE;
  border-radius: 8px;
  width: 240px;
}

</style>
