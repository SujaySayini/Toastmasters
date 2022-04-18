import React from 'react';

import Img from '../images/Toastmasters.png';
import background from "./Background.jpg";
// import App from '../App';
import "./custom.css";
import HomePage from './HomePage';
import GoogleLogin from 'react-google-login'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import {signin} from '../actions/auth.js'
import {useState} from 'react'
import jwt_decode from 'jwt-decode'
  
import {BrowserRouter as Router}  from 'react-router-dom';

 const initialState={email: '', password: ' '};

 function Login(props){
  return (
    <Router>
      <Login2 swap = {props.swap}/>

    </Router>


  )

  
//} 
 
//class Login extends React.Component{
  //const Login = () =>{
function Login2(props){
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [formData, setFormData]=useState(initialState);
 
  const handleSubmit= async (e) =>{
    console.log('test')
    e.preventDefault();
    const res = await dispatch(signin({email: document.getElementById('login-email').value, password: document.getElementById('login-password').value}, navigate))
    //console.log('---------')
    //console.log(res.data.token)
    console.log(jwt_decode(res.data.token).user.email);

    if(res?.status === 200){
      //console.log(document.cookie)
      document.cookie = 'user=' + JSON.stringify(jwt_decode(res.data.token)) 
      const userdata = jwt_decode(res.data.token).user
      console.log(userdata)

      if(userdata.club===""){
        props.swap('Search')
      }else if(userdata.userLevel === 'Admin'){
        props.swap('Admin')
      } else if(userdata.userLevel === 'Eboard'){
        props.swap('ManageClub')
      } else{
        props.swap('HomePage')
      }
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
  setFormData({email: document.getElementById('login-email').value, password: document.getElementById('login-password').value})
 }

 

 const responseGoogleFailure=(error)=>{
   console.log(error);
   //console.log(response.profileObj);
   console.log('Google Sign In was unsuccessful. Try Again Later!');
   

 }

 const responseGoogleSuccess=async (res)=>{

   const result=res?.profileObj; //undefined 
   //check if email is in database
   const token=res?.tokenId;
   console.log(token);
  

  

   
//hi
   
   try{
     dispatch({type:'AUTH', data: {result, token}});
     //navigate.push('/');
     props.swap('HomePage')
     navigate('/');


   }catch(error){
     console.log(error);

   }

  

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
       <h4>SIGN IN</h4>
       </div>
       <div className='col-12'>
       </div>
        <GoogleLogin
        clientId="422408827622-1n56espplvd573e6epkhs90o0r7bif7r.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy={'single_host_origin'}
          
          
          
          />
          

  

     </div>
     
     </div>
       <div className='col-12'>
       
       <div>
       </div>
       </div>
       
       <br></br>
 
       <div>
       <center>
       <form onSubmit={handleSubmit}>
         <div>
       <label>
         Email:
         <input id='login-email' name="email" label="Email" onChange={handleChange} />
       </label>
       </div>
       <br></br>
 
       <div>
       <label>
         Password:
         <input id='login-password' name= "password" label="Password" input type="password" onChange={handleChange} />
       </label>
       </div>
 
       <br></br>
       
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
   // };
 }
}
export default Login;
 
 

