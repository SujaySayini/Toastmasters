
 
import React from 'react'
import Img from '../images/Toastmasters.png';
<<<<<<< HEAD
import background from "./Background.JPG";
import App from '../App';
=======
>>>>>>> fefd86085b73d86ebc4fc50687beb59ae5d92b4e
import "./custom.css";
import {useNavigate} from 'react-router-dom'
 
import 'bootstrap/dist/css/bootstrap.css';
import {changepassword} from '../actions/auth.js'
import {useState} from 'react'
 import {BrowserRouter as Router}  from 'react-router-dom';
 
                                
                               
                                
const options = [
 {
   label:" What is your mother's maiden name? ",
   value: " What is your mother's maiden name? ",
 },
 {
   label: " What high school did you attend? ",
   value: " What high school did you attend? ",
 },
 {
   label: " What is the name of your first school?",
   value: " What is the name of your first school?",
 },
 {
   label: "In what city were you born?",
   value: "In what city were you born?",
 },
 ];
 
const initialState={email: '', password: ' ', pass: '', securityQuestion:'In what city were you born?', securityAnswer:''};
 
function ChangePassword(props){
 return (
   <Router>
     <ChangePassword2 swap = {props.swap}/>
 
   </Router>
 
 
 )

   function ChangePassword2(props){
    ;
  const navigate=useNavigate();
  const [formData, setFormData]=useState(initialState);
const handleSubmit= async (e) =>{
 
  e.preventDefault();
  const res = await (changepassword(formData, navigate))
  if(res?.data.message==="You have succesfully changed your password!"){
    /**
    * User resets their password successfully 
    * and is directed to the home page s.
    */
   props.swap('HomePage')
 
 } else{
  
 
 alert(res.data.message)
 }

}
 
const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
 
 
}
 

     return (
     
     
       <div className="container-fluid layout">
    
         
       <div className='row'>
         <div className='col-12'>
     <center>
        <img src= {Img} alt="pic" />
        <br/> <b></b>
      </center>
 
      <div className="title">
        <div className='row'>
          <div className='col-12'>
      <h4>RESET PASSWORD</h4>
      </div>
      <div className='col-12'>
      </div>
 
 
    </div>
   
    </div>
      <div className='col-12'>
     
      <div>
      </div>
      </div>
     
  
      <div>
      <center>
      <form onSubmit={handleSubmit}>
        <div>
      <label>
        Email:
        <input id= "resetpassword-email" name="email" label="Email" onChange={handleChange} />
      </label>
      </div>
      <br></br>
      <div>
      <label>
        Password:
        <input id= "resetpassword-password" name= "password" label="Password" input type="password" onChange={handleChange} />
      </label>
      </div>
      <br></br>
      <div>
      <label>
        Confirm Password:
        <input id= "resetpassword-pass" name= "pass" label="Confirm Password:" input type="password" onChange={handleChange} />
      </label>
      </div>
      <br></br>
      <div>
        <label>
          Security Question:
          <select>
           {options.map((option) => (
             <option id = "resetpassword-securityquestion" value={option.value}>{option.label}</option>
           ))}
         </select>
 
     </label>
      </div>
      <br></br>
      <label>
        Security Answer:
        <input id= "resetpassword-securityanswer" name="securityAnswer" label="Security Answer" onChange={handleChange} />
      </label>
      <br></br>
     
      <center>
      <input id= "resetpassword-submit" type="submit" input value= "Reset Password"  />
      </center>
      
 
    
  
   
    </form>
    </center>
  
    <center>
    <div>
    <a href="#" onClick = {()=>props.swap('Login')}>Login</a>
   
    </div>
    </center>

    <center>
    
    <a href="#" onClick = {()=>props.swap('SignUp')}> New User? Sign Up!</a>
    </center>
 
    
    
  
    </div>
    </div>
 
 
 
 
    </div>
    </div>
   
    
     
     );

}
}
export default ChangePassword;
 
