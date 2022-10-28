// Exemplo analisado:
// https://github.com/mdn/dom-examples/blob/main/to-do-notifications/scripts/todo.js
class Produto{
  constructor(mes, nome, valor, quantidade){
    this.mes = mes;
    this.nome = nome;
    this.valor = valor;
    this.quantidade = quantidade;
  }
}

function enviaProduto(){
  let novoProduto = new Produto(document.querySelector("#mes-select"), document.querySelector("#nome-produto"), document.querySelector("#valor-produto"), documnet.querySelector("#quantidade-vendida"))
}

if(!indexedDB){
    window.alert("O seu navegador não suporta IndexedDB");
}

function enviaDespesa(){
    let mesID = document.querySelector("#mes-select");
    let desepesaNome = document.querySelector("#despesa-nome");
    let despesaValor = document.querySelector("#despesa-valor");
    console.log(mesID.value);
    console.log(desepesaNome.value);
    console.log(despesaValor.value);

    const DBOpenRequest = window.indexedDB.open('despesa', 3);

    DBOpenRequest.onerror = (event) => {
        console.log('Error loading database.');
      };
    
      DBOpenRequest.onsuccess = (event) => {
        console.log('Database initialised.');
        db = DBOpenRequest.result;

      };

      DBOpenRequest.onupgradeneeded = (event) =>{
        db = event.target.result;

        db.onerror = (event) =>{
            console.log("Erro ao carregar a database");
        }

      }


}

