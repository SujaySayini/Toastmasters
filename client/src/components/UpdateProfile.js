import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { createElement } from 'react';
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
 import {updateprofile } from '../actions/auth.js';
import {BrowserRouter as Router}  from 'react-router-dom';
 
 
 
 
const initialState={first: '', last: ' ', imageURL:''};
 
function UpdateProfile(props){
 
 
 
 //const dispatch =useDispatch();
//const navigate=useNavigate();
 return (
   <Router>
     <UpdateProfile2 swap ={props.swap}/>
    
 
   </Router>
 
 
 )
 
 
 
 
 //const SignUp = () =>{
   function UpdateProfile2(props){
       const dispatch = useDispatch()
       //const [chart, setChart] = useState(<div></div>)
       let user = ''
       const cname = 'user'
       let name = cname + "=";
       let decodedCookie = decodeURIComponent(document.cookie);
       let ca = decodedCookie.split(';');
       for(let i = 0; i <ca.length; i++) {
         let c = ca[i];
         while (c.charAt(0) == ' ') {
           c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
           user = JSON.parse(c.substring(name.length, c.length)).user;
         }
       }
       console.log(user)
  // function SignUp(){
//const dispatch =useDispatch();
const navigate=useNavigate();
//const history=useHistory();
 
const [formData, setFormData]=useState(initialState);
 
 
 const handleChange=(e)=>{
   setFormData({...formData,[e.target.name]:e.target.value})
  
  
    }
 
    const handleSubmit=async(e) =>{
     
 
     e.preventDefault()
    // const res=await dispatch(signup(formData, navigate))
 
     const res=await dispatch(updateprofile(formData,user.email, navigate))
     //console.log(res);
     //dispatchEvent(signup(formData, navigate));
     console.log('__________')
     //console.log()
     //console.log(res.status);
     //^not returning response
     console.log(res)
   
     if(res?.data.message==="Profile Updated!"){
       //if(res?.data.message===200){
       props.swap('Profile')
     }
       else{
       console.log(res.data.message)
   
 
      // alert('Already used!')
      alert(res.data.message)
     }
     //console.log(res);
    
 
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
   
     <label>Profile Image: <input type="file" accept="image/*" id="myFile" name="filename"/></label>
     
    
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
        <input name="last" label="Last Name" onChange={handleChange} />
      </label>
     </div>
    
     <br></br>
 
    
   
    
      <br></br>
    
      <center>
      <input type="submit" input value= "Update Profile"  />
      </center>
  
   
    </form>
   </center>
   <center>
   <div>
   <a href="#" onClick = {()=>this.props.swap('Profile')}>Return to Profile</a>
   </div>
   </center>
    </div>
   </div>
  
  
    );
  }
 }
export default UpdateProfile;
