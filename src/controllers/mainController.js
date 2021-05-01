const path = require ("path");
const db = require ("../database/models/");
const Product = require("../database/models/Product");

module.exports = {
    index: (req, res) => {
        db.Product.findAll({
            include: [
                { association: "categorie"}
                ]
        })
        .then(productList => {
        res.render (path.join (__dirname, "../views/home/index.ejs"), {productos:productList})
        })
    },

    contact: (req, res) => {
        res.render (path.join (__dirname, "../views/home/contacto.ejs"))
},

    about :(req, res) => {
         res.render (path.join(__dirname, "../views/home/quienes-somos.ejs"));
},
   faq :(req, res) => {
   res.render (path.join(__dirname, "../views/home/preguntas-frecuentes.ejs"));
}

}