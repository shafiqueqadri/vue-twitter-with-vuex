import * as type from './types'
import actions from './actions'
let state = {
  loggedIn: false
}

const mutations = {
  [type.SAVE] (state, { payload }) {
    state.email = payload.email;
    state.loggedIn = true;
    
  },
  [type.REMOVE] (state) {
    state.loggedIn = false
  }
}
export default {
  actions,
  state,
  mutations
}
