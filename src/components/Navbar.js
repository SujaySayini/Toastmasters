import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import toastyblack from '../images/toasty-black.png';
import AhCounter from './AhCounter';
import CommentCard from './CommentCard';
import Timer from './Timer';

const Navbar = (props) =>{

    return(
            <nav className = "navbar align-left navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
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
                        <li className = "nav-item" >
                            <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap(<Timer/>)}}>Timer</a>
                        </li>
                        <li className = "nav-item" >
                            <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap(<AhCounter/>)}}>Ah Counter</a>
                        </li>
                        <li className = "nav-item" >
                            <a className = "nav-link" href = "#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" style={{textAlign: 'left', paddingLeft: '2em'}} onClick={() =>{props.swap(<CommentCard/>)}}>Comment Cards</a>
                        </li>
                    </ul>
                </div>
               
                </div>
            </nav>
    );

}

export default Navbar;
