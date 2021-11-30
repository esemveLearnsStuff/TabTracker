<template>
  <v-layout column>
    <v-flex xs6>
    <div class="d-flex justify-center mb-6">
      <panel title="Register">

          <form
            name="tab-tracker-form"
            autocomplete="off">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>

          <br>
          <div class="danger-alert error" v-html="error"></div>

          <br>
          <v-btn
            dark
            class="red"
            @click="register">
            Register
          </v-btn>

      </panel>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>

import AuthenticationService from '@/services/AthenticationService'
import Panel from '@/components/Panel'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = ''
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

        this.$router.push({name: 'home'})
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
