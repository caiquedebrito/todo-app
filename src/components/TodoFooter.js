import React, {useContext} from 'react'
import { TodoContext } from '../App'
import '../styles/todo-footer.scss'

export default function TodoFooter() {
  const {todos, setTodos, completed, setCompleted, setFilterActvieCompleted, quantity} = useContext(TodoContext)

  function btnClicked(id) {
    const btns = document.querySelectorAll('.filter-item a')

    for (let i = 0; i < btns.length; i++) {
      if (i === id) {
        btns[i].classList.add('btn-clicked')
      } else {
        btns[i].classList.remove('btn-clicked')
      }
    }
  }

  function clearCompleted() {
    const todoCompleted = []
    todos.forEach(item => {
      if (completed.includes(item)) {
        todoCompleted.push(item)
      }
    })
    
    const todoNotCompleted = todos.filter(item => {
      if (!todoCompleted.includes(item)) {
        return item
      }
    })
    
    setTodos([...todoNotCompleted])
    setCompleted([])
  }

  return (
    <>
      <div className='todo-footer'>
          <div className='count-item'>
              {quantity} items
          </div>
          <div className='filter-item'>
              <a onClick={() => {
                setFilterActvieCompleted(0)
                btnClicked(0)
              }}>All</a>
              <a onClick={() => {
                setFilterActvieCompleted(1)
                btnClicked(1)
                }}>Active</a>
              <a onClick={()=> {
                setFilterActvieCompleted(2)
                btnClicked(2)
                }}>Completed</a>
          </div>
          <div className='clear-item-complited' onClick={clearCompleted}>
              Clear completed
          </div>
      </div>
      <div className='filter-item-mobile'>
          <a onClick={() => setFilterActvieCompleted(0)}>All</a>
          <a onClick={() => setFilterActvieCompleted(1)}>Active</a>
          <a onClick={()=> setFilterActvieCompleted(2)}>Completed</a>
      </div>
    </>
  )
}
