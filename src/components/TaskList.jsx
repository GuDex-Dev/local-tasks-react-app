import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <>
        <h2 className="mt-8 scroll-m-20 text-center text-3xl font-semibold tracking-tight">
          0 Tasks
        </h2>
      </>
    );
  } else {
    return (
      <>
        <div className="grid max-w-7xl grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4">
          {tasks.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })}
        </div>
      </>
    );
  }
}

export default TaskList;
