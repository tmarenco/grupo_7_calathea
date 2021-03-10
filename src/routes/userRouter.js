const express = require("express");
const router = express.Router();

const path = require("path");

const controller = require ("../controllers/userController");
//Middlewares
const middlewareRegister = require("../middlewares/users/processRegister");
const multer = require("../middlewares/users/multerMiddleware");
const guestMiddleware = require("../middlewares/users/guestMiddleware")
const  authMiddleware = require ("../middlewares/users/authMiddelware")

    //Validaciones
const {body} = require("express-validator");
const userController = require("../controllers/userController");

    //Validaciones - Registro
const registerValidations = [
   body('name').notEmpty().withMessage("Debes completar tu nombre"),
   body('email').notEmpty().withMessage("Debes ingresar un email").bail().isEmail().withMessage("Debes ingresar un email válido"),
   body('tel').notEmpty().withMessage("Debes ingresar tu teléfono"),
   body('password').notEmpty().withMessage("Debes ingresar una contraseña"),
   body('confirm').notEmpty().withMessage("Debes confirmar la contraseña"),
   body('profileImage').custom((value, {req }) => {
       let newfile = req.file;
       let extensions = ['.jpg', '.png', '.gif'];
       
       if(!newfile){
           throw new Error ('Debes cargar una imagen')
       } else{
            let fileExtesion = path.extname(newfile.originalname);
            if(!extensions.includes(fileExtesion)){
                throw new Error ("La extensión del archivo debe ser .png, .jpg o .gif")
            }
        }
        return true
       }
   )
];
    //Validaciones - Login
const loginValidations = [
    body('email').notEmpty().withMessage("Debes ingresar un email").bail().isEmail().withMessage("Debes ingresar un email válido"),
    body('password').notEmpty().withMessage("Debes ingresar una contraseña")
 ];

//Rutas
router.get ("/iniciar-sesion",guestMiddleware, userController.login); //Formulario de Login
router.post('/iniciar-sesion', loginValidations, userController.loginProcces) //Formulario de Login - procesar 

router.get ("/registrarse", guestMiddleware , userController.register); //Formulario de Registro 
router.post("/registrarse", multer.single('profileImage'), registerValidations, userController.processRegister); //Formulario de Registro - procesar

router.get("/perfil", authMiddleware, controller.perfil);
router.get("/logout", authMiddleware, controller.logout);


module.exports = router;


