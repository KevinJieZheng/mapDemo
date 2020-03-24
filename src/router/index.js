import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/components/demo1.vue'
import demo2 from '@/components/demo2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    }
  ]
})
