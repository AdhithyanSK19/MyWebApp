import "./App.css";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginForm apiUrl="https://localhost:7166/api/Auth/Login" />}
      ></Route>
      <Route path="/home" element={<Dashboard />}></Route>
      <Route
        path="/"
        element={<LoginForm apiUrl="https://localhost:7166/api/Auth/Login" />}
      ></Route>
    </Routes>
  );
}

export default App;
