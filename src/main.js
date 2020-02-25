import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import Bus from 'vue-bus'

import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(Bus);
Vue.use(LazyLoad, {
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568732271922&di=691c9fee40e9a3a59dd919cc2916e5d0&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2F20171102%2F4b9f-fynmzuk2963880.jpg'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
