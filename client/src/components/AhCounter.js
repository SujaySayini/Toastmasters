import { useState } from "react";
import Tracker from "./Tracker";
import DropDownList from "./DropDownList";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {createAhCounter} from '../actions/speech.js';

const AhCounter = (props) => {
    const dispatch = useDispatch();
    const [trackerStates, setTrackerStates] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [members, setMember] = useState(["Nick", "Name2", "Name3"]); //
    const [currMember, setCurrMember] = useState("Member");
    const [currSpeech, setSpeech] = useState("Type of Speech");
    
    const saveAhCounter = () =>{
        dispatch(createAhCounter({speaker: currMember, type: currSpeech, counts: trackerStates}))
        alert('saved ah counter')
    }
    
    
    return (
        <div>
            <h6>Directions: During the meeting, use the following table to mark down the filler words
                and sounds used by each speaker and then reference it when giving your report.</h6>
            <div className="container">
                <div className='row align-items-center' style={{ margin: '2em' }}>
                    <h4 className='col-2'>Name:</h4>
                    <div className='row col-3'>
                        <DropDownList name={currMember} elements={members} setSelected={setCurrMember}/>
                    </div>
                    <h4 className='col-2'>Speech Type:</h4>
                    <div className='row col-3'>
                        <DropDownList
                            name={currSpeech}
                            elements={["Evaluation", "Pathways Speech", "Table Topics"]}
                            setSelected={setSpeech}/>
                    </div>
                    <div className=" col-2">
                        <button type='button' className='btn btn-success' onClick={() =>{console.log(currSpeech)}}>Search!</button>
                    </div>
                </div>
                <div className="row" style={{ margin: "2em" }}>
                    <Tracker label='Ah' index={0} trackerStates={trackerStates} setTrackerStates={setTrackerStates}/>
                    <Tracker label='Um' index={1} trackerStates={trackerStates} setTrackerStates={setTrackerStates}/>
                    <Tracker label='Er' index={2} trackerStates={trackerStates} setTrackerStates={setTrackerStates}/>
                </div>
                <div className="row" style={{ margin: "2em" }}>
                    <Tracker label='Well' index={3} trackerStates={trackerStates} setTrackerStates={setTrackerStates}/>
                    <Tracker label='So' index={4} trackerStates={trackerStates} setTrackerStates={setTrackerStates}/>
                    <Tracker label='Like' index={5} trackerStates={trackerStates} setTrackerStates={setTrackerStates}/>
                </div>
                <div className="row" style={{ margin: "2em" }}>
                    <Tracker label='But' index={6} trackerStates={trackerStates} setTrackerStates={setTrackerStates}/>
                    <Tracker label='Repeats' index={7} trackerStates={trackerStates} setTrackerStates={setTrackerStates}/>
                    <Tracker label='Other' index={8} trackerStates={trackerStates} setTrackerStates={setTrackerStates}/>
                </div>

                <div>
                    <button onClick = {saveAhCounter} type='button' className='btn btn-success'>Submit!</button>
                </div>
            </div>
        </div>
    );
}

export default AhCounter;