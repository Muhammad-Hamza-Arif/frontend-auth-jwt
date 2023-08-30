import { createRouter, createWebHistory } from 'vue-router'
import Register from "../components/Register.vue"
import Login from "../components/Login.vue"
import GetAll from "../components/GetAll.vue"
import AddMovies from "../components/AddMovies.vue"
import AllMovies from "../components/AllMovies.vue"
import EditMovie from "../components/EditMovie.vue"
import ChangePassword from "../components/ChangePassword.vue"
import UserCreation from "../components/UserCreation.vue"
import AdminPanel from "../components/AdminPanel.vue"
import EditRole from "../components/EditRole.vue"
import UserFunctionality from "../components/UserFunctinality.vue"
import UserPanel from "../components/UserPanel.vue"

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/usercreation',
    name: 'usercreation',
    component: UserCreation
  },
  {
    path: '/',
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
  },
  {
    path:'/edit/:id',
    component: EditMovie
  },
  {
    path:'/editPassword/:id',
    component: ChangePassword
  },
  {
    path:'/adminpanel',
    name: 'adminpanel',
    component: AdminPanel
  },
  {
    path: '/editRole/:id',
    component: EditRole
  },
  {
    path: '/userfunctionality',
    component: UserFunctionality
  },
  {
    path: '/userpanel',
    component: UserPanel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
