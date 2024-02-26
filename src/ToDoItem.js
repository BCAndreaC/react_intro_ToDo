import './ToDoItem.css';
import { MdCheckCircleOutline } from "react-icons/md";
import { MdHighlightOff } from "react-icons/md";

function ToDoItem(props) {
    return (
      <li className="liToDo">
        <span
        className={ `Icon Icon-check} ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
          <MdCheckCircleOutline />
        </span>
        <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}
        >
          {props.text}
          </p>
        <span className="Icon Icon-delete" onClick={props.onDelete}
        >
          <MdHighlightOff/> 
          </span>
      </li>
    );
  }

  export { ToDoItem };