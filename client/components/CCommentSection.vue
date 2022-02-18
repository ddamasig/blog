<template>
  <div class="pa-0 ma-0 flex-fill">
    <c-comment
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
    ></c-comment>

    <!-- Comment Input-->
    <v-list-item>
      <v-list-item-avatar size="32">
        <v-img :src="randomAvatar()"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          <v-textarea
            dense
            placeholder="Write a comment..."
            color="primary"
            filled
            flat
            rounded
            hide-details
            auto-grow
            row-height="1"
          >
          </v-textarea>
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text>
          <v-btn icon class="primary">
            <v-icon small color="white">mdi-send</v-icon>
          </v-btn>
        </v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
  </div>


</template>

<script>
export default {
  props: {
    blog: Object
  },
  data: () => ({
    comments: [
      {
        user: 'Sean O\'Malley',
        message: 'Praesent sed congue lorem, non volutpat massa. Phasellus iaculis tempus erat vitae fringilla.'
      },
      {
        user: 'Brandon Moreno',
        message: 'Etiam lacus nisl, feugiat nec mollis ut, porttitor sed lectus.'
      }
    ]
  }),
  methods: {
    randomAvatar() {
      const randomInt = Math.floor(Math.random() * 9)
      return `https://i.pravatar.cc/${121 + randomInt}`
    }
  }
  // computed: {
  //   randomAvatar() {
  //     const randomInt = Math.floor(Math.random() * 9)
  //     return `https://i.pravatar.cc/${121 + randomInt}`
  //   }
  // }
}
</script>


<style>
.nuxt-logo {
  height: 180px;
}
</style>
