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
          v-for="n in helpsData"
          :key="n.title"
          :label="n.title"
          expand-separator
          style="font-size: 15px"
          expand-icon-class="text-secondary"
        >
          <q-card>
            <q-card-section style="font-size: 14px; font-weight: 400; color: #5C5C5C">
              <p>
                {{ n.description }}
              </p>
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
  data () {
    return {
      helpsData: [
        {
          title: 'How long does a cleaning service usually take for an average-sized house or apartment?',
          description: "The amount of time a cleaning service typically takes for an average-sized house or apartment varies depending on various factors, such as the level of dirt and the number of rooms. However, in our company, we usually take between 3 and 5 hours to complete a thorough and efficient cleaning service. It's important to note that the exact time may vary based on each client's specific needs and their home."
        },
        {
          title: 'What training and experience do your employees have in home cleaning?',
          description: 'All of our team members are required to hold a valid Florida-issued cleaning license, and they also undergo a thorough and detailed selection process. We are committed to ensuring that our employees have the necessary skills and expertise to provide high-quality cleaning services to our clients. Our comprehensive screening and training process guarantees that our team is well-equipped to handle a wide range of home cleaning needs.'
        },
        {
          title: 'Do you use eco-friendly or environmentally-friendly cleaning products?',
          description: 'We use eco-friendly cleaning products that have international certifications, ensuring that they do not harm the environment or pose any risk to pets. Our commitment to using environmentally responsible products reflects our dedication to both the well-being of our clients and the preservation of our planet.'
        },
        {
          title: 'Does the company provide all the cleaning supplies and necessary equipment, or do clients need to provide them?',
          description: 'We provide all the required cleaning supplies and equipment needed for the service, and their cost is included in the rate paid by the client. This ensures a seamless and hassle-free experience for our customers, as they do not need to worry about providing any materials for the cleaning process.'
        },
        {
          title: 'How do you handle complaints or issues related to the quality of the cleaning service?',
          description: 'We have a dedicated support line available for our clients to report any concerns or issues that may arise during the contracted service through our application. Our team is committed to addressing and resolving any problems promptly and efficiently, ensuring customer satisfaction and maintaining the high quality of our cleaning services.'
        }
      ]
    }
  },
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
