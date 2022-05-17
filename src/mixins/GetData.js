import { Loading } from 'quasar'
export const GetDataMixin = {
  data () {
    return {
      data: []
    }
  },
  async mounted () {
    if (typeof this.beforeMounted === 'function') {
      this.beforeMounted()
    }
    await this.getRecord()
    if (typeof this.afterMounted === 'function') {
      this.afterMounted()
    }
  },
  methods: {
    async getRecord () {
      Loading.show()
      await this.$api.get(`${this.route}`).then(res => {
        this.data = res
        if (typeof this.afterGetRecord === 'function') {
          this.afterGetRecord(res)
        }
        Loading.hide()
      })
    }
  }
}
