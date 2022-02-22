import React from 'react';
import './App.css';
import Img from './Toastmasters.png'
import background from "./Background.JPG";
import Title from './Title.js';
import "./custom.css";



 

 
 
class Login extends React.Component{


 constructor(props) {
   super(props);
   this.state = {
    value: ''
   };
 
   this.handleChangeUsername = this.handleChangeUsername.bind(this);
   this.handleChangePassword=this.handleChangePassword.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 
 handleChangeUsername(event) {
   this.setState({value: event.target.user});
 }
 
 handleChangePassword(event) {
   this.setState({value: event.target.pass});
 }
 
 handleSubmit(event) {
   alert('Login credentials entered: ' + this.state.value);
   event.preventDefault();
 }
 
  render(){
      return (
       
       
        <div className="container-fluid layout">
      
           
            
      <center>
         <img src= {Img} alt="pic" />
         <br/> <b></b>
       </center>
 
       <div class="Title">
       <h4>SIGN IN</h4>
       </div>
       <br></br>
 
       <div>
       <center>
       <form onSubmit={this.handleSubmit}>
         <div>
       <label>
         Username:
         <input type="text" value={this.state.value} onChange={this.handleChangeUsername} />
       </label>
       </div>
       <br></br>
 
       <div>
       <label>
         Password:
         <input type="password" value={this.state.value} onChange={this.handleChangePassword} />
       </label>
       </div>
 
       <br></br>
       
       <center>
       <input type="submit" value="Sign In" />
       </center>
       <br></br>
     
     </form>
     </center>
    
     <center>
     <div>
     <a href="https://google.com">Forgot Password?</a>
     </div>
     </center>
 
   
     <br></br>
     <center>
       <text>New User?</text>
     <a href="https://google.com"> Sign Up!</a>
     </center>
    
 
 
     </div>
     </div>
 
      
       
      );
    }
  }
export default Login;
 
 

