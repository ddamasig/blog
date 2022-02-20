/**
 * You declare your store variables in this block
 */
export const state = () => ({
  // This will contain the list of Comment instances
  list: [],
  // This indicates the comment that you are replying to
  replyingTo: null,
  showCommentInput: false,
})

/**
 * Getters acts similar to a Serializer in back-end terms. You can pre-process the data before returning the value
 */
export const getters = {
  list: state => state.list,
  replyingTo: state => state.replyingTo,
  find: (state) => (id) => {
    return state.list.data.find(e => e.id === id)
  },
  showCommentInput: state => state.showCommentInput,
}

/**
 * Mutations are used to manipulate the actual value of states
 */
export const mutations = {
  // Sets the value of the list state
  SET_REPLYING_TO(state, data) {
    state.replyingTo = data
  },
  // Sets the value of the list state
  SET_LIST(state, data) {
    state.list = data
  },
  // Sets the value of the list state
  TOGGLE_COMMENT_INPUT(state, data) {
    state.showCommentInput = data
  },
  // Inserts a new Comment as a reply
  APPEND_REPLY(state, {parentId, reply}) {
    state.list.data.forEach(rootComment => {
      // If the parent is in the root level
      if (rootComment.id === parentId) {
        // Make sure that the replies attribute is an array
        if (rootComment.replies === null) {
          rootComment.replies = []
        }
        rootComment.replies.unshift(reply)
        return
      }

      if (rootComment.replies) {
        rootComment.replies.forEach(childComment => {
          if (parentId === childComment.id) {
            if (childComment.replies === null) {
              childComment.replies = []
            }
            childComment.replies.unshift(reply)
            return
          }

          childComment.replies.forEach(grandChildComment => {
            if (parentId === grandChildComment.id) {
              if (grandChildComment.replies === null) {
                grandChildComment.replies = []
              }
              grandChildComment.replies.unshift(reply)
            }
          })
        })
      }
    })
  },
  // Inserts a new Event at in front of the array
  UNSHIFT(state, data) {
    state.list.data.unshift(data)
  },
}

/**
 * Actions also function like mutations, however they have access to asynchronous features
 */
export const actions = {
  // Get a collection of paginated Comment from the database filtered by user id and start date
  async get({commit}, limit = 5) {
    await this.$axios.get(`/comments?limit=${limit}`)
      .then((res) => {
        if (res.status === 200) {
          // Update the list with the new data
          commit('SET_LIST', res.data)
        }
      })
  },
  // Create a new instance of Comment
  async save({commit, getters}, model) {
    const response = await this.$axios.post('/comments', model)

    if (response.status === 201) {
      const newComment = response.data
      // Check if the comment is a reply
      if (newComment.parent_id) {
        // Find it's parent comment
        commit('APPEND_REPLY', {
          parentId: newComment.parent_id,
          reply: newComment
        })
      } else {
        // Insert the newly created Comment instance to the list
        commit('UNSHIFT', response.data)
      }
    }

    return response
  },
}
