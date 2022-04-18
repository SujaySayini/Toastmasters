import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 
//import React, { createElement } from 'react';
import React from 'react';
import toastyblack from '../images/toasty-black.png'
import Img from '../images/Toastmasters.png';
//import background from "./Background.JPG";;
import "./custom.css";
//import UploadAndDisplayImage from './UploadAndDisplayImage';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
//import {useHistory} from 'react-router-dom'
import {useState} from 'react'
//import axios from 'axios'
import {signup } from '../actions/auth.js';
import {BrowserRouter as Router}  from 'react-router-dom';
import {clubderegister} from '../actions/auth.js'
 
//import bootstrap
import "./profile.css"
//cookies
//first name, last name, club,  email, phone number, img url, role,
import React, { useState, useEffect } from "react";
 
 
 
//user.userLevel
 
function Profile(props){
 //const dispatch =useDispatch();
//const navigate=useNavigate();
//const dispatch = useDispatch()
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
function clubDeregister(e) {
   e.preventDefault();
   console.log('Deregister from club.');
   if (user.club==""){
       alert("You are not registered in a club")
      
   }
   else{
       //ARE YOU SURE YOU WANT TO LEAVE THIS CLUB?
      //const res = await dispatch(changepassword(formData, navigate))
      const res = await dispatch(clubderegister(user.email, navigate))
  console.log(res);
  console.log('---------')
       if(res?.status === 200){
      //logout?
      alert("You have been removed from your club");
       }
        else{
      alert("Something went wrong");
        }
   }
  
   //you are not part of a club
   //Alert aree you sure you want to deregister from cliub "...."???/
  
 }
 
 function updateProfile(e) {
   e.preventDefault();
   console.log('Update Profile.');
   props.swap('UpdateProfile');
 }
 
 function resetPassword(e) {
   e.preventDefault();
   //clear cookies/logout
   console.log('Reset Password.');
   props.swap('ResetPassword');
 }
 
 
 
 return (
   <div class="container mt-5">
   <div class="row d-flex justify-content-center">
       <div class="col-md-7">
           <div class="card p-3 py-4">
               <div class="text-center"> <img src={toastyblack} width="100" class="rounded-circle"/> </div>
               <div class="text-center mt-3"> <span class="bg-secondary p-1 px-4 rounded text-white">{user.userLevel}</span>
                   <h5 class="mt-2 mb-0">{user.first} {user.last}.</h5> < span>{user.club}.</span>< span>{user.email}.</span>
                   <div class="px-4 mt-1">
                       <p class="fonts">Holder. </p>
                   </div>
 
                   <div class="buttons"> <button  class="btn btn-outline-primary px-4" onClick={clubDeregister}>Deregister from club </button> <button class="btn btn-primary px-4 ms-3" onClick={updateProfile}>Update Profile</button> </div>
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

