import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  // States
  const {
    item: todos,
    saveItem: saveTODOs,
    loading,
    error,
  } = useLocalStorage("TODOs_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

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

  const addTodo = (text) => {
    const isTextRepited = todos.filter((todo) => todo.text === text).length > 0;

    if (text !== "" && !isTextRepited) {
      // Agregando nuevo TODO
      const newTodos = [...todos, { text: text, completed: false }];

      saveTODOs(newTodos);
    } else
      alert("Asegurate que el TODO no exista y que no sea un texto en blanco");
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchedTodos,
        searchValue,
        setSearchValue,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
