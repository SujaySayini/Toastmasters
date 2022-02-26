import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Message from './Message';
import toastyblack from '../images/toasty-black.png'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip} from 'recharts';

const ManageMembers = (props) => {
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
                <h1>Manage Your Club.</h1>
                <div className = 'row'>
                    <div style={{marginTop: '20px'}}className = 'col-lg-6'>
                        <h4>Member Activity Updates</h4>
                        <div className='row' style={{border: 'solid 1px black', borderRadius: '5px',}}>
                            <div className='container-fluid overflow-auto' style = {{height: '30vh'}}>
                                <Message title = 'Ram Patel' data = {['Has attended 50% less meetings this month', 'Has not given a speech in over 5 meetings']}/>
                                <Message title = 'Nick Schenk' data = {['Has attended 5 consecutive meetings', 'Has not held a role in over 5 meetings']} swap = {props.swap}/>
                                <Message title = 'John Doe' data = {['Has attended 13 consecutive meetings', 'Has held a role/given a speech at 3 consecutive meetings']} swap = {props.swap}/>
                            </div>
                        </div>
                        
                        <div className='container-fluid' style={{marginTop: '3vh'}}>
                            <h4>Club Progress:</h4>
                            <p> Click below to navigate to all charts and statistics about your club!</p>
                            <ResponsiveContainer width="95%" height={300}>
                                {renderLineChart}
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div style={{marginTop: '40px'}}className = 'col-lg-6'>
                        <div style={{border:'1px solid black', borderRadius:'5px', backgroundColor:'#ffffff3f'}}>
                            <h3>Members List</h3>
                            <input style={{borderRadius:'5px', marginBottom: '10px'}} defaultValue={'Search'}></input> <button style={{marginBottom: '5px'}} className='btn btn-success'>Search</button>
                            <div className='container-fluid overflow-auto' style = {{height: '75vh'}}>  
                                <div className='message row' style={{padding:'10px'}}>
                                    <div className='col-2'>
                                        <img style={{height: '40px'}}src = {toastyblack}></img>
                                    </div>

                                    <div className='col-6' style={{textDecoration:'none'}}>
                                        <p>User Name</p>
                                    </div>

                                    <div className='col-4'>
                                        <p style={{fontStyle:'italic'}}>President</p>
                                    </div>
                                </div>
                                <div className='message row' style={{padding:'10px'}}>
                                    <div className='col-2'>
                                        <img style={{height: '40px'}}src = {toastyblack}></img>
                                    </div>

                                    <div className='col-6' style={{textDecoration:'none'}}>
                                        <p>User Name #2</p>
                                    </div>

                                    <div className='col-4'>
                                        <p style={{fontStyle:'italic'}}> Vice President</p>
                                    </div>
                                </div>

                                <div className='message row' style={{padding:'10px'}}>
                                    <div className='col-2'>
                                        <img style={{height: '40px'}}src = {toastyblack}></img>
                                    </div>

                                    <div className='col-6' style={{textDecoration:'none'}}>
                                        <p>User Name</p>
                                    </div>

                                    <div className='col-4'>
                                        <p style={{fontStyle:'italic'}}></p>
                                    </div>
                                </div>
                                <div className='message row' style={{padding:'10px'}}>
                                    <div className='col-2'>
                                        <img style={{height: '40px'}}src = {toastyblack}></img>
                                    </div>

                                    <div className='col-6' style={{textDecoration:'none'}}>
                                        <p>User Name</p>
                                    </div>

                                    <div className='col-4'>
                                        <p style={{fontStyle:'italic'}}></p>
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

export default ManageMembers;