import React from "react";

function useLocalStorage(itemName, initialValue) {
  // Estados
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Usando EFecto
  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItems;
        let localStorageItem = localStorage.getItem(itemName);

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItem);
          setItem(parsedItems);
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }, 2000); // TImer para simular que está cargando los todos
  }, []);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

// localStorage.removeItem("TODOs_V1");

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Llorar con la Llorona", completed: true },
//   { text: "Terminar curso de React", completed: false },
//   { text: "Usar estados derivados", completed: 1 },
//   { text: "LALALA" },
// ];

// localStorage.setItem("TODOs_V1", JSON.stringify(defaultTodos));
