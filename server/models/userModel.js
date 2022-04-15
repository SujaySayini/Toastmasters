
import bcrypt from "bcrypt";
//const Schema = mongoose.Schema;
const bcryptSalt = process.env.BCRYPT_SALT;


import mongoose from 'mongoose';

const userSchema =new mongoose.Schema({

first:{
    type:String,
    required:true,
},
last:{
    type:String,
    required:true,
},

email:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
securityQuestion:{
    type:String,
    required:false
},
securityAnswer:{
    type:String,
    required:false
},
club:{
    type:String,
    required:false
},
date:{
    type:Date,
    default:Date.now

},
userLevel : {
    type : String,
    enum : [ "General", "Eboard", "Admin" ],
    default : "General",
    required : true
 },
 requestAdmin : {
    type : String,
    default : "No",
    required : false
 },
 title : {
     type: String,
     required: false
 }
 
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
    const hash = await bcrypt.hash(this.password, Number(12));
    this.password = hash;
    next();
  });
const userModel = mongoose.model('users', userSchema)
export default userModel

//export default mongoose.model("users", userSchema);

//var temp=mongoose.model('users',signUpTemplate)


