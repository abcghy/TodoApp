import { Toaster } from "react-hot-toast";
import TodoApp from "./component/TodoApp";

function App() {
  return (
    <div className="bg-gray-100 h-screen pt-20">
      <TodoApp />
      <Toaster />
    </div>
  );
}

export default App;
