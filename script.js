const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const request = indexedDB.open("MerceariaDB", 1);

request.onerror = function (event){
    console.error("Um erro ocorreu com o IndexedDB");
    console.error(event);
}

request.onupgradeneeded = function() {
    const db = request.result;
    const store = db.createObjectStore("produto", {keyPath: "id"});
    store.createIndex("nome_produto", ["nome"], {unique: false});
    store.createIndex("valor_produto", ["valor"], {unique: false});
}

request.onsuccess = function (){
    const db = request.result;
    const transaction = db.transaction("produto", "readwrite");

    const store = transaction.objectStore("produto");
    const indexNomeProd = store.index("nome_produto");
    const indexValorProd = store.index("valor_produto");


    //Inserindo dados na db

    store.put({id: 1, nome: "Bolo", valor: "20"});
    store.put({id: 2, nome: "Bolo", valor: "15"});
    store.put({id: 3, nome: "Cupcake", valor: "4.5"});

    //Fazendo query dos valores

    const idQuery = store.get(1);

    const puxarNome = indexNomeProd.getAll(["Bolo"]);
    const puxarValor = indexValorProd.get(["20"]);

    idQuery.onsuccess = function(){
        console.log('idQuery', idQuery.result);
    };
    idQuery.onsuccess = function(){
        console.log('puxarNome', puxarNome.result);
    };
    idQuery.onsuccess = function(){
        console.log('puxarValor', puxarValor.result);
    };

    transaction.oncomplete = function(){
        db.close();
    };
}