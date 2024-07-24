import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="login" element={<Login />}></Route>
        </Routes>
      </div>
      {/*class is a reserved word in JSX, so we use className*/}
    </Router>
  );
}

export default App;
