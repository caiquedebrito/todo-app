import React, { useContext, useEffect } from 'react'
import { TodoContext } from '../App'
import '../styles/todo-list.scss'
import iconCross from '../images/icon-cross.svg'

export default function ActiveTodo() {
  const {todos, setTodos, completed, setCompleted, todoActive, setTodoActive, setQuantity} = useContext(TodoContext)

  useEffect(() => {
    setQuantity(todoActive.length || 0)
}, [todos, todoActive, completed])

  function checkTask(id, name) {
    const n = id.toString() // converte em string
    const checkTask = 'check-task'

    const task = document.querySelector(`.todo-${n}-${name[0]}`) // pega a task com uma classe única
    task.classList.toggle(checkTask) // quando clicado adiciona e remove o estado de completado na task

    if (task.className.includes(checkTask)) {
      // Adiciona o todo completado
      setCompleted(prev => [...prev, name])

      // Tira o status ativo do todo
      const index = todoActive.indexOf(name)
      todoActive.splice(index, 1)
      setTodoActive([...todoActive])
    } else {
      // Remove o todo completado
      const index = completed.indexOf(name)
      completed.splice(index, 1)
      setCompleted(()=> [...completed])

      // Adiciona o todo como ativo
      setTodoActive(prev => [...prev, name])
    }

  }

  function removeTask(key, name){
    todoActive.splice(key, 1)
    setTodoActive(() => [...todoActive])

    const index = todos.indexOf(name)
    todos.splice(index, 1)
    setTodos(() => [...todos])
  }

  return (
    <div className='todo-list'>
      {
        todoActive.map((todo, key) => 
        <div className={"todo todo-" + key + '-' + todo[0]} key={key}>
          <div className='check-btn'onClick={() => checkTask(key, todo)} >
            <div className='img-container'></div>
          </div>
          {todo}
          <img src={iconCross} onClick={()=> removeTask(key, todo)}/>
        </div>)
      }
    </div>
  )
}
