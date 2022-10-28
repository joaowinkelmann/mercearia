
          const Dashboard = { 
            template: `
            <h3>Dashboard</h3>
            <select class="form-select" id="mes-select">
              <option selected>Mês a ser analisado</option>
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
            <h4>Ganhos</h4>
            <hr>
            <div class="row">
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Lucro bruto</h5>
                  <p class="card-text" id="val-lucro-br"></p>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Lucro líquido</h5>
                  <p class="card-text" id="val-lucro-li"></p>
                </div>
              </div>
            </div>
          </div>
            <h4>Despesas</h4>
            <hr>
            <div class="row">
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Fixas</h5>
                  <p class="card-text" id="val-desp-fixas"></p>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Variáveis</h5>
                  <p class="card-text" id="val-desp-var"></p>
                </div>
              </div>
            </div>
          </div>

            `
           }

          const Planejamento = { 
            template:  `
             <h3>Planejamento</h3>
             <div id="container-campos-planejamento">
             <select class="form-select" id="mes-select">
                <option selected>Mês que deseja inserir o planejamento</option>
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
             <h4>Bolos</h4>
             <input class="form-control" type="text" placeholder="Insira a quantidade de BOLOS que deseja vender" id="meta-bolos">
             <h4>Cupcakes</h4>
             <input class="form-control" type="text" placeholder="Insira a quantidade de CUPCAKES que deseja vender" id="meta-cupcakes">
             <button type="button" class="btn btn-primary" id="planejamento-enviar" onclick="enviaPlanejamento()">Enviar</button>
             `
          }
          
          const Produtos = { 
              template: `
              <h3>Produtos</h3>
              <div id="container-campos-produtos">
              <select class="form-select" id="product-select">
                <option selected>Selecione o produto</option>
                <option value="1">Bolo</option>
                <option value="2">Cupcake</option>
              </select>
              <input class="form-control" type="text" placeholder="Insira o nome do produto" id="nome-produto">
              <input class="form-control" type="text" placeholder="Insira o valor do produto" id="valor-produto">
              <input class="form-control" type="text" placeholder="Insira a quantidade vendida" id="quantidade-vendida">
              <button type="button" class="btn btn-primary" id="produto-enviar" onclick="enviaProduto()">Enviar</button>
            `
            }
          
          const Despesas = { 
            template: `
            <h3>Despesas</h3>
            <div id="container-campos-desp">
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
            </div>
            <div id="tabela-despesas">
              <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                </tr>
              </tbody>
            </table>
            </div>
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
          