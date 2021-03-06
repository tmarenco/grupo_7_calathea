const express = require("express");
const router = express.Router();

const path = require("path");

const controller = require ("../controllers/userController");

//Middlewares
const middlewareRegister = require("../middlewares/users/processRegister");
const uploadFile = require("../middlewares/users/multerMiddleware");
    //Validaciones
const {check} = require("express-validator");
const registerValidations = [
   check('name').notEmpty().withMessage("Debes completar tu nombre"),
   check('email').isEmail().withMessage("Debes ingresar un email válido"),
   check('tel').notEmpty().withMessage("Debes ingresar tu teléfono"),
   check('password').notEmpty().withMessage("Debes ingresar una contraseña"),
   check('confirm').notEmpty().withMessage("Debes confirmar la contraseña")
];

//Rutas
router.get ("/iniciar-sesion", controller.login); //Formulario de Login
router.post('iniciar-sesion') //Formulario de Login - procesar 

router.get ("/registrarse", controller.register); //Formulario de Registro 
router.post("/registrarse", registerValidations, controller.processRegister); //Formulario de Registro - procesar

router.get ("/perfil", controller.perfil);





/*router.get ("/", controller.products); //LISTO
router.get ("/crear", controller.create); // LISTO
router.get ("/:id(\\d+)/", controller.show); // LISTO
router.post ("/", upload.single("image"), controller.store); // LISTO
router.get ("/:id/editar", controller.edit); // LISTO
router.put ("/:id", upload.single ("image"), controller.update); // FALTA QUE APAREZCA LA IMAGEN QUE YA TIENE 
router.delete ("/:id", controller.delete); // LISTO
*/



module.exports = router;


