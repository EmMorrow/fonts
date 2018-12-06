import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Saved from './views/Saved.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/saved',
      name: 'saved',
      component: Saved
    }
  ]
})
