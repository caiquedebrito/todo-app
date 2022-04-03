import React, { useContext, useState } from 'react'
import { TodoContext } from '../App'
import '../styles/todo-form.scss'

export default function TodoForm() {
  const [todo, setTodo] = useState('')
  const {todos, setTodos, complited, setComplited, todoActive, setTodoActive} = useContext(TodoContext)

  function handleSubmit(e) {
    e.preventDefault()
    todo && setTodos(prev => [...prev, todo])
    todo && setTodoActive(prev => [...prev, todo])
    setTodo('')
  }

  function handleChange(e) {
    setTodo(e.target.value)
  }

  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            <div className='check-btn'></div>
            <input type="text" placeholder='Create a new to do...' value={todo} onChange={handleChange} maxLength={92}/>
        </form>
    </div>
  )
}
