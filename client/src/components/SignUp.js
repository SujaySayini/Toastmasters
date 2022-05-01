import React from 'react';
import Img from '../images/Toastmasters.png';
import "./custom.css";
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
 import {signup } from '../actions/auth.js';
 import {BrowserRouter as Router}  from 'react-router-dom';
 
 const options = [
   
  {
    label:" What is your mother's maiden name? ",
    value: " What is your mother's maiden name? ",
    id:"1",
  },
  {
    label: " What high school did you attend? ",
    value: " What high school did you attend? ",
    id:"2",
  },
  {
    label: " What is the name of your first school?",
    value: " What is the name of your first school?",
    id:"3",
  },
  {
    label: "In what city were you born?",
    value: "In what city were you born?",
    id:"4",
  },
  
];

 const initialState={first: '', last: ' ', email: '', password:'', pass: '', securityQuestion:'In what city were you born?', securityAnswer:'', clubName:'', requestAdmin:'No'};

function SignUp(props){
  return (
    <Router>
      <SignUp2 swap ={props.swap}/>
      

    </Router>


  )
    function SignUp2(props){

const navigate=useNavigate();

const [formData, setFormData]=useState(initialState);


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    
    
     }

     const handleSubmit=async(e) =>{
       
   
      e.preventDefault()
      const res=await signup(formData, navigate)
      if(res?.data.message==="Signed Up!"){


        /**
        * User signs up succesfully.
        * Information is stored in cookie. 
        * User is then directed to the home page.
        */
        document.cookie = 'user='+JSON.stringify({user: {
          first: formData.first,
          last: formData.last,
          email: formData.email,
          club: formData.club
        }})
        if(formData.club===""){
          props.swap('Search')

        } else{
          props.swap('HomePage')
        }
      } else{
     
      alert(res.data.message)
      }
     
    }
   
     return (
       <div className="container-fluid layout">
   
  
       <div className="title">
        
      
      <h2>
         <center>
       <img src= {Img} alt="pic" width="55"  />
       <br/> <b></b>
     </center>
      SIGN UP
 
  
      </h2>
      </div>
      
      <div>
      
      <center>
      <form onSubmit={handleSubmit}>
     
      <div>
      
      <label>
         First Name:
         <input id= "signup-first" name="first" label="First Name" onChange={handleChange} />
       </label>
      </div>
      <br></br>
      <div>
      <label>
         Last Name:
         <input id= "signup-last" name="last" label="Last Name" onChange={handleChange} />
       </label>
      </div>
      <br></br>
      <div>
      <label>
         Email:
         <input id= "signup-email" name="email" label="Email" onChange={handleChange} />
       </label>
      </div>
      <br></br>
       <div>
      <label>
        Password:
        <input id= "signup-password" name="password" input type="password" onChange={handleChange} />
      </label>
      </div>
       <br></br>
      <div>
      <label>
         Re-enter Password:
        <input id= "signup-pass" name="pass" input type="password" onChange={handleChange} />
      </label>
      </div>
       <br></br>
       <div>
       <label>
           Security Question:
           <select>
            {options.map((option) => (
              <option id = "signup-securityquestion" value={option.value}>{option.label}</option>
            ))}
          </select>

      </label>
      </div>
       <br></br>

       <div>
       <label>
         Security Answer
         <input id= "signup-securityanswer" name="securityAnswer" label="Security Answer" onChange={handleChange} />
       </label>
      </div>
       <br></br>
  
    
      <div>
      <label>
         Club Name
         <input id= "signup-club" name="clubName" label="Club Name" onChange={handleChange} />
       </label>
      
      </div>
      <label>Profile Image: <input type="file" accept="image/*" id="myFile" name="filename"/></label>

      <div>
        <label>
        Become an Admin?
        <label> Yes</label>
        <input type="radio" name="requestAdmin" value="Yes" onChange={handleChange} checked={formData.requestAdmin=="Yes"}/>
        <label> No</label>
        <input type="radio" name= "requestAdmin" value="No" onChange={handleChange} checked={formData.requestAdmin=="No"}/>
        
      </label>
    </div>

      
      
  
       
       <center>
       <input type="submit" input value= "Sign Up"  />
       </center>
    
     
  
    </form>
 
    </center>
 
    <center>
    <div>
    <a href="#" onClick = {()=>props.swap('Login')}>Login</a>
    </div>
    </center>
     </div>
    </div>
    
    
     );
   }
  }
 
 export default SignUp;