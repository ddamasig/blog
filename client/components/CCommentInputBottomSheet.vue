<template>
  <!-- Comment Input-->
  <v-bottom-sheet
    inset
    v-model="show"
    hide-overlay
    class="ma-0 pa-0"
    persistent
  >
    <c-comment-input class="d-block d-sm-none" :bottom-sheet="true"></c-comment-input>
  </v-bottom-sheet>
</template>

<script>
export default {
  data: () => ({
    isLoading: false,
    show: true,
    model: {
      user: 'Dean',
      message: '',
      parent_id: null
    },
    rules: {
      user: [
        v => !!v || 'Please enter your name.',
        v => (v && v.length <= 256) || 'Message must be less than 256 characters.',
      ],
      message: [
        v => !!v || 'Please enter your message.',
        v => (v && v.length <= 1000) || 'Message must be less than 1000 characters.',
      ]
    }
  }),
  computed: {
    replyingTo() {
      return this.$store.getters["comments/replyingTo"]
    },
  },
  methods: {
    async submit() {
      // Validate the form first
      const isValid = this.$refs.form.validate()
      console.log(isValid)
      if (!isValid) {
        return
      }

      // Show the loader
      this.isLoading = true
      if (this.replyingTo) {
        this.model.parent_id = this.replyingTo.id
      }

      // Fire the VueX action to create the comment in the back-end
      await this.$store.dispatch('comments/save', this.model)

      // Hide the loader
      setTimeout(() => {
        this.isLoading = false
      }, 300)

      // Reset the message
      this.model.message = ''
      this.$refs.form.resetValidation()
      this.close()
    },
    randomAvatar() {
      const randomInt = Math.floor(Math.random() * 9)
      return `https://i.pravatar.cc/${121 + randomInt}`
    },
    cancelReply() {
      this.$store.commit('comments/SET_REPLYING_TO', null)
    },
    close() {
      this.$store.commit('comments/TOGGLE_COMMENT_INPUT')
      this.cancelReply()
    }
  }
}
</script>
