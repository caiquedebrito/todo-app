import Header from './components/Header';
import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './styles/app.scss'
import { TodoContextProvider } from './context/TodoContext';

function App() {

  return (
    <div className="app">
      <TodoContextProvider>
        <Header />
        <TodoForm />
        <TodoList />
        <TodoFooter />
        <Footer />
      </TodoContextProvider>
    </div>
  );
}

export default App;
