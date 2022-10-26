
          const Dashboard = { template: 
            'Dashboard'
           }

          const Planejamento = { template:
             'Planejamento'
          }
          
          const Produtos = { template:
             'Produtos'
            }
          
          const Despesas = { 
            template: `
            <h3>Despesas</h3>
            <select class="form-select" id="mes-select">
              <option selected>Selecione o mês referente aos dados</option>
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
            </select>
            <input class="input" type="text" placeholder="Insira a despesa">
            `
           }
          
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
          