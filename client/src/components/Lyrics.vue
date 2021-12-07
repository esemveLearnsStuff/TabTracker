<template>
    <div class="lyrics">
        <pre>
            {{song.lyrics}}
        </pre>
    </div>
</template>

<script>
export default {
  name: 'Lyrics',
  props: [
    'song'
  ]
}
</script>

<style scoped>
.lyrics {
    font-size: 10px;
    max-height: 300px;
    overflow: auto;
}
</style>
