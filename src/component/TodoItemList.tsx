import TodoItem from "./TodoItem";
import Todo from "../model/Todo";

interface TodoItemListProps {
  todoList: Todo[];
  onDone: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

function TodoItemList({ todoList, onDone, onDelete }: TodoItemListProps) {
  return (
    <div className="w-full mt-4">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDone={onDone}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoItemList;
