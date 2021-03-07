const express = require("express");
const router = express.Router();
const controller = require ("../controllers/mainController");




router.get ("/", controller.index);
router.get ("/contacto", controller.contact);
router.get ("/quienes-somos", controller.about)
router.get ("/preguntas-frecuentes", controller.faq)


module.exports = router;



