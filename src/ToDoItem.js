import './ToDoItem.css';
function ToDoItem(props) {
    return (
      <li className="liToDo">
        <span>V {props.completed}</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
  }

  export { ToDoItem };