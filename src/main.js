import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Notice } from 'iview';
Vue.config.productionTip = false
Vue.directive('focus', {
  inserted: function (el) {
      el.focus();
  },
});
Vue.prototype.$Notice = Notice;


new Vue({
  render: h => h(App), 
  router,
}).$mount('#app')
