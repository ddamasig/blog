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
    state.list.data.forEach(e => {
      // If the parent is in the root level
      if (e.id === parentId) {
        // Make sure that the replies attribute is an array
        if (e.replies === null) {
          e.replies = []
        }
        e.replies.unshift(reply)
        return
      }

      if (e.replies) {
        e.replies.forEach(c => {
          if (parentId === c.id) {
            if (c.replies === null) {
              c.replies = []
            }
            c.replies.unshift(reply)
            return
          }

          c.replies.forEach(d => {
            if (parentId === d.id) {
              if (d.replies === null) {
                d.replies = []
              }
              d.replies.unshift(reply)
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
    console.log('Getting Comments')
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
      console.log('New Comment:')
      console.log(newComment)
      // Check if the comment is a reply
      if (newComment.parent_id) {
        console.log('Appending to parent')
        // Find it's parent comment
        console.log('Looking for Parent with id ' + newComment.parent_id)
        commit('APPEND_REPLY', {
          parentId: newComment.parent_id,
          reply: newComment
        })
      } else {
        console.log('Appending new comment')
        // Insert the newly created Comment instance to the list
        commit('UNSHIFT', response.data)
      }
    }

    return response
  },
}
