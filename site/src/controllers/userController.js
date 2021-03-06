const path = require ("path");
const {validationResult} = require('express-validator')
//const users = require("./data/users")

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
    processRegister: (req,res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            //Creo nuevo usuario y redirijo a su perfil FALTA
            res.render((path.join(__dirname, "../views/users/user.ejs")))  
        } else {
            return res.render(path.join(__dirname, "../views/users/register.ejs"),  {errors: errors.mapped()})
        }
       //  
     },

    perfil :(req, res) => {
         res.render (path.join(__dirname, "../views/users/perfil.ejs"),);
},

}