import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DropDownList from "./DropDownList";
import { getUsers } from "../actions/user.js";
import { useDispatch } from 'react-redux';
import { createCommentCard } from '../actions/speech.js';
import { getSpeech } from '../actions/speech.js';


const CommentCard = () => {
    const [commenter, setCommenter] = useState("");
    const [positive1, setPositive1] = useState("");
    const [positive2, setPositive2] = useState("");
    const [improvement, setImprovement] = useState("");
    const [members, setMember] = useState([]); 
    const [currMember, setCurrMember] = useState("Member");
    const [currSpeech, setSpeech] = useState("Type of Speech");
    const dispatch = useDispatch();

    useEffect(async ()=>{
        let theSpeeches = await dispatch(getSpeech());
        for(let i =0; i < theSpeeches.length; i++){
            console.log(theSpeeches[i])
        }
    }, [dispatch]);

    const updateMembers = async (club) =>{
        console.log('dispatch')
        const result = await dispatch(getUsers({club: club}));
        console.log(result);
        setMember(result.map((user) => {
            if(user.name){
                return user.name;
            }else if(user.first && user.last){
                return user.first + " "+user.last;
            }
            return "no name";
        }));
    }
    useEffect(()=>{
        console.log('updated users')
        let clubname = "sample";
        updateMembers(clubname);
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        const positive_1 = document.getElementById("positive1").value;
        const positive_2 = document.getElementById('positive2').value;
        const negative_1 = document.getElementById('negative1').value;
        dispatch(createCommentCard({speaker: currMember, positive1: positive_1, positive2: positive_2, negative1: negative_1}));
        setCurrMember("Member");
        setSpeech("Type of Speech")
        setCommenter("");
        setPositive1("");
        setPositive2("");
        setImprovement("");
        alert(`Comment Card Submitted`);

    }

    return (
      <div className="container-grid">
            <h3 className="text-center my-4">Comment Card</h3>
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
                        Commenter:
                    </label>
                    <textarea className="col-md-8" rows="1" value={commenter} onChange={e => setCommenter(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Positive #1:
                    </label>
                    <textarea id = 'positive1' className="col-md-8" rows="4" value={positive1} onChange={e => setPositive1(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Positive #2:
                    </label>
                    <textarea id = 'positive2' className="col-md-8" rows="4" value={positive2} onChange={e => setPositive2(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Something to Improve:
                    </label>
                    <textarea id = 'negative1' className="col-md-8" rows="4" value={improvement} onChange={e => setImprovement(e.target.value)}/>
                </div>
                <button
                    type="submit"
                    disabled={(currMember && !(currMember === "Member") && currSpeech && !(currSpeech === "Type of Speech") && commenter && positive1 && positive2 && improvement) ? false:true}
                    className="btn btn-block btn-primary mt-3 text-uppercase"
                >
                    Submit
                </button>
            </form>
      </div>
    );
}

export default CommentCard;