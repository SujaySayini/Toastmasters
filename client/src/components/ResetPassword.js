import React from 'react';

import Img from '../images/Toastmasters.png';
import background from "./Background.jpg";
import App from '../App';
import "./custom.css";
import HomePage from './HomePage';
//import GoogleLogin from 'react-google-login'
import {useDispatch} from 'react-redux'
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

  
//} 
 
//class Login extends React.Component{
  //const Login = () =>{
    function ChangePassword2(props){
  
    const dispatch=useDispatch();
   const navigate=useNavigate();
   const [formData, setFormData]=useState(initialState);
 
 const handleSubmit= async (e) =>{
   
   e.preventDefault();
   //const res = await dispatch(signin(formData, navigate))
   const res = await dispatch(changepassword(formData, navigate))
   console.log(res);
  if(res === 200){
    props.swap('HomePage')
    //props.swap
  } else{
    
   alert('Invalid Email or Password');
  }
  //console.log(res)
   //console.log(formData)
    
   //this.props.swap('HomePage')
  
   //alert('Login credentials entered: ' + this.state.value);
   //event.preventDefault();
 }

 const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})


 }


  //render(){
      
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
         <input name="email" label="Email" onChange={handleChange} />
       </label>
       </div>
       <br></br>
 
       <div>
       <label>
         Password:
         <input name= "password" label="Password" input type="password" onChange={handleChange} />
       </label>
       </div>
 
       <br></br>
       <div>
       <label>
         Confirm Password:
         <input name= "pass" label="Confirm Password:" input type="password" onChange={handleChange} />
       </label>
       </div>
 
       <br></br>
       <div>
         <label>
           Security Question:
           <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

      </label>
       </div>
       <br></br>
       <label>
         Security Answer:
         <input name="securityAnswer" label="Security Answer" onChange={handleChange} />
       </label>
       <br></br>
       
       <center>
       <input type="submit" input value= "Reset Password"  />
       </center>
       <br></br>

      
    
     
     </form>
     </center>
    
     <center>
     <div>
     <a href="#" onClick = {()=>props.swap('ResetPassword')}>Forgot Password?</a>
     
     </div>
     </center>
 
   
     <br></br>
     <center>
      
     <a href="#" onClick = {()=>props.swap('SignUp')}> New User? Sign Up!</a>
     </center>
    
 
 
     </div>
     </div>


   

     </div> 
     </div>
     
 
      
       
      );
   // };
 }
}
export default ChangePassword;
 
 

