import express from 'express';
//const { User, validate } = require('../models/user');
//import {User, validateUser} from '../models/user.js';
//import { createUser} from "../controllers/user.js";
import userModel from '../models/userModel.js' 
const router = express.Router();
import { getUsers } from "../controllers/user.js";

 
//const express = require('express');
router.post('/getUser', getUsers);


////////////////////////////////////////////////

//router.post('/signup', (request, response)=>{
router.post('/', (request, response)=>{
   // response.send('send')
   const signedUpUser=new userModel({
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