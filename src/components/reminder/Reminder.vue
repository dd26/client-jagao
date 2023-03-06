<template>
  <q-card
    class="full-width q-py-md"
    style="border-radius: 12px;"
  >
    <q-card-section
      class="row justify-center"
    >
      <q-icon
        name="img:vectors/Bell.svg"
        color="primary"
        size="50px"
        class="col-12"
      />
      <div class="text-h6 col-12 text-center text-primary text-bold">Reminder</div>

      <p
        class="col-12 q-px-lg text-center q-pt-md"
        style="color: #AAAAAA; font-size: 14px"
      >
        Hello! Don't forget to check that the gas tank is full and make sure you have all the necessary tools before performing any service.
      </p>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn
        class="q-px-xl text-bold"
        color="primary"
        label="Accept"
        style="border-radius: 10px"
        v-close-popup
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  methods: {
  }
}
</script>
