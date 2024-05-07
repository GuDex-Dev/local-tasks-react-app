import { createContext, useEffect, useState } from "react";
import json from "@/data/taskdata.json";

export const TaskContext = createContext();

export function TaskContextProvider({ children, ...props }) {
  const [tasks, setTasks] = useState(json);

  useEffect(() => {
    if (tasks == json) {
      loadLocalStorage();
    } else {
      saveLocalStorage();
    }
  }, [tasks]);

  const saveLocalStorage = () => {
    try {
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error(error);
    }
  };

  const loadLocalStorage = () => {
    if (window.localStorage.getItem("tasks")) {
      setTasks(JSON.parse(window.localStorage.getItem("tasks")));
      console.log("Antes: " + window.localStorage.getItem("tasks"));
    } else {
      console.log("Es nulo");
    }
  };

  const clearLocalStorage = () => {
    try {
      window.localStorage.removeItem("tasks");
    } catch (error) {
      console.error(error);
    }
  };

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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        editTask: editTask,
        saveLocalStorage,
        loadLocalStorage,
        clearLocalStorage,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
