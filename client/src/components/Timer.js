import { Fragment, useEffect, useState } from "react";
import DropDownList from "./DropDownList";

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setTimer, getSpeech } from '../actions/speech.js';


const Timer = () => {
    const speech = useSelector((state)=>state.speech)
    const dispatch = useDispatch();
    const [time, setTime] = useState(0);
    //const [inputState, setInputState] = useState("");
    const [start, setStart] = useState(false);

    const [members, setMember] = useState(["Nick"]); //
    const [currMember, setCurrMember] = useState("Member");
    const [currSpeech, setSpeech] = useState("Type of Speech");

    const [isPTag, setPTag] = useState(true);

    useEffect(async ()=>{
        let theSpeeches = await dispatch(getSpeech());
        for(let i =0; i < theSpeeches.length; i++){
            console.log(theSpeeches[i])
        }
    }, [dispatch]);

    function func(e) {
        console.log(e.target.value);
        //setInputState(e.target.value);
        //setTime(100);
        setTime(parseInt(e.target.value
            .split("")
            .filter(val => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ":"].includes(val))
            .join("")));
        //console.log(inputState);
    }
    function getValue() {
        return ("0" + Math.floor((time / 60000) % 60)).slice(-2) + ":" + ("0" + Math.floor((time / 1000) % 60)).slice(-2) + ":" + ("0" + Math.floor((time / 10) % 1000)).slice(-2);
    }
    function getValue2() {
        return parseInt(("0" + Math.floor((time / 60000) % 60)).slice(-2) + ("0" + Math.floor((time / 1000) % 60)).slice(-2) + ("0" + Math.floor((time / 10) % 1000)).slice(-2));
    }

    useEffect(() => {
        let interval = null;

        if (start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [start])

    const saveTime = async () =>{
        if(!start){
            console.log('saved')
            let data = await dispatch(setTimer({type: currSpeech, speaker: currMember, time: time}))
        }
    }

    return (
        <div>
            <h6>Directions: As the timer, You will time the Table Topics speakers, formal speeches, and the evaluations.
                You will also alert each speaker of the time they have left, using the green, yellow, and red cards, which denote specific times remaining.</h6>
            <div class="container">
                <div className='row align-items-center' style={{ margin: '2em' }}>
                    <h4 className='col-2'>Name:</h4>
                    <div className='row col-3'>
                        <DropDownList name={currMember} elements={members} setSelected={setCurrMember}></DropDownList>
                    </div>
                    <h4 className='col-2'>Speech Type:</h4>
                    <div className='row col-3'>
                        {/* Evaluation, Prepared Speech, Table Topics */}
                        <DropDownList
                            name={currSpeech}
                            elements={["Evaluator", "Pathways Speech", "Table Topics"]}
                            setSelected={setSpeech} />
                    </div>
                    <div className=" col-2">
                        <button type='button' className='btn btn-success' onClick={() => { console.log(currSpeech) }}>Search!</button>
                    </div>
                </div>
            </div>
            <div>
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
                <div>
                    <button onClick={() => setStart(true)}>Start</button>
                    <button onClick={() => setStart(false)}>Stop</button>
                    <button onClick={() => { setTime(0); setStart(false); }}>Reset</button>
                    <button onClick={() => setPTag(!isPTag)}>Edit</button>
                </div>
                <div>
                    <button type='button' className='btn btn-success' onClick = {saveTime}>Submit!</button>
                </div>
            </div>

        </div>

    );
}

export default Timer;