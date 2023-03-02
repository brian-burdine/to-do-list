function SwitchViewButtons (props) {
    const {setCurrentView} = props;

    function handleClick (event) {
        setCurrentView(event.target.id);
    }

    return (
        <td>
            <input type="radio" name="view" id="all" defaultChecked="true" onClick={handleClick} />
            <label htmlFor="all">All</label>
            <input type="radio" name="view" id="active" onClick={handleClick} />
            <label htmlFor="active">Active</label>
            <input type="radio" name="view" id="completed" onClick={handleClick} />
            <label htmlFor="completed">Completed</label>
        </td>
    );
}

export default SwitchViewButtons;