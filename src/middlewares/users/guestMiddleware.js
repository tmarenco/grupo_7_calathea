const path = require('path')

function guestMiddleware(req,res,next){
    if(req.session.userLogged){
       return res.redirect(path.join(__dirname, '../views/users/perfil.ejs'))
    } 
        next();
    }
    


module.exports = guestMiddleware;
