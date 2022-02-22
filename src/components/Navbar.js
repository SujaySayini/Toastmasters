import toastyblack from '../images/toasty-black.png';
import AhCounter from './AhCounter';

const Navbar = (props) => {
    return (
        <nav style={{marginBottom: '20px'}}className = "navbar navbar-expand-sm bg-dark navbar-dark">
                <div className = "container-fluid">
                <a className="navbar-brand" href="#"><img style = {{height:'40px'}} src={toastyblack}/> <span>Rutgers Toastmasters</span></a>
               
                    <ul className = "navbar-nav">
                        <li className = "nav-item" >
                            <a className = "nav-link" href = "#">Timer</a>
                        </li>
                        <li className = "nav-item" >
                            <a className = "nav-link" href = "#" onClick={() =>{props.swap(<AhCounter/>)}}>Ah Counter</a>
                        </li>
                        <li className = "nav-item" >
                            <a className = "nav-link" href = "#">Comment Cards</a>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;