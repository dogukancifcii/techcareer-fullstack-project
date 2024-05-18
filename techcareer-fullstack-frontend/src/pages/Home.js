import React, { useEffect, useState } from "react";
import axios from "axios";
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
              <tr className="" key={index}>
                <th scope="row">{index + 1}</th>
                <td>{todo.title}</td>
                <td>{todo.contents}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
