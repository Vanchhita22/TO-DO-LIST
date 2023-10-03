import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Filters from './Components/Filters';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const markCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  return (
    <div className="app">
      <Header />
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <TodoList tasks={filteredTasks} markCompleted={markCompleted} deleteTask={deleteTask} />
      <Filters filter={filter} setFilter={setFilter} />
    </div>
  );
}


export default App;
