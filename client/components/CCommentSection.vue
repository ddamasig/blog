<template>
  <div class="pa-0 ma-0 flex-fill">
    <c-comment
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
    ></c-comment>


    <!-- Load more comments -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <v-btn class="text-capitalize" small block text>Load more...</v-btn>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>


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
  }),
  async created() {
    await this.$store.dispatch('comments/get')
  },
  methods: {
    randomAvatar() {
      const randomInt = Math.floor(Math.random() * 9)
      return `https://i.pravatar.cc/${121 + randomInt}`
    }
  }
}
</script>
