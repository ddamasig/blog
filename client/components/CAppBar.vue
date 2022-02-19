<template>
  <v-app-bar
    :color="bg"
    class="px-2 justify-space-between"
    app
    hide-on-scroll
    elevate-on-scroll
    elevation="3"
  >
    <v-app-bar-nav-icon>
      <v-btn icon>
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-app-bar-title
        class="font-weight-bold text-center text-no-wrap"
        :class="fg"
    >
      Trending Posts
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default  {
  data: () => ({
    bg: 'background',
    fg: 'grey--text text--darken-3'
  }),
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = 'white';
        this.fg = 'grey--text text--darken-3';
      } else {
        this.bg = 'background';
        this.fg = 'grey--text text--darken-3';
      }
    },
  },

}
</script>
