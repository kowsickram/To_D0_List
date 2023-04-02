import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const [currentDateTime, setCurrentDateTime] = useState({
    cutd: new Date().toLocaleString
  });

  function additem(e) {
    e.preventDefault();
    if (!value) return;
    const newtodos = [...todo, { text: value, Date: new Date() }];
    setCurrentDateTime(new Date());
    setTodo(newtodos);
    setValue("");
  }
  function removeitems(e) {
    var index = Number(e.target.id);
    let temp = [...todo];
    temp.splice(index, 1);
    setTodo(temp);
    console.log(e.target.id);
  }

  return (
    <center>
      <div className="todolist">
        <center>
          <h1>To Do List</h1>
          <form onSubmit={additem}>
            <input
              type="text"
              placeholder="Add Tasks "
              className="given"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>

          {todo.map((item, i) => (
            <div className="todo" key={i} id={i} onClick={removeitems}>
              {item.text}-{new Date(item.Date).toLocaleString()}
            </div>
          ))}
        </center>
      </div>
    </center>
  );
}
