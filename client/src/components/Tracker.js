
function Tracker(props) {
    // props.label - name
    // props.index - number
    // props.trackerStates - array of numbers
    // props.setTrackerStates - change value function
    const { label, index, trackerStates, setTrackerStates } = props;
    const value = trackerStates[index];

    function updateState(newValue) {
        if (newValue < 0) {
            newValue = 0;
        }
        let states = [...trackerStates];
        states[index] = newValue;
        setTrackerStates(states);
    }
    return (
        <div className='container col-4' style={{paddingLeft:'2em', paddingRight:'2em'}}>
            <h6>{label}</h6>
            <div className='row'>
                <button type="button" className="btn btn-dark col-4" onClick={() => { updateState(value - 1) }}>
                    <span className="bi-arrow-left-short" style={{ fontSize: '1em' }}></span>
                </button>
                <p className="col-4">{value}</p>
                <button type="button" className="btn btn-dark col-4" onClick={() => { updateState(value + 1) }}>
                    <span className="bi-arrow-right-short" style={{ fontSize: '1em' }}></span>
                </button>
            </div>
        </div>

    );
}
export default Tracker;