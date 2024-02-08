import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoNav } from "./ToDoNav";
import "./App.css";

const defaultToDos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar curso react.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "LALALALALA", completed: false },
];

function App() {
  return (
    <>
      <ToDoNav />
      <ToDoCounter completed={16} total={25} />
      <div className="App-search">
        <ToDoSearch />
        <CreateToDoButton />
      </div>
      <ToDoList>
        {defaultToDos.map((ToDo) => (
          <ToDoItem
            key={ToDo.text}
            text={ToDo.text}
            completed={ToDo.completed}
          />
        ))}
      </ToDoList>
    </>
  );
}

export default App;
