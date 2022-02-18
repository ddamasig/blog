<template>
  <v-app dark style="background: #f5f5f7">
    <v-app-bar
      color="background"
      class="px-2 justify-space-between"
      app
      hide-on-scroll
      elevate-on-scroll
    >
      <v-app-bar-nav-icon>
        <v-btn icon>
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-app-bar-title class="font-weight-bold text-center">
        Trending Posts
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="pt-8">
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <!--    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>-->
    <!--      <v-list>-->
    <!--        <v-list-item @click.native="right = !right">-->
    <!--          <v-list-item-action>-->
    <!--            <v-icon light> mdi-repeat </v-icon>-->
    <!--          </v-list-item-action>-->
    <!--          <v-list-item-title>Switch drawer (click me)</v-list-item-title>-->
    <!--        </v-list-item>-->
    <!--      </v-list>-->
    <!--    </v-navigation-drawer>-->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
