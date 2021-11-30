<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">

        <v-card-actions>
          <v-btn
            color="deep-purple lighten-2"
            text
            @click="create"
          >
            Create song
          </v-btn>
        </v-card-actions>

        <div v-for="song in songs" :key="song.id">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  name: 'Songs',
  data () {
    return {
      songs: []
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  methods: {
    create () {
      this.$router.push({
        name: 'songCreate'
      })
    }
  }
}
</script>

<style scoped>

</style>
