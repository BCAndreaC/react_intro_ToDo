import './CreateToDoButton.css';
function CreateToDoButton() {
  return (
  <button
  className='CreateToDoButton'
  onClick={(event) => {
    console.log('Añadir una tarea nueva');
  }
}
  >Añadir</button>
  );
}

export { CreateToDoButton };