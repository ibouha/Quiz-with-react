import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BackQuiz from "./Components/BackQuiz/BackQuiz";
import FrontQuiz from "./Components/FrontQuiz/FrontQuiz";
import FullQuiz from "./Components/FullQuiz/FullQuiz";
import Home from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/frontquiz" element={<FrontQuiz />} />
        <Route path="/backquiz" element={<BackQuiz />} />
        <Route path="/fullquiz" element={<FullQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
