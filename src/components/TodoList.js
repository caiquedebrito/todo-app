
import { useContext } from 'react'
import { TodoContext } from '../App'
import '../styles/todo-list.scss'
import ActiveTodo from './ActiveTodo'
import AllTodos from './AllTodos'
import CompletedTodo from './CompletedTodo'

export default function TodoList() {
  const { filterActiveCompleted } = useContext(TodoContext)

  return (
    <>
      {
        filterActiveCompleted === 0 ? <AllTodos /> : filterActiveCompleted === 1 ? <ActiveTodo /> : <CompletedTodo />
      }
    </>
  )
}
