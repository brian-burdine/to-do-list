import RestoreTasksButton from "./RestoreTasksButton";
import SwitchViewButtons from "./SwitchViewButtons";

function Footer (props) {
    const {tasks, setTasks, setCurrentView} = props;
    let count = tasks.filter(task => !task.done).length;
    return (
        <tfoot className="table-group-divider">
            <tr>
                <td>{`${count} ${count === 1 ? "item" : "items"} left`}</td>
                <SwitchViewButtons setCurrentView={setCurrentView} />
                <RestoreTasksButton tasks={tasks} setTasks={setTasks} />
            </tr>
        </tfoot>
    );
}

export default Footer;