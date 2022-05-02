import React from 'react';

import Img from '../images/Toastmasters.png';
//import background from "./Background.JPG";
// import App from '../App';
import "./custom.css";
import 'bootstrap/dist/css/bootstrap.css';
import {signin} from '../actions/auth.js'
import {useState} from 'react'
import jwt_decode from 'jwt-decode'
  
import {BrowserRouter as Router}  from 'react-router-dom';

 const initialState={email: '', password: ' '};

    /**
    * Allows user to log in
    */ 
 function Login(props){
  return (
    <Router>
      <Login2 swap = {props.swap}/>

    </Router>


  )


function Login2(props){
  const [formData, setFormData]=useState(initialState);
 
  const handleSubmit= async (e) =>{

    e.preventDefault();
    const res = await signin({email: document.getElementById('login-email').value, password: document.getElementById('login-password').value})
    console.log(res)
    if(res?.status === 200){
      /** 
      * Once a user succesfully sign in, 
      * they are directed to a page based on their information.
      * A General User in no club gets directed to the search page.
      * An Admin gers directced to the Admin Page.
      * An Eboard member gets directed to the Manage Club page.
      * A General User in a club gets directed to the Home pagee.
      */ 
      document.cookie = 'user=' + JSON.stringify(jwt_decode(res.data.token)) 
      const userdata = jwt_decode(res.data.token).user
      if(userdata.userLevel === 'Admin'){
        props.swap('Admin')
      } else if(userdata.club===""){
        props.swap('Search')
      }else if(userdata.userLevel === 'Eboard'){
        props.swap('ManageClub')
      } else{
        props.swap('HomePage')
      }
    } else{
    
      alert('Invalid Email or Password');
    }
 
 }

 const handleChange=(e)=>{
  setFormData({email: document.getElementById('login-email').value, password: document.getElementById('login-password').value})
 }

      
  return (
        <div className="container-fluid layout">
          <div className='row'> 
            <div className='col-12'>
              <center>
                <img src= {Img} alt="pic" />
                  <br/>
              </center>
              <div className="title">
                <div className='row'>
                  <div className='col-12'>
                    <h4>SIGN IN</h4>
                  </div>
                  <div className='col-12'>
                  </div>
                </div>
              </div>
              <br></br>
              <div>
                <center>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label> Email: <input id='login-email' name="email" label="Email" onChange={handleChange} /> </label>
                    </div>
                    <br/>

                    <div>
                      <label>Password: <input id='login-password' name= "password" label="Password" input type="password" onChange={handleChange} /></label>
                    </div>
                    <br/>

                    <center>
                      <input id = 'login-submit' type="submit" value= "Sign In"  />
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
    }
}
export default Login;
 
 

