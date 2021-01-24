const express = require("express");
const router = express.Router();
const controller = require ("../controllers/productsController");


router.get ("/products", controller.Products);
router.get ("/Detail", controller.Detail);
router.get ("/Cart", controller.Cart);
router.get ("/Edit", controller.Edit)
router.get ("/Create", controller.Create)



module.exports = router;

