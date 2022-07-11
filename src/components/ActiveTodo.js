import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../App'
import '../styles/todo-list.scss'
import { SingleTodo } from './SingleTodo'

export default function ActiveTodo() {
  const { todos, setQuantity } = useContext(TodoContext)

  useEffect(() => {
    let quantity = 0
    todos.forEach(todo => {
      if (!todo.isCompleted) {
        quantity++
      }
    })
    
    setQuantity(quantity)
  }, [todos])

  return (
    <>
      {
        todos.map(todo => !todo.isCompleted ? <SingleTodo todo={todo} key={todo.id}/> : "")
      }
    </>
  )
}
