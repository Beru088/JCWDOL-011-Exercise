import { Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Exe1 from "./pages/exercise1"
import Exe2 from "./pages/exercise2"
import Exe3 from "./pages/exercise3"
import Exe4 from "./pages/exercise4"
import Exe5 from "./pages/exercise5"
import List from "./pages/messageList"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="1" element={<Exe1 />} />
        <Route path="2" element={<Exe2 />} />
        <Route path="3" element={<Exe3 />} />
        <Route path="4" element={<Exe4 />} />
        <Route path="5" element={<Exe5 />} />
        <Route path="list" element={<List />} />
      </Routes>
    </>
  )
}

export default App
