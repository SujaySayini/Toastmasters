import express from 'express';
import {signin, signup,changePassword, updateProfile, clubDeregister} from "../controllers/users.js";

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/changePassword', changePassword);
router.post('/updateProfile', updateProfile);
router.post('/clubDeregister', clubDeregister);

export default router


  
