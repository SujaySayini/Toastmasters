import React from 'react';
import './App.css';
import Img from './Toastmasters.png'
import background from "./Background.JPG";
import Title from './Title.js';
import "./custom.css";




 
class ResetPassword extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     value: ''
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({value: event.target.user});
  }

  handleChangePassword(event) {
    this.setState({value: event.target.pass});
  }

  handleSubmit(event) {
    alert('Email sent');
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
            <h4>RESET PASSWORD</h4>
            
        
        </div>
        <br></br>
        <center>
        <p>Enter the email address associated with your Toastamster account. You will recieve an email with instructions to reset your password </p>
        </center>
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

        <center>
        <input type="submit" value="Reset Password" />
        </center>
       
      </form>
      </center>
      


      </div>
      </div>

        
         
       );
     }
 
   }
 
export default ResetPassword;
 
