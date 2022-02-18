<template>
  <v-card flat class="pa-0 ma-0">
    <v-card-text class="pa-0 mx-0">
      <v-list-item three-line>
        <v-list-item-avatar size="32">
          <v-img :src="randomAvatar()"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <div class="rounded background pa-3">
            <v-list-item-title style="font-size: 0.8rem" v-html="comment.user"></v-list-item-title>
            <v-list-item-subtitle style="font-size: 0.7rem" v-html="comment.message"></v-list-item-subtitle>
          </div>
          <v-list-item-subtitle>
            <v-btn text x-small class="text-capitalize">Like</v-btn>
            <v-btn text x-small class="text-capitalize">Reply</v-btn>
            <small>2h</small>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    comment: Object
  },
  methods: {
    randomAvatar() {
      const randomInt = Math.floor(Math.random() * 9)
      return `https://i.pravatar.cc/${121 + randomInt}`
    }
  }
}
</script>
