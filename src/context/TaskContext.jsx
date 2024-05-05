import { createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  return (
    <TaskContext.Provider value={4}>{props.children}</TaskContext.Provider>
  );
}
