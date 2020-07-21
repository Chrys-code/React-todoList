import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div className="btn-group input-group mb-3" style={{ display: "flex" }}>
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input type="checkbox" onClick={handleCheckboxClick} />
        </div>
      </div>
      <li
        className="list-group-item"
        style={{
          color: "gray",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button className="btn btn-danger" onClick={handleRemoveClick}>
        X
      </button>
    </div>
  );
}

export default Todo;
