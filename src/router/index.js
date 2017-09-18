import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Random from '@/components/Random'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/random',
      name: 'Rsndom',
      component: Random
    }
  ]
})
