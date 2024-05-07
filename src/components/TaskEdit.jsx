import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TaskContext } from "@/context/TaskContext";
import { useContext, useState } from "react";

function TaskEdit({ task }) {
  const { editTask } = useContext(TaskContext);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    editTask(task.id, title, description);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" className="h-9">
          More
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Task</AlertDialogTitle>
        </AlertDialogHeader>
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
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleEdit()}>
            Edit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default TaskEdit;
