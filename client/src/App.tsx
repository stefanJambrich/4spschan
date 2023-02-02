import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Board from "./components/board/Board";
import Home from "./components/home/Home";
import Thread from "./components/thread/Thread";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/" element={<Home />} />
          <Route path="/prasit" element={<Board title="/prasit/ - Praxe a Sítě" board="prasit" />} />
          <Route path="/pro" element={<Board title="/pro/ - Programko" board="pro" />} />
          <Route path="/wm" element={<Board title="/wm/ - Webové a mobilní aplikace" board="wm" />} />
          <Route path="/o" element={<Board title="/o/ - Ostatní předměty" board="o" />} />
          <Route path="/r" element={<Board title="/r/ - Random" board="r" />} />
          <Route path="/prasit/thread/:threadNumber" element={<Thread title="/prasit/ - Praxe a Sítě" board="prasit" />} />
          <Route path="/pro/thread/:threadNumber" element={<Thread title="/pro/ - Programko" board="pro" />} />
          <Route path="/wm/thread/:threadNumber" element={<Thread title="/wm/ - Webové a mobilní aplikace" board="wm" />} />
          <Route path="/o/thread/:threadNumber" element={<Thread title="/o/ - Ostatní předměty" board="o" />} />
          <Route path="/r/thread/:threadNumber" element={<Thread title="/r/ - Random" board="r" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;