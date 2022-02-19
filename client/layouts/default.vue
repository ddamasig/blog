<template>
  <v-app dark style="background: #f5f5f7">
    <c-app-bar></c-app-bar>

    <v-main class="pt-8">
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>

    <!-- Comment Input -->
    <c-comment-input-bottom-sheet v-if="$store.getters['comments/showCommentInput']"></c-comment-input-bottom-sheet>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style>
body {
  font-family: 'Quicksand', Fallback, sans-serif !important;
}
</style>
