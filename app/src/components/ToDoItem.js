import ToDoCompleteButton from "./ToDoCompleteButton";
import ToDoDeleteButton from "./ToDoDeleteButton";
import ToDoText from "./ToDoText";

function ToDoItem (props) {
    const {tasks, setTasks, index} = props;

    return (
        <tr id={tasks[index].id}>
            <td>
                <ToDoCompleteButton tasks={tasks} setTasks={setTasks} index={index} />
            </td>
            <td>
                <ToDoText className={tasks[index].done && "text-decoration-line-through"} text={tasks[index].text} />
            </td>
            <td>
                <ToDoDeleteButton tasks={tasks} setTasks={setTasks} index={index}/>
            </td>
        </tr>
    );
}

export default ToDoItem;