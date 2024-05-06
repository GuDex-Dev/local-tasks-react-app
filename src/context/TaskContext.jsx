import { createContext, useState } from "react";
import json from "@/data/taskdata.json";

export const TaskContext = createContext();

export function TaskContextProvider({ children, ...props }) {
  const [tasks, setTasks] = useState(json);

  const addTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: title,
        description: description,
      },
    ]);
  };

  const mostrar = () => {
    console.log(tasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, mostrar }}>
      {children}
    </TaskContext.Provider>
  );
}
