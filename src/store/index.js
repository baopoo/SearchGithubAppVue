import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export const store = new Vuex.Store({
  state: {
    user: [],
    totalUser: 0,
    repo: [],
    userInfo: {},
    commits: []
  },
  getters,
  mutations,
  actions,
})
