import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Message from './Message';
import toastyblack from '../images/toasty-black.png'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip} from 'recharts';
import { getUsers } from '../actions/user';
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const ManageMembers = (props) => {
    const dispatch = useDispatch()

    const[user, setUser] = useState([])
    const[members, setMembers] = useState([])
    const[memberList, setMemberList] = useState([])
    const[minimize, setMinimize] = useState(false)
    const test = (id) => {
        var d = document.getElementById(id);
        if(d.className === 'visible'){
            
            d.className = "invisible";
        } else {
            d.className = "visible";
        }
        console.log(id)
    }
    const updateMembers = async (club) =>{
        //first, get the eboard and other club information


        console.log('dispatch')
        let result = await dispatch(getUsers({club: club}));
        
        console.log(result);
    
        setMemberList(result)
        const elements = result.map((user) => {
            let title = ''
            if(user.title){
                title = user.title
            }
            if(user.name){
                return {user: user.name, title: title, pos: user.pos};
            }else if(user.first){
                if(user.last){
                    return {user: user.first + " " + user.last, title: title, pos: user.pos}
                }
                return {user: user.first, title: title, pos: user.pos}
            }
            return {user: 'no name', title: title, pos: user.pos};
        })
        const listElements = elements.map((m) => 
            <div onClick = {()=>test(m.user)}className='message row' style={{marginLeft: '10px', marginRight: '10px',padding:'10px'}}>
                <div className='col-2'>
                    <img style={{height: '40px'}}src = {toastyblack}></img>
                </div>

                <div className='col-6' style={{textDecoration:'none'}}>
                    <p>{m.user}</p>
                </div>

                <div className='col-4'>
                    <p style={{fontStyle:'italic'}}>{m.title}</p>
                </div>
                <div id = {m.user} className = 'visible'>Test</div>
            </div>
            
        );
        setMembers(listElements)
    
    }

    useEffect(()=>{ 
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
        setUser(temp)
        updateMembers(temp.club)
        console.log(temp)
    }, [])

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