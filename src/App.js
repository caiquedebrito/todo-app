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
  const [complited, setComplited] = useState([])
  const [todoActive, setTodoActive] = useState([])

  return (
    <div className="app">
      <Header />

      <TodoContext.Provider value={{todos, setTodos, complited, setComplited, todoActive, setTodoActive}}>
        <TodoForm />
        <TodoList todos={todos} setTodos={setTodos} complited={complited} setComplited={setComplited} todoActive={todoActive} setTodoActive={setTodoActive}/>
        <TodoFooter />
      </TodoContext.Provider>
      
      <Footer />
    </div>
  );
}

export default App;
