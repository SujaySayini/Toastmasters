

const Timer = () => {
    return (
        <div>
            <h6>Directions: As the timer, You will time the Table Topics speakers, formal speeches, and the evaluations. 
You will also alert each speaker of the time they have left, using the green, yellow, and red cards, which denote specific times remaining.</h6>
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
            </div>

        </div>

    );
}

export default Timer;