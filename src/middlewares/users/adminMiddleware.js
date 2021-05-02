//Este Middleware sirve para ver si el usuario tiene categoria adminsitrador (la categoria 1 es administrador y la 2 es cliente).
// Primero chequea si el usuario está logueado y si la categoría del usuario es 1. 
//Si cumple con esas condiciones, puede pasar al siguiente paso indicado en la ruta. Ese paso sería entrar a la url "usuario/administracion"
//Si no cumpliese con esas condiciones, lo redirecciona a la vista del home "sinPermiso". 
// Usar este usuario para ver cosas de administración:
// Correo: liomessi@gmail.com
// Contraseña: Lionel10!!

const path = require('path')

//CONSULTAR
// function adminMiddleware(req,res,next){
//     if(req.session.userLogged && req.session.userLogged.id_category === '1'){
//         next();
//     } 
//     return res.redirect ("/usuario/sinPermiso")
// }

function adminMiddleware(req,res,next){
    if(req.session.userLogged && req.session.userLogged.id_category === '2' || !req.session.userLogged){
        return res.redirect ("/usuario/sinPermiso")
    } 
    next();
}

module.exports =  adminMiddleware;