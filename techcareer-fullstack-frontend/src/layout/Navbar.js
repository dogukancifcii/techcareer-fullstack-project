import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Todo List
          </a>
          <button className="btn btn-outline-light" to="/addtodo">
            Add Todo
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
