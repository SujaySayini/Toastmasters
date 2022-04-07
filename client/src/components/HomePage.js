import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Message from './Message';
import Agenda from './Agenda';
import toastyblack from '../images/toasty-black.png'
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { getSpeech } from '../actions/speech';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, ScatterChart} from 'recharts';
import './Homepage.css'
const HomePage = (props) => {


    const dispatch = useDispatch()
    const [chart, setChart] = useState(<div></div>)
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


    useEffect(async ()=>{
        //for actual thing, change speechGiver to have space between them!
        const theSpeeches = await dispatch(getSpeech({speechGiver: user.first + '' + user.last, speechType: 'Pathways Speech'}))

        const firstChart = []
        let max = 0
        let min = 0
        for(let i=0; i < theSpeeches.length; i++){
            if(!theSpeeches[i].time){
                continue
            }
            if(theSpeeches[i].time.includes(':')){
                const x = theSpeeches[i].time.split(':')
                const seconds = parseInt(x[1])
                const minutes = parseInt(x[0])
                let diff = 0
                if(seconds + minutes*60 < 300){
                    diff = seconds + minutes*60 - 300
                } else if (seconds + minutes*60 > 420){
                    diff = seconds + minutes *60 - 420
                }
                if(diff > max){
                    max = diff+10
                } else if(diff < min){
                    min = diff - 10
                }
                firstChart.push({name: theSpeeches[i].speechDate, You: diff})
            }
        }

        const firstLineChart = (
            <ResponsiveContainer style={{cursor: 'pointer'}} width="95%" height={275} onClick = {() => props.swap('Statistics')}>
            <LineChart  data={firstChart}>
                <Line type='monotone' dataKey='You' stroke = '#884d88'></Line>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis type='number' domain = {[min, max]}/>
                <Tooltip />
                <Legend />
            </LineChart>
            </ResponsiveContainer>
        )
        setChart(firstLineChart)
    }, [])

    return (
        <div>
            <div className='container'>
                <div className = 'row'>
                    
                    <h3 style={{marginTop: '20px'}}>Welcome Back, {user.first}.</h3>
                    <div className = 'col-lg-6' style={{marginTop: '20px'}}>
                            <div className='container-fluid mycard overflow-auto' style = {{height: '25vh'}}>
                                
                            <p style={{marginBottom: '0px'}}><strong>Upcoming Events:</strong></p>
                                <Message swap = {props.swap} title = 'General Meeting, 2/17/2022' data = {['You signed up to be the Ah Counter for this meeting!']}/>
                                <Message title = 'General Meeting, 2/24/2022' data = {["You haven't signed up for a role for this meeting yet!"]} swap = {props.swap}/>
                                <Message title = 'General Meeting, 3/3/2022' data = {["You haven't signed up for a role for this meeting yet!"]} swap = {props.swap}/>
                            </div>
                        
                        
                        <div className='container-fluid mycard' style={{marginTop: '3vh', cursor: 'pointer'}} onClick = {() => props.swap('Statistics')}>
                            <h4>Your Progress:</h4>
                            <p style={{height: '48px'}}> Click below to navigate to all charts and statistics about your recent speeches!</p>
                            {chart}
                        </div>
                    </div>
                    <div className = 'col-lg-6' style={{marginTop: '20px'}}>
                        <div className = 'mycard' style = {{height: 'calc(28vh + 375px)'}}>
                            <h5>Recent Notifications</h5>
                            <div className='container-fluid overflow-auto' >  
                                <div className='message row'>
                                    <div className='col-10' style={{textDecoration:'none'}}>
                                        <p> Hi all, there will be another meeting tonight from 7:45-8:45 pm tomorrow over zoom! hope to see you there! Remember to sign up for a role if you haven’t already.</p>
                                    </div>
                                    <div className='col-2'>
                                        <p>From:</p>
                                        <img style={{height: '30px'}}src = {toastyblack}></img>
                                    </div>
                                </div>
                                <div className='message row'>
                                    <div className='col-10' style={{textDecoration:'none'}}>
                                        <p> Hi all, there will be another meeting tonight from 7:45-8:45 pm tomorrow over zoom! hope to see you there! Remember to sign up for a role if you haven’t already.</p>
                                    </div>
                                    <div className='col-2'>
                                        <p>From:</p>
                                        <img style={{height: '30px'}}src = {toastyblack}></img>
                                    </div>
                                </div>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default HomePage;