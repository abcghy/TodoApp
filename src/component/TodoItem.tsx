import Todo from "../model/Todo";
import Checkbox from "./Checkbox";

interface TodoItemProps {
  todo: Todo;
  onDone: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

function TodoItem({ todo, onDone, onDelete }: TodoItemProps) {
  return (
    <div
      className="flex items-center align-center cursor-pointer py-1 px-1 rounded group hover:(bg-red-50) active:(transform translate-y-px bg-red-100)"
      onClick={(e) => {
        onDone(todo);
        e.preventDefault();
      }}
    >
      <Checkbox isChecked={todo.isDone} setChecked={() => {}} />
      <div className={`ml-1 flex-1 text-xl ${todo.isDone && "line-through"}`}>
        {todo.value}
      </div>
      <div
        className="invisible group-hover:visible text-white bg-hex-DB4D37 rounded px-1 py-0.5 select-none text-sm hover:(bg-hex-B92B15) active:(bg-hex-970903 transform translate-y-px)"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onDelete(todo);
        }}
      >
        删除
      </div>
    </div>
  );
}

export default TodoItem;
