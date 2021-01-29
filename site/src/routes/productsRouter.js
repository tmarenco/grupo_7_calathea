const express = require("express");
const router = express.Router();
const controller = require ("../controllers/productsController");


router.get ("/", controller.Products);
router.get ("/detalle", controller.Detail);
router.get ("/carrito", controller.Cart);
router.get ("/editar", controller.Edit);
router.get ("/crear", controller.create)



module.exports = router;

