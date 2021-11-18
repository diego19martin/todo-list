import React, {useState, useRef} from "react";
import { Todolist } from "./components/Todolist";

var id = 1;
export function App(){

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id)
        
        todo.completed = !todo.completed;

        settodos(newTodos);

    };

    const todoTaskRef = useRef();

    function deleteId (id) {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        const index = newTodos.indexOf(todo);
        newTodos.splice(index,1); 
        settodos(newTodos);

    }

    function addTarea() {

        id++;
    
        const task = todoTaskRef.current.value;

        if (task===""){
            return;
        }

        settodos([...todos, {
            id:id,
            task: task,
            completed: false
        }])

        todoTaskRef.current.value="";

    }

    const [todos, settodos] = useState([
        {id:id, task: 'Tarea 1', Completed:false},
]);
    return (
        <>
            
            <input className="list input-group-text" ref={todoTaskRef} type = "text" placeholder = "Nueva Tarea" />
            <button className="list btn btn-primary" onClick = {addTarea} >Cargar nueva tarea</button>
            <Todolist className="list" todos={todos} toggleTodo={toggleTodo} deleteId={deleteId}/>
            <div className="list">Te quedan {todos.filter((todo) => !todo.completed).length} pendientes</div>
            
        </>
    ); 
    
}