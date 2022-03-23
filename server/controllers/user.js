import userModel from "../models/SignUpModels.js"
 
export const createUser = async (req, res)=>{
  
   const user = req.body;
   console.log(req.body)
   const newUser = new userModel(user);
   //export UserModel
   console.log(newUser)
   try {
       await newUser.save();
       res.status(201).json(newUser)
   } catch (error) {
 
       res.status(409).json({message: error.message});
      
   }
}
