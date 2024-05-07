import TaskForm from "./components/TaskForm";
import ModeToggle from "./components/ModeToggle";
import TaskList from "./components/TaskList";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <>
      <div className="flex justify-end p-5">
        <ModeToggle />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6 text-blue-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <TaskForm />
      <Separator className="mt-8" />
      <TaskList />
    </>
  );
}

export default App;
