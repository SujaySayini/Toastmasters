import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import toastyblack from '../images/toasty-black.png';
import Navbar from './Navbar';
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {getSpeech} from '../actions/speech.js';
import { deleteSpeech } from '../actions/speech';
import { createSpeech } from '../actions/speech.js';




const Agenda = () => {
    const speech = useSelector((state)=>state.speech)

    console.log(speech)
    const dispatch = useDispatch();

    const [speeches, setSpeeches] = useState([{speechGiver: 'None', speechTitle: 'None'}, {speechGiver: 'None', speechTitle: 'None'}, {speechGiver: 'None', speechTitle: 'None'}])
    const [evals, setEvals] = useState([{speechGiver: 'None'}, {speechGiver: 'None'}, {speechGiver: 'None'}])
    const [ttmaster, setTTMaster] = useState({speechGiver: 'None'})
    useEffect(async ()=>{
        let theSpeeches = await dispatch(getSpeech());
        let evaluations = []
        let tabletopics = []
        let preparedspeeches = []
        console.log(theSpeeches)
        for(let i = 0; i < theSpeeches.length; i++){
            if(theSpeeches[i].speechType === 'Pathways Speech'){
                preparedspeeches.push(theSpeeches[i])
            } else if (theSpeeches[i].speechType === 'Evaluator'){
                evaluations.push(theSpeeches[i])
            } else {
                tabletopics = theSpeeches[i]
            }
        }
        
        if (evaluations.length < 3){
            while(evaluations.length < 3){
                evaluations.push({speechGiver:'None'})
            }
        }
        if(preparedspeeches.length < 3){
            while(preparedspeeches.length<3){
                preparedspeeches.push({speechGiver:'None', speechTitle: 'None'})
            }
        }
        if(tabletopics.length === 0){
            tabletopics= {speechGiver:'None'}
        }
        console.log('evals:')
        console.log(evaluations)
        setSpeeches(preparedspeeches)
        setEvals(evaluations)
        setTTMaster(tabletopics)
    }, [dispatch]);

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    const clicked = async () =>{
        console.log('test')
        const role = document.getElementById("role").value;
        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        await dispatch(createSpeech({speechType: role, speechGiver: name, speechDate: today, speechTitle: title}))
        let theSpeeches = await dispatch(getSpeech());
        let evaluations = []
        let tabletopics = []
        let preparedspeeches = []
        console.log(theSpeeches)
        for(let i = 0; i < theSpeeches.length; i++){
            if(theSpeeches[i].speechType === 'Pathways Speech'){
                preparedspeeches.push(theSpeeches[i])
            } else if (theSpeeches[i].speechType === 'Evaluator'){
                evaluations.push(theSpeeches[i])
            } else if (theSpeeches[i].speechType === 'Table Topics Master' ){
                tabletopics = theSpeeches[i]
            }
        }
        
        if (evaluations.length < 3){
            while(evaluations.length < 3){
                evaluations.push({speechGiver:'None'})
            }
        }
        if(preparedspeeches.length < 3){
            while(preparedspeeches.length<3){
                preparedspeeches.push({speechGiver:'None', speechTitle: 'None'})
            }
        }
        if(tabletopics.length === 0){
            tabletopics= {speechGiver:'None'}
        }
        console.log('evals:')
        console.log(evaluations)
        setSpeeches(preparedspeeches)
        setEvals(evaluations)
        setTTMaster(tabletopics)
    }

    const deleteClicked = async () => {
        console.log('test')
        const role = document.getElementById("delete-role").value;
        const name = document.getElementById('delete-name').value;
        const title = document.getElementById('delete-title').value;
        await dispatch(deleteSpeech({speechType: role, speechGiver: name, speechDate: today, speechTitle: title}))
        let theSpeeches = await dispatch(getSpeech());
        let evaluations = []
        let tabletopics = []
        let preparedspeeches = []
        console.log(theSpeeches)
        for(let i = 0; i < theSpeeches.length; i++){
            if(theSpeeches[i].speechType === 'Pathways Speech'){
                preparedspeeches.push(theSpeeches[i])
            } else if (theSpeeches[i].speechType === 'Evaluator'){
                evaluations.push(theSpeeches[i])
            } else {
                tabletopics = theSpeeches[i]
            }
        }
        
        if (evaluations.length < 3){
            while(evaluations.length < 3){
                evaluations.push({speechGiver:'None'})
            }
        }
        if(preparedspeeches.length < 3){
            while(preparedspeeches.length<3){
                preparedspeeches.push({speechGiver:'None', speechTitle: 'None'})
            }
        }
        if(tabletopics.length === 0){
            tabletopics = {speechGiver:'None'}
        }
        console.log('evals:')
        console.log(evaluations)
        setSpeeches(preparedspeeches)
        setEvals(evaluations)
        setTTMaster(tabletopics)
    }


    return (
        <div>
            <div className='container'>
                <div className = 'row'>
                    <div className = 'col-lg-7'>
                        <h4>Agenda for {today}</h4>
                        <div style={{border:"1px solid black"}}>
                            <div className='container'>
                                <div className = 'row'>
                                    <div className = 'col-7 align-self-center'>
                                        <p>Toastmasters International<br></br> Rutgers Chapter <br></br>February 10th, 7:45-8:45 p.m.</p>
                                    </div>
                                    <div className='col-5'>
                                        <img style={{height:'7.5vw'}}src = {toastyblack}></img>
                                    </div>
                                </div>

                                <div className = 'row' style={{textAlign: 'left',marginBottom: '10px'}}>
                                    <div className = 'col-3' style={{marginBottom: '10px', border:"1px solid black"}}>
                                        <p style={{textDecoration: 'underline', fontWeight: 'bolder'}}>E-board Members:</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>President</p>
                                        <p>Nicholas Schenk</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>VP of Education</p>
                                        <p>Nidhi Gurrala</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>VP of Membership</p>
                                        <p> Gauri Kshirsgar</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>VP of Public Relations</p>
                                        <p>Ethan Sinyavsky</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>Secretary</p>
                                        <p>Harsh Sharma</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>Treasurer</p>
                                        <p>Afreen Shaalan</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>Sergeant of Arms</p>
                                        <p>Arishita Gupta</p>
                                        <p></p>
                                    </div>
                                    <div className='col-9' style={{textAlign: 'left'}}>
                                        <div className='container'>
                                            <div className = 'row'>
                                                <div className='col-2'>
                                                    <p style={{marginBottom: '0', textDecoration:'underline'}}>Time</p>
                                                    <p>2 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p style={{marginBottom: '0', textDecoration:'underline'}}>Description</p>
                                                    <p>Toastmasters Introduction</p>
                                                </div>
                                                <div className='col-4'>
                                                    <p style={{marginBottom: '0', textDecoration:'underline'}}>Name</p>
                                                    <p>Nick</p>
                                                </div>
                                            </div>
                                            <div className = 'row'>
                                                <div className='col-12'>
                                                    <p style={{marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Speeches and Performances</p>
                                                </div>
                                            </div>
                                            <div className = 'row' >
                                                <div className='col-2'>
                                                    <p style={{marginBottom:'0'}}>5-7 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p style={{marginBottom:'0'}}> {speeches[0].speechTitle} </p>
                                                </div>
                                                <div className='col-4' >
                                                    <p style={{marginBottom:'0'}}>{speeches[0].speechGiver}</p>
                                                </div>
                                            </div>
                                            <div className = 'row' style={{marginTop:'0'}}>
                                                <div className='col-2'>
                                                    <p>5-7 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p>{speeches[1].speechTitle}</p>
                                                </div>
                                                <div className='col-4'>
                                                    <p>{speeches[1].speechGiver}</p>
                                                </div>
                                            </div>
                                            <div className = 'row' style={{marginTop:'0'}}>
                                                <div className='col-2'>
                                                    <p>5-7 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p>{speeches[2].speechTitle}</p>
                                                </div>
                                                <div className='col-4'>
                                                    <p>{speeches[2].speechGiver}</p>
                                                </div>
                                            </div>
                                            <div className = 'row'>
                                                <div className='col-12'>
                                                    <p style={{marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Table Topics</p>
                                                </div>
                                            </div>
                                            <div className = 'row' >
                                                <div className='col-2'>
                                                    <p style={{marginBottom:'0'}}>2 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p style={{marginBottom:'0'}}>Table Topics Introduction</p>
                                                </div>
                                            </div>
                                            <div className = 'row' style={{marginTop:'0'}}>
                                                <div className='col-2'>
                                                    <p>20 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p>Table Topics</p>
                                                </div>
                                                <div className='col-4'>
                                                    <p>{ttmaster.speechGiver}</p>
                                                </div>
                                            </div>
                                            <div className = 'row'>
                                                <div className='col-12'>
                                                    <p style={{marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Evaluations and Reports</p>
                                                </div>
                                            </div>
                                            <div className = 'row' >
                                                <div className='col-2'>
                                                    <p style={{marginBottom:'0'}}>2-3 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p style={{marginBottom:'0'}}>Evaluation #1</p>
                                                </div>
                                                
                                                <div className='col-4'>
                                                    <p style={{marginBottom:'0'}}>{evals[0].speechGiver}</p>
                                                </div>
                                            </div>
                                            <div className = 'row' >
                                                <div className='col-2'>
                                                    <p style={{marginBottom:'0'}}>2-3 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p style={{marginBottom:'0'}}>Evaluation #2</p>
                                                </div>
                                                
                                                <div className='col-4'>
                                                    <p style={{marginBottom:'0'}}>{evals[1].speechGiver}</p>
                                                </div>
                                            </div>
                                            <div className = 'row' >
                                                <div className='col-2'>
                                                    <p style={{marginBottom:'0'}}>2-3 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p style={{marginBottom:'0'}}>Evaluation #3</p>
                                                </div>
                                                
                                                <div className='col-4'>
                                                    <p style={{marginBottom:'0'}}>{evals[2].speechGiver}</p>
                                                </div>
                                            </div>
                                            <div className = 'row' style={{marginTop:'0'}}>
                                                <div className='col-2'>
                                                    <p>2 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p>Ah Counter's Report</p>
                                                </div>
                                                <div className='col-4'>
                                                    <p>Ah Counter</p>
                                                </div>
                                            </div>
                                            <div className = 'row' style={{marginTop:'0'}}>
                                                <div className='col-2'>
                                                    <p>2 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p>Timer's Report</p>
                                                </div>
                                                <div className='col-4'>
                                                    <p>Timer</p>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5' style={{marginTop: '20px'}}>
                        <div className = 'row'>
                            <h4>Sign up for a role!</h4>
                        </div>
                        <div  className='row' style={{marginTop: '5%'}}>
                            <select id='role' className="form-select">
                                  <option selected>Select Role</option>
                                  <option> Pathways Speech </option>
                                  <option> Table Topics Master </option>
                                  <option> Evaluator </option>
                                  <option> Ah Counter</option>
                                  <option> Timer </option>
                            </select>
                        </div>


                        <div  className='row' style={{marginTop: '2%'}}>
                            <select id='name' className="form-select">
                                  <option selected>Select Name</option>
                                  <option> Nick </option>
                            </select>
                        </div>

                        <div  className='row' style={{marginTop: '2%'}}>
                            <textarea id='title' rows="1.5" placeholder="Speech Title"></textarea>
                        </div>



                        <div className ='row text-center' style={{marginTop:'3.75%', paddingLeft: '25%', paddingRight:'25%'}} >
                            <button type='button' className = 'btn btn-success' onClick = {clicked}>Sign Up!</button>
                        </div>
                        <div className = 'row' style={{marginTop:'5%'}}>
                            <h5>No longer able to fill a role? Remove it here!</h5>
                        </div>
                        <div className='row' style={{marginTop: '3.75%'}}>
                            <select id='delete-role' className="form-select" >
                                  <option selected>Select Role</option>
                                  <option> Pathways Speech </option>
                                  <option> Table Topics Master </option>
                                  <option> Evaluator </option>
                                  <option> Ah Counter</option>
                                  <option> Timer </option>
                            </select>
                        </div>
                        <div  className='row' style={{marginTop: '2%'}}>
                            <select id='delete-name' className="form-select">
                                  <option selected>Select Name</option>
                                  <option> Nick </option>
                            </select>
                        </div>

                        <div  className='row' style={{marginTop: '2%'}}>
                            <textarea id='delete-title' rows="1.5" placeholder="Speech Title"></textarea>
                        </div>
                        <div className ='row text-center' style={{marginTop:'3.75%', paddingLeft: '25%', paddingRight:'25%'}} >
                            <button type='button' className = 'btn btn-success' onClick={deleteClicked}>Remove It!</button>
                        </div>
                        <h5 style={{marginTop: '7.5%'}}>View a different date's agenda!</h5>
                        <div className ='row text-center' style={{marginTop:'3.75%', paddingLeft: '25%', paddingRight:'25%'}} >
                            <input type='date' text='Select'></input>
                            <button type='button' className = 'btn btn-success' style={{marginTop: '10px'}}>Go!</button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>


    );
}

export default Agenda;