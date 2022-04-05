import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
import {getPages} from '../actions/clubpage'
import ErrorPage from './ErrorPage';
import './Clubinfo.css'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';

const ClubPageInfo= ()=> {
    const dispatch = useDispatch();
   useEffect(() =>{
       dispatch(getPages)},[dispatch]);
   const clubpage = useSelector((state) =>state.clubpage);
   console.log("HI");
   console.log(clubpage.length);
   console.log(clubpage);
   console.log(clubpage[clubpage.length-1]);



    //const navigate = useNavigate();
   // const {id} = useParams()
   // console.log("Details")
    //useEffect(()=>{
      //  dispatch(getPage(id));
    //}, [id]);


  return (
        !clubpage.length? <ErrorPage/>:(
            <div className='background'>
            
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className = "col-md-6">
                            <h2 className='club-name'>{clubpage[clubpage.length-1].clubName}</h2>
                            <div className='underline'></div>
                            <h4 className='club-des'>Club description</h4>
                            <div className='text-box'>
                                    <p>{clubpage[clubpage.length-1].description}</p>
                            </div>
                        </div>
                        <div className = "col-md-6 align-self-center">
                            <h4 className='Recent-ann'>Recent Announcement</h4>
                            <div className='text-box'>
                                    <p className='ann'>{clubpage[clubpage.length-1].announcement}</p>
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
                                <p>{clubpage[clubpage.length-1].location}
                                </p>
                            </div>
                        </div>
                        <div className = "col-md-6 align-self-center">
                            <h4 className='photo-title'>Photo</h4>
                            <img src={clubpage[clubpage.length-1].picture}></img>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
        )

  );
}

export default ClubPageInfo