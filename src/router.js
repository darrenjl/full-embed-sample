import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Integration from './views/Integration.vue'
import IntegrationLayout from './views/IntegrationLayout.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/integrations',
      redirect: '/integrations/dashboard/main',
      pathToRegexpOptions: {strict: true},
    },
    {
      path: '/integrations/',
      component: IntegrationLayout,
      pathToRegexpOptions: {strict: true},
      children: [
        {
          path: '*',
          component: Integration
        }
      ]
    }
  ]
})
