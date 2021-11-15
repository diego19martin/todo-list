import React, {useState} from "react";
import { Todolist } from "./Todolist";

export function App(){

    const [todos, settodos] = useState([
        {id:1, task:'Tarea 1', Completed:true},
]);
    return (
        <>
            <Todolist todos={todos} />
            <input type="text" placeholder="Nueva Tarea" />
        </>
    ); 
    
}