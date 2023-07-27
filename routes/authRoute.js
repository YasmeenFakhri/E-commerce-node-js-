const express = require("express");
const {registerController , loginController}=require("../controllers/authController") ;


//router object
const router = express.Router();

//routing
//REGISTER 
router.post("/register", registerController);

//Login 
router.post("/login", loginController);
module.exports = router