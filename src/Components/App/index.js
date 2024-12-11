import React from "react";

import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

function App() {
  // States
  const {
    item: todos,
    saveItem: saveTODOs,
    loading,
    error,
  } = useLocalStorage("TODOs_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  // Derived states
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toUpperCase();
    const searchText = searchValue.toUpperCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTODOs(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);

    saveTODOs(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
