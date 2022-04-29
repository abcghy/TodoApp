import React, { ReactNode, useState } from "react";
import Check from "./icon/Check";
import UnCheck from "./icon/UnCheck";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <div className="btn">
      {children}
    </div>
  );
}

interface CheckboxProps {
  isChecked: boolean;
  setChecked: (checked: boolean) => void;
}

function Checkbox({isChecked, setChecked}: CheckboxProps) {
  return (
    <div className="cursor-pointer" onClick={() => setChecked(!isChecked)}>
      {isChecked ? <Check /> : <UnCheck />}
    </div>
  );
}

interface TodoItemProps {
  // isChecked: boolean;
  children: ReactNode;
}

function TodoItem({children}: TodoItemProps) {
  const [isChecked, setChecked] = useState(false);
  return (
    <div className="flex hover:(bg-red-50)">
      <Checkbox isChecked={isChecked} setChecked={setChecked}/>
      <div className={`cursor-pointer ${isChecked && "line-through"}`} onClick={() => {setChecked(!isChecked)}}>{children}</div>
    </div>
  )
}

function TodoItemList() {
  return (
    <div className="w-full">
      <TodoItem>看一本书</TodoItem>
      <TodoItem>找到国外如何寻找民主的书</TodoItem>
      <TodoItem>Hello World</TodoItem>
      <TodoItem>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</TodoItem>
    </div>
  )
}

function AddInput() {
  return (
    <div className="flex w-full">
      <input type="text" className="bg-white px-4 py-2 rounded mr-2 flex-grow bg-gray-200" placeholder="输入今天的任务"/>
      <Button>添加</Button>
    </div>
  )
}

function App() {
  return (
    <div className="mx-auto flex flex-col justify-center h-screen w-160">
      <AddInput />
      <TodoItemList />
    </div>
  );
}

export default App;
