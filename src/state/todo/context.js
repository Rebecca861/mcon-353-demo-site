import React, {useState} from 'react';

export const TodoContext = React.createContext();


export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([]);
    return(
    <TodoContext.Provider value = {{todos: todos, setTodos: setTodos}}>
        {props.children}
    </TodoContext.Provider>
    );
  }