/* REQUERIMIENTO DE MODULOS*/

const express = require("express");
const app = express();
const path = require ("path");
const publicPath = path.resolve (__dirname, "../public");
const methodOverride = require("method-override")


/* CONFIGURACION*/

/*carpeta pblica*/
app.use (express.static(publicPath));


/* ejs*/
app.set ("view engine", "ejs");
app.set ("views ", "src/views");


/*post*/
app.use(express.urlencoded({extended:false}));
app.use (express.json());

/* put y delete*/
app.use(methodOverride("_method"))


/* RUTAS HOME*/
const mainRouter= require ("./routes/mainRouter");
app.use ("/", mainRouter);
app.use ("/contacto", mainRouter);
app.use ("/quienes-somos",mainRouter);
app.use ("/preguntas-frecuentes",mainRouter);

/* RUTAS PRODUCTOS*/
const productsRouter= require ("./routes/productsRouter");

app.use ("/productos", productsRouter)
app.use ("/detail", productsRouter);
app.use ("/carrito", productsRouter);
app.use ("/new", productsRouter);
app.use ("/edit", productsRouter);
app.use ("/create", productsRouter);

/* RUTAS USER*/
const userRouter= require ("./routes/userRouter");
app.use ("/",userRouter);
app.use ("/register", userRouter );
app.use ("/login",userRouter);


/* RUTA 404*/
/*app.use ((req,res,next) => {
    res.status(404). render ("not-found")
})


/* SERVIDOR*/

app.listen (3000, () => {
    console.log ("-----------------------");
    console.log ("http://localhost:3000");
    console.log ("-----------------------");

});
