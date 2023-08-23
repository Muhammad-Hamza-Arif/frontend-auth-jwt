import { createRouter, createWebHistory } from 'vue-router'
import Register from "../components/Register.vue"
import Login from "../components/Login.vue"
import GetAll from "../components/GetAll.vue"
import AddMovies from "../components/AddMovies.vue"
import AllMovies from "../components/AllMovies.vue"

const routes = [
  {
    path: '/',
    name: 'register',
    component: Register
  },
  {
    path: '/authenticate',
    name: 'userAuthenticate',
    component: Login
  },
  {
    path: '/GetAll',
    name: 'getall',
    component: GetAll
  },
  {
    path: '/addmovies',
    name: 'add',
    component: AddMovies
  },
  {
    path: '/allmovies',
    name: 'all',
    component: AllMovies
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
