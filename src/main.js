import Vue from 'vue'
import App from './App.vue'
import navbar from './components/navbar.vue'
import footer from './components/footer.vue'

Vue.config.productionTip = false

Vue.component("navbar-vue", navbar);
Vue.component("footer-vue", footer);
export const basketCounter = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
