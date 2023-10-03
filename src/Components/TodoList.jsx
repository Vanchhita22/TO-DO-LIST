import React from 'react';
import TodoItem from './TodoItem';


function TodoList({ tasks, markCompleted, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          markCompleted={() => markCompleted(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
