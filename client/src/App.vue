<template>
  <div id="app">
    <v-app>
      <main>
        <page-header/>
        <v-container fluid id="pageContent">
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#pageContent {
  margin-top: 30px;
}

</style>
