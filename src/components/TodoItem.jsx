import React from 'react';

export function TodoItem( {todo, toggleTodo, deleteId} ) {

    const handleTodoChange = () => {
        toggleTodo(todo.id)
    }

    const handleDelete = () => {
        deleteId(todo.id)
    }


    const {id, task, completed} = todo;

    return (
        <li className="item">
        <input type="checkbox" onChange={handleTodoChange} />
        {`${" "}` + task}
        <button className="delete btn btn-danger" onClick={handleDelete}></button>
        </li>
    )
}
