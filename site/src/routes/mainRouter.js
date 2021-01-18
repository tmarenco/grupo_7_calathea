const express = require("express");
const router = express.Router();
const path = require ("path");
const controller = require ("../controllers/mainController");




router.get ("/", controller.index);


module.exports = router;



