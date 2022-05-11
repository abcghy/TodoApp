import { createRef, useState } from "react";
import Todo from "../model/Todo";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

interface AddInputProps {
  onAddTodo: (todo: Todo) => void;
}

function AddInput({ onAddTodo }: AddInputProps) {
  const [todo, setTodo] = useState("");

  const inputRef = createRef<HTMLInputElement>();

  function handleSubmit() {
    if (todo.length > 0) {
      onAddTodo({
        id: nanoid(),
        value: todo,
        isDone: false,
      });
    } else {
      // toast nothing added
      toast.error("内容为空");
    }
    setTodo("");
  }

  return (
    <div className="flex w-full">
      <input
        type="text"
        className="bg-white text-lg px-4 py-2 rounded mr-2 flex-grow bg-gray-200 hover:(bg-gray-100) focus:(bg-gray-100)"
        placeholder="输入今天的任务"
        data-cy="add-input"
        ref={inputRef}
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <div
        className="btn text-lg"
        data-cy="add-btn"
        onClick={() => {
          handleSubmit();
          inputRef.current?.focus();
        }}
      >
        添加
      </div>
    </div>
  );
}

export default AddInput;
