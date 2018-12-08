import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    isLoading: true,
  },
  actions: {
    async nuxtServerInit (store, context) {
      const {req, res, app} = context
      if (req.url === '/one') {
        store.state.isLoading = false
      } else if (req.url === '/two') {
        setTimeout(function() {
          store.state.isLoading = false
        }, 1000)
      }
    },
    async nuxtClientInit(store, context) {
      const {req, res, app} = context
      if (context.route.path !== '/two') {
        console.log("???")
        console.log(store)
        setTimeout(function() {
          store.state.isLoading = false
        }, 1000)
      }
    },
  }
})

export default store
