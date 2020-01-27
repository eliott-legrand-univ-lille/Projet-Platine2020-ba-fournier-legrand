import Vue from 'vue'
import App from './App.vue'

import router from './routes/routes'
import { store } from './store.js'

import vuetify from './plugins/vuetify'
import { firestorePlugin } from 'vuefire'

const fb = require('./db')

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

let app
fb.auth.onAuthStateChanged( () => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            vuetify,
            store,
            render: h => h(App)
        })
    }
})

/*
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')*/