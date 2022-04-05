import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Message from './Message';
import Agenda from './Agenda';
import toastyblack from '../images/toasty-black.png'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip} from 'recharts';

const HomePage = (props) => {

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
    console.log(user)

    


    const data = [{
        name: '1/28',
        You: 35,
        
        Club: 13,
        pv: 100,
        amt: 100,
      },
      {
        name: '2/3',
        You: 25,
        
        Club: 10.5,
        pv: 100,
        amt: 100,
      },
      {
        name: '2/10',
        You: 0,
        
        Club: -11,
        pv: 100,
        amt: 100,
      },
      {
        name: '2/17',
        You: -15,
        
        Club: 0,
        pv: 100,
        amt: 100,
      },
      {
        name: '2/24',
        You: 0,
        
        Club: -11,
        pv: 100,
        amt: 100,
      },
      {
        name: '3/3',
        You: 45,
        
        Club: 3,
        pv: 100,
        amt: 100,
      },
      {
        name: '3/10',
        You: 0,
        
        Club: -7,
        pv: 100,
        amt: 100,
      },];
      

    const renderLineChart = (
        <LineChart data={data}>
            <Line type='monotone' dataKey='You' stroke = '#884d88'></Line>
            <Line type='monotone' dataKey='Club' stroke = '#7bcd88'></Line>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Seconds Over/Under Time', angle: -90 }} type='number' domain = {[-60, 60]}/>
            <Tooltip />
            <Legend />
        </LineChart>
    )

    return (
        <div>
            <div className='container'>
                <div className = 'row'>
                    <div style={{marginTop: '20px'}}className = 'col-lg-6'>
                        <h4>Welcome Back, {user.first}.</h4>
                        <p>Here are some upcoming events:</p>
                        <div className='row' style={{border: 'solid 1px black', borderRadius: '5px',}}>
                            <div className='container-fluid overflow-auto' style = {{height: '30vh'}}>
                                <Message swap = {props.swap} title = 'General Meeting, 2/17/2022' data = {['You signed up to be the Ah Counter for this meeting!']}/>
                                <Message title = 'General Meeting, 2/24/2022' data = {["You haven't signed up for a role for this meeting yet!"]} swap = {props.swap}/>
                                <Message title = 'General Meeting, 3/3/2022' data = {["You haven't signed up for a role for this meeting yet!"]} swap = {props.swap}/>
                            </div>
                        </div>
                        
                        <div className='container-fluid' style={{marginTop: '3vh'}}>
                            <h4>Your Progress:</h4>
                            <p> Click below to navigate to all charts and statistics about your recent speeches!</p>
                            <ResponsiveContainer width="95%" height={300}>
                                {renderLineChart}
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div style={{marginTop: '40px'}}className = 'col-lg-6'>
                        <div style={{border:'1px solid black', borderRadius:'5px', backgroundColor:'#ffffff3f'}}>
                            <h5>Recent Notifications</h5>
                            <div className='container-fluid overflow-auto' style = {{height: '75vh'}}>  
                                <div className='message row'>
                                    <div className='col-10' style={{textDecoration:'none'}}>
                                        <p> Hi all, there will be another meeting tonight from 7:45-8:45 pm tomorrow over zoom! hope to see you there! Remember to sign up for a role if you haven’t already.</p>
                                    </div>
                                    <div className='col-2'>
                                        <p>From:</p>
                                        <img style={{height: '30px'}}src = {toastyblack}></img>
                                    </div>
                                </div>
                                <div className='message row'>
                                    <div className='col-10' style={{textDecoration:'none'}}>
                                        <p> Hi all, there will be another meeting tonight from 7:45-8:45 pm tomorrow over zoom! hope to see you there! Remember to sign up for a role if you haven’t already.</p>
                                    </div>
                                    <div className='col-2'>
                                        <p>From:</p>
                                        <img style={{height: '30px'}}src = {toastyblack}></img>
                                    </div>
                                </div>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default HomePage;