import TodoItem from "./TodoItem";
import Todo from "../model/Todo";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface TodoItemListProps {
  todoList: Todo[];
  onDone: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onDragEnd: (oldId: string, newId: string) => void;
}

function TodoItemList({
  todoList,
  onDone,
  onDelete,
  onDragEnd,
}: TodoItemListProps) {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={(e) => {
        const { active, over } = e;
        if (over !== null && active.id !== over?.id) {
          onDragEnd(active.id, over.id);
        }
      }}
    >
      <SortableContext items={todoList} strategy={verticalListSortingStrategy}>
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
      </SortableContext>
    </DndContext>
  );
}

export default TodoItemList;
