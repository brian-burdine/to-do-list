import { useState } from "react";
import InputField from "./InputField";
import ToDoItem from "./ToDoItem";
import Footer from "./Footer";

function ToDoList () {    
    const [tasks, setTasks] = useState([]);
    const [currentView, setCurrentView] = useState('all');

    return (
        <div className="row">
            <div className="col text-center">
                <p>ToDoList ran!</p>
                <table className="table" id="to-do-list">
                    <InputField tasks={tasks} setTasks={setTasks} />
                    <tbody className="table-group-divider">
                        {tasks.map(task => {
                            return <ToDoItem key={task.id} task={task} />
                        })}
                    </tbody>
                    {tasks.length > 0 && <Footer tasks={tasks} 
                    setTasks={setTasks} currentView={currentView} 
                    setCurrentView={setCurrentView} />}
                </table>
            </div>
        </div>
    );
}

export default ToDoList;