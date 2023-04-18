import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { OpenTodo } from "./Pages/OpenTodo";
import { DoneTodo } from "./Pages/DoneTodo";
import { Header } from "./Pages/Header";
import { TodoDetail } from "./Pages/TodoDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DoneTodo" element={<DoneTodo />} />
        <Route path="/OpenTodo" element={<OpenTodo />} />
        <Route path="/:todoId" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
