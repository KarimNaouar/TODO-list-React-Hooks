import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [edit, setEdit] = useState(null);
  var ele = document.getElementById("newtask");
  const deleteEle = (id) => {
    var newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
    setTask("");
    setEdit(null);
    ele.focus();
  };

  const editE = (x) => {
    setTask(x.task);
    setEdit(x);
    ele.focus();
  };

  const handleOperation = () => {
    if (edit && task !== "") {
      var newTab = todos.map((el) =>
        el.id === edit.id ? { ...el, task } : el
      );
      setTodos(newTab);
      setTask("");
      setEdit(null);
      ele.focus();
    } else {
      task !== "" && setTodos([...todos, { id: uuidv4(), task: task }]);
      setTask("");
      ele.focus();
    }
  };

  const handleCancel = () => {
    setTask("");
    setEdit(null);
    setTask("");
    ele.focus();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ textAlign: "center", padding: "20px", fontSize: "40px" }}>
          Tasks
        </div>
        <Todo
          todos={todos}
          deleteE={(id) => deleteEle(id)}
          editE={(id) => editE(id)}
        />
        <div style={{ margin: "auto" }}>
          <label
            name="newtask"
            style={{
              verticalAlign: "middle",
              display: edit ? "none" : "inline",
            }}
          >
            New Task:
          </label>
          <label
            name="newtask"
            style={{
              verticalAlign: "middle",
              display: !edit ? "none" : "inline",
            }}
          >
            Update text:
          </label>
          <input
            type="text"
            value={task}
            id="newtask"
            name="newtask"
            rows="1"
            cols="60"
            style={{ verticalAlign: "middle", margin: "10px" }}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                task !== "" &&
                  setTodos([...todos, { id: uuidv4(), task: task }]);
                setTask("");
              }
            }}
          />
          <input
            type="button"
            value={edit ? "Update" : "Add"}
            style={{ verticalAlign: "middle" }}
            onClick={handleOperation}
          />

          <input
            type="button"
            value="Cancel"
            style={{
              verticalAlign: "middle",
              display: !edit ? "none" : "inline",
            }}
            onClick={handleCancel}
          />
        </div>
      </header>
    </div>
  );
}

export default TodoList;
