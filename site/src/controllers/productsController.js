const path = require ("path");
const fs = require ("fs");

//Esto vamos a tener que transformarlo en una función más adelante, en principio lo hago así//
let productos = fs.readFileSync(path.join (__dirname, "../data/products.json"), "utf-8");
productos = JSON.parse(productos);

module.exports = {

//Creé otro archivo ejs que se llama "product2.ejs" solo para hacer pruebas y no sobreescribir el "products.ejs". La ruta products está justamente asociada al products2.ejs//
    Products: (req, res) => {
        res.render (path.join (__dirname, "../views/products/products2.ejs"), {productos})
    },


    Detail: (req, res) => {
        res.render (path.join (__dirname, "../views/products/productDetail.ejs"))
},

    Cart :(req, res) => {
         res.render (path.join(__dirname, "../views/products/productCart.ejs"));
},

    Edit :(req, res) => {
        res.render (path.join(__dirname, "../views/products/productEdit.ejs"));
},
    create :(req, res) => {
        res.render (path.join(__dirname, "../views/products/productCreate.ejs"));
}
}