​​​​import React from 'react';
 
 
import Img from '../images/Toastmasters.png';
import background from "./Background.JPG";
import App from '../App';
import "./custom.css";
import HomePage from './HomePage';
 
import UploadAndDisplayImage from './UploadAndDisplayImage';
 
 
 
class SignUp extends React.Component{
 
 
 constructor(props) {
   super(props);
   this.state = {
    value: '',
    first: '',
    last: '',
    email: '',
    username: '',
    pass: '',
    password: '',
    number: '',
 
    isLogin: true
   };
    this.handleChangeFirst = this.handleChangeFirst.bind(this);
   this.handleChangeLast = this.handleChangeLast.bind(this);
   this.handleChangeEmail = this.handleChangeEmail.bind(this);
   this.handleChangeUsername = this.handleChangeUsername.bind(this);
   this.handleChangePass = this.handleChangePass.bind(this);
   this.handleChangePassword=this.handleChangePassword.bind(this);
   this.handleChangeNumber=this.handleChangeNumber.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
  handleChangeFirst(event) {
   this.setState({value: event.target.first});
 }
 handleChangeLast(event) {
   this.setState({value: event.target.last});
 }
 handleChangeEmail(event) {
    this.setState({value: event.target.email});
  }
  handleChangeUsername(event) {
   this.setState({value: event.target.username});
 }
  handleChangePassword(event) {
   this.setState({value: event.target.password});
 }
 handleChangePass(event) {
    this.setState({value: event.target.pass});
  }
  handleChangeNumber(event) {
   this.setState({value: event.target.number});
 }
  handleSubmit(event) {
    this.props.swap('HomePage')
 
   //alert('Login credentials entered: ' + this.state.value);
   event.preventDefault();
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
         <input type="text" value={this.state.value} onChange={this.handleChangeFirst} />
       </label>
       </div>
       <br></br>
 
       <div>
       <label>
         Last Name:
         <input type="text" value={this.state.value} onChange={this.handleChangeLast} />
       </label>
       </div>
       <br></br>
 
       <div>
       <label>
         Email:
         <input type="text" value={this.state.value} onChange={this.handleChangeEmail} />
       </label>
       </div>
       <br></br>
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
       <div>
       <label>
          Re-enter Password:
         <input type="password" value={this.state.value} onChange={this.handleChangePass} />
       </label>
       </div>
        <br></br>
       <div>
       <label>
          Phone Number:
         <input type="text" pattern="[0-9]*" value={this.state.value} onChange={this.handleChangeNumber} />
       </label>
       </div>
        <br></br>
      
      
       <center>
       <input type="submit" value="Sign Up" />
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
 
