import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating'
import Home from '../home/home'
import Todo from '../todo/todo'
import {Header} from '../header/header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>  
          <Route path = "/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
  }

export default App;
