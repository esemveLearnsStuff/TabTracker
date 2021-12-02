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

        <div v-for="song in songs" :key="song.id" class="song">

          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>

              <v-btn @click="navigateTo({name: 'song', params: {songId: song.id}})">
                View
              </v-btn>

            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
          </v-layout>

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
    navigateTo (route) {
      this.$router.push(route)
    },
    create () {
      this.$router.push({
        name: 'songCreate'
      })
    }
  }
}
</script>

<style scoped>

.song {
  padding: 12px;
  height: 330px;
  overflow: hidden;

}
.album-image {
  width: 100%;
  margin: 0;
}

.song-title {
  font-size: 30px
}

.song-artist{
  font-size: 24px
}

.song-genre {
  font-size: 18px
}

</style>
