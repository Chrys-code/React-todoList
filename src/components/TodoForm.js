import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleinputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          className="form-control"
          name="task"
          type="text"
          value={todo.task}
          onChange={handleinputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
