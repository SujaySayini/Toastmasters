import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {createCommentCard} from '../actions/speech.js';

const CommentCard = () => {
    const [date, setDate] = useState("");
    const [speaker, setSpeaker] = useState("");
    const [commenter, setCommenter] = useState("");
    const [positive1, setPositive1] = useState("");
    const [positive2, setPositive2] = useState("");
    const [improvement, setImprovement] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        const positive_1 = document.getElementById("positive1").value;
        const positive_2 = document.getElementById('positive2').value;
        const negative_1 = document.getElementById('negative1').value;
        const thespeaker = document.getElementById('speaker').value;
        dispatch(createCommentCard({speaker: thespeaker, positive1: positive_1, positive2: positive_2, negative1: negative_1}))
        setDate("");
        setSpeaker("");
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
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Date:
                    </label>
                    <textarea className="col-md-8" rows="1" value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold", textAlign: "left"}}>
                        Speaker:
                    </label>
                    <textarea id = 'speaker' className="col-md-8" rows="1" value={speaker} onChange={e => setSpeaker(e.target.value)}/>
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
                    disabled={(date && speaker && commenter && positive1 && positive2 && improvement) ? false:true}
                    className="btn btn-block btn-primary mt-3 text-uppercase"
                >
                    Submit
                </button>
            </form>
      </div>
    );
}

export default CommentCard;