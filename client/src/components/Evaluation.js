import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DropDownList from "./DropDownList";
import { getUsers } from "../actions/user.js";
import { useDispatch } from 'react-redux';
import { createEvaluation } from "../actions/evaluation.js";
import { getSpeech } from '../actions/speech.js';

const Evaluation = () => {
    const [members, setMember] = useState([]); 
    const [currMember, setCurrMember] = useState("Member");
    const [currSpeech, setSpeech] = useState("Type of Speech");
    const [date, setDate] = useState("");
    const [positive, setPositive] = useState("");
    const [challenge, setChallenge] = useState("");
    const [improvement, setImprovement] = useState("");
    const [clarity, setClarity] = useState("");
    const [vocalVariety, setVocalVariety] = useState("");
    const [eyeContact, setEyeContact] = useState("");
    const [gestures, setGestures] = useState("");
    const [audienceAwareness, setAudienceAwareness] = useState("");
    const [comfortLevel, setComfortLevel] = useState("");
    const [interest, setInterest] = useState("");
    const [additionalComments, setAdditionalComments] = useState("");
    const dispatch = useDispatch();

    // useEffect(async ()=>{
    //     let theSpeeches = await dispatch(getSpeech());
    //     for(let i =0; i < theSpeeches.length; i++){
    //         console.log(theSpeeches[i])
    //     }
    // }, [dispatch]);

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
                    return user.first + " " + user.last
                }
                return user.first 
            }
            return "no name";
        }));
    }
    useEffect(()=>{
        console.log('updated users')
        updateMembers(user.club);
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let name = user.first + " " + user.last;
        dispatch(createEvaluation({speechDate: date,
                                   speechGiver: currMember, 
                                   speechType: currSpeech,
                                   speechEvaluator: name, 
                                   positive: positive, 
                                   challenge: challenge, 
                                   improvement: improvement,
                                   clarity: parseInt(clarity),
                                   vocalVariety: parseInt(vocalVariety),
                                   eyeContact: parseInt(eyeContact),
                                   gestures: parseInt(gestures),
                                   audienceAwareness: parseInt(audienceAwareness),
                                   comfortLevel: parseInt(comfortLevel),
                                   interest: parseInt(interest),
                                   additionalComments: additionalComments
                                }))
        setDate("");
        setCurrMember("Member");
        setSpeech("Type of Speech")
        setPositive("");
        setImprovement("");
        setChallenge("");
        setClarity("");
        setVocalVariety("");
        setEyeContact("");
        setGestures("");
        setAudienceAwareness("");
        setComfortLevel("");
        setInterest("");
        setAdditionalComments("");
        alert(`Evaluation Form Submitted`)
    }

    const selected = () => {
        let newDate = document.getElementById("datePicker").value;
        const x = newDate.split('-')
        console.log(x)
        setDate(x[1] + '/' + x[2] + '/'+x[0])
    }

    return (
      <div className="container-grid">
            <h1 className="text-center my-4">Evaluation Form</h1>
            <p>Click below for Evaluation Guidelines:</p>
            <a className="text-center my-4" href="https://www.toastmasters.org/websiteApps/Pathways/tm100101_SCORM12_20151004/tm100101/resources/8101E%20Evaluation%20Resource.pdf" target="_blank" rel="noreferrer">
                Evaluation Guidelines
            </a>
            <form className="container" onSubmit={handleSubmit}>
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
                        <button type='button' className='btn btn-success' /* onClick = {clicked} */ >Search!</button>
                    </div>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Date:
                    </label>
                    <div className = "col-md-8" rows="1" >
                        <input id='datePicker' style={{width: "100%"}} onSelect = {selected} type='date' text='Select'></input>
                    </div>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        You excelled at:
                    </label>
                    <textarea className="col-md-8" rows="4" value={positive} onChange={e => setPositive(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        You may want to work on:
                    </label>
                    <textarea className="col-md-8" rows="4" value={improvement} onChange={e => setImprovement(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        To challenge yourself:
                    </label>
                    <textarea className="col-md-8" rows="4" value={challenge} onChange={e => setChallenge(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Clarity:
                    </label>
                    <div className="col-md-1">
                        <label className="mx-2" for="1">1</label>
                        <input type="radio" value="1" checked={clarity === "1"} onChange={e => setClarity(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="2">2</label>
                        <input type="radio" value="2" checked={clarity === "2"} onChange={e => setClarity(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="3">3</label>
                        <input type="radio" value="3" checked={clarity === "3"} onChange={e => setClarity(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="4">4</label>
                        <input type="radio" value="4" checked={clarity === "4"} onChange={e => setClarity(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="5">5</label>
                        <input type="radio" value="5" checked={clarity === "5"} onChange={e => setClarity(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Vocal Variety:
                    </label>
                    <div className="col-md-1">
                        <label className="mx-2" for="1">1</label>
                        <input type="radio" value="1" checked={vocalVariety === "1"} onChange={e => setVocalVariety(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="2">2</label>
                        <input type="radio" value="2" checked={vocalVariety === "2"} onChange={e => setVocalVariety(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="3">3</label>
                        <input type="radio" value="3" checked={vocalVariety === "3"} onChange={e => setVocalVariety(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="4">4</label>
                        <input type="radio" value="4" checked={vocalVariety === "4"} onChange={e => setVocalVariety(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="5">5</label>
                        <input type="radio" value="5" checked={vocalVariety === "5"} onChange={e => setVocalVariety(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Eye Contact:
                    </label>
                    <div className="col-md-1">
                        <label className="mx-2" for="1">1</label>
                        <input type="radio" value="1" checked={eyeContact === "1"} onChange={e => setEyeContact(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="2">2</label>
                        <input type="radio" value="2" checked={eyeContact === "2"} onChange={e => setEyeContact(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="3">3</label>
                        <input type="radio" value="3" checked={eyeContact === "3"} onChange={e => setEyeContact(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="4">4</label>
                        <input type="radio" value="4" checked={eyeContact === "4"} onChange={e => setEyeContact(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="5">5</label>
                        <input type="radio" value="5" checked={eyeContact === "5"} onChange={e => setEyeContact(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Gestures:
                    </label>
                    <div className="col-md-1">
                        <label className="mx-2" for="1">1</label>
                        <input type="radio" value="1" checked={gestures === "1"} onChange={e => setGestures(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="2">2</label>
                        <input type="radio" value="2" checked={gestures === "2"} onChange={e => setGestures(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="3">3</label>
                        <input type="radio" value="3" checked={gestures === "3"} onChange={e => setGestures(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="4">4</label>
                        <input type="radio" value="4" checked={gestures === "4"} onChange={e => setGestures(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="5">5</label>
                        <input type="radio" value="5" checked={gestures === "5"} onChange={e => setGestures(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Audience Awareness:
                    </label>
                    <div className="col-md-1">
                        <label className="mx-2" for="1">1</label>
                        <input type="radio" value="1" checked={audienceAwareness === "1"} onChange={e => setAudienceAwareness(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="2">2</label>
                        <input type="radio" value="2" checked={audienceAwareness === "2"} onChange={e => setAudienceAwareness(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="3">3</label>
                        <input type="radio" value="3" checked={audienceAwareness === "3"} onChange={e => setAudienceAwareness(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="4">4</label>
                        <input type="radio" value="4" checked={audienceAwareness === "4"} onChange={e => setAudienceAwareness(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="5">5</label>
                        <input type="radio" value="5" checked={audienceAwareness === "5"} onChange={e => setAudienceAwareness(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Comfort Level:
                    </label>
                    <div className="col-md-1">
                        <label className="mx-2" for="1">1</label>
                        <input type="radio" value="1" checked={comfortLevel === "1"} onChange={e => setComfortLevel(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="2">2</label>
                        <input type="radio" value="2" checked={comfortLevel === "2"} onChange={e => setComfortLevel(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="3">3</label>
                        <input type="radio" value="3" checked={comfortLevel === "3"} onChange={e => setComfortLevel(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="4">4</label>
                        <input type="radio" value="4" checked={comfortLevel === "4"} onChange={e => setComfortLevel(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="5">5</label>
                        <input type="radio" value="5" checked={comfortLevel === "5"} onChange={e => setComfortLevel(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Interest:
                    </label>
                    <div className="col-md-1">
                        <label className="mx-2" for="1">1</label>
                        <input type="radio" value="1" checked={interest === "1"} onChange={e => setInterest(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="2">2</label>
                        <input type="radio" value="2" checked={interest === "2"} onChange={e => setInterest(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="3">3</label>
                        <input type="radio" value="3" checked={interest === "3"} onChange={e => setInterest(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="4">4</label>
                        <input type="radio" value="4" checked={interest === "4"} onChange={e => setInterest(e.target.value)}/>
                    </div>
                    <div className="col-md-1">
                        <label className="mx-2" for="5">5</label>
                        <input type="radio" value="5" checked={interest === "5"} onChange={e => setInterest(e.target.value)}/>
                    </div>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Additional Comments:
                    </label>
                    <textarea className="col-md-8" rows="4" value={additionalComments} onChange={e => setAdditionalComments(e.target.value)}/>
                </div>
                <button
                    type="submit"
                    disabled={(date && currMember && !(currMember === "Member") && currSpeech && !(currSpeech === "Type of Speech") && positive && improvement && challenge && clarity && vocalVariety && eyeContact && gestures && audienceAwareness && comfortLevel && interest) ? false:true}
                    className="btn btn-block btn-primary mt-3 text-uppercase"
                >
                    Submit
                </button>
            </form>
      </div>
    );
}

export default Evaluation;