import VueRouter from 'vue-router'

import Home from './pages/Home'
import About from './pages/About'
import Locations from './pages/Locations'
import Menu from './pages/Menu'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/menu', component: Menu, name: 'Menu' },
  { path: '/about', component: About, name: 'About' },
  { path: '/locations', component: Locations, name: 'Location' }
]

export default new VueRouter({
  routes,
  mode: 'history'
})
