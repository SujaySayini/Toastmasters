import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import Agenda from './Agenda';

const Message = (props) => {


    const list = props.data.map((entry)=>{
        return <li>{entry}</li>;
    });

    return (
        <div className='message'>
            <p className='messageText'>{props.title}</p>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default Message;