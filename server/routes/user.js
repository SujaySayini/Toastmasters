import express from 'express';
//const { User, validate } = require('../models/user');
//import {User, validateUser} from '../models/user.js';
//import { createUser} from "../controllers/user.js";
import signUpTemplateCopy from '../models/SignUpModels.js';
const router = express.Router();


 
//const express = require('express');



////////////////////////////////////////////////

//router.post('/signup', (request, response)=>{
router.post('/', (request, response)=>{
   // response.send('send')
   const signedUpUser=new signUpTemplateCopy({
    //const signedUpUser=new createUser({
       name:request.body.name,
       email:request.body.email,
       password:request.body.password



   })
   signedUpUser.save()
   .then(data=>{
       response.json(data)

   })
   .catch(error=>{
       response.json(error)

   })
})
//module.exports=router
export default router

/////////////////////////////////////////

//router.post('s')