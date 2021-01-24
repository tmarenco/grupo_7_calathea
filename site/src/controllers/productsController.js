const path = require ("path");

module.exports = {

    listProduct : (req, res) => {
        res.render (path.join (__dirname, "../views/products/list.ejs"))
    },
    Products: (req, res) => {
        res.render (path.join (__dirname, "../views/products/products.ejs"))
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
    New :(req, res) => {
        res.render (path.join(__dirname, "../views/products/productNew.ejs"));
}
}