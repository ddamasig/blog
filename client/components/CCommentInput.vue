<template>
  <!-- Comment Input-->
  <v-form ref="form" @submit.prevent="submit()">
    <v-divider class="mt-2 mb-4"></v-divider>
    <v-list-item class="align-start align-content-start">
      <v-list-item-content class="pt-3 pb-0 mb-0">
        <v-list-item-title>
          <v-text-field
            v-model="model.user"
            :rules="rules.user"
            prepend-inner-icon="mdi-account"
            filled
            color="primary"
            flat
            rounded
            dense
          ></v-text-field>
        </v-list-item-title>
        <v-list-item-text>
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
            row-height="1"
            persistent-hint
            :hint="hint"
          >
          </v-textarea>
        </v-list-item-text>
      </v-list-item-content>
      <v-list-item-action class="fill-height mb-auto">
        <v-list-item-action-text class="mb-auto">
          <v-btn
            type="submit"
            icon
            class="primary mb-auto"
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
    hint: String,
    avatar: String
  },
  data: () => ({
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
  methods: {
    submit() {
      // Validate the form first
      const isValid = this.$refs.form.validate()
      console.log(isValid)
      if (!isValid) {
        return
      }

      this.$store.dispatch('comments/save', this.model)
    },
    randomAvatar() {
      const randomInt = Math.floor(Math.random() * 9)
      return `https://i.pravatar.cc/${121 + randomInt}`
    }
  }
}
</script>
