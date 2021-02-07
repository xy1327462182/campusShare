import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import More from '../pages/More.vue'
import Published from '../pages/Published.vue'
import Publish from '../pages/Publish.vue'
import Notice from '../pages/Notice.vue'
import Detail from '../pages/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/more',
    name: 'More',
    component: More
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish
  },
  {
    path: '/published',
    name: 'Published',
    component: Published
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
