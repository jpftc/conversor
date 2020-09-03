// Importando classe Reader
var Reader = require("./Reader");

// Instanciando objeto
var leitor = new Reader();

// Criando função sincrona para guardar dados na variavel dados
async function main() {
    var dados = await leitor.Read("./users.csv");
    console.log(dados);
}

// chama função main
main();