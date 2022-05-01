import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


import userModel from '../models/userModel.js'
import ClubModel from '../models/ClubModel.js'

    /**
    * Allow user to sign in. 
    *
    * @param  req   the request
    * @return       the response 
    */
export const signin=async (req, res)=>{
    /**
    * Retrieve email and password from the request.
    */
    const {email, password}=req.body;
   

    try{
         /**
         * Check to see if the user already exists.
         */
        const existingUser=await userModel.findOne({email: email});
       
        /**
        * User does not exist.
        */
        if(!existingUser){
            return res.status(400).json({message: "User does not exist! "});
        }  
        /**
        * User does not exist.
        * Compare the decrypted password from the database to the password the user entered. 
        */
        const isPasswordCorrect=await bcrypt.compare(password, existingUser.password);

        /**
        * Password does not match.
        */
       if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials"})

        /**
        * Password matches, store all information in token.
        */
        const token=jwt.sign({user: {
          club: existingUser.club,
          email: existingUser.email,
          first: existingUser.first, 
          last: existingUser.last,
          username: existingUser.username,
          title: existingUser.title,
          userLevel: existingUser.userLevel
        }}, 'test', {expiresIn:"1h" })
        res.status(200).json({token: token});
       
    }catch(error){
       
        res.status(500).json({message: 'Something went wrong.'})

    }



}

/**
    * Allow user to sign up. 
    *
    * @param  req   the request
    * @return       the response 
    */
export const signup=async (req, res)=>{
  
   /**
    * Retrieve information from the request.
    */
  const{first, last, email, password, pass,securityQuestion,securityAnswer, clubName}=req.body;

   /**
    * Store information as user and use to create an actual user using the model.
    */
  const user = req.body
  const newUser = new userModel(user)
 
   
  try{
  
    /**
    * Get user from database.
    */
   const existingUser=await userModel.findOne({email});
   
    /**
    * Get club from database.
    */
   const existingClub=await ClubModel.findOne({clubName});
   
   /**
    * Check to see if any required fields are empty.
    */
   if(first==""){
     
      res.status(200).json({message: "Please enter your first name! "});
      
  }
  else if(last==""){
  
    res.status(200).json({message: "Please enter your last name! "});
    
    
  }
  else if(email==""){
   
    res.status(200).json({message: "Please enter your email! "});
    
  }
    /**
    * Check to see if the user already exists.
    */
  else if(existingUser){
     
    res.status(200).json({message: "User already exists! "});
    
}
  else if(password==""){
   
    res.status(200).json({message: "Please enter a password! "});
   
  }
    /**
    * Check to see if the password and password confirmation match.
    */
    else if(password!=pass){
     
     res.status(200).json({message: "Passwords don't match"})
     
   
    }
    else if(securityAnswer==""){
     
      res.status(200).json({message: "Please answer security question!"})
   
    
     }
    /**
    * Check to see if the club that 
    * the new user entered actually exists.
    */
    else if(clubName!="" && !existingClub){
     
     res.status(200).json({message: "Club does not exist!"})
  
   
    }
    
    else{
    /**
    * All required information is valid.
    * Store user's information in token.
    * Add user, token, and message to response.   
    */
     await newUser.save();
          
     const token=jwt.sign({email: newUser.email}, 'test', {expiresIn:"1h" })
     res.status(200).json({newUser, token, message: "Signed Up!"});
     
    }
   
  } catch(error){
   console.log(error)
   
   
  }
   
 
  }
  


  

  /**
    * Allow user to sign in. 
    *
    * @param  req   the request
    * @return       the response 
    */
  export const changePassword=async (req, res)=>{
 
    /**
    * Retrieve information from the request.
    */ 
    const {email, password, pass, securityQuestion, securityAnswer}=req.body;
     
     try{
        /**
        * Get user from the database.
        * Get user's information
        */
         const existingUser=await userModel.findOne({email: email});
         const Question=existingUser.securityQuestion;
         const Answer=existingUser.securityAnswer;
        
        /**
        * Check to see if email field is empty.
        */
         if(email==""){
          return res.status(200).json({message: "Please enter an email! "});
         } 
          /**
          * Check to see if the email that 
          * the user entered actually belongs to
          * a user in the database.
          */
         else if(!existingUser){
          return res.status(200).json({message: "User does not exist! "});
      } 
        /**
        * Check to see if password field is empty.
        */
         else if(password==""){
        return res.status(200).json({message: "Please enter a password! "});
        } 
        
        /**
        * Check to see if the password and password confirmation match.
        */
        else if(password!=pass){
          return res.status(200).json({message: "Passwords do not match! "});
         }
        /**
        * Check to see if the security question they selected 
        * matches the one they selected when signing up.
        */
        else if(securityQuestion!=Question){
          return res.status(200).json({message: "Not the Question you selected! "});
         }
        /**
        * Check to see if the security answer matches the answer 
        * in the databse for specific user.
        */
         else if(securityAnswer!=Answer){
          return res.status(200).json({message: "Not the answer you submitted! "});
         }
         else{
  
        /**
        * All required information is valid.
        * Hash the password.
        * Update user's password in the database.   
        * Store user's information in a token.
        * Add result, token, and message to the response. 
        */
        const hash = await bcrypt.hash(password, Number(12));

         await userModel.updateOne(
         { email: email },
        { $set: { password: hash } },
         { new: true }
         );
         const token=jwt.sign({email: existingUser.email, id:existingUser.id}, 'test', {expiresIn:"1h" })
         res.status(200).json({result:existingUser, token, message: "You have succesfully changed your password!"});
      
         }
     }catch(error){
         console.log(error)
        
     }
   
 }
 /**
    * Allow user to update their profile. 
    *
    * @param  req   the request
    * @return       the response 
  */
 export const updateProfile=async (req, res)=>{
  /**
  * Get user from database
  */
  const existingUser=await userModel.findOne({email: email});
  
  
  /**
  * Check to make sure that 
  * both text fields are not empty.
  */
   if(first==""){
     
     first=existingUser.first;
  
  
   }
   if(last==""){
     
     last=existingUser.last;
  
   }
   if (last=="" && first==""){
     res.status(200).json({message:"Both fields cannot be empty"});
   }
  
  
   try{
      
      /**
        * All required information is valid.
        * Update the user's information.
        */
       await userModel.updateOne({ email: email },{ $set: { first: first, last: last }},);
  
      
      res.status(200).json({message:"Profile Updated!"});
     
    
   }catch(error){
       console.log(error)
       res.status(500).json({message: 'Something went wrong.'})
  
   }
  }

  /**
    * Allow user to deregister from club. 
    *
    * @param  req   the request
    * @return       the response 
  */
  export const clubDeregister=async (req, res)=>{
  
    /**
    * Retrieve email from request.
    * Use email to find user in the databse.
    */ 
    const {email}=req.body;
     
   
     const existingUser =await userModel.findOne({email: email});
      try{
       /**
        * Remove club from user's information.
        */ 
         await userModel.updateOne({ email: email }, { $set: { club: "" } });
         
         res.status(200).json({message: 'ye'});
      
     }catch(error){
         res.status(500).json({message: 'Something went wrong.'})
      }
    }
  
  
  