function ToDoDeleteButton (props) {
    const {tasks, setTasks, index} = props;

    function handleClick (event) {
        let newArray = tasks.filter(task => task !== tasks[index]);
        setTasks(newArray);
    }

    return <button className="btn" onClick={handleClick}>Delete</button>;
}

export default ToDoDeleteButton;