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
    const [clubInfo, setClubInfo] = useState({description: 'None'})
    console.log(user)
    useEffect(async ()=>{
        
        const res = await dispatch(findOneClub({clubName: user}))
        console.log(res)
        setClubInfo(res)
        
        document.cookie = "clubnName=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    }, []);





    return(
        
            <div className='background'>
            
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className = "col-md-6">
                            <h2 className='club-name'>{clubInfo.clubName}</h2>
                            <div className='underline'></div>
                            <h4 className='club-des'>Club description</h4>
                            <div className='text-box'>
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
                    <div className = "col-md-6 align-self-center">
                            <h3 className='contact-us'>Contact us</h3>
                            <div className='text-box'>
                                <p>Location: SEC 107<br/>
                                         Email: club1@rutgers.edu<br/>
                                          Phone: (234)-567-8901<br/>
                                           Website: https://club1.com<br/> 
                                           Facebook page: club1_rutgers<br/>
                                            Instagram: club1_rutgers
                                </p>
                            </div>
                        </div>
                        <div className = "col-md-6 align-self-center">
                            <h4 className='photo-title'>Photo</h4>
                            <img src={toastyblack}></img>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>


    );
}

export default ClubInfo;