const path = require('path')
// Este middelware lo que hace es, si alguien no esta logueado,
// entonces redirigilo iniciar-sesion, sino next
// lo vamos a usar las rutas de perfil y de logout
//sirve para que cuando uno no esta logueado no pueda entrar a la pagina de perfil

function authMiddleware(req,res,next){
    if(!req.session.userLogged){
        return  res.redirect ("/usuario/iniciar-sesion")
    } 
    next();
}

// function authMiddleware(req,res,next){
//     if(req.session.userLogged){
//         next()
//     } 
//     return  res.redirect ("/usuario/iniciar-sesion")
// }



    


module.exports =  authMiddleware;
