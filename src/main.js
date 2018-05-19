import Vue from 'vue'
import App from './App.vue'
import N3Components from 'N3-components'
// default 
import 'N3-components/src/style/default.less' 

// theme customization
import './less/style.less' 

// custom style
import './less/custom.less' 

Vue.config.productionTip = false
Vue.use(N3Components, 'en')

new Vue({
  render: h => h(App)
}).$mount('#app')
