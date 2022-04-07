import { useState, useEffect } from "react";
import Tracker from "./Tracker";
import DropDownList from "./DropDownList";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUsers } from "../actions/user.js";
import {createAhCounter} from '../actions/speech.js';

const AhCounter = (props) => {
    const dispatch = useDispatch();
    const [trackerStates, setTrackerStates] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [members, setMember] = useState([]); 
    const [currMember, setCurrMember] = useState("Member");
    const [currSpeech, setSpeech] = useState("Type of Speech");
    
    const saveAhCounter = async () =>{
        let data = await dispatch(createAhCounter({speaker: currMember, type: currSpeech, counts: trackerStates}))
        console.log("data is " + data);
        console.log(data);
        if(data){
            console.log(data.ifExists);
            if(data.ifExists == "No"){
              alert("The Entry doesn't exist today. Please try again.");
            } 
    } else {
        alert('saved ah counter successfully.')
    }
    }

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

    const updateMembers = async (club) =>{
        console.log('dispatch')
        const result = await dispatch(getUsers({club: club}));
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
        //let clubname = "Rutgers";
        //let clubName = getCookie("club");
        //console.log("club names is the2 " + clubName);
        updateMembers(user.club);
    }, []);
    return (
        <div className = 'container mycard2' style={{marginTop: '50px', paddingBottom: '20px'}}>
            <h5 style = {{marginTop: '20px'}}>Directions: </h5>
            <h6>During the meeting, use the following table to mark down the filler words
                and sounds used by each speaker and then reference it when giving your report.</h6>
            <div className="container">
                <div className='row align-items-left' style={{ margin: '2em' }}>
                    <div className='col-12'>
                        <span style={{display: 'inline-block', width: '100px'}}>Name: </span>
                        <DropDownList name={currMember} elements={members} setSelected={setCurrMember}></DropDownList>
                    </div>
                    <div className='col-12' style={{marginTop: '20px'}}>
                        {/* Evaluation, Prepared Speech, Table Topics */}
                        <span style={{display: 'inline-block', width: '100px'}}>Member: </span>
                        <DropDownList
                            name={currSpeech}
                            elements={["Evaluator", "Pathways Speech", "Table Topics"]}
                            setSelected={setSpeech} />
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
                    <button onClick = {saveAhCounter} type='button' className='btn' style={{color: 'white', backgroundColor: 'rgb(0, 65, 101)'}}>Submit!</button>
                </div>
            </div>
        </div>
    );
}

export default AhCounter;