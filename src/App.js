import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoNav } from "./ToDoNav";

const defaultToDos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar curso react.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'LALALALALA', completed: false},
];

function App() {
  return (
    <>
    <ToDoNav />
    <img src="remote.work.png" alt="reat" />
      <ToDoCounter completed={16} total={25} />
      <ToDoSearch />

      <ToDoList>
        {defaultToDos.map(ToDo => (
          <ToDoItem 
          key={ToDo.text} 
          text={ToDo.text} 
          completed={ToDo.completed}
          />
        ))}
      </ToDoList>

      <CreateToDoButton /> 
    </>
  );
}


export default App;
