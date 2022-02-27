import React, {useState} from "react";
import "./todo.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ClearIcon from '@mui/icons-material/Clear';

export const Todo = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    
    function addTodo(){
        const newTodos = [...todos, {text: inputText, isChecked: false}];
        setTodos(newTodos);
        setInputText(" ");
    }

    function deleteTodo(deletedTodo){
        setTodos(todos.filter(todo => todo.text !== deletedTodo))
    }
    function setChecked(checkedTodo){
        checkedTodo.isChecked = !checkedTodo.isChecked;
    } 


    return(
        <div id="inputDiv">
        <h1>To-Do List</h1>
         
        <input type= "text" onChange = {(event)=> setInputText(event.target.value)} placeholder="I need to..."/>
        <button onClick={addTodo}> Add</button>
        
        {todos.map((todo) =>(
             <ToDoItem text ={todo.text} deleteTodo ={deleteTodo}/>
        ))}

    </div>
    );
};

const ToDoItem = (props) => { 
   return <Grid  container spacing ={0} className = "grid">
        <Grid item xs ={0}>
        <input 
         type = "checkbox"
        name="text"
        value=""
        onChange={() => props.setIsChecked(props.text)}
        />
        </Grid>
        <Grid item xs={1}>
         {props.text}
         </Grid>
        <Grid item xs={1}>
        <Button onClick={() => props.deleteTodo(props.text)}> <ClearIcon/> </Button>
        </Grid>
        </Grid>;
    }


export default Todo;