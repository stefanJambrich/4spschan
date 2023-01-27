import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import BoardLayout from "./components/board-layout/BoardLayout";
import Board from "./components/board/Board";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/" element={<Home />} />
          <Route path="/boards/prasit" element={<Board title="/prasit/ - Praxe a Sítě" />} />
          <Route path="/boards/pro" element={<Board title="/pro/ - Programko" />} />
          <Route path="/boards/wm" element={<Board title="/wm/ - Webové a mobilní aplikace" />} />
          <Route path="/boards/o" element={<Board title="/o/ - Ostatní předměty" />} />
          <Route path="/boards/r" element={<Board title="/r/ - Random" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;