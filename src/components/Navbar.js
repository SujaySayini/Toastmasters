import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import toastyblack from '../images/toasty-black.png';

const Navbar = () =>{

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
                        <li className = "nav-item" style={{textAlign: 'left', paddingLeft: '2em'}}>
                            <a className = "nav-link" href = "#">Timer</a>
                        </li>
                        <li className = "nav-item" style={{textAlign: 'left', paddingLeft: '2em'}}>
                            <a className = "nav-link" href = "#">Ah Counter</a>
                        </li>
                        <li className = "nav-item" style={{textAlign: 'left', paddingLeft: '2em'}}>
                            <a className = "nav-link" href = "#">Comment Cards</a>
                        </li>
                    </ul>
                </div>
               
                </div>
            </nav>
    );

}

export default Navbar;
