function middlewareRegister(req,res,next){
    console.log("soy el middleware");
    next()
}

module.exports = middlewareRegister;
