import React, { useContext } from "react";
import { TodoContext } from "../App";
import "../styles/todo-list.scss";
import iconCross from "../images/icon-cross.svg";

export default function AllTodos() {
  const {
    todos,
    setTodos,
    completed,
    setCompleted,
    todoActive,
    setTodoActive,
    setQuantity
  } = useContext(TodoContext);

  setQuantity(todos.length)

  function checkTask(id, name) {
    const n = id.toString(); // converte em string
    const checkTask = "check-task";

    const task = document.querySelector(`.todo-${n}-${name[0]}`); // pega a task com uma classe única
    task.classList.toggle(checkTask); // quando clicado adiciona e remove o estado de completado na task

    if (task.className.includes(checkTask)) {
      // Adiciona o todo completado
      setCompleted((prev) => [...prev, name]);

      // Tira o status ativo do todo
      const index = todoActive.indexOf(name);
      todoActive.splice(index, 1);
      setTodoActive([...todoActive]);
    } else {
      // Remove o todo completado
      const index = completed.indexOf(name);
      completed.splice(index, 1);
      setCompleted(() => [...completed]);

      // Adiciona o todo como ativo
      setTodoActive((prev) => [...prev, name]);
    }
  }

  function removeTask(key, name) {
    todos.splice(key, 1);
    setTodos(() => [...todos]);

    const index = todoActive.indexOf(name)
    todoActive.splice(index, 1)
    setTodoActive(() => [...todoActive])

    if (completed.includes(name)) {
      const index = completed.indexOf(name)
      completed.splice(index, 1)
      setCompleted(() => [...completed])
    }
  }

  return (
    <div className="todo-list">
      {todos.map((todo, key) => {
        if (completed.includes(todo)) {
          return (
            <div
              className={"check-task todo todo-" + key + "-" + todo[0]}
              key={key}
            >
              <div className="check-btn" onClick={() => checkTask(key, todo)}>
                <div className="img-container"></div>
              </div>
              {todo}
              <img src={iconCross} onClick={() => removeTask(key, todo)} />
            </div>
          );
        } else {
          return <div className={"todo todo-" + key + "-" + todo[0]} key={key}>
            <div className="check-btn" onClick={() => checkTask(key, todo)}>
              <div className="img-container"></div>
            </div>
            {todo}
            <img src={iconCross} onClick={() => removeTask(key, todo)} />
          </div>;
        }
      })}
    </div>
  );
}
