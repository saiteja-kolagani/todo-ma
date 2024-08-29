import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => setTodos([...todos, todo]);

  return (
    <div className="App">
      <h1>To-Do Application</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList />
    </div>
  );
}

export default App;
