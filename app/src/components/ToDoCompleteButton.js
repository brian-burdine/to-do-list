import { addTasksToStorage } from "../utilities/localStorage";

// Renders a checkbox that changes the 'done' property of an associated task.
function ToDoCompleteButton (props) {
    const {tasks, setTasks, index} = props;

    function handleClick (event) {
        console.log("Complete button clicked!");
        let newTasks = tasks.map((task, i) => {
            if (i === index) {
                return {...task, done: !task.done};
            } else {
                return task;
            }
        });
        setTasks(newTasks);
        addTasksToStorage("to-dos", newTasks);
    }

    return (
        <>
            <label htmlFor={`complete-${tasks[index].id}`}>Completed?  </label>
            <input type="checkbox" id={`complete-${tasks[index].id}`} 
                defaultChecked={tasks[index].done} onClick={handleClick} />
        </>
        );
}

export default ToDoCompleteButton;