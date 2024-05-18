import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddTodo() {
  let navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    //submit yapinca sayfa yenileme kapatma

    await axios.post("http://localhost:8080/todo", todo);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Todo</h2>
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

export default AddTodo;
