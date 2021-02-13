const path = require ("path");
const fs = require ("fs");

const jsonTable = {
    filePath: path.join (__dirname, "../data/products.json"),
    readFile(){
        let rows= JSON.parse (fs.readFileSync (this.filePath, "utf-8"));
        
        return rows;
    },
    writeFile (contenido){
        let contentsJson = JSON.stringify(contenido, null, " ");
        fs.writeFileSync(this.filePath, contentsJson);
    },
    nextId (){
        let rows = this.readFile();
        let lastRow= rows.pop();

        return lastRow.identificador + 1 
    },
    all (){
        return this.readFile();
    },
    create (newProduct){
        let rows = this.readFile();
        newProduct.identificador = this.nextId();
        rows.push (newProduct);

        this.writeFile (rows);

        return newProduct.identificador
    },
    findById (id){
        let rows = this.readFile();
        return rows.find (producto => producto.identificador == id);
    },
    update (row) {
        let rows = this.readFile ();
        let updatedRows = rows.map (oneRow => {
            if (oneRow.identificador == row.identificador) {
                return row;
            } 
            return oneRow;
        });

        this.writeFile (updatedRows);
        return row.identificador;
    },
    destroy (id) {
        let rows = this.readFile ();
        let updatedRows = rows.filter (oneRow => oneRow.identificador != id);

        this.writeFile (updatedRows)
    }

}

module.exports = jsonTable

