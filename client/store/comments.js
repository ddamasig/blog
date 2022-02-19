/**
 * You declare your store variables in this block
 */
export const state = () => ({
  // This will contain the list of Comment instances
  list: []
})

/**
 * Getters acts similar to a Serializer in back-end terms. You can pre-process the data before returning the value
 */
export const getters = {
  list: state => state.list,
}

/**
 * Mutations are used to manipulate the actual value of states
 */
export const mutations = {
  // Sets the value of the list state
  SET_LIST(state, data) {
    state.list = data
  },
  // Inserts a new Comment at the tail of the array
  INSERT(state, data) {
    state.list.data.push(data)
  },
}

/**
 * Actions also function like mutations, however they have access to asynchronous features
 */
export const actions = {
  // Get a collection of paginated Comment from the database filtered by user id and start date
  async get({commit}) {
    console.log('Getting Comments')
    await this.$axios.get(`/comments`)
      .then((res) => {
        if (res.status === 200) {
          // Update the list with the new data
          commit('SET_LIST', res.data)
        }
      })
  },
  // Create a new instance of Comment
  async save({commit}, model) {
    const response = await this.$axios.post('/comments', model)

    if (response.status === 201) {
      // Insert the newly created Comment instance to the list
      console.log(response.data)
      commit('INSERT', response.data)
    }

    return response
  },
}
