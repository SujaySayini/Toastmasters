import React from 'react';

const DropDownList = (props) => {
    const {name, elements, setSelected } = props;
    const listElements = elements.map((m) => 
        <li key={Math.random()} onClick={()=>{setSelected(m)}}>
            <a className="dropdown-item" href="#">{m}</a>
        </li>
    );
    return (
        <div style={{display: 'inline-block'}}>
            <div className="dropdown">
                <button type="button" style={{width: '175px', color: 'white', backgroundColor: 'rgb(0, 65, 101)'}}className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    {name}
                </button>
                <ul className="dropdown-menu">
                    {listElements}
                </ul>
            </div>
        </div>
    );
}
export default DropDownList;