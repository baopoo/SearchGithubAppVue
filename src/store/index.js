import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: [],
    totalUser: 0,
    repo: []
  },
  getters: {},
  mutations: {
    updateUser(state, user) {
      state.user = user
    },
    updateTotalUser(state, totalUser) {
      state.totalUser = totalUser;
    },
    updateRepo(state, repo) {
      state.repo = repo;
    }
  },
  actions: {
    updateUserActions({ commit }, {value, page}) {
      console.log(value, page);
      axios
        .get(`https://api.github.com/search/users?per_page=10&q=${value}&page=${page}`)
        .then((response) => {
          if (response.status === 200) {
            commit('updateUser', response.data.items);
            commit('updateTotalUser', Math.min(response.data.total_count, 1000));
          } else {
            console.log(response.statusCode)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updateRepoActions({ commit }, username) {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          if (response.status === 200) {
            commit('updateRepo', response.data);
          } else {
            console.log(response.statusCode)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
})
