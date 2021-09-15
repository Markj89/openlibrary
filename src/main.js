import Vue from 'vue'
import App from './App.vue'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import './assets/scss/_style.scss'

Vue.config.productionTip = false

var myEnv = dotenv.config()
dotenvExpand(myEnv)

new Vue({
  render: h => h(App),
}).$mount('#app')
