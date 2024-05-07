import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { TaskContext } from "@/context/TaskContext";
import { useContext } from "react";
import TaskEdit from "@/components/TaskEdit";

function TaskCard({ task, className }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <Card className="flex flex-col">
      <CardHeader className="">
        <CardTitle className="max-w-sm break-words">{task.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p>{task.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <TaskEdit task={task} />
        <Button
          className="h-9"
          variant="destructive"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
