<template>
  <v-card flat class="pa-0 ma-0">
    <v-card-text class="pa-0 mx-0">

      <!-- Parent Comment -->
      <v-list-item three-line>
        <v-list-item-avatar size="32">
          <v-icon v-if="isReply" class="flip" color="grey lighten-1">mdi-keyboard-return</v-icon>
          <v-img v-else :src="randomAvatar()"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <div class="rounded background pa-3">
            <v-list-item-title style="font-size: 0.9rem" v-text="comment.user"></v-list-item-title>
            <v-list-item-subtitle style="font-size: 0.9rem" v-text="comment.message"></v-list-item-subtitle>
          </div>
          <v-list-item-subtitle>
            <v-btn text small class="text-capitalize">Like</v-btn>
            <v-btn
              @click="reply"
              text
              small
              class="text-capitalize"
            >
              Reply
            </v-btn>
            <small>
              {{ comment.created_at | getAge }}
            </small>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- Replies -->
      <c-comment
        v-for="(reply, index) in comment.replies"
        :key="index"
        :comment="reply"
        :is-reply="true"
        class="ml-6"
      ></c-comment>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    comment: Object,
    isReply: Boolean
  },
  methods: {
    reply() {
      this.$store.commit('comments/SET_REPLYING_TO', this.comment)
    },
    randomAvatar() {
      const randomInt = Math.floor(Math.random() * 9)
      return `https://i.pravatar.cc/${121 + randomInt}`
    }
  }
}
</script>

<style>
.flip {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
