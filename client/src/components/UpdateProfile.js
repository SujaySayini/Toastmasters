import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { createElement } from 'react';
import Img from '../images/Toastmasters.png';
import "./custom.css";
import {useDispatch} from 'react-redux';
import {useState} from 'react'
 import {updateprofile } from '../actions/auth.js';
 
 
const initialState={first: '', last: ' ', imageURL:''};
 
const UpdateProfile = (props) =>{
  const dispatch = useDispatch()
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
 
  const [formData, setFormData]=useState(initialState);
 
 
  const handleChange=(e)=>{   
    setFormData({...formData,[e.target.name]:e.target.value})
  }
 
  const handleSubmit=async(e) =>{
    e.preventDefault()
    const res=await dispatch(updateprofile(formData,user.email))
    if(res?.data.message==="Profile Updated!"){
    /**
    * User updates their profile successfully 
    * and is directed to their profile.
    */
      props.swap('Profile')
    } else{
      alert(res.data.message)
    }
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
   <a href="#" onClick = {()=>props.swap('Profile')}>Return to Profile</a>
   </div>
   </center>
    </div>
   </div>
  
  
    );
  }
 
export default UpdateProfile;
