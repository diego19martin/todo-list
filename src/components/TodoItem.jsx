import React from 'react';

export function TodoItem( {todo, toggleTodo} ) {

    const handleTodoChange = () => {
        toggleTodo(todo.id)
    }

    const {id, task, completed} = todo;

    return (
        <li>
        <input type="checkbox" onChange={handleTodoChange}/>
        {task}
        </li>
    )
}
