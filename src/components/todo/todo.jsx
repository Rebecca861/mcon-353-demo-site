import React, { useContext, useState } from "react";
import "./todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import { TodoContext } from "../../state/todo/context";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Todo = () => {
  const [inputText, setInputText] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  function addTodo() {
    setTodos([...todos, { text: inputText, isChecked: false }]);
    setInputText("");
  }

  function deleteTodo(deletedTodo) {
    setTodos(todos.filter((todo) => todo.text !== deletedTodo));
  }



  function handleChange(todoToCheck) {
    const updatedTodos = todos.map((todo) => {
      if (todo.text === todoToCheck) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    })

    setTodos(updatedTodos);
  }

  return (
    <div id="inputDiv">
      <h1>To-Do List</h1>

      <TextField
        id="outlined-basic"
        label="I need to..."
        //placeholder="Add Task"
        variant="outlined"
        onChange={(event) => setInputText(event.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" onClick={addTodo} size="large">
        Add
      </Button>

      {todos.map((todo) => (
        <TodoItem
          text={todo.text}
          isChecked={todo.isChecked}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

const TodoItem = (props) => {
  const label = { inputProps: { "aria-label": "" } };


  
  return (
    <Grid container spacing={0} className="grid">
      <Grid item xs={0}>
        <Checkbox
          {...label}
          checked={props.isChecked}
          color="secondary"
          name="text"
          value=""
          onChange={() => props.handleChange(props.text)}
        />
      </Grid>
      <Grid item xs={1}>
        {props.text}
      </Grid>
      <Grid item xs={1}>
        <Button onClick={() => props.deleteTodo(props.text)}>
          {" "}
          <ClearIcon />{" "}
        </Button>
      </Grid>
    </Grid>
  );
};

//export default Todo;
