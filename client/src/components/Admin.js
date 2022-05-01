//COMMENTS: DONE

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useEffect, useState} from 'react';
import { getUsers } from '../actions/user'
import './Homepage.css'
import { setClubActive } from '../actions/clubpage';
import { admin } from '../actions/user';
import { getClubs } from '../actions/clubpage';



//USE: A page where admin level users can manage which clubs are active as well as accepting or denying requests from other users to become an admin 


const Admin = (props) => {

    //read in user data from cookies 
    let user = ''
    let name = "user=";
    //code mostly taken from w3schools
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

    const [requests, setRequests] = useState([])  // store current requests to become admin
    const [activeClubs, setActiveClubs] = useState([]) //store currently active clubs
    const [inactiveClubs, setInactiveClubs] = useState([]) //store currently inactive clubs

    // Called when an admin chooses to deny a request from another user to be an admin
    const accept = (email) => {
        //update DB
        admin({email: email, requestAdmin: 'No', userLevel: 'Admin'})

        //refresh page
        getRequests()
        getActiveClubs()
        getInactiveClubs()

    }

    // Called when an admin chooses to accept a request from another user to be an admin
    const deny = (user) => {
        //updateDB
        admin({email: user.email, requestAdmin: 'No', userLevel: user.userLevel})     
        
        //refresh page
        getRequests()
        getActiveClubs()
        getInactiveClubs()
    }

    //called when an admin chooses to inactivate an active club
    const inactivate = async (clubName) => {
        //updateDB
        await setClubActive({clubName: clubName, active: 'No'})
        
        //refresh page
        getRequests()
        getActiveClubs()
        getInactiveClubs()
    }

    //called when an admin chooses to activate an inactive club
    const activate = async (clubName) => {

        //update DB
        await setClubActive({clubName: clubName, active: 'Yes'})
        
        //refresh page
        getRequests()
        getActiveClubs()
        getInactiveClubs()
    }


    // get all admin requests and convert them to HTML to display on the page.
    const getRequests = async () => {
        // get all users who have requested to become admin
        const users = await getUsers({requestAdmin : 'Yes'})

        //map their data to become a nice looking box with buttons to accept or deny
        let elem = users.map((user) => {
            return (<div className='message'>    
                <div  className = 'row' style={{marginLeft: '10px', marginRight: '10px',padding:'10px'}}>
                    <div className='col-2' style={{textDecoration:'none'}}>
                        <p>{user.first + ' ' + user.last}</p>
                    </div>
                    <div className='col-6' style={{textDecoration:'none'}}>
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

        //default when no requests are active
        if(elem.length === 0){
            elem = <h4>No New Requests</h4>
        }

        //updateRequests
        setRequests(elem)

    }


    //get all clubs that are active and convert them to HTML to display
    const getActiveClubs = async () => {
        //get active clubs
        const clubs = await getClubs({active:'Yes'})

        // map their data into HTML elems to display
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

        //set clubs
        setActiveClubs(elem)

    }

    //get all clubs that are inactive and convert them to HTML to display
    const getInactiveClubs = async () => {
        //get inactive clubs
        const clubs = await getClubs({active:'No'})

        //convert to html
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

        //set state
        setInactiveClubs(elem)



    }

    //On loading, call these methods to get the data we need
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