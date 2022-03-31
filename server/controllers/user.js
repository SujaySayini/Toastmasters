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

export const getUsers = async (req, res)=>{
    try {
        console.log(req.body)
        let users = ''
        if(req.body.club){
            // users = await userModel.find({club: req.body.club});
            users = await userModel.find({});
        }
        res.status(200).json(users);
    } catch (error) {
        //console.log("fhere")
        res.status(404).json({message: error.message});
        
    }
}