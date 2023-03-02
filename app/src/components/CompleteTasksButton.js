function CompleteTasksButton (props) {

    function handleClick () {
        console.log("Complete Items Checked!");
    }

    return (
        <th scope="col">
            <label htmlFor="complete-all" className="d-block">Mark all items complete</label>
            <input type="checkbox" id="complete-all" className="d-block" onClick={handleClick}/>
        </th>
    );
}

export default CompleteTasksButton;