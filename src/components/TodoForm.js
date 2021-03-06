import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import '../styles/todo-form.scss'

export default function TodoForm() {
  const [todo, setTodo] = useState('')
  const { setTodos } = useContext(TodoContext)

  function handleSubmit(e) {
    e.preventDefault()
    if (todo) {
      setTodos(prev => [{
        id: Date.now(),
        todo,
        isCompleted: false
      }, ...prev])
      setTodo('')
    }
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
