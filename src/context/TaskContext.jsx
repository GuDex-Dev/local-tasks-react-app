import { createContext, useState } from "react";
import json from "@/data/taskdata.json";

export const TaskContext = createContext();

export function TaskContextProvider({ children, ...props }) {
  const [tasks, setTasks] = useState(json);

  const addTask = (title, description) => {
    if (tasks.length === 0) {
      setTasks([
        {
          id: 1,
          title: title,
          description: description,
        },
      ]);
    } else {
      setTasks([
        ...tasks,
        {
          id: tasks[tasks.length - 1].id + 1,
          title: title,
          description: description,
        },
      ]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const editTask = (id, title, description) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              id: id,
              title: title,
              description: description,
            }
          : task,
      ),
    );
  };

  const test = () => {
    console.log(tasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, editTask: editTask, test }}
    >
      {children}
    </TaskContext.Provider>
  );
}
