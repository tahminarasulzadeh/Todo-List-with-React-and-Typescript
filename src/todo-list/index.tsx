import React from "react";
import { Todo } from "../models";
import SingleTodo from "../single-todo";
import "./app.scss";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
