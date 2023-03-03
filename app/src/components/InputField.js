import CompleteTasksButton from "./CompleteTasksButton";
import SubmitTask from "./SubmitTask";

// The starting row of the to-do list table, always visible
// Consists of a button that marks all tasks as completed, and a text field
//  for the user to input a new to-do item
// tasks is passed in from ToDoList to provide to the children components, but
//  is not updated locally

function InputField (props) {
    const {tasks, setTasks} = props;

    return (
        <thead>
            <tr>
                <CompleteTasksButton tasks={tasks} setTasks={setTasks} />
                <SubmitTask tasks={tasks} setTasks={setTasks} />
            </tr>
        </thead>
    );
}

export default InputField;