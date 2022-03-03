import './App.css';
import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating'
import Home from '../home/home'
import {Todo} from '../todo/todo'
import {Header} from '../header/header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


//const todoList = {};

/*const reducer = (state, action) => {
  switch (action) {
    case "add":
      return setTodos([...todoList, {text: inputText, isChecked: false}]);
    case "delete":
      return setTodos(todoList.filter(todo => todo.text !== deletedTodo));
    case "setChecked":
      return checkedTodo.isChecked = !checkedTodo.isChecked;
    default:
      return state;
  }
};*/


export const todoContext = React.createContext();

function App() {
  
  const [todos, setTodos] = useState([]);

  

  

  return (
    <div>
      <todoContext.Provider value={{todos, setTodos}}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>  
          <Route path = "/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
      </todoContext.Provider>

    </div>
  );
  }

export default App;
