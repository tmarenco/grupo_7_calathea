const { Router } = require("express");
const express = require("express");
const router = express.Router();
const controller = require ("../controllers/productsController");
const path = require ("path")

const multer = require ("multer");
const storage = multer.diskStorage ({
    destination: function (req, file, cb){
        cb (null, path.join(__dirname, "../../public/images/productos/"))
    },
    filename: function (req, file, cb){
        cb (null, "producto" + Date.now() + path.extname(file.originalname))
    }
});


const upload = multer ({ storage });



// LAS 7 RUTAS QUE PIDE LA CONSIGNA DEL SPRINT 4

router.get ("/", controller.products); //LISTO
router.get ("/crear", controller.create); // LISTO
router.get ("/:id(\\d+)/", controller.show); // LISTO
router.post ("/", upload.single("image"), controller.store); // LISTO
router.get ("/:id/editar", controller.edit); // LISTO
router.put ("/:id", upload.single ("image"), controller.update); // FALTA QUE APAREZCA LA IMAGEN QUE YA TIENE 
router.delete ("/:id", controller.delete); // LISTO

router.get ("/carrito", controller.cart); 






module.exports = router;

