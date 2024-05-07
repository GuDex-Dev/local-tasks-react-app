import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TaskContext } from "@/context/TaskContext";
import { useContext, useState } from "react";

function TaskForm() {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <Card className="mx-auto w-[350px]">
      <CardHeader>
        <CardTitle>Create Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="w-full space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Title of your task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Description of your task"
              rows="2"
              className="min-h-10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="w-full" onClick={handleCreate}>
          Create
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TaskForm;
