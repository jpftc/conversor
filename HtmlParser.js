// Importando EJS
var ejs = require("ejs");

class HtmlParser {
    // Metodo para conversão em HTML
    static async Parse(table) {
        // renderFile "lẽ" o arquivo HTML e insere as variaveis
        return await ejs.renderFile("./table.ejs", {header: table.header, rows: table.rows});
    }
}

module.exports = HtmlParser;