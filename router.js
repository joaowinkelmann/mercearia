
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
               <input class="form-control" type="text" placeholder="Insira a quantidade de BOLOS que deseja vender" id="meta-bolos" style="border: 1px solid black" >
               <h4>Cupcakes</h4>
               <input class="form-control" type="text" placeholder="Insira a quantidade de CUPCAKES que deseja vender" id="meta-cupcakes" style="border: 1px solid black" >
               <button type="button" class="btn btn-primary" id="planejamento-enviar" onclick="enviaPlanejamento()">Enviar</button>
             `
          }
          
          const Produtos = { 
              template: `
                <h3>Produtos</h3>
                <div id="container-campos-produtos">
                <select class="form-select" id="product-select" style="border: 1px solid black"  style="background-color:  lightgrey">
                  <option selected >Selecione o produto </option>
                  <option value="1">Bolo</option>
                  <option value="2">Cupcake</option>
                </select>
                <input class="form-control" type="text" placeholder="Insira o nome do produto" id="nome-produto" style="border: 1px solid black">
                <input class="form-control" type="text" placeholder="Insira o valor do produto" id="valor-produto" style="border: 1px solid black">
                <input class="form-control" type="text" placeholder="Insira a quantidade em estoque" id="quantidade-estoque" style="border: 1px solid black">
                <button type="button" class="btn btn-primary" id="produto-enviar" onclick="enviaProduto()">Enviar</button>
            `
            }
          
          const Despesas = { 
            template: `
              <h3>Despesas</h3>
              <div id="container-campos-desp">
                <select class="form-select" id="mes-select" style="border: 1px solid black">
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
                </div>
                <hr>
                <h4>Variáveis</h4>
                <div class="container">
                <div class="row">
                  <div class="col">
                    <div>
                      <p >Insira os gastos com água:</p>
                      <input class="form-control" type="text" placeholder="R$ 100,00" id="despesa-var-agua" style="border: 1px solid black">
                    </div>
                  </div>
                  <div class="col">
                    <div>
                      <p>Insira os gastos com energia:</p>
                      <input class="form-control" type="text" placeholder="R$ 100,00" id="despesa-var-energia" style="border: 1px solid black">
                    </div>
                  </div>
                <div class="row">
                  <div class="col">
                    <div class="container-flex mt-2">
                      <p>Insira os gastos com gasolina:</p>
                      <input class="form-control" type="text" placeholder="R$ 100,00" id="despesa-var-gasolina" style="border: 1px solid black">
                    </div>
                  </div>
                  <div class="container-flex col">
                    <div class="mt-2">
                      <p>Insira os gastos com mantimentos:</p>
                      <input class="form-control" type="text" placeholder="R$ 100,00" id="despesa-var-mantimentos" style="border: 1px solid black">
                    </div>
                  </div>
                </div>
                </div>
                <button type="button" class="btn btn-primary mt-2" id="despesa-enviar" onclick="enviaDespesa()">Enviar</button>
            `
           }
           const Despesas_fixas = { 
            template: `
              <h3>Despesas</h3>
              <div id="container-campos-desp">
                <select class="form-select" id="mes-select" style="border: 1px solid black">
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
                </div>
                <hr>
                <h4>Fixas</h4>
                <div class="container-fixas">
                <div class="row">
                  <div class="col">
                    <div>
                      <p >Insira os gastos com aluguel:</p>
                      <input class="form-control" type="text" placeholder="R$ 100,00" id="despesa-fix-aluguel" style="border: 1px solid black">
                    </div>
                  </div>
                  <div class="col">
                    <div>
                      <p>Insira os gastos com internet:</p>
                      <input class="form-control" type="text" placeholder="R$ 100,00" id="despesa-fix-internet" style="border: 1px solid black">
                    </div>
                  </div>
                <div class="row">
                  <div class="col">
                    <div class="container-flex mt-2">
                      <p>Insira os gastos com contabilidade:</p>
                      <input class="form-control" type="text" placeholder="R$ 100,00" id="despesa-fix-contabilidade" style="border: 1px solid black">
                    </div>
                  </div>
                  <div class="container-flex col">
                    <div class="mt-2">
                      <p>Insira os gastos com impostos:</p>
                      <input class="form-control" type="text" placeholder="R$ 100,00" id="despesa-fix-impostos" style="border: 1px solid black">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="container-flex mt-2">
                      <p>Insira os gastos com funcionario:</p>
                      <input class="form-control" type="text" placeholder="R$ 100,00" id="despesa-fix-funcionario" style="border: 1px solid black">
                    </div>
                </div>
                </div>
                <button type="button" class="btn btn-primary mt-2" id="-enviar" onclick="enviaDespesaFixa()">Enviar</button>
            `
           }
           
           
           
          
          const routes = [
            { path: '/', component: Dashboard },
            { path: '/planejamento', component: Planejamento },
            { path: '/produtos', component: Produtos },
            { path: '/despesas', component: Despesas },
            { path: '/despesas', component: Despesas_fixas},
          ]
          
          const router = VueRouter.createRouter({
            history: VueRouter.createWebHashHistory(),
            routes,
          })
          
          const app = Vue.createApp({})
          app.use(router)
          
          app.mount('#app')
          