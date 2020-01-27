import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./db')

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        userProfile: {}
    },
    actions: {
        fetchUserProfile({ commit, state }) {
            fb.db.collection("users").doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data())
            }).catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
        }
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
        }
    }
})