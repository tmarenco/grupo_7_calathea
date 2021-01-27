const express = require("express");
const router = express.Router();
const controller = require ("../controllers/productsController");

router.get ("/", controller.index)
router.get ("/Detail", controller.show);
/*router.get ("/Detail/:id", controller.Detail);
router.get ("/Cart", controller.Cart);
router.get ("/Edit", controller.Edit);
router.get ("/create", controller.create)*/



module.exports = router;

