import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-server-demo-73f47.firebaseio.com/data.json';

new Vue({
  el: '#app',
  render: h => h(App)
})
