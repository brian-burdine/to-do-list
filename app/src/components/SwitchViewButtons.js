function SwitchViewButtons (props) {
    const {setCurrentView} = props;

    function handleClick (event) {
        setCurrentView(event.target.id);
    }

    return (
        <td>
            <div className="btn-group" role="group">
                <input type="radio" className="btn-check" name="view" id="all" 
                    defaultChecked="true" onClick={handleClick} />
                <label className="btn btn-outline-secondary" htmlFor="all">
                    All</label>
                <input type="radio" className="btn-check" name="view" 
                    id="active" onClick={handleClick} />
                <label className="btn btn-outline-secondary" htmlFor="active">
                    Active</label>
                <input type="radio" className="btn-check" name="view" 
                    id="completed" onClick={handleClick} />
                <label className="btn btn-outline-secondary" htmlFor="completed">
                    Completed</label>
            </div>
        </td>
    );
}

export default SwitchViewButtons;