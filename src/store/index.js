import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token) {
      state.status = 'success'
      state.token = token
    },
    auth_error(state) {
      state.status = 'error'
    }
  },
  actions: {
    auth({
      commit
    },{username,password}) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
            url: 'https://cors-anywhere.herokuapp.com/https://evaluation.omd.ru/test/user/token/',
            data: {
              username : username,
              password: password
            },
            method: 'POST'
          })
          .then(resp => {
            const token = resp.data.token
            console.log(resp.data)

            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    }

  },
  modules: {}
})
