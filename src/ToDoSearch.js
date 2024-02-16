import React from 'react';
import './ToDoSearch.css';


function ToDoSearch ({searchValue, setSearchValue}){
    return (
        <input 
        placeholder = 'Escribe tu tarea'
        className='ToDoSearch' 
        value={searchValue}
        onChange={(event) => { 
            setSearchValue(event.target.value);
        }}
        />
        
    );
}

export { ToDoSearch };