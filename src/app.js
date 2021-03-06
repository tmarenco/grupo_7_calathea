/*---------------------------- REQUERIMIENTO DE MODULOS-------------------------------*/
const express = require("express");
const app = express();
const path = require ("path");
const publicPath = path.resolve (__dirname, "../public");
const methodOverride = require("method-override")
const session = require("express-session");
const cookies = require("cookie-parser")

/* CORS --> Esto se lo pasamos a las rutas de las APIS ya que por un tema de permisos (creo), no funciona sin esto*/
const cors = require("cors")

/* -----------------------------CONFIGURACION APP.USE-------------------------------*/

/*Carpeta pública*/
app.use (express.static(publicPath));



/* ejs*/
app.set ("view engine", "ejs");
app.set ("views ", "src/views");

// Session
app.use(session(
    { secret: 'Mensaje secreto!',
    resave: false, // no vuelve a guardar si no hay cambios
    saveUninitialized: true, //guarda sesiones aunque no haya datos
    }));

  
  
//MIDDELWARE PARA USAR CUANDO ALGUIEN ESTA LOGUEADO O NO
const userLoggedMiddelware = require("./middlewares/users/userLoggedmiddelware");
app.use(userLoggedMiddelware)

// COOKIES

app.use(cookies())
    
/*Poder enviar información de formularios*/
app.use(express.urlencoded({extended:false}));
app.use (express.json());

    
/* put y delete*/
app.use(methodOverride("_method"))


//------------------RUTAS----------------------------//

/* RUTAS HOME*/
const mainRouter= require ("./routes/mainRouter");
app.use ("/", mainRouter);

/* RUTAS PRODUCTOS*/
const productsRouter= require ("./routes/productsRouter");
app.use ("/productos", productsRouter)

/* RUTAS USER*/
const userRouter= require ("./routes/userRouter");
const cookieParser = require("cookie-parser");
app.use ("/usuario", userRouter);

/* RUTAS API*/
const apiProductRouter= require ("./routes/api/apiProductRouter");
app.use("/api/products", cors(), apiProductRouter)

const apiUserRouter = require ("./routes/api/apiUserRouter");
app.use("/api/users", cors(), apiUserRouter)


/* RUTA 404*/
app.use ((req,res,next) => {
    res.status(404).render ("not-found")
})

/*------------------------------ SERVIDOR---------------------------*/
app.listen (process.env.PORT || 3000, () => {
    console.log ("-----------------------");
    console.log ("http://localhost:3000");
    console.log ("-----------------------");

});
