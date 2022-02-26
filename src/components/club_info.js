import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import toastyblack from '../images/toasty-black.png';

const club_info = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return (
        <div>
        <nav style={{marginBottom: '20px'}}className = "navbar navbar-expand-sm bg-dark navbar-dark">
            <div className = "container-fluid">
            <a className="navbar-brand" href="#"><img style = {{height:'40px'}} src={toastyblack}/> <span>Rutgers Toastmasters</span></a>
           
                <ul className = "navbar-nav">
                    <li className = "nav-item" >
                        <a className = "nav-link" href = "#">Timer</a>
                    </li>
                    <li className = "nav-item" >
                        <a className = "nav-link" href = "#">Ah Counter</a>
                    </li>
                    <li className = "nav-item" >
                        <a className = "nav-link" href = "#">Comment Cards</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className='container'>
            <div className = 'row'>
                <div className = 'col-lg-7'>
                    <h4>Agenda for {today}</h4>
                    <div style={{border:"1px solid black"}}>
                        <div className='container'>
                            <div className = 'row'>
                                <div className = 'col-7 align-self-center'>
                                    <p>Toastmasters International<br></br> Rutgers Chapter <br></br>February 10th, 7:45-8:45 p.m.</p>
                                </div>
                                <div className='col-5'>
                                    <img style={{height:'7.5vw'}}src = {toastyblack}></img>
                                </div>
                            </div>

                            <div className = 'row' style={{textAlign: 'left',marginBottom: '10px'}}>
                                <div className = 'col-3' style={{marginBottom: '10px', border:"1px solid black"}}>
                                    <p style={{textDecoration: 'underline', fontWeight: 'bolder'}}>E-board Members:</p>
                                    <p style={{marginBottom: '0', textDecoration: 'underline'}}>President</p>
                                    <p>Nicholas Schenk</p>
                                    <p style={{marginBottom: '0', textDecoration: 'underline'}}>VP of Education</p>
                                    <p>Nidhi Gurrala</p>
                                    <p style={{marginBottom: '0', textDecoration: 'underline'}}>VP of Membership</p>
                                    <p> Gauri Kshirsgar</p>
                                    <p style={{marginBottom: '0', textDecoration: 'underline'}}>VP of Public Relations</p>
                                    <p>Ethan Sinyavsky</p>
                                    <p style={{marginBottom: '0', textDecoration: 'underline'}}>Secretary</p>
                                    <p>Harsh Sharma</p>
                                    <p style={{marginBottom: '0', textDecoration: 'underline'}}>Treasurer</p>
                                    <p>Afreen Shaalan</p>
                                    <p style={{marginBottom: '0', textDecoration: 'underline'}}>Sergeant of Arms</p>
                                    <p>Arishita Gupta</p>
                                    <p></p>
                                </div>
                                <div className='col-9' style={{textAlign: 'left'}}>
                                    <div className='container'>
                                        <div className = 'row'>
                                            <div className='col-2'>
                                                <p style={{marginBottom: '0', textDecoration:'underline'}}>Time</p>
                                                <p>2 min</p>
                                            </div>
                                            <div className='col-6'>
                                                <p style={{marginBottom: '0', textDecoration:'underline'}}>Description</p>
                                                <p>Toastmasters Introduction</p>
                                            </div>
                                            <div className='col-4'>
                                                <p style={{marginBottom: '0', textDecoration:'underline'}}>Name</p>
                                                <p>Nick</p>
                                            </div>
                                        </div>
                                        <div className = 'row'>
                                            <div className='col-12'>
                                                <p style={{marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Speeches and Performances</p>
                                            </div>
                                        </div>
                                        <div className = 'row' >
                                            <div className='col-2'>
                                                <p style={{marginBottom:'0'}}>5-7 min</p>
                                            </div>
                                            <div className='col-6'>
                                                <p style={{marginBottom:'0'}}>Speech Title</p>
                                            </div>
                                            <div className='col-4' >
                                                <p style={{marginBottom:'0'}}>Speech Giver</p>
                                            </div>
                                        </div>
                                        <div className = 'row' style={{marginTop:'0'}}>
                                            <div className='col-2'>
                                                <p>5-7 min</p>
                                            </div>
                                            <div className='col-6'>
                                                <p>Speech Title #2</p>
                                            </div>
                                            <div className='col-4'>
                                                <p>Speech Giver #2</p>
                                            </div>
                                        </div>
                                        <div className = 'row'>
                                            <div className='col-12'>
                                                <p style={{marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Table Topics</p>
                                            </div>
                                        </div>
                                        <div className = 'row' >
                                            <div className='col-2'>
                                                <p style={{marginBottom:'0'}}>2 min</p>
                                            </div>
                                            <div className='col-6'>
                                                <p style={{marginBottom:'0'}}>Table Topics Introduction</p>
                                            </div>
                                        </div>
                                        <div className = 'row' style={{marginTop:'0'}}>
                                            <div className='col-2'>
                                                <p>20 min</p>
                                            </div>
                                            <div className='col-6'>
                                                <p>Table Topics</p>
                                            </div>
                                            <div className='col-4'>
                                                <p>TT Master</p>
                                            </div>
                                        </div>
                                        <div className = 'row'>
                                            <div className='col-12'>
                                                <p style={{marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Evaluations and Reports</p>
                                            </div>
                                        </div>
                                        <div className = 'row' >
                                            <div className='col-2'>
                                                <p style={{marginBottom:'0'}}>2-3 min</p>
                                            </div>
                                            <div className='col-6'>
                                                <p style={{marginBottom:'0'}}>Evaluation #1</p>
                                            </div>
                                            
                                            <div className='col-4'>
                                                <p style={{marginBottom:'0'}}>Evaluator #1</p>
                                            </div>
                                        </div>
                                        <div className = 'row' style={{marginTop:'0'}}>
                                            <div className='col-2'>
                                                <p>2 min</p>
                                            </div>
                                            <div className='col-6'>
                                                <p>Ah Counter's Report</p>
                                            </div>
                                            <div className='col-4'>
                                                <p>Ah Counter</p>
                                            </div>
                                        </div>
                                        <div className = 'row' style={{marginTop:'0'}}>
                                            <div className='col-2'>
                                                <p>2 min</p>
                                            </div>
                                            <div className='col-6'>
                                                <p>Timer's Report</p>
                                            </div>
                                            <div className='col-4'>
                                                <p>Timer</p>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className = 'row'>
                        <h4>Sign up for a role!</h4>
                    </div>
                    <div className='row' style={{marginTop: '5%'}}>
                        <div className="dropdown">
                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">
                              Select the role you want to sign up for!
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Pathways Speech</a></li>
                              <li><a className="dropdown-item" href="#">Table Topics Master</a></li>
                              <li><a className="dropdown-item" href="#">Evaluator</a></li>
                              <li><a className="dropdown-item" href="#">Ah Counter</a></li>
                              <li><a className="dropdown-item" href="#">Timer</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className ='row text-center' style={{marginTop:'3.75%', paddingLeft: '25%', paddingRight:'25%'}} >
                        <button type='button' className = 'btn btn-success'>Sign Up!</button>
                    </div>
                    <div className = 'row' style={{marginTop:'5%'}}>
                        <h5>No longer able to fill a role? Remove it here!</h5>
                    </div>
                    <div className='row' style={{marginTop: '3.75%'}}>
                        <div className="dropdown">
                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">
                              Select the role that you signed up for!
                            </button>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Pathways Speech</a></li>
                              <li><a className="dropdown-item" href="#">Table Topics Master</a></li>
                              <li><a className="dropdown-item" href="#">Evaluator</a></li>
                              <li><a className="dropdown-item" href="#">Ah Counter</a></li>
                              <li><a className="dropdown-item" href="#">Timer</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className ='row text-center' style={{marginTop:'3.75%', paddingLeft: '25%', paddingRight:'25%'}} >
                        <button type='button' className = 'btn btn-success'>Remove It!</button>
                    </div>
                    <h5 style={{marginTop: '7.5%'}}>View a different date's agenda!</h5>
                    <div className ='row text-center' style={{marginTop:'3.75%', paddingLeft: '25%', paddingRight:'25%'}} >
                        <input type='date' text='Select'></input>
                        <button type='button' className = 'btn btn-success' style={{marginTop: '10px'}}>Go!</button>
                    </div>

                </div>
            </div>
        </div>
        
    </div>

    );
}

export default club_info;