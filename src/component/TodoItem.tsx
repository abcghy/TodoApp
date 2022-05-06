import { useDraggable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import Todo from "../model/Todo";
import Checkbox from "./Checkbox";
import { CSS } from "@dnd-kit/utilities";

interface TodoItemProps {
  todo: Todo;
  onDone: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

function TodoItem({ todo, onDone, onDelete }: TodoItemProps) {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center align-center cursor-pointer py-1 px-1 relative rounded group hover:(bg-red-50) active:(transform translate-y-px bg-red-100)"
      onClick={(e) => {
        onDone(todo);
        e.preventDefault();
      }}
      {...listeners}
      {...attributes}
    >
      <Checkbox isChecked={todo.isDone} />
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
