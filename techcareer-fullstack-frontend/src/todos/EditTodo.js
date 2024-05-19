import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditTodo() {
  let navigate = useNavigate();

  const { id } = useParams();
  const [todo, setTodo] = useState({
    title: "",
    contents: "",
  });

  //deconstruct yaptik burada yani suslu parantez disina cikardik
  const { title, contents } = todo;

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
    //e.target.title title ozelligi ile hangi todo ogesini secer. e.target.value ise input degeri alir
    //...todo amaci onceki todoyu kopyala suslu parantez sıkıntı cikarmasin
  };

  useEffect(() => {
    loadTodo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //submit yapinca sayfa yenileme kapatma

    await axios.put(`http://localhost:8080/todo/${id}`, todo);
    navigate("/");
  };

  const loadTodo = async () => {
    const result = await axios.get(`http://localhost:8080/todo/${id}`);
    setTodo(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Todo</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your title"
                name="title"
                value={title}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contents" className="form-label">
                Content
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your content"
                name="contents"
                value={contents}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
            <Link to="/" className="btn btn-danger mx-3">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTodo;
