function ToDoText (props) {
    const {tasks, index, className} = props;
    
    return <p className={className}>{tasks[index].text}</p> 
}

export default ToDoText;