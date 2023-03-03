import { useState } from "react";
import InputField from "./InputField";
import ToDoItem from "./ToDoItem";
import Footer from "./Footer";

// The main thrust of the application. Creates a table that contains:
//  - A field for accepting new to-do items
//  - The currently viewable to-do items, with options to complete or 
//      delete them
//  - Options to change the view
//
// Two state variables are controlled at this level:
//  - tasks, an array of objects created from the to-do items the user provides
//  - currentView, a string that acts as a flag to determine which items should
//      be displayed
//
// To-do items are conditionally rendered based on the current view
// Options to change the current view are conditionally rendered based on the
//  presence of items to display

function ToDoList () {    
    const [tasks, setTasks] = useState([]);
    const [currentView, setCurrentView] = useState('all');

    return (
        <div className="row">
            <div className="col text-center">
                <table className="table table-hover" id="to-do-list">
                    <InputField tasks={tasks} setTasks={setTasks} />
                    <tbody className="table-group-divider">
                        {
                            (currentView === 'all' && tasks
                            .map((task, index) => {
                                return <ToDoItem key={task.id} tasks={tasks} 
                                setTasks={setTasks} index={index} />
                            })) || 
                            (currentView === 'active' && tasks
                            .filter(task => !task.done)
                            .map((task, index, newTasks) => {
                                return <ToDoItem key={task.id} tasks={newTasks} 
                                setTasks={setTasks} index={index} />
                            })) || 
                            (currentView === 'completed' && tasks
                            .filter(task => task.done)
                            .map((task, index, newTasks) => {
                                return <ToDoItem key={task.id} tasks={newTasks} 
                                setTasks={setTasks} index={index} />
                            }))
                        }
                    </tbody>
                    {tasks.length > 0 && <Footer tasks={tasks} 
                    setTasks={setTasks} setCurrentView={setCurrentView} />}
                </table>
            </div>
        </div>
    );
}

export default ToDoList;