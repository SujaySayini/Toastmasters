import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import toastyblack from '../images/toasty-black.png';
import profilepic from '../images/profile2.jpg'
import Agenda from './Agenda';
import AhCounter from './AhCounter';
import CommentCard from './CommentCard';
import Evaluation from './Evaluation';
import Timer from './Timer';
import HomePage from './HomePage';

const Navbar = (props) =>{

    //note: in order to make the page that you are currently on appear active, use ternary operator in rendering
        // {props.page === pageName ? <a className = active> : <a> <a/>}

    return(
            <nav className = "navbar align-left navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"  onClick={()=>props.swap('HomePage')}>
                        <img style = {{height:'40px', paddingRight: '10px'}} src={profilepic}/> 
                        <span>User Name</span>
                    </a>
                    <a className="navbar-brand mx-auto" href="#">
                        <img style = {{height:'40px', paddingRight: '10px'}} src={toastyblack}/> 
                        <span>Rutgers Toastmasters</span>
                    </a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>

                </button>

                <div className = "collapse navbar-collapse" id="navbarNav">
                    <ul className = "navbar-nav">
                        <li class="dropdown nav-item" style={{textAlign: 'left', paddingLeft: '2em', marginBottom: '0'}}>
                            <a class="dropdown-toggle nav-link" data-bs-toggle="dropdown" data-bs-target='dropdown-menu' href="#">Club Tools<span class="caret"></span></a>
                            <ul class="dropdown-menu bg-dark" style={{marginTop: '0', paddingTop: '0'}}>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('Timer')}}>Timer</a>
                                </li>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('AhCounter')}}>Ah Counter</a>
                                </li>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('CommentCard')}}>Comment Cards</a>
                                </li>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('Evaluation')}}>Evaluation Form</a>
                                </li>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"  style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('Agenda')}}>Agenda/Speech Sign Ups!</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown nav-item" style={{textAlign: 'left', paddingLeft: '2em', marginBottom: '0'}}>
                            <a class="dropdown-toggle nav-link" data-bs-toggle="dropdown" data-bs-target='dropdown-menu' href="#">Profile Tools<span class="caret"></span></a>
                            <ul class="dropdown-menu bg-dark" style={{marginTop: '0', paddingTop: '0'}}>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('HomePage')}}>Your Home Page</a>
                                </li>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('ResetPassword')}}>Reset Your Password</a>
                                </li>
                            </ul>
                        </li>
                        <li className = "nav-item" >
                            <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"  style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('Agenda')}}>Agenda/Speech Sign Ups!</a>
                        </li>
                    </ul>
                </div>
               
                </div>
            </nav>
    );

}

export default Navbar;
