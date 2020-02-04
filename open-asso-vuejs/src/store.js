import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./db.js')

Vue.use(Vuex)

// Load everytime we detect log or logout
// If logged then set local User and UserProfile
fb.auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user)
        store.dispatch('fetchUserProfile')

        fb.db.collection("users").doc(user.uid).onSnapshot(doc => {
            store.commit('setUserProfile', doc.data())
        })
    }
})

//  New vuex store instance
export const store = new Vuex.Store({
    // Local state to be saved
    state: {
        currentUser: null,
        userProfile: {}
    },
    actions: {
        // Clear the local state
        clearData({ commit }){
            commit('setCurrentUser',null)
            commit('setUserProfile',{})
        },
        // Fetch the userProfile from firestore
        fetchUserProfile({ commit, state }) {
            fb.db.collection("users").doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data())
            }).catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
        },
        // Update the users table then the tables where user is in
        updateProfile({ state }, data) {
            let name = data.name
            let firstname = data.firstname

            fb.db.collection("users").doc(state.currentUser.uid).update({ name, firstname }).then( () => {
                // update all posts by user to reflect new name
                fb.db.collection("match").where('userId', '==', state.currentUser.uid).get().then(docs => {
                    docs.forEach(doc => {
                        fb.db.collection("match").doc(doc.id).update({
                            userName: name
                        })
                    })
                })
            }).catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
        }
    },
    // Changes for the local state
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
        }
    }
})