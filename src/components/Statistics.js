import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import toastyblack from '../images/toasty-black.png'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip} from 'recharts';

const Statistics = (props) => {
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
                        <h3>Track Your Progress</h3>
                        <div className='container-fluid' style={{marginTop: '3vh'}}>
                            <h5>Charting Your Progress:</h5>
                            <p> Click below to navigate to all charts and statistics about your recent speeches!</p>
                            <ResponsiveContainer width="95%" height={300}>
                                {renderLineChart}
                            </ResponsiveContainer>
                    </div>
                </div>  
                <div className = 'row'>
                    <div className='container-fluid' style={{marginTop: '3vh', paddingLeft: '15vw', paddingRight:'20vw'}}>
                        <h5>Review Individual Speeches You Gave:</h5>
                        <p> Click below to navigate to all charts and statistics about your recent speeches!</p>
                        <div style={{border:"1px solid black"}}>
                        <div className='container'>
                            <div className = 'row'>
                                <h4>Untitled Speech</h4>
                            </div>
                            <div className = 'row' style={{textAlign: 'left',marginBottom: '10px'}}>
                                    <div className='container'>
                                        <p style={{marginBottom: '0'}}>Date Given: 2/25/2021</p>
                                        <p style={{marginBottom: '0'}}>Evaluator: Evaluator Name</p> 
                                        <p style={{marginBottom: '0'}}>Evaluation Link: <a href='#'>Find the evaluation here</a></p>
                                        <a href='#'>Comment Cards for this speech</a>   
                                        
                                        <p style={{marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Timing</p>
                                
                                        <div className = 'row' style={{marginTop:'0'}}>
                                            <div className='col-4'>
                                                <p>Range: 5-7 minutes</p>
                                            </div>
                                            <div className='col-4'>
                                                <p>Actual Time: 6:31</p>
                                            </div>
                                            <div className='col-4'>
                                                <p>Within Range!</p>
                                            </div>
                                        </div>
                                        <div className = 'row'>
                                            <div className='col-12'>
                                                <p style={{marginBottom: '3px', textDecoration: 'underline', fontWeight:'bolder'}}>Filler Words:</p>
                                            </div>
                                        </div>
                                        <p style={{marginBottom: '0'}}>And: 1</p>
                                        <p style={{marginBottom: '0'}}>Um: 3</p>
                                        <p style={{marginBottom: '0'}}>Ah: 0</p>
                                        <p style={{marginBottom: '0'}}>So: 4</p>
                                        <p style={{marginBottom: '0'}}>Like: 0</p>
                                        <p style={{marginBottom: '0'}}>But: 0</p>
                                        <p style={{marginBottom: '0'}}>You Know: 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className = 'row'>
                        <div className='container-fluid' style={{marginTop: '3vh'}}>
                            <h5>Talk to an Executive Board Member About Your Progress</h5>
                            <p> Click <a href='#'>here</a> to message our Eboard!</p>
                        </div>
                </div>
            </div>
        </div>

    );
}

export default Statistics;