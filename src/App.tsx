import { useState, useRef, useEffect } from "react";
import { ITodo } from "./types/data";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import Box from "./childrens/Box";
import Center from "./childrens/Center";
import PropsMain from "./limitedProps/PropsMain";
import PolimorfApp from "./polimorfComponents/PolimorfApp";
import FormApp from "./formTipizations/FormApp";

function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  function addTodos() {
    if (value) {
      const newTodos = [
        ...todos,
        { id: Date.now(), title: value, completed: false },
      ];
      setTodos(newTodos);
    }
    setValue("");
  }

  const handleUpdateValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleUpdateValuewithEnter: React.KeyboardEventHandler<
    HTMLInputElement
  > = (e) => {
    if (e.key === "Enter") addTodos();
  };

  const removeTodos = (id: number): void => {
    const newTodos = todos.filter((todos) => todos.id !== id);
    setTodos(newTodos);
  };

  const toggleTodos = (id: number): void => {
    const newTodos = todos.map((todos) =>
      todos.id === id ? { ...todos, completed: !todos.completed } : todos
    );
    setTodos(newTodos);
  };

  return (
    <div className="main">
      <div>
        <Box>
          <h1 className={"greenText"}>Todo List children</h1>
        </Box>
        <hr />
        <h1>limitedProps</h1>
        <PropsMain />
        <hr />
        <h1>PolimorfComponents</h1>
        <PolimorfApp />

        <div>
          <hr />
          <Center>
            <div>
              <input
                value={value}
                onChange={handleUpdateValue}
                type="text"
                placeholder="please text"
                ref={inputRef}
                onKeyDown={handleUpdateValuewithEnter}
              />
              <button onClick={addTodos}>Add todos</button>
            </div>
          </Center>
          <TodoList
            items={todos}
            removeTodos={removeTodos}
            toggleTodos={toggleTodos}
          />
        </div>

        <hr />
        <h1>Login form</h1>
        <FormApp />
      </div>
    </div>
  );
}

export default App;
