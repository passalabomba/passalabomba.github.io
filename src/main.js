import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store';
import router from './router.js'
import VueConfetti from 'vue-confetti'


Vue.config.productionTip = false
Vue.use(VueConfetti)
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
