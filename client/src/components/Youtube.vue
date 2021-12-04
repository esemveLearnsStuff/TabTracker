<template>
    <div>
        <iframe width="100%" :src="youtubeUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
  name: 'Youtube',
  props: [
    'youtubeId'
  ],
  computed: {
    youtubeUrl () {
      return `https://www.youtube.com/embed/${this.youtubeId}`
    }
  }
}
</script>

<style scoped>

</style>
