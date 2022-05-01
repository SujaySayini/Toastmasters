import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 
import toastyblack from '../images/toasty-black.png'
import Img from '../images/Toastmasters.png';
import "./custom.css";
import {use} from 'react-redux';
import {signup } from '../actions/auth.js';
import {BrowserRouter as Router}  from 'react-router-dom';
import {clubderegister} from '../actions/auth.js'
 
import {updateprofile } from '../actions/auth.js';
import "./Profile.css"
//cookies
//first name, last name, club,  email, phone number, img url, role,
import React, { useState, useEffect } from "react";
 
 
 
//user.userLevel
 
const Profile = (props) =>{
  ;
  const initialState={first: '', last: ' ', imageURL:''};
  
  const [formData, setFormData]=useState(initialState);
 
  //
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
  const clubDeregister = async (e)=> {
    e.preventDefault();
    console.log('Deregister from club.');
    if (user.club==""){
      alert("You are not registered in a club")
    } else{
         //ARE YOU SURE YOU WANT TO LEAVE THIS CLUB?
        //const res = await (changepassword(formData, navigate))
        const res = await (clubderegister({email: user.email}))
    console.log(res);
    console.log('---------')
         if(res === 200){
        //logout?
        localStorage.clear()
        props.swap('Login')
       }
        else{
      alert("Something went wrong");
        }
   }
  
   //you are not part of a club
   //Alert aree you sure you want to deregister from cliub "...."???/
  
 }
 
 async function updateProfile(e) {
   e.preventDefault();
   const res=await (updateprofile(formData,user.email))
    console.log('__________') 
    console.log(res)
    if(res?.data.message==="Profile Updated!"){
      console.log(formData)
      if(formData.first !== ''){
        user.first = formData.first
      } else if (formData.last !== ''){
        user.last = formData.last
      }
      console.log(document.cookie)
      document.cookie = 'user='+JSON.stringify({user: user})
      console.log(document.cookie)
      props.swap('Profile')
    } else{
      console.log(res.data.message)
      alert(res.data.message)
    }
 }
 
 function resetPassword(e) {
   e.preventDefault();
   //clear cookies/logout
   console.log('Reset Password.');
   props.swap('ResetPassword');
 }

 const handleChange=(e)=>{   
  setFormData({...formData,[e.target.name]:e.target.value})
}

 
 
 
 return (
   <div className="container mt-5">
   <div className="row d-flex justify-content-center">
       <div className="col-md-7">
           <div className="card p-3 py-4">
               <div className="text-center"> <img src={toastyblack} width="100" className="rounded-circle"/> </div>
               <div className="text-center mt-3"> <span className="bg-secondary p-1 px-4 rounded text-white">{user.userLevel}</span>
                  <h5 className="mt-4 mb-0">{user.first} {user.last}</h5> 
                  <h5>{user.email}</h5> 
                  <h5 className="mt-4 mb-0">Current Club: {user.club}</h5>
                  <div className="buttons"> 
                    <button  className="btn btn-outline-primary px-4" style={{display: 'inline-block'}} onClick={clubDeregister}>Deregister From This Club</button>
                  </div>
                   
                   <div className="px-4 mt-1">
                       <p className="fonts">Holder. </p>
                   </div>
                   <form>
   
                  <label className="text-center"style={{marginLeft: '75px'}}>New Profile Image: 
                    <input className="text-center" style={{marginBottom: '10px', paddingLeft: '5px'}} type="file" accept="image/*" id="myFile" name="filename" title=' '/> </label>
                  <div>
                  <label> First Name: <input id = 'first' name="first" label="First Name" onChange={handleChange} /></label>
     </div>
     <br></br>
     <div>
     <label>
        Last Name:
        <input id = 'last' name="last" label="Last Name" onChange={handleChange} />
      </label>
     </div>
   
    </form>
 
                  <button className="btn btn-primary px-4 mt-4 ms-3" onClick={updateProfile}>Save Changes</button> 
                   <div>
                   <a href="#" onClick = {resetPassword}>Reset Password</a>
                   </div>
                  
               </div>
           </div>
       </div>
   </div>
</div>
 
 
 )
 
 
 
 
 //const SignUp = () =>{
  }
export default Profile;

