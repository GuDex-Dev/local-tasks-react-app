import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <div className="grid max-w-7xl grid-cols-2 gap-4 p-10 md:grid-cols-3 lg:grid-cols-4">
        {tasks.map((task) => {
          return (
            <TaskCard className="mx-auto max-w-96" key={task.id} task={task} />
          );
        })}
      </div>
    </>
  );
}

export default TaskList;
