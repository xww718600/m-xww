import Vue from 'vue'
import Router from 'vue-router'
import Hot from '@/pages/Hot'
import Fen from '@/pages/Fen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/Fen',
      name: 'Fen',
      component: Fen
    },     
    {
      path: '/Fen/:id',
      name: 'Fen',
      component: Fen
    }

  ]
})
