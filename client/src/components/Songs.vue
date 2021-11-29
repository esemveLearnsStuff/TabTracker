<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel>
        <h3>Yoyo</h3>
        <p>content</p>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  name: 'Songs',
  data () {
    return {
     
    }
  },
  components: {
    Panel
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
