import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Todo List
          </Link>
          <Link className="btn btn-outline-light" to="/addtodo">
            Add Todo
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
