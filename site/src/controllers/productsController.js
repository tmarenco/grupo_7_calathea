const path = require ("path");

module.exports = {
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
    Load :(req, res) => {
        res.render (path.join(__dirname, "../views/products/productLoad.ejs"));
},
    Create :(req, res) => {
        res.render (path.join(__dirname, "../views/products/productNew.ejs"));
    }
}