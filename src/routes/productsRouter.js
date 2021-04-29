const { Router } = require("express");
const express = require("express");
const router = express.Router();
const controller = require ("../controllers/productsController");
const path = require ("path")

const multer = require("multer");
const storage = multer.diskStorage ({
    destination: function (req, file, cb){
        cb (null, path.join(__dirname, "../../public/images/productos/"))
    },
    filename: function (req, file, cb){
        cb (null, "producto" + Date.now() + path.extname(file.originalname))
    }
});


const upload = multer ({ storage });


//Validaciones
const {body} = require("express-validator");


//Validaciones - Creación de productos
const productValidations = [
    body('name')
         .notEmpty().withMessage("Debes completar el nombre del producto").bail()
         .isLength({min: 5}).withMessage("El nombre debe ser más largo"),
    body('description')
         .notEmpty().withMessage("Debes completar una descripción")
         .isLength({min: 20}).withMessage("La descripción debe ser más larga"),
    body('price')
         .notEmpty().withMessage("Debes ingresar un precio"),
    body('stock')
         .notEmpty().withMessage("Debes ingresar la cantidad que hay en stock"),
    body('image')
         .custom((value, {req }) => {
              let newfile = req.file;
              let extensions = ['.jpg', '.png', '.gif', "jpeg"];
              
              if(!newfile){
                   throw new Error ('Debes cargar una imagen')
                } else {
                     let fileExtesion = path.extname(newfile.originalname);
                     if(!extensions.includes(fileExtesion)){
                          throw new Error ("La extensión del archivo debe ser .png, .jpg, .gif o .jpeg")
                     }
                }
                return true
           }
           )
 ];

 const productEditValidations = [
     body('name')
          .notEmpty().withMessage("Debes completar el nombre del producto").bail()
          .isLength({min: 5}).withMessage("El nombre debe ser más largo"),
     body('description')
          .notEmpty().withMessage("Debes completar una descripción")
          .isLength({min: 20}).withMessage("La descripción debe ser más larga"),
     body('price')
          .notEmpty().withMessage("Debes ingresar un precio"),
     body('stock')
          .notEmpty().withMessage("Debes ingresar la cantidad que hay en stock"),
     body('image')
          .custom((value, {req }) => {
               let newfile = req.file;
               let extensions = ['.jpg', '.png', '.gif', "jpeg"];
               if (newfile != undefined) {
                      let fileExtesion = path.extname(newfile.originalname);
                      if(!extensions.includes(fileExtesion)){
                           throw new Error ("La extensión del archivo debe ser .png, .jpg, .gif o .jpeg")
                      }
                 }
                 return true
            }
            )
  ];

 


// LAS 7 RUTAS QUE PIDE LA CONSIGNA DEL SPRINT 4

router.get ("/", controller.products); //LISTO
router.get ("/crear", controller.create); // LISTO
router.get ("/:id(\\d+)/", controller.show); // LISTO
router.post ("/", upload.single("image"), productValidations, controller.store); // LISTO
router.get ("/:id/editar", controller.edit); // LISTO
router.put ("/:id", upload.single ("image"), productEditValidations, controller.update); // LISTO
router.delete ("/:id", controller.delete); // LISTO

router.get ("/carrito", controller.cart); 






module.exports = router;

