function RestoreTasksButton (props) {    
    const {tasks, setTasks} = props;

    function handleClick () {
        const newTasks = [...tasks];
        setTasks(newTasks.map(task => {task.done = false; return task;}));
    }

    return (
        <td>
            <button className="btn" onClick={handleClick}>Renew Tasks</button>
        </td>
    );
}

export default RestoreTasksButton;