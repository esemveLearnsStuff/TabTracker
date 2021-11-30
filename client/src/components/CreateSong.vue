<template>
 <v-layout row>

    <v-flex xs6>
        <panel title="Song metadata">

            <v-text-field
            label="Title"
            v-model="song.title"
            ></v-text-field>

            <v-text-field
            label="Artist"
            v-model="song.artist"
            ></v-text-field>

            <v-text-field
            label="Genre"
            v-model="song.genre"
            ></v-text-field>

            <v-text-field
            label="Album"
            v-model="song.album"
            ></v-text-field>

            <v-text-field
            label="Album image url"
            v-model="song.albumImageUrl"
            ></v-text-field>

            <v-text-field
            label="Youtube id"
            v-model="song.youtubeId"
            ></v-text-field>

        </panel>

    </v-flex>

    <v-flex xs6 class="flex-row-reverse">
        <panel title="Song structure">
            <v-textarea
              label="Lyrics"
              v-model="song.lyrics"
            ></v-textarea>

            <v-textarea
              label="Tab"
              v-model="song.tab"
            ></v-textarea>
        </panel>

        <br>
        <div class="danger-alert error" v-html="error" />
        <br>
        <v-btn
            dark
            class="red"
            @click="create">
            Save
        </v-btn>

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
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: ''
      },
      error: ''
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      try {
        await SongsService.create(this.song)
        this.song = {
          title: '',
          artist: '',
          genre: '',
          album: '',
          albumImageUrl: '',
          youtubeId: '',
          lyrics: '',
          tab: ''
        }
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
