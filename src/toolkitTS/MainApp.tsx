import React, { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import { useAppDispatch } from "./hook";
import { addTodo } from "./store/todoSlice";

export default function MainApp() {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = (): void => {
    if (title.trim().length) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div className="App">
      <NewTodoForm
        value={title}
        updateTitle={setTitle}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}
