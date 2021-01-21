const path = require ("path");

module.exports = {
    users: (req, res) => {
        res.render (path.join (__dirname, "../views/users/user.ejs"))
    },
    login: (req, res) => {
        res.render (path.join (__dirname, "../views/users/login.ejs"))
    },

    register: (req, res) => {
        res.render (path.join (__dirname, "../views/users/register.ejs"))
},

    perfil :(req, res) => {
         res.render (path.join(__dirname, "../views/users/perfil.ejs"));
},

}