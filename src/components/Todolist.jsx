import React from 'react'
import { TodoItem } from "./TodoItem";



export function Todolist({todos, toggleTodo, deleteId}) {
    return (
        <ul>
            {todos.map((todo) =>(
               <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteId={deleteId} /> 
            ))}
        </ul>
    );
}
