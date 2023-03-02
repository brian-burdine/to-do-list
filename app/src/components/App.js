import Header from "./Header.js";
import ToDoList from "./ToDoList.js";

function App () {    
    return (
        <div className="container" id="app">
            <Header />
            <ToDoList />
        </div>
    );
}

export default App;