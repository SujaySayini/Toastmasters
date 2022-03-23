import React, { createElement } from 'react';
import Img from '../images/Toastmasters.png';
import background from "./Background.JPG";
import App from '../App';
import "./custom.css";
import HomePage from './HomePage';
import { createUser } from '../actions/user.js';
import UploadAndDisplayImage from './UploadAndDisplayImage';
import {useDispatch} from 'react-redux';
import axios from 'axios'
 
 
////////added
//import { createUser } from '../actions/user.js';
class SignUp extends React.Component{
//  const SignUp = () => {
 
//handleSignUp=()=>{
constructor(props) {
  super(props);
 this.state = {
   
   name:'',
   last:'',
   email:'',
   username:'',
   password:'',
   pass:'',
   number:''

    }
    this.handleChangeName=this.handleChangeName.bind(this)
    this.handleChangeLast=this.handleChangeLast.bind(this)
    this.handleChangeEmail=this.handleChangeEmail.bind(this)
    this.handleChangeUsername=this.handleChangeUsername.bind(this)
    this.handleChangePassword=this.handleChangePassword.bind(this)
    this.handleChangePass=this.handleChangePass.bind(this)
    this.handleChangeNumber=this.handleChangeNumber.bind(this)
    
  }

 
handleChangeName(event) {
  this.setState({
    name:event.target.value
  })
}
 
 
//handleSubmit() {

handleChangeLast(event) {
  this.setState({
    last:event.target.value
  })
 }

  
 handleChangeEmail(event) {
  this.setState({
    email:event.target.value
  })
 }

  handleChangeUsername(event) {
    this.setState({
      username:event.target.value
    })
  }

  
 handleChangePassword(event) {
  this.setState({
    password:event.target.value
  })
 
 }

 handleChangePass(event) {
  this.setState({
    pass:event.target.value
  })
  
 }
 
  handleChangeNumber(event) {
    this.setState({
      number:event.target.value
    })
    // Extract the current value of the customer from state
  }
  /*handleChangeNumber(event) {
   this.setState({value: event.target.number});
 } */
 /* handleSubmit(event) {
    this.props.swap('HomePage')
   //alert('Login credentials entered: ' + this.state.value);
   event.preventDefault();
 } */

 /*handleSubmit = async () =>{
  //async function handleSubmit() {
 console.log(this.state.user);
//const profile = document.getElementById("MyImage").value;
const name = document.getElementById("first").value;
//const last = document.getElementById('last').value;
const email = document.getElementById('email').value;
//const username = document.getElementById("username").value;
//const pass = document.getElementById('pass').value;
const password = document.getElementById('password').value;
//const number = document.getElementById('number').value;


} */

handleSubmit(event){
  event.preventDefault()

  const registered={
    name:this.state.name,
    email:this.state.email,
    password:this.state.password
  }
  axios.post('http://localhost:5000/signup',registered)

  .then(response=>console.log(response.data))
  //alert('Login credentials entered: ' + this.state.name);
  alert('Login credentials entered: ' + registered.name);
  //window.location='./Agenda'

}

  render(){
   
     return (
    
    
       <div className="container-fluid layout">
   
        
         
   
 
    
      <div class="title">
      
      <h12>
         <center>
       <img src= {Img} alt="pic" width="55"  />
       <br/> <b></b>
     </center>
      SIGN UP
  
      </h12>
      </div>
    
      <UploadAndDisplayImage></UploadAndDisplayImage>
      <div>
      <center>
      <form onSubmit={this.handleSubmit}>
     
      <div>
      <label>
        First Name:
        <input type="text" value={this.state.name} onChange={this.handleChangeName} />
      </label>
      </div>
      <br></br>
      <div>
      <label>
        Last Name:
        <input type="text" value={this.state.last} onChange={this.handleChangeLast} />
      </label>
      </div>
      <br></br>
      <div>
      <label>
        Email:
        <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
      </label>
      </div>
      <br></br>
        <div>
      <label>
        Username:
        <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
      </label>
      </div>
      <br></br>
       <div>
      <label>
        Password:
        <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
      </label>
      </div>
       <br></br>
      <div>
      <label>
         Re-enter Password:
        <input type="password" value={this.state.pass} onChange={this.handleChangePass} />
      </label>
      </div>
       <br></br>
      <div>
      <label>
         Phone Number:
        <input type="text" pattern="[0-9]*" value={this.state.number} onChange={this.handleChangeNumber} />
      </label>
      </div>
       <br></br>
    
    
      <center>
    
      <button onClick={this.handleSubmit.bind(this)}>
      Sign Up
       </button>
    
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
 

