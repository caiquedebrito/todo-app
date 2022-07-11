
import { useContext } from 'react'
import { TodoContext } from '../App'
import '../styles/todo-list.scss'
import ActiveTodo from './ActiveTodo'
import AllTodos from './AllTodos'
import CompletedTodo from './CompletedTodo'

export default function TodoList() {
  const { displayTodoList } = useContext(TodoContext)

  return (
    <div className="todo-list">
      {
        displayTodoList === "active" ? <ActiveTodo /> : displayTodoList === "completed" ? <CompletedTodo /> : <AllTodos />
      }
    </div>
  )
}
