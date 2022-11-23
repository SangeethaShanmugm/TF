import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../src/components/Login";
import Register from "../src/components/Register"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
