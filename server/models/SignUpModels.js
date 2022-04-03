//const Joi = require('joi');
//import Joi from 'joi';
////import { MongoCursorExhaustedError } from 'mongodb';
import mongoose from 'mongoose';
//import { isModuleNamespaceObject } from 'util/types';

 
///////////////////////
const signUpTemplate=new mongoose.Schema({
name:{
    type:String,
    required:true,
},

email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
date:{
    type:Date,
    default:Date.now

<<<<<<< HEAD
}, 
clubName: String,
userLevel: String, //can be General, Eboard, Admin 
userPosition: String // if the user is an eboard member, also store their role

=======
},club:String
>>>>>>> d4ac5c27c4651e1dfc0c60c6e1f156f9da896cc5
})

//module.exports=mongoose.model('users', signUpTemplate)
const usersModel = mongoose.model('users',signUpTemplate)
export default usersModel


