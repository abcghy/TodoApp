import Todo from "../model/Todo";
import TodoItemList from "./TodoItemList";
import produce from "immer";
import AddInput from "./AddInput";
import useLocalStorage from "../util/hook";
import { arrayMove } from "@dnd-kit/sortable";

function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  function addTodo(todo: Todo) {
    setTodos(
      produce((draft) => {
        draft.push(todo);
      })
    );
  }

  function toggleDone(todo: Todo) {
    setTodos(
      produce((draft) => {
        const todoInOld = draft.find((t) => t.id === todo.id);
        if (todoInOld) {
          todoInOld.isDone = !todoInOld.isDone;
        }
      })
    );
  }

  function deleteTodo(todo: Todo) {
    setTodos(
      produce((draft) => {
        let index = draft.findIndex((t) => t.id === todo.id);
        if (index > -1) {
          draft.splice(index, 1);
        }
      })
    );
  }

  function moveTodo(oldId: string, newId: string) {
    setTodos(
      produce((draft) => {
        let oldIndex = draft.findIndex((t) => t.id === oldId);
        let newIndex = draft.findIndex((t) => t.id === newId);
        if (oldIndex == newIndex) {
          return;
        }
        const oldTodo = draft.splice(oldIndex, 1);
        draft.splice(newIndex, 0, oldTodo[0]);
      })
    );
  }

  return (
    <div className="w-160 rounded-xl bg-white mx-auto p-10 shadow-lg">
      <AddInput onAddTodo={addTodo} />
      <TodoItemList
        todoList={todos}
        onDone={toggleDone}
        onDelete={deleteTodo}
        onDragEnd={moveTodo}
      />
    </div>
  );
}

export default TodoApp;
