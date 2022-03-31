import "./App.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Home from "../home/home";
import { Todo } from "../todo/todo";
import { Header } from "../header/header";
import { Chat } from "../chat/chat";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TodoProvider } from "../../state/todo/context";

function App() {
  return (
    <div>
      <TodoProvider>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
          </Routes>
        </HashRouter>
      </TodoProvider>
    </div>
  );
}

export default App;
