import Vue from 'vue'
import VueRouter from 'vue-router'

// Main
import Home from '@/views/Main/Home.vue'

// ISW
import ISW_TP6_Home from '@/views/ISW/TP6/Home.vue'
import ISW_TP6_Cart from '@/views/ISW/TP6/Cart.vue'
import ISW_TP6_Checkout from '@/views/ISW/TP6/Checkout.vue'
import ISW_TP6_OrderSuccess from '@/views/ISW/TP6/OrderSuccess.vue'

// AED
import AED_TP1_Home from '@/views/AED/TP1/Home.vue'
import AED_TP1_Script from '@/views/AED/TP1/Script.vue'
import AED_TP2_Home from '@/views/AED/TP2/Home.vue'
import AED_TP2_Script from '@/views/AED/TP2/Script.vue'
import AED_TP3_Home from '@/views/AED/TP3/Home.vue'
import AED_TP3_Script from '@/views/AED/TP3/Script.vue'

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

const AED_TP1_Routes = {
  path: '/aed/tp1/',
  component: AED_TP1_Home,
  children: [
    {
      path: '/',
      name: 'AED_TP1_Home',
      component: AED_TP1_Script
    },
  ]
}

const AED_TP2_Routes = {
  path: '/aed/tp2/',
  component: AED_TP2_Home,
  children: [
    {
      path: '/',
      name: 'AED_TP2_Home',
      component: AED_TP2_Script
    },
  ]
}

const AED_TP3_Routes = {
  path: '/aed/tp3/',
  component: AED_TP3_Home,
  children: [
    {
      path: '/',
      name: 'AED_TP3_Home',
      component: AED_TP3_Script
    },
  ]
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ISW_TP6_Routes,
  AED_TP1_Routes,
  AED_TP2_Routes,
  AED_TP3_Routes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
