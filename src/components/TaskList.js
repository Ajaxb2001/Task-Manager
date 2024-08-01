// src/components/TaskList.js

import React from "react";
import Task from "./Task";
import "../css/TaskList.css";

const TaskList = ({ tasks, toggleTask, deleteTask, updateTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
