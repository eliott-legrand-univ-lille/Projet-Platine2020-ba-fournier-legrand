import Vue from 'vue'
import App from './App.vue'

// Modules for routing and local state
import router from './routes/routes'
import { store } from './store.js'
// Module for CSS/JS Framework
import vuetify from './plugins/vuetify'
// Plugin to ease manipulation of firestore
import { firestorePlugin } from 'vuefire'

const fb = require('./db')

Vue.use(firestorePlugin);
Vue.use(require('vue-moment'));

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