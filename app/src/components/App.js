import Header from "./Header.js";
import ToDoList from "./ToDoList.js";

// Top of the application hierarchy
// No state management here, the heavy lifting is done in ToDoList

function App () {    
    return (
        <div className="container" id="app">
            <Header />
            <ToDoList />
        </div>
    );
}

export default App;