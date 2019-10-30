import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.scss'

import axios from 'axios'

Vue.prototype.$axios=axios;
import 'mint-ui/lib/style.css'

 import {Toast} from 'mint-ui'
 Vue.component(Toast.name,Toast);
// Vue.component(Button.name, Button);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
