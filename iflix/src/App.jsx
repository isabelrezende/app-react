import React, { useState } from 'react';
import Tasks from './components/Tasks';
import './App.css';

const App = () => {
  //const message = 'hello world';
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    },
  ])
  return (
    <div>
      <div className="container">
      
          <Tasks />

      </div>
      
    </div>
  );
}

export default App;
