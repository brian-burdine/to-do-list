import { addTasksToStorage } from "../utilities/localStorage";

function ToDoDeleteButton (props) {
    const {tasks, setTasks, index} = props;

    function handleClick (event) {
        let newTasks = tasks.filter(task => task !== tasks[index]);
        setTasks(newTasks);
        addTasksToStorage("to-dos", newTasks);
    }

    return <button className="btn btn-outline-secondary" onClick={handleClick}>
        Delete</button>;
}

export default ToDoDeleteButton;