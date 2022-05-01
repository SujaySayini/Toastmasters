import express from 'express';
//const { User, validate } = require('../models/user');
//import {User, validateUser} from '../models/user.js';
//import { createUser} from "../controllers/user.js";
import {signin, signup,changePassword, updateProfile, clubDeregister} from "../controllers/users.js";
//import signUpTemplateCopy from '../models/SignUpModels.js';
const router = express.Router();
//import bcrypt from 'bcrypt'





//router.post('/signup', (request, response)=>{
router.post('/signin', signin);
router.post('/signup', signup);

router.post('/changepassword', changePassword);
router.post('/updateProfile', updateProfile);
router.post('/clubderegister', clubDeregister);


//router.post("/auth/requestResetPassword", resetPasswordRequestController);
//router.post("/auth/resetPassword", resetPasswordController);

//router.post("/requestResetPassword", resetPasswordRequestController);
//router.post("/resetPassword", resetPasswordController);


  

export default router


  
