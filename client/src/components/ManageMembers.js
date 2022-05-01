import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Message from './Message';
import toastyblack from '../images/toasty-black.png'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip} from 'recharts';
import { getUsers, changeUserRole as cUR, removeUserClub as rUC } from '../actions/user';
import React, {useEffect, useState} from 'react';
import { use } from 'react-redux';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Expand from '@mui/icons-material/Expand'

const ManageMembers = (props) => {
    

    const[members, setMembers] = useState([])
    const[memberList, setMemberList] = useState([])
    const[minimize, setMinimize] = useState(false)
    
   
    let temp = ''
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
        temp = JSON.parse(c.substring(name.length, c.length)).user;
      }
    }
    const user = temp
    
    
    useEffect(()=>{
        updateMembers(temp.club);
    }, [])
    const changeUserRole = async (userEmail, userClub) => {
        console.log(userEmail)
        let selectedRole = document.getElementById("new-role"+userEmail).value;
        switch (selectedRole) {
            case "":
                
                break;
        
            default:
                break;
        }
        let result = await (cUR({userEmail: userEmail, selectedRole: selectedRole, userClub: userClub}));
        console.log(user)
        updateMembers(user.club)
    }

    //this literally just needs to set their clubName to ''

    const removeUserClub = async (userEmail) => {
        console.log(userEmail)
        let result = await (rUC({userEmail: userEmail}));
        console.log(result);
        updateMembers(user.club)
    }




    const test = (id) => {
        var d = document.getElementById(id);
        if(d.className === 'visible row'){
            d.className = "invisible";
        } else {
            d.className = "visible row";
        }
        var d2 = document.getElementById(id+'1')
        if(d2.className === 'visible row'){
            d2.className = "invisible";
        } else {
            d2.className = "visible row";
        }
        console.log(id)
    }
    const updateMembers = async (club) =>{
        //first, get the eboard and other club information


        console.log('')
        let result = await (getUsers({club: club}));
        
        console.log(result);
    
        setMemberList(result)
        const elements = result.map((user) => {
            let title = ''
            if(user.title && user.title != 'General Member'){
                title = user.title
            }
            if(user.name){
                return {user: user.name, title: title, pos: user.pos, email: user.email};
            }else if(user.first){
                if(user.last){
                    return {user: user.first + " " + user.last, title: title, pos: user.pos, email: user.email}
                }
                return {user: user.first, title: title, pos: user.pos, email: user.email}
            }
            return {user: 'no name', title: title, pos: user.pos , email: user.email};
        })
        const listElements = elements.map((m) => 
            <div className='message' >
                <nav class='navbar sticky-top' style={{height: 0, padding:0}}>
                    <Expand onClick = {()=>test(m.user)} style={{cursor: 'pointer', color: 'rgb(70, 70, 75)', position:'absolute', right: '-10px', top: '10px'}} />
                </nav>
                
            <div  className = 'row' style={{marginLeft: '10px', marginRight: '10px',padding:'10px'}}>
                
            
                <div className='col-2'>
                    <img style={{height: '40px'}}src = {toastyblack}></img>
                </div>

                <div className='col-6' style={{textDecoration:'none'}}>
                    <p>{m.user}</p>
                </div>

                <div className='col-4'>
                    <p style={{fontStyle:'italic'}}>{m.title}</p>
                </div>
            </div>
            <div id = {m.user} className = 'row invisible' style={{}}>
                    
                    <div className='col-3' style={{paddingTop: '8px', paddingLeft: 0, paddingRight: 0}}>
                        <p style={{textAlign: 'left'}}>Edit Role: </p>
                    </div>
                    <div className='col-6'>
                        
                        <select id={'new-role' + m.email} className="form-select" >
                          <option selected hidden>Select Role</option>
                          <option> President </option>
                          <option> VPE</option>
                          <option> VPPR </option>
                          <option> VPM</option>
                          <option> Secretary </option>
                          <option> Treasurer</option>
                          <option> Sargeant at Arms </option>
                          <option>General Member</option>
                        </select>
                    </div>
                    
               
                
                    <div className='col-2' style={{textDecoration:'none'}}>
                        <button className ='btn btn-dark' onClick = {()=> changeUserRole(m.email, club)}style={{backgroundColor: 'rgb(0, 65, 101)'}}>Submit</button>
                    </div>
                </div>
                <div id = {m.user + '1'} className = 'row invisible' style={{}}>
                    
                    <div className='col-9' style={{textAlign: 'left', padding:'8px', paddingLeft: 0, paddingRight: 0}}>
                        <p> Remove this user from the Club: </p>
                    </div>

                     {// ON clicking this we simply need to change the users club to be an empty string and that should work
                }
                    <div className='col-2' style={{ textDecoration:'none'}}>
                        <button className ='btn btn-dark'  onClick = {()=> removeUserClub(m.email)} style={{backgroundColor: 'rgb(0, 65, 101)'}}>Submit</button>
                    </div>
                </div>
            </div>
            
        );
        setMembers(listElements)
    
    }
    

    const data = [{
        name: '1/28',
        You: 35,
        
        Club: 13,
        pv: 100,
        amt: 100,
      },
      {
        name: '2/3',
        You: 25,
        
        Club: 10.5,
        pv: 100,
        amt: 100,
      },
      {
        name: '2/10',
        You: 0,
        
        Club: -11,
        pv: 100,
        amt: 100,
      },
      {
        name: '2/17',
        You: -15,
        
        Club: 0,
        pv: 100,
        amt: 100,
      },
      {
        name: '2/24',
        You: 0,
        
        Club: -11,
        pv: 100,
        amt: 100,
      },
      {
        name: '3/3',
        You: 45,
        
        Club: 3,
        pv: 100,
        amt: 100,
      },
      {
        name: '3/10',
        You: 0,
        
        Club: -7,
        pv: 100,
        amt: 100,
      },];
      

    const renderLineChart = (
        <LineChart data={data}>
            <Line type='monotone' dataKey='Club' stroke = '#7bcd88'></Line>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Seconds Over/Under Time', angle: -90 }} type='number' domain = {[-60, 60]}/>
            <Tooltip />
            <Legend />
        </LineChart>
    )

    return (
        <div>
            <p style={{opacity: 0}}>{user.club}</p>
            <div className='container'>
                <h2 style ={{marginTop: '10px'}}>Manage Your Club.</h2>
                <div className = 'row'>
                    <div style={{marginTop: '5px'}}className = 'col-lg-6'>
                        <h4>Member Activity Updates</h4>
                        {minimize 
                        ? <div className='container-fluid mycard overflow-auto' style = {{height: 'calc(28vh + 351.5px)'}}>
                            <nav class='navbar sticky-top' >
                                <ExpandLess onClick = {()=>setMinimize(!minimize)} style={{cursor: 'pointer', color: 'rgb(70, 70, 75)', position:'absolute', right: '-20px', top: '5px'}} />
                            </nav>
                            <Message title = 'Ram Patel' data = {['Has attended 50% less meetings this month', 'Has not given a speech in over 5 meetings']}/>
                            <Message title = 'Nick Schenk' data = {['Has attended 5 consecutive meetings', 'Has not held a role in over 5 meetings']} swap = {props.swap}/>
                            <Message title = 'John Doe' data = {['Has attended 13 consecutive meetings', 'Has held a role/given a speech at 3 consecutive meetings']} swap = {props.swap}/>
                        </div>
                        :
                        <div>
                        <div className='container-fluid mycard overflow-auto' style = {{height: '25vh'}}>
                            <nav class='navbar sticky-top' >
                                <ExpandMore onClick = {()=>setMinimize(!minimize)} style={{cursor: 'pointer', color: 'rgb(70, 70, 75)', position:'absolute', right: '-20px', top: '5px'}} />
                            </nav>
                            <Message title = 'Ram Patel' data = {['Has attended 50% less meetings this month', 'Has not given a speech in over 5 meetings']}/>
                            <Message title = 'Nick Schenk' data = {['Has attended 5 consecutive meetings', 'Has not held a role in over 5 meetings']} swap = {props.swap}/>
                            <Message title = 'John Doe' data = {['Has attended 13 consecutive meetings', 'Has held a role/given a speech at 3 consecutive meetings']} swap = {props.swap}/>
                            
                         </div>
                    
                        
                        <div className='container-fluid mycard' style={{marginTop: '3vh'}}>
                            <h4>Club Progress:</h4>
                            <p> Click below to navigate to all charts and statistics about your club!</p>
                            <ResponsiveContainer width="95%" height={275}>
                                {renderLineChart}
                            </ResponsiveContainer>
                        </div>
                        </div>
                        }
                    </div>
                    <div style={{marginTop: '5px'}}className = 'col-lg-6'>
                        
                        <h4>Members List</h4>
                        <div className = 'container-fluid mycard overflow-auto' style = {{height:'calc(28vh + 351px)', paddingTop: '10px'}}>
                            {members} 
                               
                            

                            

                        </div>
                    </div>
                </div>
            </div>
                        
        </div>

    );
}

export default ManageMembers;