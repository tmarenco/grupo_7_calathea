const path = require ("path");
const fs = require ("fs");
const jsonTable = require ("../data/jsonTable");
const { userInfo } = require("os");
const { json } = require("express");
const db = require ("../database/models/");
const { Op } = require("sequelize");
const Offer = require("../database/models/Offer");
const Product = require("../database/models/Product");


module.exports = {
// products: lista todos lo productos de la base de datos
    products: (req, res) => {
        db.Product.findAll({
            include: [
                { association: "categorie"}
                ]
        })
        .then(productList => {
            console.log(productList.categorie)
            res.render (path.join (__dirname, "../views/products/products.ejs"), {productos:productList})
        })

      
    },
    //create: formulario de creeacion de un nuevo producto
    create: (req, res) => {
        Promise.all([
        db.Offer.findAll(),
        db.Categorie.findAll() // cargamos las categorias a la vista
        ])
        .then(resultPromises => { 
            const offer = resultPromises [0]
            const categories = resultPromises [1]
            res.render (path.join(__dirname, "../views/products/productCreate.ejs"),{categories,offer});
        })
    },

    
    // show: muestra el detalle de un producto en particular sino esta muestra "Producto no encontrado"
    show: (req, res) => {
    
        db.Product.findByPk(req.params.id, {
            include: [
                { association: "categorie"}
                ]
        })
        .then(productDetail =>{
            console.log(productDetail.categorie)
            if(productDetail){
             res.render (path.join (__dirname, "../views/products/productDetail.ejs"), {producto:productDetail})}
             else{
                 res.send("Producto no encontrado")
             }})
        
    },

        // store: crea un nuevo producto lo redirige a la pagina de productos
    store: (req, res) => {
        const {name, description , id_categories , price , id_offer , stock , order } = req.body
        const { filename } = req.file
       

        db.Product.create({
            name, 
            description , 
            image : filename,
            id_categories: Number(id_categories),
            price , 
            id_offer , 
            stock , 
            order,
            
        })
        .then (newProduct => {
            console.log(req.body)
            res.redirect("/productos")
        })
        .catch (error =>{
            res.send ("fallo")
        })
    },

    // edit: formulario de actualziacion de productos
    edit :(req, res) => {
       Promise.all([
        db.Product.findByPk(req.params.id),
        db.Categorie.findAll(),
        db.Offer.findAll(),

       ])
       .then(resultPromises => {
           const product = resultPromises [0]
           const categorie = resultPromises [1]
           const offer = resultPromises [2]

           if(product){
            res.render (path.join (__dirname, "../views/products/productEdit.ejs"), { product ,categorie , offer})
        }})
           
        },
        // update: enviar formulario de actualizacion de producto

    update: (req, res) => {
       const { id } = req.params
       const {name, description , id_categories , price , id_offer , stock , order } = req.body

       db.Product.findByPk( id )
       .then(product => {
           const originImage = product.image

           db.Product.update ({
            name, 
            description , 
            id_categories: Number(id_categories) , 
            price , 
            id_offer , 
            stock , 
            order,
            image : req.file ? req.file.filename : originImage
           },
           {
               where :{
                   id
                } 
           })

           .then (() => {
            console.log(req.body)
               res.redirect ("/productos");
           })

        })
    
    },

    // delete : elimina un producto

    delete: (req, res) => {

       const { id } = req.params

       db.Product.destroy( {

           where : {
               id
           }
       })
       .then ( () => { 
            res.redirect ("/productos")

       })
        
      
    },

    cart: (req, res) => {
        res.render (path.join(__dirname, "../views/products/productCart.ejs"));
    }
}