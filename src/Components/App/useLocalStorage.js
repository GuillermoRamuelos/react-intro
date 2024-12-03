import React from "react";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Llorar con la Llorona", completed: true },
//   { text: "Terminar curso de React", completed: false },
//   { text: "Usar estados derivados", completed: 1 },
//   { text: "LALALA" },
// ];

// localStorage.setItem("TODOs_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOs_V1");

function useLocalStorage(itemName, initialValue) {
  let localStorageItem = localStorage.getItem(itemName);
  let parsedItems;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue;
  } else {
    parsedItems = JSON.parse(localStorageItem);
  }

  const [item, seItem] = React.useState(parsedItems);

  const saveItem = (newItem) => {
    seItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return [item, saveItem];
}

export { useLocalStorage };
