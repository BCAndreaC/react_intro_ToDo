import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoNav } from "./ToDoNav";
import "./App.css";

// const defaultToDos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso react.js", completed: false },
//   { text: "Llorar con la Llorona", completed: false },
//   { text: "LALALALALA", completed: false },
//   { text: "Usar estados derivados", completed: true },
// ];
// localStorage.setItem('ToDos_V1.0', JSON.stringify(defaultToDos));
// localStorage.removeItem('ToDos_V1.0');


function App() {
  const localStorageToDos = localStorage.getItem('ToDos_V1.0');
  let parsedToDos = JSON.parse(localStorageToDos);

  if (!localStorageToDos) {
    localStorage.setItem('ToDos_V1.0', JSON.stringify([]));
    parsedToDos = [];
  } else {
    parsedToDos = JSON.parse(localStorageToDos);
  }
  
  const [ToDos, setToDos] = React.useState(parsedToDos);
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

  const saveToDos = (newToDos) => {
    const stringifiedToDos = JSON.stringify(newToDos);
    localStorage.setItem('ToDos_V1.0', stringifiedToDos);
    setToDos(newToDos);
  }

  const completeToDo = (text) => {
    const newToDos = [...ToDos];
    const toDoIndex = newToDos.findIndex(ToDo => ToDo.text === text);
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  };
  const onDeleteToDo = (text) => {
    const newToDos = [...ToDos];
    const toDoIndex = newToDos.findIndex(ToDo => ToDo.text === text);
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
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
