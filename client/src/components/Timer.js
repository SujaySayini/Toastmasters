import { Fragment, useEffect, useState } from "react";
import DropDownList from "./DropDownList";
import { getUsers } from "../actions/user.js";
import { use } from 'react-redux';
import { useSelector } from 'react-redux';
import { setTimer } from '../actions/speech.js';


const Timer = () => {
    //const speech = useSelector((state)=>state.speech)
    ;
    const [time, setTime] = useState(0);
    //const [inputState, setInputState] = useState("");
    const [start, setStart] = useState(false);

    const [members, setMember] = useState([]); //
    const [currMember, setCurrMember] = useState("Member");
    const [currSpeech, setSpeech] = useState("Type of Speech");

    const [isPTag, setPTag] = useState(true);

    /*useEffect(async ()=>{
        let theSpeeches = await (getSpeech());
        for(let i =0; i < theSpeeches.length; i++){
            console.log(theSpeeches[i])
        }
    }, []);*/

    let user = ''
    const cname = 'user'
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        user = JSON.parse(c.substring(name.length, c.length)).user;
      }
    }

    const updateMembers = async (club) =>{
        console.log('')
        const result = await (getUsers({club: club}));
        console.log(result);
        setMember(result.map((user) => {
            if(user.name){
                return user.name;
            }else if(user.first){
                if(user.last){
                    return user.first + " "+user.last;
                }else {
                    return user.first
                }
            }
            return "no name";
        }));
    }
    useEffect(()=>{
        console.log('updated users')
        //let user = getCookie('club');
        //console.log("club names is the " + user);
        updateMembers(user.club);
    }, []);

    const clicked = async () =>{
        console.log('test')
        // updateMembers("Club1")
        alert("Hello! I am an alert box!!");
    }

    function func(e) {
        console.log(e.target.value);
        //setInputState(e.target.value);
        //setTime(100);
        console.log(e.target.value)
        setTime(parseInt(e.target.value
            .split("")
            .filter(val => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ":"].includes(val))
            .join("")));
        //console.log(inputState);
    }
    function getValue() {
        return ("0" + Math.floor((time / 60000) % 60)).slice(-2) + ":" + ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    }
   /* function getValue2() {
        return parseInt(("0" + Math.floor((time / 60000) % 60)).slice(-2) + ("0" + Math.floor((time / 1000) % 60)).slice(-2) + ("0" + Math.floor((time / 10) % 1000)).slice(-2));
    }*/

    useEffect(() => {
        let interval = null;

        if (start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1000)
            }, 1000)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [start])

    const saveTime = async () =>{
        if(!start){
            console.log('saved')
            let temp = time
            temp = Math.floor(temp/1000)
            let seconds = temp%60
            if(seconds < 10){
                seconds = '0'+seconds
            }
            const minutes = Math.floor(temp/60)
            let data = await (setTimer({type: currSpeech, speaker: currMember, time: minutes+':'+seconds}))
            console.log(data);
            if(data){
                console.log(data.ifExists);
                if(data.ifExists === "No"){
                  alert("The Entry doesn't exist today. Please try again.");
                } else {
                    alert('saved timer successfully.');
                }  
            }else {
                alert('saved timer successfully.');
            }
        }
    }

    return (
        <div className = 'container mycard2' style={{marginTop: '50px'}}>
            <h5 style = {{marginTop: '20px'}}>Directions: </h5>
            <h6>As the timer, You will time the Table Topics speakers, formal speeches, and the evaluations.
                You will also alert each speaker of the time they have left, using the green, yellow, and red cards, which denote specific times remaining.</h6>
            <div class="container">
                <div className='row align-items-left' style={{ margin: '2em' }}>
                    <div className='col-12'>
                        <span style={{display: 'inline-block', width: '100px'}}>Name: </span>
                        <DropDownList id='member' name={currMember} elements={members} setSelected={setCurrMember}></DropDownList>
                    </div>
                    <div className='col-12' style={{marginTop: '20px'}}>
                        {/* Evaluation, Prepared Speech, Table Topics */}
                        <span style={{display: 'inline-block', width: '100px'}}>Type: </span>
                        <DropDownList
                            id='type-speech'
                            name={currSpeech}
                            elements={["Evaluator", "Pathways Speech", "Table Topics"]}
                            setSelected={setSpeech} />
                    </div>
                </div>
            </div>
            <div className="mycard2" style={{marginLeft: '15%', marginRight: '15%', marginBottom: '20px'}}>
                <h1>Stopwatch</h1>
                <h1>
                    <Fragment>
                        {isPTag ? (
                            <p> {getValue()} </p>
                        ) : (
                            <input
                                name="searchTxt"
                                value={time}
                                autoFocus
                                onChange={(e) => func(e)}
                                type="text"
                            />
                        )}
                    </Fragment>

                </h1>
                <div >
                    
                    <button className = 'btn' style={{marginLeft: '5px', marginRight: '5px', color: 'white', backgroundColor: 'rgb(119, 36, 50)'}} onClick={() => setStart(true)}>Start</button>
                    <button className = 'btn' style={{marginLeft: '5px', marginRight: '5px', color: 'white', backgroundColor: 'rgb(119, 36, 50)'}} onClick={() => setStart(false)}>Stop</button>
                    <button className = 'btn' style={{marginLeft: '5px', marginRight: '5px', color: 'white', backgroundColor: 'rgb(119, 36, 50)'}} onClick={() => { setTime(0); setStart(false); }}>Reset</button>
                    <button className = 'btn' style={{marginLeft: '5px', marginRight: '5px', color: 'white', backgroundColor: 'rgb(119, 36, 50)'}} onClick={() => setPTag(!isPTag)}>Edit</button>
                </div>
                <div style={{marginTop: '20px', marginBottom: '20px'}}>
                    <button id= "Timer-submit" type='button' className='btn' style={{color: 'white', backgroundColor: 'rgb(0, 65, 101)'}}onClick = {saveTime}>Submit!</button>
                </div>
            </div>

        </div>

    );
}

export default Timer;