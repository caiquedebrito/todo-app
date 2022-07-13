import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../App'
import '../styles/todo-list.scss'
import { SingleTodo } from './SingleTodo'

export default function ActiveTodo() {
  const { todos } = useContext(TodoContext)

  return (
    <>
      {
        todos.map(todo => !todo.isCompleted ? <SingleTodo todo={todo} key={todo.id}/> : "")
      }
    </>
  )
}
