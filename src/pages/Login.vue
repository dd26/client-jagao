<template>
  <q-tab-panels v-model="panel" animated class="absolute-full">
    <q-tab-panel
      :name="1"
      style="padding: 0 !important"
      class="absolute-full"
    >
      <section class="column fit">
          <div class="col-5 container-img"></div>
          <div class="col-7 column">
            <div class="q-pt-sm window-width row justify-center col-1">
              <q-option-group
                v-model="panel"
                inline
                size="xs"
                :options="panelOp"
              />
            </div>
            <section class="row justify-center container-buttom col-11 items-end q-pb-xl">
              <div>
                <div class="col-12 row q-pt-xl q-px-lg">
                  <div class="text-primary text-bold text-h5 col-12 text-center">WELCOME TO JAGAO</div>
                  <div class="col-12 text-caption text-center q-pt-sm"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>

                  <q-btn
                    label="get started"
                    color="primary"
                    rounded
                    unelevated
                    class="q-mt-xl col-12"
                    to="/register"
                  />

                  <div class="text-center text-subtitle1 col-12 q-pt-sm" style="font-size:16px">
                    Already have an account? <b class="text-primary" @click="panel++"> LOG IN </b>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </section>
    </q-tab-panel>

    <q-tab-panel
      :name="2"
      style="padding: 0 !important"
      class="absolute-full"
    >
      <section class="column fit">
          <div class="col-5 container-img-2"></div>
          <div class="col-7 column">
            <div class="q-pt-sm window-width row justify-center col-1">
              <q-option-group
                v-model="panel"
                inline
                size="xs"
                :options="panelOp"
              />
            </div>
            <section class="row justify-center container-buttom col-11">
              <div class="col-12">
                <section class="col-12 row q-pt-xl q-px-lg">

                  <q-input
                    v-model="form.email"
                    placeholder="User Name/Email"
                    :error="$v.form.email.$error"
                    @blur="$v.form.email.$touch()"
                    class="col-12"
                    outlined
                    bg-color="white"
                    dense
                  >
                    <q-icon name="person" slot="prepend" />
                  </q-input>

                  <q-input
                    v-model="form.password"
                    placeholder="**************"
                    :error="$v.form.password"
                    @blur="$v.form.password.$touch()"
                    class="col-12"
                    outlined
                    bg-color="white"
                    dense
                  >
                    <q-icon name="lock" slot="prepend" />
                  </q-input>

                  <q-btn
                    label="Sign in"
                    color="primary"
                    rounded
                    unelevated
                    class="col-12 q-mt-sm"
                  />

                  <div class="col-12 text-center q-pt-lg" style="font-size:16px" @click="forgotPassDlg = true">Forgot Password </div>
                  <q-dialog v-model="forgotPassDlg">
                    <ResetPassword />
                  </q-dialog>
                </section>
              </div>
            </section>
          </div>
      </section>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
// importar vuelidate
import { required } from 'vuelidate/lib/validators'
import ResetPassword from '../components/ResetPassword/Form'
export default {
  components: {
    ResetPassword
  },
  data () {
    return {
      panel: 1,
      panelOp: [
        { value: 1 },
        { value: 2 }
      ],
      form: {
        email: '',
        password: ''
      },
      forgotPassDlg: false
    }
  },
  validations () {
    return {
      form: {
        email: { required },
        password: { required }
      }
    }
  }
}
</script>

<style style="scss" scoped>
img {
  border-radius: 0 0 40px 40px;
  box-shadow: inset 0 -103px 0  rgb(255, 0, 0);
}

.container-buttom {
  position: relative;
  width: 100vw;
}

.container-img {
  position: relative;
  background-image: url("../../public/illustrations/1.svg");
  background-size: countain;
  background-position: center;
  box-shadow: inset 0 -9px 0  rgb(255, 255, 255);
  border-radius: 0 0 100% 100%;
  width: 140%;
  left: -20%;
}

.container-img-2 {
  position: relative;
  background-image: url("../../public/illustrations/2.svg");
  background-size: countain;
  background-position: center;
  box-shadow: inset 0 -9px 0  rgb(255, 255, 255);
  border-radius: 0 0 100% 100%;
  width: 140%;
  left: -20%;
}

.q-tab-panel {
  background-color: #D9F2EE;
}

</style>
