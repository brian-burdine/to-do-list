function ToDoCompleteButton (props) {
    const {tasks, setTasks, index} = props;

    function handleClick (event) {
        console.log("Complete button clicked!");
        let newArray = [...tasks];
        if (event.target.checked) {
            newArray[index].done = true;
        } else {
            newArray[index].done = false;
        }
        setTasks(newArray);
    }

    return (
        <>
            <label htmlFor={`complete-${tasks[index].id}`}>Completed?  </label>
            <input type="checkbox" id={`complete-${tasks[index].id}`} 
                defaultChecked={tasks[index].done} onClick={handleClick} />
        </>
        );
}

export default ToDoCompleteButton;