<template>
  <q-page class="q-pt-md">
    <div class="row q-pt-md q-px-md">
      <q-btn
        to="/home/employee"
        dense
        flat
        size="11px"
        icon="img:vectors/back1.svg"
      />
      <div class="col-12 text-primary text-bold q-pt-sm q-pl-sm" style="font-size: 25px;">Help & support</div>
    </div>

    <section class="q-px-lg">
      <img src="illustrations/17.svg" alt="illustration_17">
    </section>

    <section class="row q-px-lg q-pt-lg">
      <q-list class="col-12">
        <q-expansion-item
          v-for="n in 5"
          :key="n"
          :label="'Question help support ' + n"
          expand-separator
          style="font-size: 20px;"
          expand-icon-class="text-secondary"
        >
          <q-card>
            <q-card-section style="font-size: 14px; font-weight: 400; color: #5C5C5C">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
              <br><br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur magnam quo nesciunt voluptates sunt. Quos, sapiente doloribus minus facere, rerum saepe doloremque ipsum quo vitae blanditiis hic aperiam magni.
              <br><br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur magnam quo nesciunt voluptates sunt. Quos, sapiente doloribus minus facere, rerum saepe doloremque ipsum quo vitae blanditiis hic aperiam magni.
              <br><br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur magnam quo nesciunt voluptates sunt. Quos, sapiente doloribus minus facere, rerum saepe doloremque ipsum quo vitae blanditiis hic aperiam magni.

            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </section>

    <section class="row q-px-lg justify-center q-pt-xl q-pb-xl items-center q-gutter-x-sm">
      <div class="row" @click="openWp">
        <q-icon
          name="img:vectors/wp1.svg"
          size="xl"
        />
        <div class="text-primary text-bold" style="font-size: 25px;">Contact us</div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  methods: {
    openWp () {
      // abrir whatsapp
      window.open('https://api.whatsapp.com/send?phone=+14074096923&text=Hello%20Jagao%20!', '_blank')
    }
  }
}
</script>

<style>

</style>
