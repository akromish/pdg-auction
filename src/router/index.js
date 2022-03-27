import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Admin from '@/views/Admin.vue'
import Login from "@/views/Login";
import AddItem from "@/views/AddItem";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/a7aba987-75eb-4924-ac49-a6ea549321dc',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/add',
    name: 'Add Item',
    component: AddItem
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
