function CompleteTasksButton (props) {
    const {tasks, setTasks} = props;

    function handleClick (event) {
        console.log("Complete Items Checked!");
        const newTasks = [...tasks];
        setTasks(newTasks.map(task => {task.done = true; return task;}));
        event.target.checked = false;
    }

    return (
        <th scope="col">
            <label htmlFor="complete-all" className="form-label d-block">
                Mark all items complete</label>
            <input type="checkbox" id="complete-all" onClick={handleClick} 
                className={`${(tasks.every(task => !task.done)) ? "d-block" 
                : "d-none"} mx-auto`} />
        </th>
    );
}

export default CompleteTasksButton;