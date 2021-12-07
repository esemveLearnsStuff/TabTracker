<template>
    <div class="lyrics">
        <pre>
            {{song.tab}}
        </pre>
    </div>
</template>

<script>
export default {
  name: 'Tab',
  props: [
    'song'
  ]
}
</script>

<style scoped>
.lyrics {
    font-size: 10px;
    max-height: 600px;
    overflow: auto;
}
</style>
