import React, {useContext} from 'react'
import { TodoContext } from '../App'
import '../styles/todo-footer.scss'

export default function TodoFooter() {
  const {todos, setTodos, complited, setComplited, todoActive, setTodoActive} = useContext(TodoContext)

  function clearComplited() {
    const todoComplited = []
    todos.forEach(item => {
      if (complited.includes(item)) {
        todoComplited.push(item)
      }
    })
    
    const todoNotComplited = todos.filter(item => {
      if (!todoComplited.includes(item)) {
        return item
      }
    })
    
    setTodos([...todoNotComplited])
    setComplited([])
  }

  return (
    <div className='todo-footer'>
        <div className='count-item'>
            {todos.length} items
        </div>
        <div className='filter-item'>
            <span>All</span>
            <span onClick={() => console.log(todoActive)}>Active</span>
            <span onClick={()=> console.log(complited)}>Complited</span>
        </div>
        <div className='clear-item-complited' onClick={clearComplited}>
            Clear complited
        </div>
    </div>
  )
}
