import * as type from './types';

const actions = {
    addTweet ({ commit }, payload) {
        commit(type.SAVE, payload);
    },
    removeTweet ({ commit }, payload) {
        commit(type.REMOVE, payload);
    },
    likeUnlikeTweet ({ commit }, payload) {
        commit(type.FAVORIT, payload);
    },
}

export default actions
