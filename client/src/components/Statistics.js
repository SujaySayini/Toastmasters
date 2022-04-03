import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import toastyblack from '../images/toasty-black.png'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip} from 'recharts';
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { getSpeech } from '../actions/speech';
import { collapseClasses } from '@mui/material';


const Statistics = (props) => {

    const dispatch = useDispatch()
    const [currentSpeech, setCurrentSpeech] = useState({title: 'You have not given a speech',
    date: '', 
    evaluator: '', 
    evaluation: '', 
    time: '',
    fillerWords: {
        Ah: 0,
        Um: 0,
        Er: 0,
        Well: 0,
        So: 0,
        Like: 0,
        But: 0,
        Repeats: 0,
        Other: 0 
    }  })
    const [speeches, setSpeeches] = useState([])
    const [speechNum, setSpeechNum] = useState(0)
    const [collapsed, setCollapsed] = useState(true)
    const [evalcollapsed, setEvalCollapsed] = useState(true)
    useEffect(async ()=>{
        const theSpeeches = await dispatch(getSpeech({speechGiver: 'Nick', speechType: 'Pathways Speech'}))
        setSpeeches(theSpeeches)
        console.log(theSpeeches)
        const speech1 = theSpeeches[theSpeeches.length-1]
        setSpeechNum(theSpeeches.length-1)
        const listItems = speech1.commentCards.map(({positive1, positive2, negative1}) =>
            <div style={{marginBottom: '10px', border: '1px solid black'}}>
                <p style={{paddingLeft: '10px', paddingRight: '10px', marginTop: '0', marginBottom: '0'}}><strong> Positive 1:</strong> {positive1}</p>
                <p style={{paddingLeft: '10px', paddingRight: '10px', marginTop: '0', marginBottom: '0'}}><strong> Something to Work On:</strong> {negative1}</p> 
                <p style={{paddingLeft: '10px', paddingRight: '10px', marginTop: '0', marginBottom: '0'}}><strong> Positive 2: </strong> {positive2}</p>
            </div>
        );
        setCurrentSpeech({... currentSpeech, title: speech1.speechTitle, date: speech1.speechDate, evaluator: speech1.speechEvaluator, time: speech1.time, fillerWords: speech1.fillerWords, commentCards: listItems })
    }, [])

    const changeSpeech = (direction) => {
        const newNum = speechNum + direction
        if(newNum < speeches.length && newNum > 0){
            setSpeechNum(newNum)
            let curspeech = speeches[newNum]
            if(!curspeech.fillerWords){
                curspeech.fillerWords = {
                    Ah: 0,
                    Um: 0,
                    Er: 0,
                    Well: 0,
                    So: 0,
                    Like: 0,
                    But: 0,
                    Repeats: 0,
                    Other: 0 
                }
            }
            const listItems = curspeech.commentCards.map(({positive1, positive2, negative1}) =>
            <div style={{marginBottom: '10px', border: '1px solid black'}}>
                <p style={{paddingLeft: '10px', paddingRight: '10px', marginTop: '0', marginBottom: '0'}}><strong> Positive 1:</strong> {positive1}</p>
                <p style={{paddingLeft: '10px', paddingRight: '10px', marginTop: '0', marginBottom: '0'}}><strong> Something to Work On:</strong> {negative1}</p> 
                <p style={{paddingLeft: '10px', paddingRight: '10px', marginTop: '0', marginBottom: '0'}}><strong> Positive 2: </strong> {positive2}</p>
            </div>
        );
            setCurrentSpeech({... currentSpeech, title: curspeech.speechTitle, date: curspeech.speechDate, evaluator: curspeech.speechEvaluator, time: curspeech.time, fillerWords: curspeech.fillerWords, commentCards: listItems })
        } 
        console.log(newNum)

    }
    const collapse = () =>{
        setCollapsed(!collapsed)
    }
    const evalcollapse = () =>{
        setEvalCollapsed(!evalcollapsed)
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
            <Line type='monotone' dataKey='You' stroke = '#884d88'></Line>
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
                <div className = 'row'>
                        <h3>Track Your Progress</h3>
                        <div className='container-fluid' style={{marginTop: '3vh'}}>
                            <h5>Charting Your Progress:</h5>
                            <p> Click below to navigate to all charts and statistics about your recent speeches!</p>
                            <ResponsiveContainer width="95%" height={300}>
                                {renderLineChart}
                            </ResponsiveContainer>
                    </div>
                </div>  
                <div className = 'row'>
                    <div className='container-fluid' style={{marginTop: '3vh'}}>
                        <h5>Review Individual Speeches You Gave:</h5>
                        <p> Click through below to view information for each of your speeches!</p>
                        <div className='row'>
                        <div className='col-2'><button className = 'btn btn-dark' style={{marginTop:'200px'}}onClick ={()=>changeSpeech(-1)}>Previous Speech</button></div>
                        <div className='col-8' style={{border:"1px solid black"}}>
                            <div className = 'row'>
                                <h4>{currentSpeech.title}</h4>
                            </div>
                            <div className = 'row' style={{textAlign: 'left',marginBottom: '10px'}}>
                                <div className='container'>
                                    <p style={{marginBottom: '0'}}>Date Given: {currentSpeech.date}</p>
                                    <p style={{marginTop: '10px', marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Evaluation:</p>
                            
                                    <p style={{marginBottom: '0'}}>Evaluator: {currentSpeech.evaluator}</p> 
                                    {
                                        !evalcollapsed ? <div id='collapse'>
                                                        <p>insert evaluation here!</p>
                                                      </div> 
                                                : <div></div>
                                    }
                                    <div className='btn btn-dark' onClick = {()=>evalcollapse()}>{evalcollapsed ? 'Show Evaluation' : 'Hide Evaluation'}</div>
                                    

                                    <p style={{marginTop: '10px',marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Comment Cards:</p>
                                    {
                                        !collapsed ? <div id='collapse'>
                                                        {currentSpeech.commentCards}
                                                      </div> 
                                                : <div></div>
                                    }
                                    
                                    <div className='btn btn-dark' onClick = {()=>collapse()}>{collapsed ? 'Show Comment Cards' : 'Hide Comment Cards'}</div>
                                    
                                    
                                    <p style={{marginTop: '10px', marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Timing:</p>
                            
                                    <div className = 'row' style={{marginTop:'0'}}>
                                        <div className='col-4'>
                                            <p>Range: 5-7 minutes</p>
                                        </div>
                                        <div className='col-4'>
                                            <p>Actual Time: {currentSpeech.time}</p>
                                        </div>
                                        <div className='col-4'>
                                            <p>Within Range!</p>
                                        </div>
                                    </div>
                                    <div className = 'row'>
                                        <div className='col-12'>
                                            <p style={{marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Filler Words:</p>
                                        </div>
                                    </div>
                                    <p style={{marginBottom: '0'}}>Ah: {currentSpeech.fillerWords.Ah}</p>
                                    <p style={{marginBottom: '0'}}>Um: {currentSpeech.fillerWords.Um}</p>
                                    <p style={{marginBottom: '0'}}>Er: {currentSpeech.fillerWords.Er}</p>
                                    <p style={{marginBottom: '0'}}>Well: {currentSpeech.fillerWords.Well}</p>
                                    <p style={{marginBottom: '0'}}>So: {currentSpeech.fillerWords.So}</p>
                                    <p style={{marginBottom: '0'}}>Like: {currentSpeech.fillerWords.Like}</p>
                                    <p style={{marginBottom: '0'}}>But: {currentSpeech.fillerWords.But}</p>
                                    <p style={{marginBottom: '0'}}>Repeats: {currentSpeech.fillerWords.Repeats}</p>
                                    <p style={{marginBottom: '0'}}>Other: {currentSpeech.fillerWords.Other}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-2' style={{marginTop: '200px'}}><button className = 'btn btn-dark' onClick = {()=>changeSpeech(1)}>Next Speech</button></div>
                    </div>
                    
                    </div>
                </div>
                <div className = 'row'>
                        <div className='container-fluid' style={{marginTop: '3vh'}}>
                            <h5>Talk to an Executive Board Member About Your Progress</h5>
                            <p> Click <a href='#'>here</a> to message our Eboard!</p>
                        </div>
                </div>
            </div>
        </div>

    );
}

export default Statistics;