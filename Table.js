// Criando classe Table
class Table {
    // Dividindo o array em cabeçalho e linhas
    constructor(arr) {
        this.header = arr[0];
        // Função do array para remover o primeiro valor
        arr.shift();
        this.rows = arr;
    }

    //Retorna quantidade de linhas da tabela
    get RowCount() {
        return this.rows.length;
    }

    //Retorna quantidade de colunas da tabela
    get ColumnCount() {
        return this.header.length;
    }

}

module.exports = Table;