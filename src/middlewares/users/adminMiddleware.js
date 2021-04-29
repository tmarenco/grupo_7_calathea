const path = require('path')


function adminMiddleware(req,res,next){
    if(req.session.userlogged && req.session.userlogged.id_category == 1){
        next();
    } 
    return  res.redirect ("/usuario/iniciar-sesion")
}
    


module.exports =  adminMiddleware;