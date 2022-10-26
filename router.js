
          const Dashboard = { template: 'Dashboard' }
          const Planejamento = { template: 'Planejamento'}
          const Produtos = { template: 'Produtos'}
          const Despesas = { template: 'Aqui serão mostradas as despesas' }
          
          const routes = [
            { path: '/', component: Dashboard },
            { path: '/planejamento', component: Planejamento },
            { path: '/produtos', component: Produtos },
            { path: '/despesas', component: Despesas },
          ]
          
          const router = VueRouter.createRouter({
            history: VueRouter.createWebHashHistory(),
            routes,
          })
          
          const app = Vue.createApp({})
          app.use(router)
          
          app.mount('#app')
          