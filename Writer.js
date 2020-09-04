// Importando fs, para ler ou escrever erm arquivos
const fs = require("fs");
// Importando modulo util
const util = require("util");

class Writer {
    constructor() {
        // Transformando função para ursar promosi
        this.writer = util.promisify(fs.writeFile);
    }

    // Metodo para escrever no arquivo HTML, (recebe o nome do arquivo e os dados como parametro)
    async Write(filename, data) {
        try {
            await this.writer(filename, data);
            return true;
        } catch(err) {
            return false;
        }
    }
}

module.exports = Writer;