import React from 'react'

export function Todolist({todos}) {
    return (
        <ul>
            {todos.map((todo) =>(
               <li>Tarea 1</li> 
            ))}
        </ul>
    );
}
