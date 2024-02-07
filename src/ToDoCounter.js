import './ToDoCounter.css';
function ToDoCounter ({completed, total}){
    return (
        <h2>
            Has completado {completed} de {total} TODOs
            </h2>
    );
}

export { ToDoCounter };