import TodoItem from "../component/TodoItem";
import renderer from "react-test-renderer";
import Todo from "../model/Todo";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("test todo item display and listener", () => {
  let todo: Todo = {
    id: "1",
    value: "Read a book every month",
    isDone: false,
  };

  function onDone(todo: Todo) {
    console.log("onDone");
  }

  function onDelete(todo: Todo) {
    console.log("onDelete");
  }

  let component = renderer.create(
    <TodoItem todo={todo} onDone={onDone} onDelete={onDelete} />
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  //#region isDone is true
  todo.isDone = true;
  component = renderer.create(
    <TodoItem todo={todo} onDone={onDone} onDelete={onDelete} />
  );
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  //#endregion
});

it("check text and event", () => {
  let todo: Todo = {
    id: "1",
    value: "Read a book every month",
    isDone: false,
  };
  function onDone(todo: Todo) {
    console.log("onDone");
  }
  function onDelete(todo: Todo) {
    console.log("onDelete");
  }
  render(<TodoItem todo={todo} onDone={onDone} onDelete={onDelete} />);
  expect(screen.getByText("Read a book every month")).toBeInTheDocument();
});
