// A checkbox button used to mark all tasks as 'done'
// The button itself is only visible when there are tasks not marked as done
// tasks is passed down from ToDoList through InputField so that the done
//  property can be updated

import { addTasksToStorage } from "../utilities/localStorage";

function CompleteTasksButton (props) {
    const {tasks, setTasks} = props;

    // Mark all tasks as done, then clear the checked status for next use of 
    // button
    function handleClick (event) {
        //console.log("Complete Items Checked!");
        const newTasks = tasks.map(task => { return {...task, done: true}});
        setTasks(newTasks);
        addTasksToStorage("to-dos", newTasks);
        event.target.checked = false;
    }

    return (
        <th scope="col">
            <label htmlFor="complete-all" className="form-label d-block text-secondary">
                Mark all items complete</label>
            <input type="checkbox" id="complete-all" onClick={handleClick} 
                className={`${(tasks.some(task => !task.done)) ? "d-block" 
                : "d-none"} mx-auto`} />
        </th>
    );
}

export default CompleteTasksButton;