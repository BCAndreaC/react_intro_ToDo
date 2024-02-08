import React from 'react';
import './ToDoNav.css';


function ToDoNav (){
    return (
        <div className='nav'> 
            <img src={process.env.PUBLIC_URL + '/active-young-woman-programming-on-laptop.gif'} alt="react"/>
        </div>
    )
}

export { ToDoNav };