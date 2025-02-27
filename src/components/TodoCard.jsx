import React from "react";

export default function TodoCard({
  children,
  handleDeleteTodo,
  index,
  handleEditTodo,
}) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
