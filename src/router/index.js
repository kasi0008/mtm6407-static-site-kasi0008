import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LayoutWithNav from '../layouts/LayoutWithNav.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayoutWithNav,
    children: [
      { path: '', component: Home }
    ]
  },
  {
    path: '/about',
    component: LayoutWithNav,
    children: [
      { path: '', component: About }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
