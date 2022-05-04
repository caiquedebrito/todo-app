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
  const [completed, setCompleted] = useState([])
  const [todoActive, setTodoActive] = useState([])
  const [filterActiveCompleted, setFilterActvieCompleted] = useState(0) // 0 = all; 1 = active; 2 = complited
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="app">
      <Header />

      <TodoContext.Provider value={{todos, setTodos, completed, setCompleted, todoActive, setTodoActive, filterActiveCompleted, setFilterActvieCompleted, quantity, setQuantity}}>
        <TodoForm />
        <TodoList todos={todos} setTodos={setTodos} completed={completed} setCompleted={setCompleted} todoActive={todoActive} setTodoActive={setTodoActive}/>
        <TodoFooter />
      </TodoContext.Provider>
      
      <Footer />
    </div>
  );
}

export default App;
