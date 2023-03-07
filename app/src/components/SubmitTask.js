import { useState } from "react";
import { addTasksToStorage } from "../utilities/localStorage";

// A duo of a text field for the user to provide a to-do item, and a button
//  to submit their entry
// tasks is passed down from ToDoList through InputField so that new entries
//  can be added
// Additionally, the text inside the text field is tracked locally in state
//  so that its contents are available when the user submits it
// When the user submits a new item, focus is returned to the text field and 
//  its contents are cleared so they can enter their next item

function SubmitTask (props) {
    const {tasks, setTasks} = props;
    const [inputText, setInputText] = useState('');

    // Get the most recent value of the text field
    function handleInputChange (event) {
        setInputText(event.target.value);
        console.log("Text: " + inputText);
    }

    // Create a new task from user input, with a unique id and a completion
    //  status, then switch back to the text field and empty it
    function handleClick (event) {
        //console.log("Button clicked");
        let newTask = {
            id: Date.now(),
            text: inputText,
            done: false
        };
        let newTasks = [...tasks, newTask];
        setTasks(newTasks);
        addTasksToStorage("to-dos", newTasks);
        let text = document.getElementById("task-entry");
        text.value = "";
        text.focus();
    }

    return (
        <th scope="col" colSpan="2">
            <div className="input-group">
                <input type="text" id="task-entry" className="form-control" 
                placeholder="Add a to-do item" onChange={handleInputChange} />
                <button className="btn btn-secondary" type="button" 
                onClick={handleClick}>Add item</button>
            </div>
        </th>
    );
}

export default SubmitTask;