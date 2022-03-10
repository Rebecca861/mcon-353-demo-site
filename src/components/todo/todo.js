import React, {useContext, useState} from "react";
import "./todo.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ClearIcon from '@mui/icons-material/Clear';
import {todoContext} from '../app/App';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { text } from "express";

export const Todo = () => {
    const [inputText, setInputText] = useState('');
    const {todos, setTodos} = useContext(todoContext);
    
    function addTodo(){
        const newTodos = [...todos, {text: inputText, isChecked: false}];
        setTodos(newTodos);
        setInputText("");
    }

    function deleteTodo(deletedTodo){
        setTodos(todos.filter(todo => todo.text !== deletedTodo));
    }

    function checkOffTodo(setChecked){
        setTodos(todos.forEach(todo => {if (todo.text === setChecked) {todo.isChecked = true;}}));
        /*console.log(setChecked);
        todos.forEach(todo => {
            if (todo.text === setChecked) {
                console.log("found it!");
                todo = {text: setChecked, isChecked: true};
                console.log("changed " + todo.text + " to setChecked " + todo.isChecked);
                return;
            }
        });*/
      }

      function getIsChecked(todoText) {
          todos.forEach(todo => {
              if (todo.text === todoText) {
                  return todo.isChecked;
              }
          })
      }

    //   function uncheckTodo(setUnchecked) {
    //       todos.forEach(todo => {
    //           if (todo.text === setUnchecked) {
    //               todo.isChecked = false;
    //               return;
    //           }
    //       });
    //   }



    return(
        <div id="inputDiv">
        <h1>To-Do List</h1>
         
        <TextField id="outlined-basic" label="I need to..." variant="outlined" onChange = {(event)=> setInputText(event.target.value)}/>
        <br/><br/>
        <Button variant="contained" onClick={addTodo} size="large">Add</Button>
        
        {todos.map((todo) =>(
             <ToDoItem getIsChecked ={getIsChecked} text ={todo.text} isChecked = {(text)=getIsChecked(text)} deleteTodo ={deleteTodo} checkOffTodo ={checkOffTodo}/>
        ))}

    </div>
    );
};

const ToDoItem = (props) => { 

    const label = { inputProps: { 'aria-label': '' } };
    const isChecked = props.getIsChecked(props.text);

   return <Grid  container spacing ={0} className = "grid">
        <Grid item xs ={0}>
        <Checkbox {...label} color="secondary" 
        name="text"
        value=""
        onChange={() => props.checkOffTodo(props.text)}
        checked = {isChecked}/>
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