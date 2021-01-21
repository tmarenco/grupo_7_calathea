const path = require ("path");

module.exports = {
    index: (req, res) => {
        res.render (path.join (__dirname, "../views/home/index.ejs"))
    },

    contact: (req, res) => {
        res.render (path.join (__dirname, "../views/home/contacto.ejs"))
},

    about :(req, res) => {
         res.render (path.join(__dirname, "../views/home/quienes-somos.ejs"));
}
}