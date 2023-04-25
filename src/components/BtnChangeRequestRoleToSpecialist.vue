<template>
  <section
    @click="$router.push('/profile/change-role')"
  >
    <div class="style-banner-button-work" v-ripple>
      <div>
        <q-avatar
          size="70px"
        >
          <img
            src="vectors/avatar-profile-work.png"
            width="100%"
            height="100%"
            style="border: 3px solid #FFF"
          >
        </q-avatar>
      </div>
      <div class="row">
        <div
          class="col-12 text-h6 text-primary text-bold"
          style="line-height: 25px;"
        >Do you want to work with us?</div>
        <div
          class="col-12 text-primary text-bold q-pt-sm"
        >
          <a
            style="text-decoration: underline;"
          >
            Be an Employed
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.style-banner-button-work {
  position: relative;
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #D9F2EE;
  padding: 20px;
  border-radius: 12px;
  height: 120px;
}
</style>
