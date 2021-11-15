import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = ({ todos, onUpdateTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="abc list-group-item d-flex justify-content-between allign-item-center"
        >
          {todo.title}

          <input
            className="form-check-input"
            style={{ marginLeft: "10px" }}
            type="checkbox"
            checked={todo.completed}
            onChange={() => onUpdateTodo(todo)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
