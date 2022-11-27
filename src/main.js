import Vue from 'vue'
import App from './App.vue'
//import vuetify from './plugins/vuetify'
import store from './store';
import router from './router.js'
import VueConfetti from 'vue-confetti'


import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#99DDCC',
        secondary: '#565C54',
        textcolor: '#111111',
        anchor: '#8c9eff',
        error: '#F14559'
      },
    },
  },
})

Vue.config.productionTip = false
Vue.use(VueConfetti)
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
