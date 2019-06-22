import * as type from './types';

const actions = {
    addUser ({commit}, payload) {
        commit(type.SAVE, {payload})
    },
    removeUser ({commit}) {
        commit(type.REMOVE)
    }
}

export default actions
