const path = require ("path");

module.exports = {


    Products: (req, res) => {
        res.render (path.join (__dirname, "../views/products/products.ejs"))
    },

    /*Products: (req, res) => {
        res.render (path.join (__dirname, "../views/products/products.ejs"))
    },*/

    show: (req, res) => {
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