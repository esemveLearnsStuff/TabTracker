import Api from '@/services/Api'

export default {

  index () {
    return Api().get('songs')
  },

  create (song) {
    return Api().post('song/create', song)
  },

  show (songId) {
    return Api().get(`song/${songId}`)
  }
}
