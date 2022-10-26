let outDB;
let db;

const createDB = () => {
    if(window.indexedDB){
        const request = window.indexedDB.open('meuBanco', 4);

        request.onsuccess = (event) =>{
            db = request.result;
            console.log(request.result, event);
            outDB.innerHTML = 'Sucesso';
        };

        request.onerror = (event) => {
            console.log("Algo de errado ocorreu ao fazer a requisição");
            console.log(event);
            outDB.innerHTML = 'Erro';
        };

        request.onupgradeneeded = (event) => {
            db = event.target.result;

            //object storage

            const objectStorePeriodo = db.createObjectStore('mes',
            {
                keyPath: 'id',
                autoIncrement: true 
            });

            objectStorePeriodo.createIndex('mes', 'mes', {unique: true});

            console.log('on Upgraded', event);
            outDB.innerHTML = 'Upgraded';
        };
    }
    else{
        console.log("Sem suporte ao IndexedDB");
        outDB.innerHTML = 'Sem suporte ao IndexedDB';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    outDB = document.getElementById('output-db');
    createDB();
});