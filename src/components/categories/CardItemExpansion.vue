<template>
  <q-expansion-item
    group="somegroup"
    class="style-expansion-item"
  >
    <template v-slot:header>
      <q-item-section avatar>
        <div class="row q-gutter-x-md items-center">
          <template>
            <div
              class="checkbox-container"
            >
              <div
                class="custom-checkbox"
                :class="{ checked: isChecked }"
                @click="toggleCheckbox"
              >
                <div class="checkmark">
                  <svg viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              </div>
            </div>
          </template>
          <q-avatar
            size="50px"
            color="primary"
          >
            <img :src="image_url" />
          </q-avatar>
        </div>
      </q-item-section>

      <q-item-section class="text-primary text-bold">
        {{ name }}
      </q-item-section>
    </template>

    <q-card style="padding: 0 !important;" class="bg-white">
      <q-card-section style="padding: 0 !important;">
        <q-list class="bg-white">
          <q-item
            v-for="subcategory in subcategories"
            :key="subcategory.id"
          >
            <q-item-section avatar>
              <q-avatar
                size="40px"
                color="primary"
              >
                <img :src="subcategory.image_url" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-primary text-bold">
              {{ subcategory.name }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    image_url: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    subcategories: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isChecked: this.value
    }
  },
  watch: {
    value (val) {
      this.isChecked = val
    }
  },
  methods: {
    toggleCheckbox () {
      this.isChecked = !this.isChecked
      this.$emit('input', this.isChecked)
    }
  }
}
</script>

<style lang="scss" scoped>
.style-expansion-item {
  border: 1px solid #D4D4D4;
  border-radius: 8px;
}

/* Estilo general del checkbox personalizado */
.custom-checkbox {
  display: inline-block;
  position: relative;
  width: 23px;
  height: 23px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}

/* Estilo cuando está chequeado */
.custom-checkbox.checked {
  background-color: #4caf50;
}

/* Estilo del ícono de chequeo */
.custom-checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.custom-checkbox.checked .checkmark {
  opacity: 1;
}

/* SVG del ícono de chequeo */
.checkmark svg {
  fill: white;
  width: 100%;
  height: 100%;
}
</style>
