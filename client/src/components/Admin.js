import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Message from './Message';
import Agenda from './Agenda';
import toastyblack from '../images/toasty-black.png'
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { getSpeech } from '../actions/speech';
import { getUsers } from '../actions/user'
import './Homepage.css'
import { admin } from '../actions/user';
import { getClubs } from '../actions/clubpage';
const Admin = (props) => {


    const dispatch = useDispatch()
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
    const [requests, setRequests] = useState([])
    const [activeClubs, setActiveClubs] = useState([])
    
    const [inactiveClubs, setInactiveClubs] = useState([])

    const accept = (email) => {
        dispatch(admin({email: email, requestAdmin: 'No', userLevel: 'Admin'}))
        getRequests()

    }
    const deny = (user) => {
        dispatch(admin({email: user.email, requestAdmin: 'No', userLevel: user.userLevel}))     
        getRequests()
    }
    const inactivate = (clubName) => {
        //dispatch(setClubActive({clubName: clubName, active: 'No'}))
    }
    const activate = (clubName) => {
        //dispatch(setClubActive({clubName: clubName, active: 'No'}))
    }
    const getRequests = async () => {
        const users = await dispatch(getUsers({requestAdmin : 'Yes'}))
        console.log(users)
        const elem = users.map((user) => {
            return (<div className='message'>    
                <div  className = 'row' style={{marginLeft: '10px', marginRight: '10px',padding:'10px'}}>
                    <div className='col-4' style={{textDecoration:'none'}}>
                        <p>{user.first + ' ' + user.last}</p>
                    </div>
                    <div className='col-4' style={{textDecoration:'none'}}>
                        <p>{user.email}</p>
                    </div>
                    <div className='col-2'>
                        <button className = 'btn btn-success' onClick = {()=>accept(user.email)}>Yes</button>
                    </div>
                    <div className='col-2'>
                        <button className = 'btn btn-danger' onClick = {()=>deny(user)}>No</button>
                    </div>
                </div>
            </div>)
        })
        setRequests(elem)

    }
    const getActiveClubs = async () => {
        const clubs = await dispatch(getClubs({active:'Yes'}))
        const elem = clubs.map((club) => {
            return (<div className='message'>    
                <div  className = 'row' style={{marginLeft: '10px', marginRight: '10px',padding:'10px'}}>
                    <div className='col-6' style={{textDecoration:'none'}}>
                        <p>{club.clubName}</p>
                    </div>
                    <div className='col-6'>
                        <button className = 'btn btn-danger' onClick = {()=>inactivate(club.clubName)}>Make Inactive</button>
                    </div>
                </div>
            </div>)
        })
        setActiveClubs(elem)

    }
    const getInactiveClubs = async () => {
        const clubs = await dispatch(getClubs({active:'No'}))
        const elem = clubs.map((club) => {
            return (<div className='message'>    
                <div  className = 'row' style={{marginLeft: '10px', marginRight: '10px',padding:'10px'}}>
                    <div className='col-6' style={{textDecoration:'none'}}>
                        <p>{club.clubName}</p>
                    </div>
                    <div className='col-6'>
                        <button className = 'btn btn-danger' onClick = {()=>activate(club.clubName)}>Make Active</button>
                    </div>
                </div>
            </div>)
        })
        setInactiveClubs(elem)

    }
    useEffect(async ()=>{
        getRequests()
        getActiveClubs()
        getInactiveClubs()
    }, []);



    return (
        <div>
            <div className='container'>
                <div className = 'row'>
                    <div className = 'col-lg-6' style={{marginTop: '20px'}}>
                        <h4>Currently Active Clubs</h4>
                        <div className = 'container-fluid mycard2 overflow-auto' style = {{height:'calc(14vh + 175px)', paddingTop: '10px'}}>
                            {activeClubs} 
                               
                    
                        </div>
                        
                        <h4 style={{marginTop: '10px'}}>Currently Inactive Clubs</h4>
                        <div className = 'container-fluid mycard2 overflow-auto' style = {{height:'calc(14vh + 175px)', paddingTop: '10px'}}>
                            {inactiveClubs} 
                               
                    
                        </div>
                    </div>
                    <div className = 'col-lg-6' style={{marginTop: '20px'}}>
                        <h4>Admin Request List</h4>
                        <div className = 'container-fluid mycard2 overflow-auto' style = {{height:'calc(28vh + 351px)', paddingTop: '10px'}}>
                            {requests} 
                               
                    
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Admin;