<template>
    <v-card flat class="pa-0 ma-0">
      <v-card-text class="pa-0 mx-0">

        <!-- Parent Comment -->
        <v-list-item three-line>
          <v-list-item-avatar size="32">
            <v-img :src="comment.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <div class="rounded pa-3 d-inline-block" :class="replyBg">
              <v-list-item-title
                :class="replyText"
                class="comment-user mb-1"
                v-text="comment.user">
              </v-list-item-title>
              <v-list-item-subtitle
                :class="replyText"
                class="comment-message overflow-visible d-inline-block"
                v-text="comment.message">
              </v-list-item-subtitle>
            </div>
            <v-list-item-subtitle>
              <v-btn text small class="text-capitalize">Like</v-btn>
              <v-btn
                v-if="comment.level < 3"
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
  data: () => ({
    isActive: false,
  }),
  computed: {
    replyingTo() {
      return this.$store.getters["comments/replyingTo"]
    },
    replyBg() {
      if (this.replyingTo && this.replyingTo.id === this.comment.id) {
        return 'primary'
      }
      return 'background'
    },
    replyText() {
      if (this.replyingTo && this.replyingTo.id === this.comment.id) {
        return 'white--text'
      }
      return 'black--text'
    }
  },
  methods: {
    reply() {
      this.$store.commit('comments/SET_REPLYING_TO', this.comment)
      this.$store.commit('comments/TOGGLE_COMMENT_INPUT', true)
    },
  }
}
</script>
