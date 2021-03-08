const express = require("express");
const router = express.Router();

const path = require("path");

const controller = require ("../controllers/userController");

//Middlewares
const middlewareRegister = require("../middlewares/users/processRegister");
const multer = require("../middlewares/users/multerMiddleware");

    //Validaciones
const {body} = require("express-validator");
const userController = require("../controllers/userController");

const registerValidations = [
   body('name').notEmpty().withMessage("Debes completar tu nombre"),
   body('email').notEmpty().withMessage("Debes ingresar un email").bail().isEmail().withMessage("Debes ingresar un email válido"),
   body('tel').notEmpty().withMessage("Debes ingresar tu teléfono"),
   body('password').notEmpty().withMessage("Debes ingresar una contraseña"),
   body('confirm').notEmpty().withMessage("Debes confirmar la contraseña"),
   body('profileImage').custom((value, {req }) => {
       let file = req.file;
       let extensions = ['.jpg', '.png', '.gif']
       
       
       if(!file){
           throw new Error ('Debes cargar una imagen')
       } else{
        let fileExtesion = path.extname(file.originalname)
        if(!extensions.includes(fileExtesion)){
            throw new Error ("La extensión del archivo debe ser .png, .jpg o .gif")
           }
       }
        return true
       }
   )
];

//Rutas
router.get ("/iniciar-sesion", userController.login); //Formulario de Login
router.post('/iniciar-sesion',userController.loginProcces) //Formulario de Login - procesar 

router.get ("/registrarse", userController.register); //Formulario de Registro 
router.post("/registrarse", multer.single('profileImage'), registerValidations, userController.processRegister); //Formulario de Registro - procesar

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


