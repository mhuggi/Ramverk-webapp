import Vue from 'vue'
import App from './App.vue'

require('./assets/style.css');

Vue.config.productionTip = false

var vm = new Vue({
  render: h => h(App),
}).$mount('#app')

console.log(vm)
