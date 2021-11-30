<template>
    <v-card class="mx-auto" max-width="500" elevation="2">
    <v-card-title>{{title}}</v-card-title>
    <div class="pa-4">
        <slot>
            No slot content defined
        </slot>
    </div>
    </v-card>
</template>

<script>

export default {
  name: 'Panel',
  props: [
    'title'
  ]
}

</script>

<style scoped>

</style>
