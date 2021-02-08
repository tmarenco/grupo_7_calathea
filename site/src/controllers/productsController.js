const path = require ("path");
const fs = require ("fs");
const jsonTable = require ("../data/jsonTable");
const { userInfo } = require("os");


module.exports = {

//Creé otro archivo ejs que se llama "product2.ejs" solo para hacer pruebas y no sobreescribir el "products.ejs". La ruta products está justamente asociada al products2.ejs//
    products: (req, res) => {
        let productos = jsonTable.all();
        res.render (path.join (__dirname, "../views/products/products2.ejs"), {productos})
    },

    create: (req, res) => {
        res.render (path.join(__dirname, "../views/products/productCreate.ejs"));
    },

    show: (req, res) => {
        let producto = jsonTable.findById(req.params.id);

        if (producto){
            res.render (path.join (__dirname, "../views/products/productDetail.ejs"), { producto });   
        } else {
            res.send ("No encontré el producto")
        }
    },

    store: (req, res) => {
        let newProduct = req.body;
        newProduct.image = req.file.filename
        let productId= jsonTable.create(newProduct)
        res.redirect ("/productos/" + productId);
    },

    edit :(req, res) => {
        res.render (path.join(__dirname, "../views/products/productEdit.ejs"));
    },

    cart: (req, res) => {
        res.render (path.join(__dirname, "../views/products/productCart.ejs"));
    }
}