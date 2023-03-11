import React from "react";
import { ITodo } from "./../types/data";

interface ITodoItem extends ITodo {
  removeTodos: (id: number) => void;
  toggleTodos: (id: number) => void;
}

export default function TodoItem(props: ITodoItem): JSX.Element {
  const { id, title, completed, removeTodos, toggleTodos } = props;
  return (
    <div className="d-flex">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodos(id)}
      />
      <h3>{title}</h3>
      <button onClick={() => removeTodos(id)}>X</button>
    </div>
  );
}
