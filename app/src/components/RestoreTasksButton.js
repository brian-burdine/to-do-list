import { addTasksToStorage } from "../utilities/localStorage";

function RestoreTasksButton (props) {    
    const {tasks, setTasks} = props;

    function handleClick () {
        const newTasks = tasks.map(task => { return {...task, done: false}});
        setTasks(newTasks);
        addTasksToStorage("to-dos", newTasks);
    }

    return (
        <td>
            <button className="btn btn-outline-secondary" onClick={handleClick}>
                Renew Tasks</button>
        </td>
    );
}

export default RestoreTasksButton;