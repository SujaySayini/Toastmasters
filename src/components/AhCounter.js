import { useState } from "react";
import Tracker from "./Tracker";

const AhCounter = (props) => {
    const [trackerStates, setTrackerStates] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    return (
        <div>
            <h6>Directions: During the meeting, use the following table to mark down the filler words
                and sounds used by each speaker and then reference it when giving your report.</h6>
            <div class="container">
                <div className='row align-items-center' style={{ margin: '2em' }}>
                    <h4 className='col-2'>Name:</h4>
                    <div className='row col-3'>
                        <div className="dropdown">
                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">
                                Members
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Name1</a></li>
                                <li><a className="dropdown-item" href="#">Name2</a></li>
                                <li><a className="dropdown-item" href="#">Name3</a></li>
                            </ul>
                        </div>
                    </div>
                    <h4 className='col-2'>Speech Type:</h4>
                    <div className='row col-3'>
                        <div className="dropdown">
                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">
                                Type of Speech
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Evaluation</a></li>
                                <li><a className="dropdown-item" href="#">Prepared Speech</a></li>
                                <li><a className="dropdown-item" href="#">Table Topics</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className=" col-2">
                        <button type='button' className='btn btn-success'>Search!</button>
                    </div>
                </div>
                <div class="row" style={{ margin: "2em" }}>
                    <Tracker label='Ah' index={0} trackerStates={trackerStates} setTrackerStates={setTrackerStates}></Tracker>
                    <Tracker label='Um' index={1} trackerStates={trackerStates} setTrackerStates={setTrackerStates}></Tracker>
                    <Tracker label='Er' index={2} trackerStates={trackerStates} setTrackerStates={setTrackerStates}></Tracker>
                </div>
                <div class="row" style={{ margin: "2em" }}>
                    <Tracker label='Well' index={3} trackerStates={trackerStates} setTrackerStates={setTrackerStates}></Tracker>
                    <Tracker label='So' index={4} trackerStates={trackerStates} setTrackerStates={setTrackerStates}></Tracker>
                    <Tracker label='Like' index={5} trackerStates={trackerStates} setTrackerStates={setTrackerStates}></Tracker>
                </div>
                <div class="row" style={{ margin: "2em" }}>
                    <Tracker label='But' index={6} trackerStates={trackerStates} setTrackerStates={setTrackerStates}></Tracker>
                    <Tracker label='Repeats' index={7} trackerStates={trackerStates} setTrackerStates={setTrackerStates}></Tracker>
                    <Tracker label='Other' index={8} trackerStates={trackerStates} setTrackerStates={setTrackerStates}></Tracker>
                </div>

                <div>
                    <button type='button' className='btn btn-success'>Submit!</button>
                </div>
            </div>
        </div>
    );
}

export default AhCounter;