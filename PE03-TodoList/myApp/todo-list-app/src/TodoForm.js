// TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (taskInput.trim()) {
      addTodo(taskInput);
      setTaskInput('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="todo-form">
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter a new task"
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
