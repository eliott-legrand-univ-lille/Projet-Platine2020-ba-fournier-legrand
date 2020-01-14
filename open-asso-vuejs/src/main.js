import Vue from 'vue'

import VueRouter from "vue-router";
import routes from "./routes/routes";

import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAoXtO1Fh1t0PEGKUaPMQiPijizoitJVSg",
  authDomain: "platine-miolan.firebaseapp.com",
  databaseURL: "https://platine-miolan.firebaseio.com",
  projectId: "platine-miolan",
  storageBucket: "platine-miolan.appspot.com",
  messagingSenderId: "533794087975",
  appId: "1:533794087975:web:474342c2aa64d9e6e05a02"
};

firebase.initializeApp(firebaseConfig);





Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});


Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
