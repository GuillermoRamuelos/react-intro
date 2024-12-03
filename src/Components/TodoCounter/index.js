import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  const isAllCompleted = total === completed;

  return (
    <h2 className="TodoCounter">
      {/* Si no hay TODOs */}
      {total === 0 ? (
        "No hay TODOs para mostrar :/"
      ) : (
        <>
          {/* De lo contrario */}
          <p className={`${isAllCompleted && "Invisible"}`}>
            Has completado <span>{completed}</span> de <span>{total}</span>{" "}
            TODOs
          </p>
          <p className={`${!isAllCompleted && "Invisible"}`}>
            Felicidades!!! 🎉 Has terminado todos tus TODOS
          </p>
        </>
      )}
    </h2>
  );
}

export { TodoCounter };
