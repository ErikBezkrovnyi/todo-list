import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl text-center text-blue-400 mb-4 font-bold">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
            placeholder="Нове завдання"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-400 text-white px-4 py-2 rounded-r-md hover:bg-blue-500"
          >
            + ADD
          </button>
        </div>
        <div className="space-y-2">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded-md">
              <span>{task}</span>
              <button onClick={() => handleDeleteTask(index)} className="text-red-400 hover:text-red-600">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
