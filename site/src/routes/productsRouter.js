const express = require("express");
const router = express.Router();
const controller = require ("../controllers/productsController");

router.get ("/", controller.listProduct)
router.get ("/productos", controller.Products);
router.get ("/Detail", controller.Detail);
router.get ("/Cart", controller.Cart);
router.get ("/Edit", controller.Edit);
router.get ("/new", controller.New)



module.exports = router;

