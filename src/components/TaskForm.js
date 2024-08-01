// src/components/TaskForm.js

import React, { useState } from "react";
import "../css/TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() && taskDescription.trim()) {
      addTask(taskName, taskDescription);
      setTaskName("");
      setTaskDescription("");
    }
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <h2>Add New Task</h2>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Task Description"
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="task-image">
        <img
          src="https://img.freepik.com/premium-vector/woman-focused-her-work-sitting-desk-with-laptop-front-her-woman-performs-scheduled-data-control-simple-minimalist-flat-vector-illustration_538213-49502.jpg?w=900"
          alt="Task Illustration"
        />
      </div>
    </div>
  );
};

export default TaskForm;
