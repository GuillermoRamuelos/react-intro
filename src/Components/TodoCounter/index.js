import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      {/* Si no hay TODOs */}
      {total === 0
        ? "No hay TODOs para mostrar :/"
        : // De lo contrario
          showMessage(total, completed)}
    </h2>
  );
}

function showMessage(total, completed) {
  const isAllCompleted = total === completed;
  let message = "Felicidades!!! 🎉 Has terminado todos tus TODOS";

  if (!isAllCompleted) {
    message = `Has completado ${completed} de ${total} TODOS`;
  }
  return message;
}

export { TodoCounter };
