import './ToDoList.css';
function ToDoList ({children}){
    return (
        <ul className="ulToDo">
            {children}
        </ul>
    )
}

export { ToDoList };