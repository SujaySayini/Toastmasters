import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//import user from '../../client/src/reducers/user';
import users from "../models/SignUpModels.js"

import User from '../models/users.js'

import { requestPasswordReset } from '../services/auth.js';
import { resetPassword } from '../services/auth.js';


/*const {
    signup,
    requestPasswordReset,
    resetPassword,
  } = require("../services/auth.service"); */

export const signin=async (req, res)=>{
    res.header("Sec-Fetch-Site", "cross-site");
   //res.header("Access-Control-Allow-Origin", "*");
   //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //// res.setHeader("access-control-allow-origin", "*");
  //// res.setHeader("access-control-allow-credentials", "true");
   //res.send();
   
   //res.header("Referrer", "http://localhost:5000");
    const {email, password}=req.body;
    console.log("we are here now1")

    try{
        const existingUser=await User.findOne({email});
       // console.log("we are here now2")

        if(!existingUser){
            return res.status(404).json({message: "User does not exist! "});

        }  
        const isPasswordCorrect=await bcrypt.compare(password, existingUser.password);
       // const isPasswordCorrect=await compare(password, existingUser.password);
       //if(!isPasswordCorrect) 

       
       if(password!=existingUser.password) return res.status(400)
.json({message: "Invalid Credentials"})

        const token=jwt.sign({email: existingUser.email, id:existingUser.id}, 'test', {expiresIn:"1h" })
        res.status(200).json({result:existingUser, token});
        console.log(res);
        //res.send('Signed in');
    }catch(error){
        res.status(500).json({messgae: 'Something went wrong.'})

    }



}

export const signup=async (req, res)=>{
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
const{first, last, email, username, password, pass, club}=req.body; 
const user = req.body
const newUser = new users(user)

try{
const existingUser=await User.findOne({email});
const existingUsername=await User.findOne({username});

if(existingUser)
    //console.log("we are here now 1")
    return res.status(400).json({message: "User already exists! "});

if(existingUsername)
    return res.status(400).json({message: "Username already exists! "});

 if(password!=pass)
 return res.status(400).json({message: "Passwords don't match"})
 //console.log("we are here now2");
 //const hashedPassword=await bcrypt.hash(password, 12)

 ////const result=await User.create(first, last, email, username, password, club)
 await newUser.save();
       //res.status(201).json(newUser)
 //console.log("we are here now2");
 ////const token=jwt.sign({email: result.email, id:result._id}, 'test', {expiresIn:"1h" })
 const token=jwt.sign({email: newUser.email, id:result._id}, 'test', {expiresIn:"1h" })
 res.status(200).json({newUser, token});
 //res.send("Signed Up");
 
   }   catch(error){

   // console.log(error);
    //res.status(500).json({message: 'Something went wrong.'})
   // res.status(409).json({message: error.message});

}

//////////////////////////////////
}
export const resetPasswordRequestController = async (req, res, next) => {
    const requestPasswordResetService = await requestPasswordReset(
      req.body.email
    );
    return res.json(requestPasswordResetService);
  };

  export const resetPasswordController = async (req, res, next) => {
    const resetPasswordService = await resetPassword(
      req.body.userId,
      req.body.token,
      req.body.password
    );
    return res.json(resetPasswordService);
  };