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
// localStorage.removeItem('ToDos_V1.0')

function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    saveItem(newItem);
  };
  return [item, saveItem];
}

function App() {
  const [ToDos, saveToDos] = useLocalStorage('ToDos_V1.0', []);
  const [searchValue, setSearchValue] = React.useState("");
  console.log("Los usuarios buscan" + searchValue);

  const completedToDos = ToDos.filter((ToDo) => !!ToDo.completed).length;
  const totalToDos = ToDos.length;

  const searchedToDos = ToDos.filter((ToDo) => {
    const toDoText = ToDo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return toDoText.includes(searchText);
  });

  const completeToDo = (text) => {
    const newItems = [...ToDos];
    const toDoIndex = newItems.findIndex((ToDo) => ToDo.text === text);
    newItems[toDoIndex].completed = true;
    saveToDos(newItems);
  };
  const onDeleteToDo = (text) => {
    const newItems = [...ToDos];
    const toDoIndex = newItems.findIndex((ToDo) => ToDo.text === text);
    newItems.splice(toDoIndex, 1);
    saveToDos(newItems);
  };

  return (
    <>
      <ToDoNav />
      <ToDoCounter completed={completedToDos} total={totalToDos} />
      <div className="App-search">
        <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <CreateToDoButton />
      </div>
      <ToDoList>
        {searchedToDos.map((ToDo) => (
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
