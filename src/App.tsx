import React, { useState } from "react";
import InputField from "./todos";
import TodoList from "./todo-list";
import { Todo } from "./models";
import "./App.scss";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };



  return (
    <div className="App">
      <p>My To do List</p>
      <div className="todo-form">
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
       </div>
       <div className="list">
       <TodoList todos={todos} setTodos={setTodos}/>
        </div>

    </div>
  );
};

export default App;
