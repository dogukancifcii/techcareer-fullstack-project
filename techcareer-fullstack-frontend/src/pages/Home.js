import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoCircle, GoCheckCircleFill } from "react-icons/go";
import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {
  //Butun todolar burada
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  //Get all todos item
  const loadTodos = async () => {
    const result = await axios.get("http://localhost:8080/todos");
    setTodos(result.data);
  };

  //Delete todo
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8080/todo/${id}`);
    loadTodos();
  };

  //check complated todo
  const completeTodo = async (id, todo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
    await axios.put(`http://localhost:8080/todo/${id}`, {
      ...todo,
      completed: !todo.completed,
    });
  };
  return (
    <div className="container ">
      <div className="py-4">
        <table className="table table-dark border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td
                  className={
                    todo.completed
                      ? "text-danger text-decoration-line-through"
                      : ""
                  }
                >
                  {todo.title}
                </td>
                <td
                  className={
                    todo.completed
                      ? "text-danger text-decoration-line-through"
                      : ""
                  }
                >
                  {todo.contents}
                </td>
                <td>
                  <button
                    onClick={() => completeTodo(todo.id, todo)}
                    className="btn btn-secondary mx-2 fs-5"
                  >
                    {todo.completed ? <GoCheckCircleFill /> : <GoCircle />}
                  </button>
                  <Link
                    to={`/edittodo/${todo.id}`}
                    className="btn btn-warning mx-2 fs-5"
                  >
                    <AiFillEdit className="me-2" />
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2 fs-5"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <FaTrash className="me-2" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
