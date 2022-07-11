import React, { useContext, useEffect } from "react";
import { TodoContext } from "../App";
import "../styles/todo-list.scss";
import { SingleTodo } from "./SingleTodo";

export default function AllTodos() {
  const {
    todos,
    setQuantity
  } = useContext(TodoContext);

  useEffect(() => {
    setQuantity(todos.length)
  }, [todos])



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
