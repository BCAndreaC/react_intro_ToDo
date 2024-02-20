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
  { text: "Usar estados derivados", completed: true },
];

function App() {
  const [ToDos, setToDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log("Los usuarios buscan" + searchValue);

  const completedToDos = ToDos.filter(ToDo => !!ToDo.completed).length;
  const totalToDos = ToDos.length;

  const searchedToDos = ToDos.filter(
    (ToDo) => {
      const toDoText = ToDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
     return toDoText.includes(searchText);
  }
  );

  const completeToDo = (text) => {
    const newToDos = [...ToDos];
    const toDoIndex = newToDos.findIndex(ToDo => ToDo.text === text);
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos);
  };
  const onDeleteToDo = (text) => {
    const newToDos = [...ToDos];
    const toDoIndex = newToDos.findIndex(ToDo => ToDo.text === text);
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos);
  };

  return (
    <>
      <ToDoNav />
      <ToDoCounter 
      completed={completedToDos} 
      total={totalToDos} 
      />
      <div className="App-search">
        <ToDoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        />
        <CreateToDoButton />
      </div>
      <ToDoList>
        {searchedToDos.map(ToDo => (
          <ToDoItem
            key={ToDo.text}
            text={ToDo.text}
            completed={ToDo.completed}
            onComplete={() => completeToDo(ToDo.text)}
            onDelete={() => onDeleteToDo(ToDo.text)}
          />
        ))}
      </ToDoList>
    </>
  );
}

export default App;
