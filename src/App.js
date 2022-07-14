import { useEffect } from 'react';
import Header from './components/Header';
import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './styles/app.scss'
import { TodoContext } from './context/TodoContext';
import { useContext } from 'react';

function App() {
  const { setTodos } = useContext(TodoContext)

  useEffect(getStoragedTodos, [])
  
  function getStoragedTodos() {
    if (areThereStoragedTodos()) {
      const storagedTodos = localStorage.getItem("todos")
      setTodos(JSON.parse(storagedTodos))
    }
  }

  function areThereStoragedTodos() {
    return JSON.stringify(localStorage.getItem("todos")) !== "null"
  }

  return (
    <div className="app">
      <Header />
      <TodoForm />
      <TodoList />
      <TodoFooter />
      <Footer />
    </div>
  );
}

export default App;
