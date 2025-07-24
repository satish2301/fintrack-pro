const express = require('express')
const router=express.Router();
const { registerUser, loginUser,CheckRoute } = require("../controllers/authController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/test").get(CheckRoute);
module.exports=router