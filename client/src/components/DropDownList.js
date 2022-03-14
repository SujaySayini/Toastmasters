const DropDownList = (props) => {
    const {name, elements, setSelected } = props;
    const listElements = elements.map((m) => 
        <li key={m} onClick={()=>{setSelected(m)}}>
            <a className="dropdown-item" href="#">{m}</a>
        </li>
    );
    return (
        <div>
            <div className="dropdown">
                <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">
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