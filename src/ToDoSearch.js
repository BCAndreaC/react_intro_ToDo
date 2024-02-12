import './ToDoSearch.css';

function ToDoSearch (searchValue, setSearchValue){
    return (
        <input placeholder = 'Escribe tu tarea'
        className='ToDoSearch' />
    )
}

export { ToDoSearch };