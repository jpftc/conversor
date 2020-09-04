// Importando classe Reader
var Reader = require("./Reader");
// Impostando classe Writer
var Writer = require("./Writer");
// Importtando classe Procces
var Processor = require("./Processor");
// Carregando classe Table
var Table = require("./Table");
// Importando classe HtmlParser
var HtmlParser = require("./HtmlParser");
// Importando classe PDRWriter
var PDFWriter = require("./PDFWriter");

// Instanciando objetos
var leitor = new Reader();
var escritor = new Writer();

// Criando função sincrona para guardar dados na variavel dados
async function main() {
    // Lendo dados da planilha
    var dados = await leitor.Read("./users.csv");
    // Processando dados da planilha
    var DadosProcessados = Processor.Process(dados);
    // Separando dados em Header e rows
    var usuarios = new Table(DadosProcessados);
    // Convertendo para HTML
    var html = await HtmlParser.Parse(usuarios);
    // Escrevendo no novo arquivo gerado
    escritor.Write(Date.now() + ".html", html);
    // Convertendo html em PDF
    PDFWriter.WritePDF(Date.now() + ".PDF", html);
    
}

// chama função main
main();