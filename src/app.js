/* REQUERIMIENTO DE MODULOS*/
const express = require("express");
const app = express();
const path = require ("path");
const publicPath = path.resolve (__dirname, "../public");
const methodOverride = require("method-override")
const session = require("express-session");

/* CONFIGURACION*/

/*Carpeta pública*/
app.use (express.static(publicPath));
/* ejs*/
app.set ("view engine", "ejs");
app.set ("views ", "src/views");

// Session
app.use(session(
    { secret: 'Mensaje secreto!',
    resave: false, // no vuelve a guardar si no hay cambios
    saveUninitialized: false, //guarda sesiones aunque no haya datos
    }));
    
/*Poder enviar información de formularios*/
app.use(express.urlencoded({extended:false}));
app.use (express.json());

    
/* put y delete*/
app.use(methodOverride("_method"))

/* RUTAS HOME*/
const mainRouter= require ("./routes/mainRouter");
app.use ("/", mainRouter);

/* RUTAS PRODUCTOS*/
const productsRouter= require ("./routes/productsRouter");
app.use ("/productos", productsRouter)

/* RUTAS USER*/
const userRouter= require ("./routes/userRouter");
app.use ("/usuario", userRouter);


/* RUTA 404*/
app.use ((req,res,next) => {
    res.status(404).render ("not-found")
})

/* SERVIDOR*/
app.listen (3000, () => {
    console.log ("-----------------------");
    console.log ("http://localhost:3000");
    console.log ("-----------------------");

});