import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoText, setNewTodoText] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addTodo(newTodoText);
  };

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
      }}
    >
      <label id="todoText">Dime tu nuevo TODO</label>
      <textarea
        placeholder="Hacer ejercicio"
        maxLength={100}
        value={newTodoText}
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
