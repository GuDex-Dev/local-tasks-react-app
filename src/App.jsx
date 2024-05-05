import { ThemeProvider } from "@/components/theme-provider";
import TaskForm from "./components/TaskForm";
import ModeToggle from "./components/ModeToggle";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="flex flex-row-reverse p-5">
          <ModeToggle />
        </div>
        <div className="container mx-auto">
          <TaskForm />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
