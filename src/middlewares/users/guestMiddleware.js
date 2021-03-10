const path = require('path')


// Este middelware lo que hace es, si alguien esta logueado,
// entonces redirigilo al perfil, sino next
// lo vamos a usar las rutas de registro e iniciar sesion
//sirve para que cuando uno esta logueado no pueda entrar ni a la pagina de registro ni a la de iniciar sesion

function guestMiddleware(req,res,next){
    if(req.session.userlogged){
        return  res.redirect ("/usuario/perfil")
    } 
        next();
    }
    


module.exports = guestMiddleware;
