// src/components/Task.js

import React, { useState } from "react";
import "../css/Task.css";

const Task = ({ task, toggleTask, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate || "");
  const [priority, setPriority] = useState(task.priority || "Medium");

  const handleSave = () => {
    updateTask(task.id, name, description, task.status, dueDate, priority);
    setIsEditing(false);
  };

  return (
    <div className={`task-container priority-${priority.toLowerCase()}`}>
      <div className="task-content">
        <span className={`task-name ${task.completed ? "completed" : ""}`}>
          {isEditing ? (
            <input
              className="task-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            task.name
          )}
        </span>
        <p className="task-description">
          {isEditing ? (
            <textarea
              className="task-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (
            task.description
          )}
        </p>
        <small className="task-date">Created At: {task.createdAt}</small>
        {isEditing && (
          <>
            <input
              className="task-due-date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <select
              className="task-priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </>
        )}
      </div>
      <div className="task-actions">
        {isEditing ? (
          <>
            <button className="task-button save" onClick={handleSave}>
              Save
            </button>
            <button
              className="task-button cancel"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="task-button edit"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="task-button toggle"
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              className="task-button delete"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
