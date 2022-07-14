import React from 'react';
import { createRoot } from "react-dom/client";

import App from './App';
import { TodoContextProvider } from './context/TodoContext';
import './styles/global.scss'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
