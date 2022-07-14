import { createContext, useState } from "react";

export const TodoContext = createContext()

export function TodoContextProvider({ children }) {
    const [todos, setTodos] = useState([])
    const [todoQuantity, setTodoQuantity] = useState(0)
    const [displayTodoList, setDisplayTodoList] = useState("")

    return <TodoContext.Provider value={{ todos, setTodos, todoQuantity, setTodoQuantity, displayTodoList, setDisplayTodoList }}>{ children }</TodoContext.Provider>
}