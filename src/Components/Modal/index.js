import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  return createPortal(
    <div className="modalBackground">{children}</div>,
    document.getElementById("modal") //Especifica en que <div> transportará el contendido del children
  );
}

export { Modal };
