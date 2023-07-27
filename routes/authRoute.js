const express = require("express");
const {registerController , loginController,testController}=require("../controllers/authController") ;
const { requiresignin,adminAccess } = require("../middleware/authmiddleware");

//router object
const router = express.Router();

//routing
//REGISTER 
router.post("/register", registerController);

//Login 
router.post("/login", loginController);
 router.get("/test",requiresignin,adminAccess, testController);
module.exports = router