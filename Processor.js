// Criando classe Processor
class Processor {
    // Static para chamar o metodo sem instanciar um objeto
    static Process(data) {
        // Dividindo os dados em um array com outros arrays com os dados separados por ","
        var a = data.split("\n");
        var rows = [];

        a.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });
        return rows;
    }
}

module.exports = Processor;