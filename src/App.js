import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState(null);

  const onUpdateTodo = (todo) => {
    const todoItemIndex = todos.findIndex((x) => x.id == todo.id);
    const newTodos = [...todos];

    const newTodo = newTodos[todoItemIndex];
    newTodo.completed = !newTodo.completed;
    newTodos[todoItemIndex] = newTodo;
    setTodos(newTodos);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data);
    });
  }, []);

  const [todo, setTodo] = useState("");

  function handleSubmit() {
    const data = {
      userId: 1,
      id: Math.floor(Math.random() * 800 + 201),
      title: todo,
      completed: false,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/todos", data)
      .then((res) => {
        setTodos([...todos, data]);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="container">
        <h2>TODO PROJECT</h2>
        Add ToDo:
        <input
          value={todo}
          type="text"
          name="todo"
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          align="left"
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
      </div>
      <div className="container">
        {todos ? (
          <TodoList todos={todos} onUpdateTodo={onUpdateTodo} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default App;
