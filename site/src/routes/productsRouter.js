const express = require("express");
const router = express.Router();
const controller = require ("../controllers/productsController");

router.get ("/", controller.listProduct)
router.get ("/productos", controller.Products);
router.get ("/Detail", controller.Detail);
router.get ("/Cart", controller.Cart);
<<<<<<< HEAD
router.get ("/Edit", controller.Edit)
router.get ("/Create", controller.Create)
=======
router.get ("/Edit", controller.Edit);
router.get ("/new", controller.New)
>>>>>>> 4c9c224c65a33440a5a3317c72db006e73ef37ba



module.exports = router;

