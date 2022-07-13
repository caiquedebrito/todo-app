import Header from './components/Header';
import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './styles/app.scss'
import { createContext, useState} from 'react';

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([])
  const [todoQuantity, setTodoQuantity] = useState(0)
  const [displayTodoList, setDisplayTodoList] = useState("")

  return (
    <div className="app">
      <Header />
      <TodoContext.Provider value={{todos, setTodos, todoQuantity, setTodoQuantity, displayTodoList, setDisplayTodoList}}>
        <TodoForm />
        <TodoList />
        <TodoFooter />
      </TodoContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
