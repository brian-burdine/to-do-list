import RestoreTasksButton from "./RestoreTasksButton";
import SwitchViewButtons from "./SwitchViewButtons";

function Footer (props) {
    const {tasks, setTasks, setCurrentView} = props;
    return (
        <tfoot className="table-group-divider">
            <tr>
                <td>{tasks.filter(task => !task.done).length} items left</td>
                <SwitchViewButtons setCurrentView={setCurrentView} />
                <RestoreTasksButton tasks={tasks} setTasks={setTasks} />
            </tr>
        </tfoot>
    );
}

export default Footer;