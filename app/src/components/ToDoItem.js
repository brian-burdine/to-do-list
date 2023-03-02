import ToDoCompleteButton from "./ToDoCompleteButton";
import ToDoDeleteButton from "./ToDoDeleteButton";
import ToDoText from "./ToDoText";

function ToDoItem (props) {
    const {key, task} = props;

    return (
        <tr>
            <td>
                <ToDoCompleteButton />
            </td>
            <td>
                <ToDoText />
            </td>
            <td>
                <ToDoDeleteButton />
            </td>
        </tr>
    );
}

export default ToDoItem;