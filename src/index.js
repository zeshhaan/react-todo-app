import React, { useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

function TodoApp() {
  const [todo, setTodo] = useState("");
  function handleChange(e) {
    setTodo(e.target.value);
    //console.log(todo);
  }

  const [todoList, setTodoList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, { id: uuidv4(), text: todo }]);
    setTodo("");
    //console.log(todoList);
  }

  function removeItem(item) {
    setTodoList(todoList.filter((i) => i !== item));
  }

  function editItem(e) {
    //this function should search the todo in the todoList by the given id and todo text
    // const { value } = e.target.previousSibling;
    // console.log(value);
    //and activate the input to be !disabled
    //and we must be able to enter new value there and update that todo text by without manipulating it's id
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>add</button>
      </form>
      <div>
        <ul style={{ marginLeft: "-40PX" }}>
          {todoList.map((item) => (
            <div key={item.id} style={{ display: "block" }}>
              <input value={item.text} disabled></input>
              <button onClick={() => removeItem(item)}>remove</button>
              <button onClick={() => editItem(item)}>edit</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
