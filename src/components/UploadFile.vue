<template>
  <div
    @click="handleClickFile"
    class="row style-container-file items-center"
  >
    <div
      class="col-2 bg-primary style-icon-file row items-center justify-center"
    >
      <q-icon
        name="attach_file"
        color="white"
        size="27px"
      />
    </div>

    <div
      class="col-10 q-pl-sm"
      style="color: #B3B3B3"
    >
      {{ nameFirstHolderVal }}
    </div>

    <input
      ref="fileInput"
      type="file"
      style="display: none;"
      @change="handleFileChange"
    />
  </div>
</template>

<script>
export default {
  props: ['value', 'nameFirstHolder', 'filterFileType'],
  data () {
    return {
      fileVal: this.value,
      nameFirstHolderVal: this.nameFirstHolder
    }
  },
  watch: {
    fileVal (newValue) {
      this.$emit('input', newValue)
    },
    nameFirstHolder (newValue) {
      this.nameFirstHolderVal = newValue
    }
  },
  methods: {
    handleClickFile () {
      // Activa el clic en el elemento de entrada de tipo archivo
      // si tiene la propiedad filterFileType, se le asigna al elemento de entrada de tipo archivo
      if (this.filterFileType) {
        this.$refs.fileInput.setAttribute('accept', this.filterFileType)
      }
      this.$refs.fileInput.click()
    },
    handleFileChange (event) {
      const file = event.target.files[0]
      if (file) {
        this.fileVal = file
        this.nameFirstHolderVal = file.name || 'No se ha seleccionado ningún archivo'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.style-container-file {
  position: relative;
  border: 2px solid #00A78E;
  border-radius: 8px;
  height: 58px;
  width: 100%;
  overflow: hidden;
  background-color: #FFF;
}

.style-icon-file {
  height: 100%;
}
</style>
