const express = require("express");
const app = express();
const path = require ("path");
const publicPath = path.resolve (__dirname, "../public");


app.use (express.static(publicPath));


app.get ("/", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/index.html"));
});

app.get ("/productDetail", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/productDetail.html"));
});

app.get ("/product", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/products.html"));
});

app.get ("/productCart", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/productCart.html"));
});

app.get ("/register", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/register.html"));
});

app.get ("/login", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/login.html"));
});

app.get ("/quienes-somos", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/quienes-somos.html"));
});

app.get ("/contacto", (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/contacto.html"));
});

app.listen (3000, () => {
    console.log ("-----------------------");
    console.log ("http://localhost:3000");
    console.log ("-----------------------");

})