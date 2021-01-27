const express = require("express");
const router = express.Router();
const controller = require ("../controllers/userController");

router.get ("/iniciar-sesion", controller.login);
router.get ("/registrarse", controller.register);
router.get ("/perfil", controller.perfil);




module.exports = router;
