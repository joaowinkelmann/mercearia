
          const Dashboard = { template: 
            'Dashboard'
           }

          const Planejamento = { template:
             'Planejamento'
          }
          
          const Produtos = { 
              template: `
              <h3>Produtos</h3>
              <select class="form-select" id="product-select">
                <option selected>Selecione o produto</option>
                <option value="1">Bolo</option>
                <option value="2">Cupcake</option>
              </select>
               
            `
            }
          
          const Despesas = { 
            template: `
            <h3>Despesas</h3>
            <select class="form-select" id="mes-select">
              <option selected>Selecione o mês referente aos dados</option>
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
              <option value="4">Abril</option>
              <option value="5">Maio</option>
              <option value="6">Junho</option>
              <option value="7">julho</option>
              <option value="8">Agosto</option>
              <option value="9">Setembro</option>
              <option value="10">outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
            <input class="form-control" type="text" placeholder="Descreva a despesa" id="despesa-nome">
            <input class="form-control" type="text" placeholder="Insira o valor da despesa" id="despesa-valor">
            <button type="button" class="btn btn-primary" id="despesa-enviar" onclick="enviaDespesa()">Enviar</button>
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
          