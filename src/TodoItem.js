import React from "react";
import "./list.css";
import imageEdit from "./edit.svg";
import imageDelete from "./delete.svg";

const Todo = (props) => {
  return (
    <>
      {props.todos.map((todo, index) => (
        <div
          className="list-item"
          style={{ padding: "11px", width: "800px" }}
          key={index}
        >
          {todo.task}
          <img
            src={imageDelete}
            width="48"
            height="48"
            alt="Delete"
            style={{
              float: "right",
              marginLeft: "10px",
              cursor: "pointer",
              borderRadius: "10px",
            }}
            onClick={() => props.deleteE(todo.id)}
            onMouseOver={(e) => (e.target.style.background = "red")}
            onMouseLeave={(e) => (e.target.style.background = "none")}
          />
          <img
            src={imageEdit}
            width="48"
            height="48"
            alt="Edit"
            style={{ float: "right", cursor: "pointer", borderRadius: "10px" }}
            onClick={() => props.editE(todo)}
            onMouseOver={(e) => (e.target.style.background = "green")}
            onMouseLeave={(e) => (e.target.style.background = "none")}
          />
        </div>
      ))}
    </>
  );
};

export default Todo;
