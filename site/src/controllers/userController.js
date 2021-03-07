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
        const resultValidation = validationResult(req);
        
        if(resultValidation.isEmpty()){
                return res.render (path.join(__dirname, "../views/users/user.ejs"))
            }else {
                return res.render(path.join(__dirname, "../views/users/register.ejs"), {errors: resultValidation.mapped(), old: req.body})
            }
            
            /*if (resultValidation.errors.lenght > 0){
                return res.render(path.join(__dirname, "../../views/users/register.ejs"),  {errors: errors.mapped()})
            } else {
             //Creo nuevo usuario y redirijo a su perfil FALTA
             res.render((path.join(__dirname, "../views/users/user.ejs")))  
            } */
    },
    perfil :(req, res) => {
         res.render (path.join(__dirname, "../views/users/perfil.ejs"),);
},

}