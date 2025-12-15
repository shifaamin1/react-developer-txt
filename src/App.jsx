import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import Detail from "./pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/list" element={<List />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;