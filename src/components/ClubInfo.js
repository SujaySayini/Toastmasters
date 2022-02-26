import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import toastyblack from '../images/toasty-black.png';
import './Clubinfo.css'
import toasty from '../images/toasty.jpg';

const Clubinfo = () => {
    return(

            <div className='background'>
            <nav style={{marginBottom: '20px'}}className = "navbar navbar-expand-sm bg-info navbar-dark">
                <div className = "container-fluid">
                <a className="navbar-brand" href="#"><img style = {{height:'40px'}} src={toasty}/> <span>Rutgers Toastmasters</span></a>
               
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
                        <li className='nav-item'>
                            <a className='nav-link' href = "#">Club info</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className = "col-md-6">
                            <h2 className='club-name'>Club 1</h2>
                            <div className='underline'></div>
                            <h4 className='club-des'>Club description</h4>
                            <div className='text-box'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className = "col-md-6 align-self-center">
                            <h4 className='Recent-ann'>Recent Announcement</h4>
                            <div className='text-box'>
                                    <p className='ann'>General Members Meeting, 2/17/2022 
                                    <br/>-You have signed up to be the ah counter for this meeting!
                                    <br/>-Find the agenda here 
                                    <br/>Some club activity, 3/20/2022 
                                    <br/>-You have not signed up to take on any roles at this meeting, sign up here</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                    <div className = "col-md-6 align-self-center">
                            <h3 className='contact-us'>Contact us</h3>
                            <div className='text-box'>
                                <p>Location: SEC 107<br/>
                                         Email: club1@rutgers.edu<br/>
                                          Phone: (234)-567-8901<br/>
                                           Website: https://club1.com<br/> 
                                           Facebook page: club1_rutgers<br/>
                                            Instagram: club1_rutgers
                                </p>
                            </div>
                        </div>
                        <div className = "col-md-6 align-self-center">
                            <h4 className='photo-title'>Photo</h4>
                            <img src={toastyblack}></img>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Clubinfo;