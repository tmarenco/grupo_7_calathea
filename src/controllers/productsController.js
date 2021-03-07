const path = require ("path");
const fs = require ("fs");
const jsonTable = require ("../data/jsonTable");
const { userInfo } = require("os");
const { json } = require("express");


module.exports = {

    products: (req, res) => {
        let productos = jsonTable.all();
        res.render (path.join (__dirname, "../views/products/products.ejs"), {productos})
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
        let producto = jsonTable.findById(req.params.id);
        if (producto){
            res.render (path.join(__dirname, "../views/products/productEdit.ejs"), { producto });
        } else {
            res.send ("No encontré el producto")
        }
    },

    update: (req, res) => {
        let product = req.body;
        product.image = req.file.filename;
        product.identificador = Number(req.params.id); // Por params llega un id en formato string, poniendo "Number" delante le pedimos que ese id que llegue lo convierta en número.

        let productId = jsonTable.update (product);
        res.redirect ("/productos/" + productId);
    },

    delete: (req, res) => {
        jsonTable.destroy(req.params.id)
        res.redirect ("/productos")
    },

    cart: (req, res) => {
        res.render (path.join(__dirname, "../views/products/productCart.ejs"));
    }
}