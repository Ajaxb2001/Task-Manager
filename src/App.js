import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Login from "./components/Login"; // Import Login component
import Signup from "./components/Signup"; // Import Signup component
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName, taskDescription) => {
    const newTask = {
      id: uuidv4(),
      name: taskName,
      description: taskDescription,
      completed: false,
      status: "TO-DO",
      createdAt: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/tasks"
            element={
              <>
                <TaskForm addTask={addTask} />
                <TaskList
                  tasks={tasks}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              </>
            }
          />
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
          <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
