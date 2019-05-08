import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
