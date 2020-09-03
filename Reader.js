// Importando fs, para ler ou escrever erm arquivos
const fs = require("fs");
// Importando modulo util
const util = require("util");

class Reader {
    constructor() {
        // Salva a funcão readFile na variavel "reader", usando promisify para transformar o callback em uma promisi, podendo assim salvar o retorno da função
        // em uma variavel
        this.reader = util.promisify(fs.readFile);
    }

    // Criando função sincrona para retornar o conteudo do arquivo
    async Read(filepath) {
        try {
            return await this.reader(filepath, "utf8");
        } catch (err) {
            return (err);
        }
    }

}

// Exportando classe
module.exports = Reader;