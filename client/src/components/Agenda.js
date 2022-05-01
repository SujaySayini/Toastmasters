import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import toastyblack from '../images/toasty-black.png';
import React, {useEffect, useState} from 'react';
import {getSpeech} from '../actions/speech.js';
import { deleteSpeech } from '../actions/speech';
import { createSpeech } from '../actions/speech.js';
import {getUsers} from '../actions/user.js'
import {createEvaluation, getEvaluation} from '../actions/evaluation.js'




const Agenda = () => {

    // Get current date and modify it to be easily displayable on the page
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;



    //store all speeches for the current day, default values are set to make it clear how many open spots there are
    const [speeches, setSpeeches] = useState([{speechGiver: 'None', speechTitle: 'None'}, {speechGiver: 'None', speechTitle: 'None'}, {speechGiver: 'None', speechTitle: 'None'}])
   
    //store all evals for the current day
    const [evals, setEvals] = useState([{speechGiver: 'None'}, {speechGiver: 'None'}, {speechGiver: 'None'}])
    
    //store table topics master for current day
    const [ttmaster, setTTMaster] = useState({speechGiver: 'None'})

    //state to store the date, users can change which date's agenda they view so need to track this
    const [date, setDate] = useState(today)

    //store members in club so that they can sign up for roles at a meeting
    const [members, setMembers] = useState([])

    //store timer for current day
    const [timer, setTimer] = useState({speechGiver: 'None'})

    //store ah counter for current day
    const [ahCounter, setAhCounter] = useState({speechGiver: 'None'})

    //set data for the current user
    const [user, setUser] = useState([])



    //store all of the different eboard roles for the club
    const [pres, setPres] = useState("None")
    const [vpe, setVpe] = useState("None")
    const [vpm, setVpm] = useState("None")
    const [treasurer, setTreasuer] = useState("None")
    const [saa, setSaa] = useState("None")
    const [vppr, setVppr] = useState("None")
    const [sec, setSec] = useState("None")



    // called 
    const updateMembers = async (club) =>{


        //first, get the eboard and other club information
        const eboard = await (getUsers({club: club, userLevel: "Eboard"}))
        for(let i =0; i < eboard.length; i++){
            switch(eboard[i].title){
                case 'President':
                    setPres(eboard[i].first + ' ' + eboard[i].last)
                    break
                case 'VPE':
                    setVpe(eboard[i].first + ' ' + eboard[i].last)
                    break
                case 'VPPR':
                    setVppr(eboard[i].first + ' ' + eboard[i].last)
                    break
                case 'Secretary':
                    setSec(eboard[i].first + ' ' + eboard[i].last)
                    break
                case 'Treasurer':
                    setTreasuer(eboard[i].first + ' ' + eboard[i].last)
                    break
                case 'VPM':
                    setVpm(eboard[i].first + ' ' + eboard[i].last)
                    break
                case 'Sargeant at Arms':
                    setSaa(eboard[i].first + ' ' + eboard[i].last)
                    break
            }

        }



        console.log('')
        const result = await getUsers({club: club});
        console.log(result);
        const elements = result.map((user) => {
            if(user.name){
                return user.name;
            }else if(user.first){
                if(user.last){
                    return user.first + " " + user.last
                }
                return user.first 
            }
            return "no name";
        })
        const listElements = elements.map((m) => 
        <option key={Math.random()}>
            {m}
        </option>
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


    const updateSpeeches = async (date) =>{
        const result = await getSpeech({speechDate: date, clubName: user.club});
        const eval_res = await getEvaluation({speechDate: date, clubName: user.club})
        let theSpeeches = result
        let evaluations = []
        let tabletopics = []
        let preparedspeeches = []
        let thetimer = {speechGiver:'None'}
        let theahcounter = {speechGiver:'None'}
        console.log(result)
        for(let i = 0; i < theSpeeches.length; i++){
            if(theSpeeches[i].speechType === 'Pathways Speech'){
                preparedspeeches.push(theSpeeches[i])
            } else if (theSpeeches[i].speechType === 'Table Topics Master' ){
                tabletopics = theSpeeches[i]
            } else if(theSpeeches[i].speechType === 'Ah Counter'){
                theahcounter = theSpeeches[i]
            } else if(theSpeeches[i].speechType === 'Timer'){
                thetimer = theSpeeches[i]
            }
        }
        for(let i = 0; i < eval_res.length; i++){
            evaluations.push(eval_res[i])
        }
        console.log(evaluations)
        
        if (evaluations.length < 3){
            while(evaluations.length < 3){
                evaluations.push({speechGiver:'None', speechEvaluator:'None'})
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
        setTimer(thetimer)
        setAhCounter(theahcounter)
    
    }

    useEffect(()=>{
        console.log('updated speeches')
        updateSpeeches(today)
    }, []);

    const clicked = async () =>{
        console.log('test')
        const role = document.getElementById("role").value;
        const name = document.getElementById('name').value;
        if(role === 'Select Role' || name === 'Select Name'){
            return
        }
        const title = document.getElementById('title').value;
        if(role === 'Evaluator'){
            let speech_length = 0
            let eval_length = 0
            for(let i = 0; i < 3; i++){
                if(speeches[i].speechGiver !== 'None'){
                    speech_length += 1
                }
                if(evals[i].speechGiver !=='None'){
                    eval_length += 1
                }
            }
            if(eval_length >= speech_length){
                alert('there are not enough speeches for you to sign up to be an evaluator')
                return
            }
            await((createEvaluation({clubName: user.club, speechDate: date,
                speechGiver: speeches[eval_length].speechGiver, 
                speechType: role,
                speechEvaluator: name})))
        } else{
            await (createSpeech({clubName: user.club, speechType: role, speechGiver: name, speechDate: date, speechTitle: title,  fillerWords: {
                Ah: 0,
                Um: 0,
                Er: 0,
                Well: 0,
                So: 0,
                Like: 0,
                But: 0,
                Repeats: 0,
                Other: 0 
            }}))
        }
        updateSpeeches(date)
    }

    const deleteClicked = async () => {
        console.log('test')
        const role = document.getElementById("delete-role").value;
        const name = document.getElementById('delete-name').value;
        const title = document.getElementById('delete-title').value;
        if(role === 'Select Role' || name === 'Select Name'){
            return
        }
        await (deleteSpeech({clubName: user.club, speechType: role, speechGiver: name, speechDate: date, speechTitle: title}))
        updateSpeeches(date)
    }
    const selected = () => { //dates
        let newDate = document.getElementById("datePicker").value;
        const x = newDate.split('-')
        console.log(x)
        setDate(x[1] + '/' + x[2] + '/'+x[0])
        updateSpeeches(x[1] + '/' + x[2] + '/'+x[0])
    }


    return (
        <div>
            <div className='container'>
                <div className = 'row'>
                    <div className = 'col-lg-7' style={{marginTop: '20px'}}>
                        <h4>Agenda for {date}</h4>
                        <div className = 'mycard2' style={{ paddingTop: '10px', paddingBottom: '10px'}}>
                            <div className='container'>
                                <div className = 'row'>
                                    <div className = 'col-7 align-self-center'>
                                        <p>Toastmasters International<br></br> {user.club} <br></br>{date}, 7:45-8:45 p.m.</p>
                                    </div>
                                    <div className='col-5'>
                                        <img style={{height:'7.5vw'}}src = {toastyblack}></img>
                                    </div>
                                </div>

                                <div className = 'row' style={{textAlign: 'left',marginBottom: '10px'}}>
                                    <div className = 'col-3' style={{marginBottom: '10px', border:"1px solid black"}}>
                                        <p style={{textDecoration: 'underline', fontWeight: 'bolder'}}>E-board Members:</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>President</p>
                                        <p style={{marginBottom: '5px'}}>{pres}</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>VP of Education</p>
                                        <p style={{marginBottom: '5px'}}>{vpe}</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>VP of Membership</p>
                                        <p style = {{marginBottom: '5px'}}>{vpm}</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>VP of PR</p>
                                        <p style = {{marginBottom: '5px'}}>{vppr}</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>Secretary</p>
                                        <p style = {{marginBottom: '5px'}}>{sec}</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>Treasurer</p>
                                        <p style = {{marginBottom: '5px'}}>{treasurer}</p>
                                        <p style={{marginBottom: '0', textDecoration: 'underline'}}>Sergeant of Arms</p>
                                        <p style={{marginBottom: '0'}}>{saa}</p>
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
                                                    <p style={{marginBottom:'0'}}>{evals[0].speechEvaluator}</p>
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
                                                    <p style={{marginBottom:'0'}}>{evals[1].speechEvaluator}</p>
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
                                                    <p style={{marginBottom:'0'}}>{evals[2].speechEvaluator}</p>
                                                </div>
                                            </div>
                                            <div className = 'row' style={{marginTop:'0'}}>
                                                <div className='col-2'>
                                                    <p style={{marginBottom:'0'}}>2 min</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p style={{marginBottom:'0'}}>Ah Counter's Report</p>
                                                </div>
                                                <div className='col-4'>
                                                    <p style={{marginBottom:'0'}}>{ahCounter.speechGiver}</p>
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
                                                    <p>{timer.speechGiver}</p>
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
                        <div  className='row' style={{marginTop: '2.5%'}}>
                            <select id='role' className="form-select">
                                  <option selected disabled hidden>Select Role</option>
                                  <option> Pathways Speech </option>
                                  <option> Table Topics Master </option>
                                  <option> Evaluator </option>
                                  <option> Ah Counter</option>
                                  <option> Timer </option>
                            </select>
                        </div>


                        <div  className='row' style={{marginTop: '2%'}}>
                            <select id='name' className="form-select">
                                  <option selected hidden>Select Name</option>
                                  {members}
                            </select>
                        </div>

                        <div  className='row' style={{marginTop: '2%'}}>
                            <textarea id='title' rows="1.5" placeholder="Speech Title"></textarea>
                        </div>



                        <div className ='row text-center' style={{marginTop:'3%', paddingLeft: '25%', paddingRight:'25%'}} >
                            <button type='button' className='btn' style={{color: 'white', backgroundColor: 'rgb(0, 65, 101)'}}onClick = {clicked}>Sign Up!</button>
                        </div>
                        <div className = 'row' style={{marginTop:'7.5%'}}>
                            <h4>No longer able to fill a role? Remove it here!</h4>
                        </div>
                        <div className='row' style={{marginTop: '2%'}}>
                            <select id='delete-role' className="form-select" >
                                  <option selected hidden>Select Role</option>
                                  <option> Pathways Speech </option>
                                  <option> Table Topics Master </option>
                                  <option> Evaluator </option>
                                  <option> Ah Counter</option>
                                  <option> Timer </option>
                            </select>
                        </div>
                        <div  className='row' style={{marginTop: '2%'}}>
                            <select id='delete-name' className="form-select">
                                  <option selected hidden>Select Name</option>
                                  {members}
                            </select>
                        </div>

                        <div  className='row' style={{marginTop: '2%'}}>
                            <textarea id='delete-title' rows="1.5" placeholder="Speech Title"></textarea>
                        </div>
                        <div className ='row text-center' style={{marginTop:'3%', paddingLeft: '25%', paddingRight:'25%'}} >
                            <button type='button' className='btn' style={{color: 'white', backgroundColor: 'rgb(0, 65, 101)'}} onClick={deleteClicked}>Remove It!</button>
                        </div>
                        <h4 style={{marginTop: '7.5%'}}>View a different date's agenda!</h4>
                        <div className ='row text-center' style={{marginTop:'3%', paddingLeft: '25%', paddingRight:'25%'}} >
                            <input id='datePicker' onSelect = {selected} type='date' text='Select'></input>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>


    );
}

export default Agenda;