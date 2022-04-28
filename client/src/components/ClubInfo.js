import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import toastyblack from '../images/toasty-black.png';
import './Clubinfo.css'
import toasty from '../images/toasty.jpg';
import React from 'react';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { findOneClub } from '../actions/clubpage';

const ClubInfo = () => {



    const dispatch = useDispatch()
    const [clubInfo, setClubInfo] = useState({description: 'None'})
    const [currentClub, setCurrentClub] = useState(false)
    useEffect(async ()=>{
        let user = ''
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
            user = c.substring(name.length, c.length);
          }
        }
        if(user === ''||user==='*'){
        setCurrentClub(true)
        name = 'user='
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              user = JSON.parse(c.substring(name.length, c.length)).user.club;
            }
          }
        }
        
        const res = await dispatch(findOneClub({clubName: user}))
        console.log(res)
        setClubInfo(res)
        
        document.cookie = "clubName=*;"
    }, []);





    return(
        
            <div>
            
            <section className='section'>
            <h2 style={{marginTop: '20px'}} className='club-name'>{clubInfo.clubName} Toastmasters</h2>
                <div className='container'>
                    <div className='row'>
                        <div className = "col-md-6">
                            <div className='underline'></div>
                            <h4 className='club-des'>Club description</h4>
                            <div className='mycard2' style={{overflow: 'auto', height: '30vh', padding: '10px'}}>
                                    <p>{clubInfo.description}</p> 
                            </div>
                        </div>
                        <div className = "col-md-6 align-self-center">
                            <h4 className='Recent-ann'>Recent Announcement</h4>
                            <div className='text-box'>
                                    <p className='ann'>General Members Meeting, 2/17/2022 
                                    <br/>-You have signed up to be the ah counter for this meeting!
                                    <br/>-Find the agenda here 
                                    <br/>Some club activity, 3/20/2022 
                                    <br/>-You have not signed up to take on any roles at this meeting, sign up here</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                    <div className = "col-md-6">
                            <h3 style={{marginTop: '20px'}}className='contact-us'>Contact us</h3>
                            <div className='mycard2' style={{padding: '10px', textAlign: 'left'}}>
                                <p> <strong>    Location: </strong>{clubInfo.location}  </p>
                                <p>    <strong>    Email: </strong>{clubInfo.email} </p>
                                <p>    <strong>    Website: </strong> {clubInfo.website} </p>
                                <p>    <strong>    Extra Info: </strong>{clubInfo.extraContactInfo}</p>
                                
                            </div>
                        </div>
                        <div className = "col-md-6 align-self-center">
                            <h4 className='photo-title'>Photo</h4>
                            <img src={toastyblack}></img>
                        </div>
                        
                    </div>
                </div>
            </section>
            {!currentClub ? <button className='btn btn-info'>Join This Club!</button> : <p></p> }
        </div>


    );
}

export default ClubInfo;