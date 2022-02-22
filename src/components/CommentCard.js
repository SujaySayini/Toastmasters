import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const CommentCard = () => {
    const [date, setDate] = useState("");
    const [speaker, setSpeaker] = useState("");
    const [commenter, setCommenter] = useState("");
    const [positive1, setPositive1] = useState("");
    const [positive2, setPositive2] = useState("");
    const [improvement, setImprovement] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setDate("");
        setSpeaker("");
        setCommenter("");
        setPositive1("");
        setPositive2("");
        setImprovement("");
        alert(`Comment Card Submitted`)
    }

    return (
      <div className="container-grid">
            <h3 className="text-center my-4">Comment Card</h3>
            <form className="container" onSubmit={handleSubmit}>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold"}}>
                        Date:
                    </label>
                    <textarea className="col-md-8" rows="1" value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold"}}>
                        Speaker:
                    </label>
                    <textarea className="col-md-8" rows="1" value={speaker} onChange={e => setSpeaker(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold"}}>
                        Commenter:
                    </label>
                    <textarea className="col-md-8" rows="1" value={commenter} onChange={e => setCommenter(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold"}}>
                        Positive #1:
                    </label>
                    <textarea className="col-md-8" rows="4" value={positive1} onChange={e => setPositive1(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold"}}>
                        Positive #2:
                    </label>
                    <textarea className="col-md-8" rows="4" value={positive2} onChange={e => setPositive2(e.target.value)}/>
                </div>
                <div className="row my-4">
                    <label className="col-md-3" style={{fontWeight: "bold"}}>
                        Something to Improve:
                    </label>
                    <textarea className="col-md-8" rows="4" value={improvement} onChange={e => setImprovement(e.target.value)}/>
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