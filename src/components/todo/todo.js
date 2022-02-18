import React, {useState} from "react";
import "./todo.css"

export const Todo =(props)=> {
    const[inputText, setInputText]= useState("");
    const[todos, setTodos]= useState([]);
     function addTodo(){
        const newTodos =[...todos, inputText];
        setTodos(newTodos);
     }
function deleteTodo(deletedTodo){
    todos.filter(todo => todo !== deleteTodo)

}
    return ( 
    <div>
        <input type="text" onChange={(event) => setInputText(event.target.value)}  placeholder ="hi"/>
            <button onClick ={addTodo}>Add</button>
             {todos.map((todo) => (
            <TodoItem text ={todo} deleteTodo={deleteTodo}/>
            ))}
            <div>inputText</div>
        
    </div>
);
        };
        const TodoItem = (props) =>{
            return <div>{props.text}
           <button onClick={() => props.deleteTodo(props.text)}>delete</button> </div>

        };
export default Todo;