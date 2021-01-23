/* REQUERIMIENTO DE MODULOS*/

const express = require("express");
const app = express();
const path = require ("path");
const publicPath = path.resolve (__dirname, "../public");


/* CONFIGURACION*/
app.use (express.static(publicPath));
app.set ("view engine", "ejs");
app.set ("views ", "src/views");

/* RUTAS HOME*/
const mainRouter= require ("./routes/mainRouter");
app.use ("/", mainRouter);
app.use ("/contacto", mainRouter);
app.use ("/quienes-somos",mainRouter);
app.use ("/preguntas-frecuentes",mainRouter);

/* RUTAS PRODUCTOS*/
const productsRouter= require ("./routes/productsRouter");
app.use ("/", productsRouter);
app.use ("/detalle", productsRouter);
app.use ("/cart", productsRouter);
app.use ("/edit", productsRouter);

/* RUTAS USER*/
const userRouter= require ("./routes/userRouter");
app.use ("/",userRouter);
app.use ("/register", userRouter );
app.use ("/login",userRouter)

/* SERVIDOR*/

app.listen (3000, () => {
    console.log ("-----------------------");
    console.log ("http://localhost:3000");
    console.log ("-----------------------");

});
