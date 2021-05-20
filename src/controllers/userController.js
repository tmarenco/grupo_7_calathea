const path = require ("path");
const {validationResult} = require('express-validator')
//se requiere bcryptjs para encriptar la contraseña
const bcryptjs = require("bcryptjs")
const db = require ("../database/models/");



module.exports = {  
    register: (req, res) => {
        res.render (path.join (__dirname, "../views/users/register.ejs"));
    },


    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
        //si el resultado de la validación no esta vacio (mayor a 0)
        //entonces volve a la pagina de registro, mostra los errores pero si tiene info gurdala y mosrala
        if(resultValidation.errors.length > 0){
            res.render((path.join(__dirname, "../views/users/register.ejs")),{errors: resultValidation.mapped(), oldData: req.body});
        } else {
        //sino crea el usuario, cargalo en el json(con el metodo create) y mostra su perfil 
        //pero primero validamos si el email ya esta registrado
            db.Users.findOne({
                where: {
                    email: req.body.email
                }
            }).then(function(resultado){
                if (resultado != null){
                    return res.render ((path.join(__dirname, "../views/users/register.ejs")),
                    {errors: {
                        email: {
                            msg: "Este email ya se encuentra registrado"
                        },
                    }, oldData: req.body
                })
            } else {
                db.Users.create({
                    first_name: req.body.name,
                    last_name: req.body.last_name,
                    phone: req.body.tel,
                    email: req.body.email,
                    image: req.file.filename,
                    id_category: 2,
                    password: bcryptjs.hashSync(req.body.password, 10)
                });
                return res.redirect("/usuario/iniciar-sesion")
            }
        }).catch (function(error){
            console.log(error)
        })
    }
},

registerAdmin: (req, res) => {
    res.render (path.join (__dirname, "../views/users/registerAdmin.ejs"));
},
processRegisterAdmin:(req,res) => {
    const resultValidation = validationResult(req);
    //si el resultado de la validación no esta vacio (mayor a 0)
    //entonces volve a la pagina de registro, mostra los errores pero si tiene info gurdala y mosrala
    if(resultValidation.errors.length > 0){
        res.render((path.join(__dirname, "../views/users/registerAdmin.ejs")),{errors: resultValidation.mapped(), oldData: req.body});
    } else {
    //sino crea el usuario, cargalo en el json(con el metodo create) y mostra su perfil 
    //pero primero validamos si el email ya esta registrado
        db.Users.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(resultado){
            if (resultado != null){
                return res.render ((path.join(__dirname, "../views/users/registerAdmin.ejs")),
                {errors: {
                    email: {
                        msg: "Este email ya se encuentra registrado"
                    },
                }, oldData: req.body
            })
        } else {
            db.Users.create({
                first_name: req.body.name,
                last_name: req.body.last_name,
                phone: req.body.tel,
                email: req.body.email,
                image: req.file.filename,
                id_category: 1,
                password: bcryptjs.hashSync(req.body.password, 10)
            });
            return res.redirect("/usuario/administracion")
        }
    }).catch (function(error){
        console.log(error)
    })
}
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
            let userToLogin = db.Users.findOne({
              
                where: {
                    email: req.body.email
                }
            }).then(function(usuario){
                if (usuario == undefined){
                    return res.render (path.join(__dirname, "../views/users/login.ejs"), {
                        errors: {
                            email: {
                                msg:"Este email no se encuentra registrado"
                            }
                        }
                    })
                } else {
                    let isOkThePassword = bcryptjs.compareSync(req.body.password, usuario.password);
                    if (isOkThePassword){
                        delete usuario.password;
                        req.session.userLogged = usuario;
                        return res.redirect ("/usuario/perfil")
                    } else {
                        return res.render ((path.join(__dirname, "../views/users/login.ejs")), {
                            errors: {
                                password: {
                                    msg:"Contraseña incorrecta"
                                }
                            }
                        })
                    }

                }
            })
        }
    },

    perfil:(req, res) => {
        return res.render( (path.join(__dirname, "../views/users/perfil.ejs")), {usuario : req.session.userLogged} )
    },
    perfilUsuario:(req, res)=> {
        db.Users.findByPk(req.params.id)
        .then(userDetail =>{
            if(userDetail){
             res.render (path.join (__dirname, "../views/users/userProfile.ejs"), {usuario:userDetail})}
             })
    },

    delete: (req, res) => {
        const id = req.params.id
        db.Users.destroy( {
            where : {
                id
            }
        })
        .then ( () => { 
             res.redirect ("/usuario/listausuarios")
        })
     },

    edit: (req, res) => {
        return res.render( (path.join(__dirname, "../views/users/userEdit.ejs")), {usuario : req.session.userLogged} )
    },

    update: (req, res)=> {
        const resultValidation = validationResult(req);
        const id = req.session.userLogged.id;

        db.Users.findByPk(id)
            .then(usuario => {
                const originImage = usuario.image
                const passwordVieja = usuario.password
                const originEmail = usuario.email
                
                if(resultValidation.errors.length > 0){
                    res.render((path.join(__dirname, "../views/users/userEdit.ejs")),{errors: resultValidation.mapped(), oldData: req.body, usuario});
                } else { 
                    db.Users.update ({
                        first_name: req.body.name,
                        last_name: req.body.last_name, 
                        phone: req.body.tel,
                        email: originEmail,
                        image : req.file ? req.file.filename : originImage,
                        password: passwordVieja
                    },
                    {
                        where :{
                            id: id
                        } 
                    })
                    .then (() => {
                        db.Users
                        .findByPk(id)
                        .then(user =>{
                            delete user.password
                            req.session.userLogged = user
                            return res.redirect ("/usuario/perfil")
                        })
                    })
                }
            })
    },
    editPw: (req,res)=>{
        return res.render(path.join(__dirname, "../views/users/changePw.ejs"), {usuario : req.session.userLogged})
    },

    updatePw: (req, res)=> {
        const resultValidation = validationResult(req);
        const id = req.session.userLogged.id;

        db.Users.findByPk(id)
            .then(usuario => {
                if(resultValidation.errors.length > 0){
                    res.render((path.join(__dirname, "../views/users/changePw.ejs")),{errors: resultValidation.mapped(), usuario});
                } else { 
                    db.Users.update ({
                        password: bcryptjs.hashSync(req.body.password, 10)
                    },
                    {
                        where :{
                            id: id
                        } 
                    })
                    .then (() => {
                        db.Users
                        .findByPk(id)
                        .then(user =>{
                            delete user.password
                            req.session.userLogged = user
                            return res.redirect ("/usuario/perfil")
                        })
                    })
                }
            })
    },

    logout :(req,res) =>{ // cerrar sesion 
        req.session.destroy();
        return res.redirect("/");
    },
    administracion: (req, res)=>{
        return res.render(path.join(__dirname, "../views/users/admin.ejs"))
    },
    sinPermiso: (req, res)=>{
        return res.render( (path.join(__dirname, "../views/home/sinPermiso.ejs")), {usuario : req.session.userLogged} )
    },
    list: (req,res) => {
        db.Users.findAll({
            include: [
                { association: "CategorieUser"}
                ]
        })
        .then(userList => {
            return res.render (path.join (__dirname, "../views/users/userlist.ejs"), {usuarios:userList})
        })
    }
};