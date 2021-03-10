function userLoggedMiddelware (req,res,next){
res.locals.estaLogueado = false;
next();
}


module.exports = userLoggedMiddelware