<template>
    <v-toolbar fixed dense dark class="toolbar">
        <v-toolbar-title class="mr-4"><span class="logo" @click="navigateToRoute('home')">TabTracker</span></v-toolbar-title>

        <v-toolbar-items>

            <v-btn dark elevation="0" @click="navigateToRoute('songs')">
                Browse
            </v-btn>

        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" dark elevation="0" @click="navigateToRoute('login')">
                Login
            </v-btn>

            <v-btn v-if="!$store.state.isUserLoggedIn" dark elevation="0" @click="navigateToRoute('register')">
                Sign Up
            </v-btn>

            <v-btn v-if="$store.state.isUserLoggedIn" dark elevation="0" @click="logout()">
                Log out
            </v-btn>
        </v-toolbar-items>

    </v-toolbar>

</template>

<script>

export default {
  name: 'Header',
  methods: {
    navigateToRoute (route) {
      if (this.$route.name !== route) {
        this.$router.push({name: route})
      }
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)

      this.navigateToRoute('home')
    }
  }
}
</script>

<style scoped>
.toolbar {
    max-height: 55px;
}

.logo {
    cursor: pointer;
}
</style>
