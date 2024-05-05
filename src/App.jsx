import { ThemeProvider } from "@/components/theme-provider";
import TaskForm from "./components/TaskForm";
import ModeToggle from "./components/ModeToggle";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="flex justify-end p-5">
          <ModeToggle />
        </div>
        <TaskForm />
      </ThemeProvider>
    </>
  );
}

export default App;
