import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const KAKAKO_API_KEY = 'fafd22ef23f6c994e01f61b0b559c3d5';
window.Kakao.init(KAKAKO_API_KEY);

new Vue({
  render: h => h(App),
}).$mount('#app')
