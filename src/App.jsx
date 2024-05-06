import TaskForm from "./components/TaskForm";
import ModeToggle from "./components/ModeToggle";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <div className="flex justify-end p-5">
        <ModeToggle />
      </div>
      <TaskForm />
      <TaskCard />
    </>
  );
}

export default App;
