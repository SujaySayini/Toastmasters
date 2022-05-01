import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Clubinfo.css'
import React from 'react';
import {useEffect, useState} from 'react';
import { findOneClub } from '../actions/clubpage';
import {setUserClub} from '../actions/clubpage'

const ClubInfo = (props) => {

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


    
    const [clubInfo, setClubInfo] = useState({description: 'None'})
    const [currentClub, setCurrentClub] = useState(false)
    useEffect(async ()=>{
        console.log(document.cookie)
        let temp = ''
        const cname = 'clubName'
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            temp = c.substring(name.length, c.length);
          }
        }
        if(temp === ''||temp==='*'|| temp === user.club){
            setCurrentClub(true)
            name = 'user='
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                  c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                  temp = JSON.parse(c.substring(name.length, c.length)).user.club;
                }
            }
        }
        console.log(temp)
        if(!temp){
            props.swap('Search')
        }
        
        const res = await findOneClub({clubName: temp})
        console.log(res)
        setClubInfo(res)
        
        document.cookie = "clubName=*;"
    }, []);

    const updateClub = async ()=> {
        const res = await setUserClub({email: user.email, clubName:clubInfo.clubName})
        document.cookie = "user=" + JSON.stringify({user: {...user, club: clubInfo.clubName}})
        setCurrentClub(true)
        
    }





    return(
        
            <div>
            
            <section className='section'>
            <h2 style={{marginTop: '20px'}} className='club-name'>{clubInfo.clubName} Toastmasters</h2>
                <div className='container'>
                    <div className='row'>
                        <div className = "col-md-6">
                            <h3 style={{marginTop: '20px'}}className='club-des'>Club description</h3>
                            <div className='mycard2' style={{overflow: 'auto', height: '60vh', padding: '20px'}}>
                                    <p style={{textAlign: 'left'}}>{clubInfo.description}</p> 
                            </div>
                        </div>

                        <div className = "col-md-6">
                            <h3 style={{marginTop: '20px'}}className='contact-us'>Contact/General Info</h3>
                            <div className='mycard2' style={{padding: '20px', height: '60vh', textAlign: 'left'}}>
                                <p> <strong>    Location: </strong>{clubInfo.location}  </p>
                                <p>    <strong>    Email: </strong>{clubInfo.email} </p>
                                <p>    <strong>    Website: </strong> {clubInfo.website} </p>
                                <p>    <strong>    Extra Info: </strong>{clubInfo.extraContactInfo}</p>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {!currentClub ? <button style={{marginTop: '20px'}} className='btn btn-info' onClick = {()=>updateClub()}>Join This Club!</button> : <p style={{marginTop: '20px'}}>This is your current club</p> }
        </div>


    );
}

export default ClubInfo;