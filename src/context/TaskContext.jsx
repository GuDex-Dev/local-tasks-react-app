import { createContext, useState, useContext } from "react";
import dataJson from "../data/taskdata.json";

export const TaskContext = createContext();

export function TaskContextProvider({ children, ...props }) {
  return <TaskContext.Provider value={1}>{children}</TaskContext.Provider>;
}

export const useData = () => useContext(TaskContext);
