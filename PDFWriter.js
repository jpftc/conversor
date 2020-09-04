// Importando biblioteca para converter HTMl em PDF
var pdf = require("html-pdf");

// Criando função para converter HTML em PDF
class PDFWriter {
    static WritePDF(filename, html) {
        pdf.create(html, {}).toFile(filename, (err) => {});
    }
}

module.exports = PDFWriter;