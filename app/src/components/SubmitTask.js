import { useState } from "react";

function SubmitTask (props) {
    const {tasks, setTasks} = props;
    const [inputText, setInputText] = useState('');

    function handleInputChange (event) {
        setInputText(event.target.value);
        console.log("Text: " + inputText);
    }

    function handleClick (event) {
        console.log("Button clicked");
        setTasks([...tasks, {
            id: Date.now(),
            text: inputText,
            done: false
        }]);
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