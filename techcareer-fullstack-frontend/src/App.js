import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./todos/AddTodo";
import EditTodo from "./todos/EditTodo";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/edittodo/:id" element={<EditTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
