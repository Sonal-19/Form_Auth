const express = require('express');
const router = express.Router();
const token = require('../middleware/token');
const userController = require('../user/controller/userController');


router.post("/api/signup", userController.signup);
router.post("/api/login", userController.login);
router.post("/api/emailVerification", userController.verifyEmail);
router.post("/api/forget-password", userController.forgetPassword);
router.post("/api/resetpassword", userController.resetPassword);
router.get("/api/getUserById/:userId", token.verify, userController.getUserById);

module.exports = router;
