<template>
  <v-card elevation="0" rounded>
    <v-card-title>
      <v-list-item class="pa-0">
        <v-list-item-avatar>
          <v-img :src="randomAvatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-2">
            {{ blog.title }}
          </v-list-item-title>
          <v-list-item-subtitle class="grey--text font-weight-light">
            {{ blog.subtitle }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-title>

    <v-card-text class="grey--text text--darken-3 font-weight-light text-body-2">
      {{ blog.content }}
      <v-card
        v-if="blog.photo"
        rounded
        elevation="0"
        class="mt-2"
      >
        <v-img class="grey lighten-4" max-height="400" :src="blog.photo"></v-img>
      </v-card>
    </v-card-text>

    <v-card-actions class="px-4">
      <v-btn icon small>
        <v-icon small color="red">
          mdi-heart
        </v-icon>
      </v-btn>
      <small>{{ blog.likes }}</small>
      <v-btn icon small class="ml-5">
        <v-icon small>
          mdi-message-outline
        </v-icon>
      </v-btn>
      <small>{{ blog.comments }}</small>

      <v-spacer></v-spacer>

      <v-btn
        elevation="0"
        color="primary"
      >
        <span class="text-capitalize">
          Read More
          <v-icon>mdi-arrow-right</v-icon>
        </span>
      </v-btn>
    </v-card-actions>

    <v-divider class="mt-4"></v-divider>


    <v-card-actions
      v-if="!blog.areCommentsDisabled"
      class="px-4">
      <c-comment-section></c-comment-section>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    blog: Object,
  },
  computed: {
    randomAvatar() {
      const randomInt = Math.floor(Math.random() * 7)
      return `https://i.pravatar.cc/${121 + randomInt}`
    }
  }
}
</script>
