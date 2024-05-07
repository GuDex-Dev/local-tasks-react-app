import TaskForm from "./components/TaskForm";
import ModeToggle from "./components/ModeToggle";
import TaskList from "./components/TaskList";
import { Separator } from "@/components/ui/separator";
import { useContext, useEffect } from "react";
import { TaskContext } from "@/context/TaskContext";

function App() {
  return (
    <>
      <div className="flex justify-end p-5">
        <ModeToggle />
      </div>
      <TaskForm />
      <Separator className="mt-8" />
      <TaskList />
    </>
  );
}

export default App;
