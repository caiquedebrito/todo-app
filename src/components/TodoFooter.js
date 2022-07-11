import React, {useContext} from 'react'
import { TodoContext } from '../App'
import '../styles/todo-footer.scss'

export default function TodoFooter() {
  const {todos, setTodos, quantity, setDisplayTodoList} = useContext(TodoContext)

  function btnClicked(id, classN) {
    const btns = document.querySelectorAll(classN)

    for (let i = 0; i < btns.length; i++) {
      if (i === id) {
        btns[i].classList.add('btn-clicked')
      } else {
        btns[i].classList.remove('btn-clicked')
      }
    }
  }

  function clearCompleted() {
    setTodos(
      todos.filter(todo => !todo.isCompleted)
    )
  }

  return (
    <>
      <div className='todo-footer'>
          <div className='count-item'>
              {quantity} items
          </div>
          <div className='filter-item'>
              <a 
              className='btn-clicked'
              onClick={() => {
                setDisplayTodoList("")
                btnClicked(0, '.filter-item a')
              }}>All</a>
              <a onClick={() => {
                setDisplayTodoList("active")
                btnClicked(1, '.filter-item a')
                }}>Active</a>
              <a onClick={()=> {
                setDisplayTodoList("completed")
                btnClicked(2, '.filter-item a')
                }}>Completed</a>
          </div>
          <div className='clear-item-complited' onClick={clearCompleted}>
              Clear completed
          </div>
      </div>
      <div className='filter-item-mobile'>
          <a 
            className='btn-clicked'
          onClick={() => {
            setDisplayTodoList("")
            btnClicked(0, '.filter-item-mobile a')
            }}>All</a>
          <a onClick={() => {
            setDisplayTodoList("active")
            btnClicked(1, '.filter-item-mobile a')
            }}>Active</a>
          <a onClick={()=> {
            setDisplayTodoList("completed")
            btnClicked(2, '.filter-item-mobile a')
            }}>Completed</a>
      </div>
    </>
  )
}
