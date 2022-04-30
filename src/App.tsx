import { ReactNode, useState } from "react";
import TodoItem from "./component/TodoItem";

interface TodoItemListProps {
  todoList: string[];
}

function TodoItemList({ todoList }: TodoItemListProps) {
  return (
    <div className="w-full mt-4">
      {todoList.map((todo, index) => (
        <TodoItem key={index} onDelete={() => {}}>
          {todo}
        </TodoItem>
      ))}
    </div>
  );
}

interface AddInputProps {
  onAddTodo: (todo: string) => void;
}

function AddInput({ onAddTodo }: AddInputProps) {
  const [todo, setTodo] = useState("");
  return (
    <div className="flex w-full">
      <input
        type="text"
        className="bg-white text-lg px-4 py-2 rounded mr-2 flex-grow bg-gray-200"
        placeholder="输入今天的任务"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <div
        className="btn text-lg"
        onClick={() => {
          if (todo.length > 0) {
            onAddTodo(todo);
          } else {
            // toast nothing added
          }
          setTodo("");
        }}
      >
        添加
      </div>
    </div>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState<string[]>(["读一本书"]);
  return (
    <div className="w-160 rounded-xl bg-white mx-auto p-10 shadow-lg">
      <AddInput
        onAddTodo={(todo) => {
          setTodos([...todos, todo]);
        }}
      />
      <TodoItemList todoList={todos} />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-100 h-screen pt-20">
      <TodoApp />
    </div>
  );
}

export default App;
