import Vue from 'vue'
import Router from 'vue-router'
import Review from '@/components/Review'
import Compare from '@/components/Compare'
import Analyse from '@/components/Analyse'
import Measure from '@/components/Measure'
import Publish from '@/components/Publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/analyse',
      name: 'Analyse',
      component: Analyse
    },
    {
      path: '/',
      name: 'Review',
      component: Review
    },
    {
      path: '/measure',
      name: 'Measure',
      component: Measure
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/compare',
      name: 'Compare',
      component: Compare
    }
  ]
})
