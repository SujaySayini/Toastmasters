import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DropDownList from "./DropDownList";
import { getUsers } from "../actions/user.js";
import { createCommentCard } from '../actions/speech.js';


const CommentCard = () => {
    //variables to store form values
    const [positive1, setPositive1] = useState("");
    const [positive2, setPositive2] = useState("");
    const [improvement, setImprovement] = useState("");
    const [members, setMember] = useState([]); 
    const [currMember, setCurrMember] = useState("Member");
    

    //make sure the user cookies work
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

    //updates the members list in the dropdown to include all members in the current user's club
    const updateMembers = async (club) =>{
        const result = await (getUsers({club: club}));
        setMember(result.map((user) => {
            return user.first + " "+user.last;
        }));
    }
    useEffect(()=>{
        updateMembers(user.club);
    }, []);

    //sends all of the data from the form to the backend to update a database entry containing the speech
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        
        const positive_1 = document.getElementById("positive1").value;
        const positive_2 = document.getElementById('positive2').value;
        const negative_1 = document.getElementById('negative1').value;
        let data = await (createCommentCard({clubName: user.club, speaker: currMember, positive1: positive_1, positive2: positive_2, negative1: negative_1}));
        if(data){
            if(data.data.ifExists === "No"){
              alert("The speech doesn't exist. Please try again.");
            } else {
                alert(`Comment Card Submitted`);
                setCurrMember("Member");
                setPositive1("");
                setPositive2("");
                setImprovement("");
            }  
        }
        else {
            alert(`Comment Card Submitted`);
            setCurrMember("Member");
            setPositive1("");
            setPositive2("");
            setImprovement("");
        }
    }

    return (
      <div className="container-grid">
            <h3 className="text-center my-4">Comment Card</h3>
            <form className="container" onSubmit={handleSubmit}>
                <div className='row' style={{ margin: '2em' }}>
                    <div className='col-12'>
                        <label> <h3 style={{display: "inline", margin: '1em'}}>Name:</h3>
                        <DropDownList name={currMember} elements={members} setSelected={setCurrMember}></DropDownList>
                        </label>
                    </div>
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
                    disabled={(currMember && !(currMember === "Member")  && positive1 && positive2 && improvement) ? false:true}
                    className="btn btn-block btn-primary mt-3 text-uppercase"
                >
                    Submit
                </button>
            </form>
      </div>
    );
}

export default CommentCard;