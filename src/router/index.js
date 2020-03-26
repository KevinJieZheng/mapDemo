import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/components/demo1.vue'
import demo2 from '@/components/demo2.vue'
import goDemo from '@/components/goDemo.vue'
import * as echarts from 'echarts';

Vue.use(echarts);
Vue.use(Router)

export default new Router({
  mode: 'history', 
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
    ,
    {
      path: '/go',
      name: 'goDemo',
      component: goDemo
    }
  ]
})
