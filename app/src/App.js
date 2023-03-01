import { useState } from "react";
import Header from "./Header.js";
import Input from "./Input.js";
import ToDoList from "./ToDoList.js";
import Footer from "./Footer.js";

function App () {
    const [tasks, setTasks] = useState([]);
    const [currentView, setCurrentView] = useState('all');
    
    return (
        <div className="container" id="app">
            <div className="row">
                <div className="col text-center">
                    <Header />
                    {tasks.length > 0 && <ToDoList />}
                    <Footer tasks={tasks} />
                </div>
            </div>
        </div>
    );
}

export default App;