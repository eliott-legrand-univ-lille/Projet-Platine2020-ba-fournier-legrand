import Vue from 'vue'

import VueRouter from "vue-router";
import routes from "./routes/routes";

import App from './App.vue'
import vuetify from './plugins/vuetify';




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
