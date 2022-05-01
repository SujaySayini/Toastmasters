import React from 'react';
 
 
import Img from '../images/Toastmasters.png';
import background from "./Background.jpg";
 
import "./custom.css";
 
 
 
 
class ConfirmReset extends React.Component{
 
 
constructor(props) {
  super(props);
  this.state = {
   value: ''
  };
  this.handleChangePass = this.handleChangePass.bind(this);
  this.handleChangePassword=this.handleChangePassword.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChangePass(event) {
  this.setState({value: event.target.user});
}
handleChangePassword(event) {
  this.setState({value: event.target.pass});
}
handleSubmit(event) {
  alert('Password has been reset!');
  event.preventDefault();
}
 render(){
     return (
     
     
       <div className="container-fluid layout">
    
         
          
     <center>
        <img src= {Img} alt="pic" />
        <br/> <b></b>
      </center>
      <div class="title">
      <h4>CONFIRM PASSWORD RESET</h4>
      </div>
      <br></br>
      <div>
      <center>
      <form onSubmit={this.handleSubmit}>
        <div>
      <label>
        New Password:
        <input type="password" value={this.state.value} onChange={this.handleChangeUsername} />
      </label>
      </div>
      <br></br>
      <div>
      <label>
        Re-enter New Password:
        <input type="password" value={this.state.value} onChange={this.handleChangePassword} />
      </label>
      </div>
      <br></br>
     
      <center>
      <input type="submit" value="Change Password" />
      </center>
      <br></br>
   
    </form>
    </center>
  
 
    <br></br>
 
  
    </div>
    </div>
    
     
     );
   }
 }
export default ConfirmReset;
 
 
