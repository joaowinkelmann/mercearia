var request = indexedDB.open("bancoMercearia", 1);

request.onupgradeneeded = function(event) {
  //fazer a criação das tabelas, indices e popular o banco se necessário
}
request.onsuccess = function (event) { 
  //sucesso ao criar/abrir o banco de dados
}

request.onerror = function (event) { 
  //erro ao criar/abrir o banco de dados
}