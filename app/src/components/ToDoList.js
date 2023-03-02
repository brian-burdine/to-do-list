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
                        {
                            (currentView == 'all' && tasks
                            .map((task, index) => {
                                return <ToDoItem key={task.id} tasks={tasks} 
                                setTasks={setTasks} index={index} />
                            })) || 
                            (currentView == 'active' && tasks
                            .filter(task => !task.done)
                            .map((task, index) => {
                                return <ToDoItem key={task.id} tasks={tasks} 
                                setTasks={setTasks} index={index} />
                            })) || 
                            (currentView == 'completed' && tasks
                            .filter(task => task.done)
                            .map((task, index) => {
                                return <ToDoItem key={task.id} tasks={tasks} 
                                setTasks={setTasks} index={index} />
                            }))
                        }
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