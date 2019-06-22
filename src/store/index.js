import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

// Modules
import tweets from './tweets'
import user from './user'

Vue.use(Vuex)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    tweets,
    user
  },
  strict: false,
  middlewares: debug ? [createLogger()] : [],
  plugins: [
    createPersistedState({
      paths: ['tweets', 'user']
    })
  ]
})

export default store
