import CompleteTasksButton from "./CompleteTasksButton";
import SubmitTask from "./SubmitTask";

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