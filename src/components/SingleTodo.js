import React, { useContext } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { TodoContext } from '../App';
import iconDelete from '../images/icon-delete.svg'
import iconEdit from '../images/icon-edit.svg'

export function SingleTodo({ todo }) {
    const { todos, setTodos } = useContext(TodoContext)
    const [edit, setEdit] = useState(false)
    const [editedTodo, setEditedTodo] = useState(todo.todo)
    const inputRef = useRef(null)

    function checkTask(todoID) {
        setEdit(false)
        setTodos(
          todos.map(todo => todo.id === todoID ? {...todo, isCompleted: !todo.isCompleted} : todo)
        )
      }

      function removeTask(todoID) {
        setTodos(
          todos.filter(todo => todo.id !== todoID)
        )
      }
    
    function handleSubmit(event, todoID) {
        event.preventDefault()
        setTodos(
            todos.map(todo => todo.id === todoID ? {...todo, todo: editedTodo} : todo)
        )
        setEdit(false)
    }

    function handleEdit(event) {
        setEditedTodo(event.target.value)
    }

    function editTodo() {
        if (!todo.isCompleted) {
            setEdit(!edit)
            inputRef.current.focus()
        }
    }

  return (
    <form className={`todo ${todo.isCompleted ? "check-task" : ""}`} onSubmit={(event) => handleSubmit(event, todo.id)}>
        <div className="check-btn" onClick={() => checkTask(todo.id)}>
            <div className="img-container"></div>
        </div>
        <div className="todo-content">
        {
            edit ? <input type="text" value={editedTodo} onChange={handleEdit} ref={inputRef}/> : <div>{todo.todo}</div>
        }
        </div>
        <div className="container-btn">
          <div onClick={editTodo}>
            <img src={iconEdit} />
          </div>
          <div onClick={() => removeTask(todo.id)}>
            <img src={iconDelete}/>
          </div>
        </div>
    </form>
  )
}
