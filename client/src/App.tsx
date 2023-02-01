import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Board from "./components/board/Board";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/" element={<Home />} />
          <Route path="/boards/prasit" element={<Board title="/prasit/ - Praxe a Sítě" board="prasit" />} />
          <Route path="/boards/pro" element={<Board title="/pro/ - Programko" board="pro" />} />
          <Route path="/boards/wm" element={<Board title="/wm/ - Webové a mobilní aplikace" board="wm" />} />
          <Route path="/boards/o" element={<Board title="/o/ - Ostatní předměty" board="o" />} />
          <Route path="/boards/r" element={<Board title="/r/ - Random" board="r" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;