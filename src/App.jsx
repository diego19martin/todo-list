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
            <Todolist todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoTaskRef} type = "text" placeholder = "Nueva Tarea" />
            <button onClick = {addTarea} >Cargar nueva tarea</button>
            <button onClick = {addTarea} >Eliminar Tarea</button>
            <div>Te quedan {todos.filter((todo) => !todo.completed).length} pendientes</div>
            
        </>
    ); 
    
}