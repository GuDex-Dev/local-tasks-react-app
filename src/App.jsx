import { ThemeProvider } from "@/components/theme-provider";
import TaskForm from "./components/TaskForm";
import ModeToggle from "./components/ModeToggle";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="flex justify-end p-5">
          <ModeToggle />
        </div>
        <TaskForm />
        <TaskCard />
      </ThemeProvider>
    </>
  );
}

export default App;
