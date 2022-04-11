import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//import user from '../../client/src/reducers/user';
//import signUpModel from "../models/signUpModel.js"

import userModel from '../models/userModel.js'

import { requestPasswordReset } from '../services/auth.js';
import { resetPassword } from '../services/auth.js';


/*const {
    signup,
    requestPasswordReset,
    resetPassword,
  } = require("../services/auth.service"); */

export const signin=async (req, res)=>{
   // res.header("Sec-Fetch-Site", "cross-site");
   //res.header("Access-Control-Allow-Origin", "*");
   //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //// res.setHeader("access-control-allow-origin", "*");
  //// res.setHeader("access-control-allow-credentials", "true");
   //res.send();
   
   //res.header("Referrer", "http://localhost:5000");
    const {email, password}=req.body;
    console.log(req.body)

    try{
        const existingUser=await userModel.findOne({email: email});
        console.log("we are here now2")

        if(!existingUser){
            return res.status(400).json({message: "User does not exist! "});
        }  
        const isPasswordCorrect=await bcrypt.compare(password, existingUser.password);
       // const isPasswordCorrect=await compare(password, existingUser.password);
       //if(!isPasswordCorrect) 
       ///password!=existingUser.password
       
       if(!isPasswordCorrect) return res.status(400)
.json({message: "Invalid Credentials"})

        const token=jwt.sign({user: {
          club: existingUser.club,
          email: existingUser.email,
          first: existingUser.first, 
          last: existingUser.last,
          username: existingUser.username
        }}, 'test', {expiresIn:"1h" })
        res.status(200).json({token: token});
        //console.log(res);
        //res.send('Signed in');
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Something went wrong.'})

    }



}

export const signup=async (req, res)=>{
//res.header("Access-Control-Allow-Origin", "*");
//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
const{first, last, email, username, password, pass,securityQuestion,securityAnswer, club}=req.body; 
const user = req.body
const newUser = new userModel(user)
const message=""

try{
const existingUser=await userModel.findOne({email});
const existingUsername=await userModel.findOne({username});

if(existingUser){
    //console.log("we are here now 1")
    message+="User already exists"+ "/n"
    return res.status(400).json({message: "User already exists! "});

    ////return res.status(400).json({message: message});
}

else if(existingUsername){
  message+="Username already exists!" + "/n"
    return res.status(400).json({message: "Username already exists! "});

    ////return res.status(400).json({message: message});

}

 else if(password!=pass){
   message+="Passwords don't match" + "/n"
 return res.status(400).json({message: "Passwords don't match"})
 ////return res.status(400).json({message:message});

 //console.log("we are here now2");
 //const hashedPassword=await bcrypt.hash(password, 12)

 }
 else{
 ////const result=await User.create(first, last, email, username, password, club)
 await newUser.save();
       //res.status(201).json(newUser)
 //console.log("we are here now2");
 ////const token=jwt.sign({email: result.email, id:result._id}, 'test', {expiresIn:"1h" })
 const token=jwt.sign({email: newUser.email, id:result._id}, 'test', {expiresIn:"1h" })
 res.status(200).json({newUser, token});
 //res.send("Signed Up");
 }

   }   catch(error){
    return res.status(400).json({message: message});

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


  export const changePassword=async (req, res)=>{
    // res.header("Sec-Fetch-Site", "cross-site");
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   //// res.setHeader("access-control-allow-origin", "*");
   //// res.setHeader("access-control-allow-credentials", "true");
    //res.send();
    
    //res.header("Referrer", "http://localhost:5000");
     const {email, password, pass, securityQuestion, securityAnswer}=req.body;
     console.log(req.body)
 
     try{
         const existingUser=await userModel.findOne({email: email});
         const Question=existingUser.securityQuestion;
         const Answer=existingUser.securityAnswer;
 
         if(!existingUser){
             return res.status(400).json({message: "User does not exist! "});
         }  
         if(password!=pass){
          return res.status(400).json({message: "Passwords do not match! "});
         }
         if(securityQuestion!=Question){
          return res.status(400).json({message: "Not the Question you selected! "});
         }
         if(securityAnswer!=Answer){
          return res.status(400).json({message: "Not the answer you submitted! "});
         }

        // const hash = await bcrypt.hash(password, Number(bcryptSalt));
        const hash = await bcrypt.hash(password, Number(12));

         //{ _id: userId },
         await userModel.updateOne(
         { email: email },
        { $set: { password: hash } },
         { new: true }
         );
         const token=jwt.sign({email: existingUser.email, id:existingUser.id}, 'test', {expiresIn:"1h" })
         res.status(200).json({result:existingUser, token});
        // return res.send('Succesfully changed password');
       
 
         //const token=jwt.sign({email: existingUser.email, id:existingUser.id}, 'test', {expiresIn:"1h" })
         //res.status(200).json({result:existingUser, token});
         //console.log(res);
         //res.send('Signed in');
     }catch(error){
         console.log(error)
         res.status(500).json({message: 'Something went wrong.'})
 
     }
 
 
 
 }
 