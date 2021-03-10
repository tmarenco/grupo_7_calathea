const path = require ("path");
const {validationResult} = require('express-validator')
//se requiere bcryptjs para encriptar la contraseña
const bcryptjs = require("bcryptjs")
const usersTable = require("../models/Users")
const guestMiddleware = require('../middlewares/users/guestMiddleware')

module.exports = {
    users: (req, res) => {
        res.render (path.join (__dirname, "../views/users/user.ejs"));
        
    },
   
    register: (req, res) => {
        res.render (path.join (__dirname, "../views/users/register.ejs"));
        
}, 
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
        //si el resultado de la vadilacion no esta vacio (mayor a 0)
        //entonces volve a la pagina de registro, mostra los errores pero si tiene info gurdala y mosrala
        if(resultValidation.errors.length > 0){
            res.render((path.join(__dirname, "../views/users/register.ejs")), 
                {errors: resultValidation.mapped(),
                 oldData: req.body});
             }  //sino crea el usuario, cargalo en el json(con el metodo create) y mostra su perfil 
             //pero primero validamos si el email ya esta registrado

             let usuarioEnBaseDeDato = usersTable.findByField ("email", req.body.email);//creo una varialble para buscar un usuario por email
             // este if si el usuario encontrado esta en la BD entonces devolvera un error en el formulario de registro
             if(usuarioEnBaseDeDato) {
                return res.render((path.join(__dirname, "../views/users/register.ejs")), 
                {errors: {
                    email:{
                        msg:"Este email ya se encuentra registrado"
                    }
                },
                 oldData: req.body})
             }
             // si no esta regitrado el email entonces se registra
             let userCreado = {
                 ...req.body,
                 password : bcryptjs.hashSync(req.body.password, 10), // se encripta la contraseña
                 imagen : req.file.filename
             }
             usersTable.create(userCreado)
            return res.render (path.join(__dirname, "../views/users/perfil.ejs")) 
          
    },

    login: (req, res) => {
        res.render (path.join (__dirname, "../views/users/login.ejs"));
    
    },

    loginProcces: (req, res) => {
       //validaciones de login
       //si hay errores devuelvo error
       let resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render(path.join(__dirname, "../views/users/login.ejs"), 
            {errors: resultValidation.mapped(), old: req.body})            
        } else {
        //si no hay errores verifico que el usuario exista            
        let userToLogin = usersTable.findByField("email", req.body.email);
       
        //si el usuario está logueado
        if(userToLogin){
           //me fijo que las contraseñas coincidan
           let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
           if(isOkThePassword){
                delete userToLogin.password;
                req.session.userlogged = userToLogin;
                return  res.redirect ("/usuario/perfil")

           } else{
            return res.render((path.join(__dirname, "../views/users/login.ejs")),{errors: {
                password:{
                    msg:"Contraseña incorrecta"
                }
                }})
           }
       } else{
        return res.render((path.join(__dirname, "../views/users/login.ejs")), 
        {errors: {
            email:{
                msg:"Este email no se encuentra registrado"
            }
            }})
        }}
    },

    perfil:(req, res) => {
        console.log(req.session)
        return res.render (path.join(__dirname, "../views/users/perfil.ejs"), {
            user: req.session.userLogged
        });
         
}
};