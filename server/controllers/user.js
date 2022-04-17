//import signUpModel from "../models/signUpModel.js"
import userModel from "../models/userModel.js";
 
export const createUser = async (req, res)=>{
  
   const user = req.body;
   const [first, last, email, username, password, pass,securityQuestion, securityAnswer,club]=req.body;

    try{

        const existingUser=await userModel.findOne({email})
        const username=await userModel.findOne({username})
        if (existingUser)return res.status(400).json({message: "User already exists! "})

        if (username)return res.status(400).json({message: "Username already exists! "})

          if(password !=pass) return res.status(400).json({message: "Passwords don't match. "})
          
          const hashedPassword=await bcrypt.hash(password, 12);

          const result=await user.create(first, last, email, username, hashedPassword ,securityQuestion, securityAnswer, club )

          const token=jwt.sign({email: result.email, id:result._id}, 'test', {expiresIn: "1h"});
          res.status(200).json({result, token});

    
    } catch(error){
        
        res.status(500).json({message:'Something went wrong.'});

    }



   /*console.log(req.body)
   const newUser = new userModel(user);
   //export UserModel
   console.log(newUser)
   try {
       await newUser.save();
       res.status(201).json(newUser)
   } catch (error) {
 
       res.status(409).json({message: error.message});
      
   }
   
} */
}

export const getUsers = async (req, res)=>{
    try {
        console.log('hello')
        let users = ''
        // users = await userModel.find({club: req.body.club});
        users = await userModel.find(req.body);
        console.log(users)
        res.status(200).json(users);
    } catch (error) {
        //console.log("fhere")
        res.status(404).json({message: error.message});
        
    }
}

export const changeUserRole = async (req, res) => {
    try {
        const { userEmail, selectedRole, userClub } = req.body;
        if (selectedRole==="General Member"){
            const update = await userModel.updateOne(
                {email: userEmail},
                {userLevel: 'General', title: 'General Member'}
            );
            console.log(update);
            return res.status(200).json(update);
        }
        let existingUser = await userModel.findOne({club: userClub, title: selectedRole})
        if (existingUser){
            return res.status(400).json({message: "Selected Role not Available"})
        }
        else{
            const update = await userModel.updateOne(
                {email: userEmail},
                {userLevel: 'Eboard', title: selectedRole}
            );
            console.log(update);
            return res.status(200).json(update);
        }
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }
    

}

export const removeUserClub = async (req, res) => {
    try {
        const { userEmail } = req.body;
        const update = await userModel.updateOne(
            {email: userEmail},
            {club: ''}
        );
        console.log(update);
        res.status(200).json(update);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const setAdmin = async (req, res)=>{
    try {
        console.log('SET ADMIN')
        console.log(req.body)
        const update = await userModel.updateOne({email: req.body.email}, {$set: {requestAdmin: req.body.requestAdmin, userLevel: req.body.userLevel }})
        res.status(201).json(update)
    } catch (error) {
        console.log(error)

        res.status(409).json({message: error.message});
        
    }
}

