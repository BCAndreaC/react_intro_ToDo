import './ToDoNav.css';

function ToDoNav (){
    return (
        <div className='nav'> 
            <lord-icon
                src="https://cdn.lordicon.com/zbblnakr.json"
                trigger="hover"
                style={{ width: '50px', height: '50px' }}>
            </lord-icon>
            <h1>Jane Wilson</h1>
        </div>
    )
}

export { ToDoNav };