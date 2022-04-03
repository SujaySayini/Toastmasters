//import React, { createElement } from 'react';
import React from 'react';
import Img from '../images/Toastmasters.png';
//import background from "./Background.JPG";
//import App from '../App';
import "./custom.css";
//import HomePage from './HomePage';
//import { createUser } from '../actions/user.js';
//import UploadAndDisplayImage from './UploadAndDisplayImage';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
//import {useHistory} from 'react-router-dom'
import {useState} from 'react'
//import axios from 'axios'
 import {signup } from '../actions/auth.js';
 import {BrowserRouter as Router}  from 'react-router-dom';
 

 const initialState={first: '', last: ' ', email: '', username: '', password:'', pass: '', securityQuestion:'', securityAnswer:'', club:''};

function SignUp(){
  //const dispatch =useDispatch();
//const navigate=useNavigate();
  return (
    <Router>
      <SignUp2/>

    </Router>


  )

  
 



  //const SignUp = () =>{
    function SignUp2(){
   // function SignUp(){
const dispatch =useDispatch();
const navigate=useNavigate();
//const history=useHistory();

const [formData, setFormData]=useState(initialState);


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    
    
     }

     const handleSubmit=(e) =>{
   
      e.preventDefault()
      dispatch(signup(formData, navigate))
      //dispatchEvent(signup(formData, navigate));

    }
   
   
     return (
    
    
       <div className="container-fluid layout">
   
  
      <div className="title">
        
      
      <h12>
         <center>
       <img src= {Img} alt="pic" width="55"  />
       <br/> <b></b>
     </center>
      SIGN UP
  
      </h12>
      </div>
      
      <div>
      
      <center>
      <form onSubmit={handleSubmit}>
     
      <div>
      
      <label>
         First Name:
         <input name="first" label="First Name" onChange={handleChange} />
       </label>
      </div>
      <br></br>
      <div>
      <label>
         Last Name:
         <input name="first" label="Last Name" onChange={handleChange} />
       </label>
      </div>
      <br></br>
      <div>
      <label>
         Email:
         <input name="email" label="Email" onChange={handleChange} />
       </label>
      </div>
      <br></br>
        <div>
        <label>
         Username
         <input name="username" label="Username" onChange={handleChange} />
       </label>
      </div>
      <br></br>
       <div>
      <label>
        Password:
        <input name="password" input type="password" onChange={handleChange} />
      </label>
      </div>
       <br></br>
      <div>
      <label>
         Re-enter Password:
        <input name="pass" input type="password" onChange={handleChange} />
      </label>
      </div>
       <br></br>
       <div>
       <label>
         Security Question
         <input name="securityQuestion" label="Security Question" onChange={handleChange} />
       </label>
      </div>
       <br></br>

       <div>
       <label>
         Security Answer
         <input name="securityAnswer" label="Security Answer" onChange={handleChange} />
       </label>
      </div>
       <br></br>
  
    
      <div>
      <label>
         Club Name
         <input name="club" label="Club Name" onChange={handleChange} />
       </label>
      
      </div>


      
       <br></br>
    
    
    
       
       <center>
       <input type="submit" input value= "Sign Up"  />
       </center>
    
     
  
    </form>
 
    </center>
 
    <center>
    <div>
    <a href="#" onClick = {()=>this.props.swap('Login')}>Login</a>
    </div>
    </center>
     </div>
    </div>
    
    
     );
   }
  }
 
 export default SignUp;