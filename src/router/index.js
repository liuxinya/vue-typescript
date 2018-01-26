import Vue from 'vue'
import Router from 'vue-router'
import HelloVue from '@/components/HelloVue'
import HelloTypescript from '@/components/HelloTypescript'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloVue',
      component: HelloVue
    },
    {
      path: '/hello-vue',
      name: 'HelloVue',
      component: HelloVue
    },
    {
      path: '/hello-typescript',
      name: 'HelloTypecript',
      component: HelloTypescript
    }
  ]
})
