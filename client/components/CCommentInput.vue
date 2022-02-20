<template>
  <!-- Comment Input-->
  <v-form ref="form" @submit.prevent="submit()" class="white fill-height mt-0">
    <v-divider class="d-block d-sm-none mb-4"></v-divider>

    <v-toolbar class="justify-center px-2" flat>
      <v-toolbar-title class="title">Write Your Comment</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="bottomSheet"
        :loading="isLoading"
        type="submit"
        icon
        class="background"
        @click="close()"
        light
      >
        <v-icon small>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

    <div v-if="replyingTo">
      <span
        class="pl-6"
        style="font-size: 0.9rem"
      >
        Replying to <b>{{ replyingTo.user }}</b>
      </span>
      <v-btn
        @click="cancelReply()"
        small
        text
        link
        class="text-capitalize font-weight-bold"
        color="error"
      >
        Cancel
      </v-btn>
    </div>
    <v-list-item class="align-start align-content-start">
      <v-list-item-content class="pt-3 pb-0 mb-0">
        <v-list-item-title>
          <v-text-field
            v-model="model.user"
            :rules="rules.user"
            prepend-inner-icon="mdi-account"
            autofocus
            filled
            color="primary"
            flat
            rounded
            dense
            counter="32"
            :disabled="isLoading"
          ></v-text-field>
        </v-list-item-title>
        <v-list-item-subtitle>
          <v-textarea
            v-model="model.message"
            :rules="rules.message"
            prepend-inner-icon="mdi-email"
            dense
            placeholder="Write a comment..."
            color="primary"
            filled
            flat
            rounded
            auto-grow
            counter="256"
            row-height="1"
            persistent-hint
            :disabled="isLoading"
          >
          </v-textarea>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action class="fill-height mb-auto">
        <v-list-item-action-text class="mb-auto">
          <v-btn
            :loading="isLoading"
            type="submit"
            icon
            color="white"
            class="primary mb-auto"
            light
          >
            <v-icon small color="white">mdi-send</v-icon>
          </v-btn>
        </v-list-item-action-text>
      </v-list-item-action>
    </v-list-item>
  </v-form>
</template>

<script>
export default {
  props: {
    bottomSheet: Boolean
  },
  data: () => ({
    isLoading: false,
    show: true,
    model: {
      user: '',
      message: '',
      parent_id: null
    },
    rules: {
      user: [
        v => !!v || 'Please enter your name.',
        v => (v && v.length <= 32) || 'Message must be less than 32 characters.',
      ],
      message: [
        v => !!v || 'Please enter your message.',
        v => (v && v.length <= 256) || 'Message must be less than 256 characters.',
      ]
    }
  }),
  computed: {
    /**
     * Represents the parent comment that the next reply
     * will be associated to.
     * @returns {any}
     */
    replyingTo() {
      return this.$store.getters["comments/replyingTo"]
    },
  },
  methods: {
    /**
     * Fires an HTTP request which creates a comment in the back-end.
     * @returns {Promise<void>}
     */
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
    /**
     * Do not associate the pending comment as a reply
     */
    cancelReply() {
      this.$store.commit('comments/SET_REPLYING_TO', null)
    },
    /**
     * Close the bottom sheet
     */
    close() {
      this.$store.commit('comments/TOGGLE_COMMENT_INPUT', false)
      this.cancelReply()
    }
  }
}
</script>
