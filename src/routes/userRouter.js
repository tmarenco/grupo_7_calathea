const express = require("express");
const router = express.Router();
const path = require("path");
const controller = require("../controllers/userController");
//Middlewares
const multer = require("../middlewares/users/multerMiddleware");
const guestMiddleware = require("../middlewares/users/guestMiddleware")
const authMiddleware = require ("../middlewares/users/authMiddelware")
const userLogged = require ("../middlewares/users/userLoggedmiddelware")
const adminMiddleware = require("../middlewares/users/adminMiddleware")


//Validaciones
const {body} = require("express-validator");
const uploadFile = require("../middlewares/users/multerMiddleware");



//Validaciones - Registro
const registerValidations = [
   body('name')
        .notEmpty().withMessage("Debes completar tu nombre").bail()
        .isLength({min: 2}).withMessage("El nombre debe ser más largo"),
   body('last_name')
        .notEmpty().withMessage("Debes completar tu apellido")
        .isLength({min: 2}).withMessage("El apellido debe ser más largo"),
   body('email')
        .notEmpty().withMessage("Debes ingresar un email").bail()
        .isEmail().withMessage("Debes ingresar un email válido"),
   body('tel')
        .notEmpty().withMessage("Debes ingresar tu teléfono"),
   body('password')
        .notEmpty().withMessage("Debes ingresar una contraseña").bail()
        .isLength({min: 8}).withMessage("La contraseña debe ser más larga").bail()
        .isStrongPassword().withMessage("La contraseña debe contener al menos una mayúscula, un símbolo y 2 números"),
   body('confirm')
        .notEmpty().withMessage("Debes confirmar la contraseña"),
   body('profileImage')
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


//Validaciones - Login
const loginValidations = [
    body('email')
          .notEmpty().withMessage("Debes ingresar un email").bail()
          .isEmail().withMessage("Debes ingresar un email válido"),
    body('password')
          .notEmpty().withMessage("Debes ingresar una contraseña")
 ];





 
//Rutas
 // Listado de usuarios - NO HAY BOTÓN PARA ACCEDER A LA LISTA

router.get ("/registrarse",guestMiddleware, controller.register); //Formulario de Registro 
router.post("/registrarse", multer.single('profileImage'), registerValidations, controller.processRegister); //Formulario de Registro - procesar

router.get ("/iniciar-sesion", guestMiddleware, controller.login); //Formulario de Login
router.post('/iniciar-sesion', loginValidations, userLogged, controller.loginProcces) //Formulario de Login - procesar 
router.get ("/:id/editar", controller.edit); // EDITAR USUARIO
router.put ("/:id/editar", uploadFile.single ("profileImage"), controller.update);


router.get("/administracion", adminMiddleware, controller.administracion);
router.get("/sinPermiso", controller.sinPermiso);
router.get ("/listausuarios", adminMiddleware, controller.list);
router.get("/perfil", controller.perfil);
router.get("/:id/perfilusuario", adminMiddleware, controller.perfilUsuario);
router.delete ("/:id/perfilusuario", adminMiddleware, controller.delete);
router.get("/logout", controller.logout);


module.exports = router;


