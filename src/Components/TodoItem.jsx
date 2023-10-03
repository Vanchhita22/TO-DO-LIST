import React from 'react';

function TodoItem({ task, markCompleted, deleteTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={markCompleted}
      />
      <span>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TodoItem;
