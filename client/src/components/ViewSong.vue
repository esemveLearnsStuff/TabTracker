<template>
 <v-layout row>

    <v-flex xs6>
      <v-card>

            <h1>{{ song.title }}</h1>
            <h3>{{ song.artist }}</h3>
            <h5>{{ song.album }}</h5>
            <h6>{{ song.genre }}</h6>

            <img class="album-image" :src="song.albumImageUrl" />

            <youtube :youtubeId="song.youtubeId" />
      </v-card>
    </v-flex>

    <v-flex xs6 class="flex-row-reverse">
        <v-card>
            <lyrics :song="song" />

            <hr>

            <tab :song="song" />
        </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Youtube from '@/components/Youtube'
import Lyrics from '@/components/Lyrics'
import Tab from '@/components/Tab'

export default {
  name: 'ViewSong',
  data () {
    return {
      song: null
    }
  },
  components: {
    Youtube,
    Lyrics,
    Tab
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  }
}
</script>

<style scoped>

</style>
