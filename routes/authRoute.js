const express = require("express");
const {registerController , loginController,testController , forgotPasswordController}=require("../controllers/authController") ;
const { requiresignin,adminAccess } = require("../middleware/authmiddleware");

//router object
const router = express.Router();

//routing

//REGISTER 
router.post("/register", registerController);

//Login 
router.post("/login", loginController);

//Forgot Password 
router.post("/forgot-password", forgotPasswordController);


//test routes
router.get("/test",requiresignin,adminAccess, testController);

//protected user route auth
router.get("/user-auth", requiresignin, (req, res) => {
    res.status(200).send({ ok: true });
  });

//protected Admin route auth
router.get("/admin-auth", requiresignin, adminAccess, (req, res) => {
  res.status(200).send({ ok: true });
});
  
module.exports = router