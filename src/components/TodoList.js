import { useEffect } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import '../styles/todo-list.scss'
import ActiveTodo from './ActiveTodo'
import AllTodos from './AllTodos'
import CompletedTodo from './CompletedTodo'

export default function TodoList() {
  const { todos, setTodoQuantity, displayTodoList } = useContext(TodoContext)

  useEffect(() => {
    let todoQuantity

    if (displayTodoList === "active") {
      todoQuantity = 0
      todos.forEach(todo => {
        if (!todo.isCompleted) {
          todoQuantity++
        }
      })
      return setTodoQuantity(todoQuantity)
    }

    if (displayTodoList === "completed") {
      todoQuantity = 0
      todos.forEach(todo => {
        if (todo.isCompleted) {
          todoQuantity++
        }
      })
      return setTodoQuantity(todoQuantity)
    }

    if (displayTodoList === "") {
      todoQuantity = todos.length
      return setTodoQuantity(todoQuantity)
    }
  }, [todos, displayTodoList])

  return (
    <div className="todo-list">
      {
        displayTodoList === "active" ? <ActiveTodo /> : displayTodoList === "completed" ? <CompletedTodo /> : <AllTodos />
      }
    </div>
  )
}
