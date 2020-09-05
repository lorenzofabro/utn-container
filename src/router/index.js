import Vue from 'vue'
import VueRouter from 'vue-router'

// Main
import Home from '@/views/Main/Home.vue'

// ISW_TP6
import ISW_TP6_Home from '@/views/ISW_TP6/Home.vue'
import ISW_TP6_Cart from '@/views/ISW_TP6/Cart.vue'
import ISW_TP6_Checkout from '@/views/ISW_TP6/Checkout.vue'
import ISW_TP6_OrderSuccess from '@/views/ISW_TP6/OrderSuccess.vue'

Vue.use(VueRouter)

const ISW_TP6_Routes = {
  path: '/isw/tp6/',
  component: ISW_TP6_Home,
  children: [
    {
      path: '/',
      name: 'ISW_TP6_Home',
      component: ISW_TP6_Cart
    },
    {
      path: 'checkout/:total',
      name: 'ISW_TP6_Checkout',
      component: ISW_TP6_Checkout
    },
    {
      path: 'order',
      name: 'ISW_TP6_OrderSuccess',
      component: ISW_TP6_OrderSuccess
    }
  ]
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ISW_TP6_Routes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
