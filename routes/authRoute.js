const express = require("express")
const {registerController} = require("../controllers/authController")
//router object
const router = express.Router()

//routing
//Regeister
router.post("/register", registerController);

//Login


//Forgot Password


//test routes

module.exports = router