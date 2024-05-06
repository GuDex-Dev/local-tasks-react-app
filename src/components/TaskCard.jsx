import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";
import { TaskContext } from "@/context/TaskContext";
import { useContext } from "react";
import { cn } from "@/lib/utils";

function TaskCard({ task, className }) {
  const { editTask, deleteTask } = useContext(TaskContext);

  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader className="">
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p>{task.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="secondary"
          className="h-9"
          onClick={() => console.log("Editing")}
        >
          More
        </Button>
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
