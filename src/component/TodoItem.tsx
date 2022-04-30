import { ReactNode, useState } from "react";
import Checkbox from "./Checkbox";

interface TodoItemProps {
  // isChecked: boolean;
  children: ReactNode;
  onDelete: () => void;
}

function TodoItem({ children }: TodoItemProps) {
  const [isChecked, setChecked] = useState(false);
  return (
    <div
      className="flex items-center align-center cursor-pointer py-1 px-1 rounded hover:(bg-red-50) group"
      onClick={(e) => {
        setChecked(!isChecked);
        e.preventDefault();
      }}
    >
      <Checkbox isChecked={isChecked} setChecked={setChecked} />
      <div
        className={`ml-1 flex-1 text-xl ${isChecked && "line-through"}`}
      >
        {children}
      </div>
      <div className="invisible group-hover:visible text-white bg-hex-DB4D37 rounded px-1 py-0.5 select-none text-sm hover:(bg-hex-B92B15) active:(bg-hex-970903 transform translate-y-px)" onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        // setChecked(!isChecked);
      }}>
        删除
      </div>
    </div>
  );
}

export default TodoItem;
