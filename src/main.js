// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import { VueEditor } from 'vue2-quill-editor'
// import fire from './components/fire'

Vue.component(VueEditor)
Vue.use(VueFire)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueEditor,
  VueFire,
  template: '<App/>',
  components: { App },
  ready: () => {
    const vm = this
    window.addEventListener('keyup', (event) => {
      // If down arrow was pressed...
      if (event.keyCode === 32) {
        vm.$broadcast('space-pressed')
      }
    })
  }
})
