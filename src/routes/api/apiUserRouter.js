const { Router } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/apiUserController"); 
const path = require ("path")




router.get ("/", controller.getUsers);
router.get ("/:id", controller.getUserById);





module.exports = router;
