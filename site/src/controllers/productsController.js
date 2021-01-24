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
<<<<<<< HEAD
    Load :(req, res) => {
        res.render (path.join(__dirname, "../views/products/productLoad.ejs"));
},
    Create :(req, res) => {
        res.render (path.join(__dirname, "../views/products/productNew.ejs"));
    }
=======
    New :(req, res) => {
        res.render (path.join(__dirname, "../views/products/productNew.ejs"));
}
>>>>>>> 4c9c224c65a33440a5a3317c72db006e73ef37ba
}