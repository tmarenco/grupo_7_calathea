const path = require ("path");
const {validationResult} = require('express-validator')
//se requiere bcryptjs para encriptar la contraseña
const bcryptjs = require("bcryptjs")
//const usersTable = require("../models/Users");
const db = require ("../database/models/");


module.exports = {  
    list: (req,res) => {
        db.Users.findAll({
            include: [
                { association: "CategorieUser"}
                ]
        })
        .then(userList => {
            res.render (path.join (__dirname, "../views/users/userlist.ejs"), {usuarios:userList})
        })
    },

    register: (req, res) => {
        res.render (path.join (__dirname, "../views/users/register.ejs"));
    },


    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
        //si el resultado de la validación no esta vacio (mayor a 0)
        //entonces volve a la pagina de registro, mostra los errores pero si tiene info gurdala y mosrala
        if(resultValidation.errors.length > 0){
            res.render((path.join(__dirname, "../views/users/register.ejs")), 
                {errors: resultValidation.mapped(),
                 oldData: req.body});
                }  //sino crea el usuario, cargalo en el json(con el metodo create) y mostra su perfil 
             //pero primero validamos si el email ya esta registrado
        db.Users.findOne({
            where: {
                email: req.body.email
            }
        }).then ((resultado)=> {
            if (resultado == false){
                return res.render((path.join(__dirname, "../views/users/register.ejs")), 
                {errors: {
                    email:{
                        msg:"Este email ya se encuentra registrado"
                    }
                },
                oldData: req.body})
            } else {
                db.Users.create({
                    irst_name: req.body.name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    phone: req.body.tel,
                    pasword: bcryptjs.hashSync(req.body.password, 10),
                    image: req.file.filename
                })
                return res.redirect("/usuario/iniciar-sesion")
            }
        })
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
            {errors: resultValidation.mapped(), oldData: req.body})            
        } else {
        //si no hay errores verifico que el usuario exista            
        let userToLogin = usersTable.findByField("email", req.body.email);
       
        //si el usuario está logueado
        if(userToLogin){
           //me fijo que las contraseñas coincidan
           let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
           if(isOkThePassword){
                 delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return  res.redirect ("/usuario/perfil") //    si todo esta el login se redirije al home

           } // sino se muesta la pagina de login con los errores correspondientes

            return res.render((path.join(__dirname, "../views/users/login.ejs")),{
                errors: {
                password:{
                    msg:"Contraseña incorrecta"
                }
                }})
           }
       } 
        return res.render((path.join(__dirname, "../views/users/login.ejs")), 
        {errors: {
            email:{
                msg:"Este email no se encuentra registrado"
            }
            }})
    },

    perfil:(req, res) => {
        console.log(req.session)
        return res.render( (path.join(__dirname, "../views/users/perfil.ejs")), {usuario : req.session.userLogged} )
         
},

    logout :(req,res) =>{ // cerrar sesion 
        req.session.destroy();
        return res.redirect("/");
    }
};