import React from "react";

import "./App.css";
import NewTodo from "./Components/Todo/NewTodo";
import Todo from "./Components/Todo/TodoList";

const App: React.FC = () => {
  const todos = [{id:"1",text:"todo1"},{id:"2",text:"todo2"}]

  const onAddTodoHandler = (text:string) => {
  console.log(text);
  
  }

  return (
    <div className="App">
      <Todo items={todos}/>
      <NewTodo addTodo={onAddTodoHandler}/>
    </div>
  );
};

export default App;
