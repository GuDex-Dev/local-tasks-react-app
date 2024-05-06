import TaskForm from "./components/TaskForm";
import ModeToggle from "./components/ModeToggle";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="flex justify-end p-5">
        <ModeToggle />
      </div>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
