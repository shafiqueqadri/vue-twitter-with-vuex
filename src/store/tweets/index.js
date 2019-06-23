import Vue from 'vuex';
import * as type from './types'
import actions from './actions'
import { stat } from 'fs';
let state = {
  updateHack: false,
  tweets: []
}

const mutations = {
  [type.SAVE] (state, payload) {
    const tweets = [...state.tweets, {...payload, like: false}];
    state.tweets = tweets;
  },
  [type.REMOVE] (state, payload) {
    const tweets = state.tweets.filter(({ id }) => payload !== id);
    state.tweets = [...tweets];
  },
  [type.FAVORIT] (state, payload) {

    const tweets = state.tweets.map(
      (tweet) => ({
          ...tweet,
          like: tweet.id == payload ? !tweet.like : tweet.like
      }));
    state.tweets = [...tweets];
  }
}

const getters = {
  tweets (state) {
    return state.tweets;
  }
}
export default {
  actions,
  state,
  mutations,
  getters
}
