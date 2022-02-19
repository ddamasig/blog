<template>
  <div class="pa-0 ma-0 flex-fill">

    <!-- Load more comments -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <v-btn
            @click="getComments(5)"
            class="text-capitalize"
            small
            block
            text
            :loading="isLoading"
          >Load older comments...
          </v-btn>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <!-- Root Comments -->
    <c-comment
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
    ></c-comment>

    <!-- Comment Input -->
    <c-comment-input
      :avatar="randomAvatar()"
      :hint="hint"
    ></c-comment-input>
  </div>


</template>

<script>
export default {
  props: {
    blog: Object
  },
  computed: {
    comments() {
      return this.$store.getters["comments/list"].data
    }
  },
  data: () => ({
    hint: '',
    limit: 5,
    isLoading: false
  }),
  async created() {
    await this.getComments()
  },
  methods: {
    async getComments(increaseBy=0) {
      // Increase the limit
      this.limit += increaseBy

      // Show the loader
      this.isLoading = true

      // Fire a VueX action to get the comments
      await this.$store.dispatch('comments/get', this.limit)

      setTimeout(() => {
        this.isLoading = false
      }, 300)
    },
    randomAvatar() {
      const randomInt = Math.floor(Math.random() * 9)
      return `https://i.pravatar.cc/${121 + randomInt}`
    }
  }
}
</script>
