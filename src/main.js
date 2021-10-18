import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'

Vue.use(VueAxios,axios);
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),router
}).$mount('#app')
