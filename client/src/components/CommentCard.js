import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DropDownList from "./DropDownList";
import { getUsers } from "../actions/user.js";
import { useDispatch } from 'react-redux';
import { createCommentCard } from '../actions/speech.js';


const CommentCard = () => {
    const [positive1, setPositive1] = useState("");
    const [positive2, setPositive2] = useState("");
    const [improvement, setImprovement] = useState("");
    const [members, setMember] = useState([]); 
    const [currMember, setCurrMember] = useState("Member");
    const dispatch = useDispatch();

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
        updateMembers(user.club);
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        const positive_1 = document.getElementById("positive1").value;
        const positive_2 = document.getElementById('positive2').value;
        const negative_1 = document.getElementById('negative1').value;
        let data = dispatch(createCommentCard({speaker: currMember, positive1: positive_1, positive2: positive_2, negative1: negative_1}));
        console.log(data);
        if(data){
            console.log(data.ifExists);
            if(data.ifExists == "No"){
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