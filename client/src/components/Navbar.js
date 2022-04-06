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

    return(
            <nav className = "navbar align-left navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"  onClick={()=>props.swap('HomePage')}>
                        <img style = {{height:'40px', paddingRight: '10px'}} src={profilepic}/> 
                        <span>{user.first}</span>
                    </a>
                    <a className="navbar-brand mx-auto" href="#" onClick={()=>props.swap('ClubInfo')}>
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
                        <li className="dropdown nav-item" style={{textAlign: 'left', paddingLeft: '2em', marginBottom: '0'}}>
                            <a className="dropdown-toggle nav-link" data-bs-toggle="dropdown" data-bs-target='dropdown-menu' href="#">Club Tools<span className="caret"></span></a>
                            <ul className="dropdown-menu bg-dark" style={{marginTop: '0', paddingTop: '0'}}>
                                
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"  style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('ClubPage')}}>Create A Club</a>
                                </li>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"  style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('ClubPageInfo')}}>Club Home</a>
                                </li>
                            
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"  style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('Search')}}>Find a Club</a>
                                </li>
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
                                
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"  style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('Reports')}}>Reports</a>
                                </li>
    
                            </ul>
                        </li>
                        <li className="dropdown nav-item" style={{textAlign: 'left', paddingLeft: '2em', marginBottom: '0'}}>
                            <a className="dropdown-toggle nav-link" data-bs-toggle="dropdown" data-bs-target='dropdown-menu' href="#">Profile Tools<span className="caret"></span></a>
                            <ul className="dropdown-menu bg-dark" style={{marginTop: '0', paddingTop: '0'}}>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('HomePage')}}>Your Home Page</a>
                                </li>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('ResetPassword')}}>Reset Your Password</a>
                                </li>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('Statistics')}}>Personal Statistics</a>
                                </li>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('Logout')}}>Logout</a>
                                </li>

                            </ul>
                        </li>
                        <li className="dropdown nav-item" style={{textAlign: 'left', paddingLeft: '2em', marginBottom: '0'}}>
                            <a className="dropdown-toggle nav-link" data-bs-toggle="dropdown" data-bs-target='dropdown-menu' href="#">Officer Tools<span className="caret"></span></a>
                            <ul className="dropdown-menu bg-dark" style={{marginTop: '0', paddingTop: '0'}}>
                                <li className = "nav-item" >
                                    <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap('ManageClub')}}>Club Management</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
               
                </div>
            </nav>
    );

}

export default Navbar;
