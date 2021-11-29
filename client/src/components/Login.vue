<template>
  <v-layout column>
    <v-flex xs6>
    <div class="d-flex justify-center mb-6">
      <v-card class="mx-auto" max-width="500" elevation="2">
        <v-card-title>Login</v-card-title>
        <div class="pa-4">
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
              autocomplete="password"
            ></v-text-field>
          </form>
          <br>
          <div class="danger-alert error" v-html="error" />
          <br>
          <v-btn
            dark
            class="red"
            @click="login">
            Login
          </v-btn>
        </div>
      </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

import AuthenticationService from '@/services/AthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.error = ''
      try {
        const response = await AuthenticationService.login({
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
  }
}
</script>

<style scoped>

</style>
