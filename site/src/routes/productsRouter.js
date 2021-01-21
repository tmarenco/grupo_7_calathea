const express = require("express");
const router = express.Router();
const controller = require ("../controllers/productsController");


router.get ("/products", controller.Products);
router.get ("/productDetail", controller.Detail);
router.get ("/productCart", controller.Cart)


module.exports = router;

