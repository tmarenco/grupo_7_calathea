const express = require("express");
const router = express.Router();
const controller = require ("../controllers/userController");

router.get ("/", controller.users)
router.get ("/login", controller.login);
router.get ("/register", controller.register);
router.get ("/perfil", controller.perfil);



module.exports = router;
