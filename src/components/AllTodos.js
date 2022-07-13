import React, { useContext } from "react";
import { TodoContext } from "../App";
import "../styles/todo-list.scss";
import { SingleTodo } from "./SingleTodo";

export default function AllTodos() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {
        todos.map(todo => (
          <SingleTodo todo={todo} key={todo.id}/>
        ))
      }
    </>
  );
}
