function CompleteTasksButton (props) {
    const {tasks, setTasks} = props;

    function handleClick () {
        console.log("Complete Items Checked!");
        const newTasks = [...tasks];
        setTasks(newTasks.map(task => {task.done = true; return task;}));
    }

    return (
        <th scope="col">
            <label htmlFor="complete-all" className="d-block">Mark all items complete</label>
            <input type="checkbox" id="complete-all" className="d-block" onClick={handleClick}/>
        </th>
    );
}

export default CompleteTasksButton;