import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((state) => !state); // Obtiene el valor con el state, lo niega y lo manda
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
