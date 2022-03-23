import React from 'react';


import Img from '../images/Toastmasters.png';
import background from "./Background.JPG";
import App from '../App';
import "./custom.css";
import HomePage from './HomePage';



 

 
 
class Login extends React.Component{


 constructor(props) {
   super(props);
   this.state = {
    value: '',
    isLogin: true
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
    this.props.swap('HomePage')
  
   //alert('Login credentials entered: ' + this.state.value);
   event.preventDefault();
 }
 
  render(){
      
      return (
       
       
        <div className="container-fluid layout">
      
           
            
      <center>
         <img src= {Img} alt="pic" />
         <br/> <b></b>
       </center>
 
       <div className="title">
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
     <a href="#" onClick = {()=>this.props.swap('ResetPassword')}>Forgot Password?</a>
     </div>
     </center>
 
   
     <br></br>
     <center>
       <p>New User?</p>
     <a href="#" onClick = {()=>this.props.swap('SignUp')}> Sign Up!</a>
     </center>
    
 
 
     </div>
     </div>
 
      
       
      );
    }
  }
export default Login;
 
 

