import React, { memo } from "react";
import TodoItem from "./TodoItem";
import { ITodo } from "../types/data";

interface ITodoListProps {
  items: ITodo[];
  removeTodos: (id: number) => void;
  toggleTodos: (id: number) => void;
}

const TodoList = memo(function (props: ITodoListProps): JSX.Element {
  const { removeTodos, toggleTodos, items } = props;
  return (
    <div>
      {items.map((todos) => (
        <TodoItem
          key={todos.id}
          {...todos}
          removeTodos={removeTodos}
          toggleTodos={toggleTodos}
        />
      ))}
    </div>
  );
});

export default TodoList;
