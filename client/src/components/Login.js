import React from 'react';

import Img from '../images/Toastmasters.png';
import background from "./Background.JPG";
import App from '../App';
import "./custom.css";
import HomePage from './HomePage';
import GoogleLogin from 'react-google-login'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {signin} from '../actions/auth.js'
import {useState} from 'react'
  
import {BrowserRouter as Router}  from 'react-router-dom';

 const initialState={username: '', password: ' '};

 function Login(props){
  return (
    <Router>
      <Login2/>

    </Router>


  )

  
//} 
 
//class Login extends React.Component{
  //const Login = () =>{
    function Login2(){
  
    const dispatch=useDispatch();
   const navigate=useNavigate();
   const [formData, setFormData]=useState(initialState);
 
 const handleSubmit=(e) =>{
   
   e.preventDefault();
   dispatch(signin(formData, navigate))


   //console.log(formData)
    
   //this.props.swap('HomePage')
  
   //alert('Login credentials entered: ' + this.state.value);
   //event.preventDefault();
 }

 const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})


 }

 

 const responseGoogleFailure=(error)=>{
   console.log(error);
   //console.log(response.profileObj);
   console.log('Google Sign In was unsuccessful. Try Again Later!');
   

 }

 const responseGoogleSuccess=async (res)=>{
  console.log(res);
   const result=res?.profileObj; //undefined 
   const token=res?.tokenId;

  

   

   
   try{
     dispatch({type:'AUTH', data: {result, token}});
     //navigate.push('/');
     navigate('/');


   }catch(error){
     console.log(error);

   }

  

}
  //render(){
      
      return (
       
       
        <div className="container-fluid layout">
      
           
        <Row> 
          <Col>
      <center>
         <img src= {Img} alt="pic" />
         <br/> <b></b>
       </center>

       <div className="title">
         <Row>
           <Col>
       <h4>SIGN IN</h4>
       </Col>
       <Col>
       <div>
        <GoogleLogin
        clientId="422408827622-1n56espplvd573e6epkhs90o0r7bif7r.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy={'single_host_origin'}
          
          
          
          />
          

  

     </div>
     
     </Col>
       <Col>
       
       </Col>
       </Row>
       </div>
       
       <br></br>
 
       <div>
       <center>
       <form onSubmit={handleSubmit}>
         <div>
       <label>
         Username:
         <input name="username" label="Username" onChange={handleChange} />
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
       
       <center>
       <input type="submit" input value= "Sign In"  />
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
     </Col>


   

     </Row> 
     </div>
     
 
      
       
      );
   // };
 }
}
export default Login;
 
 

