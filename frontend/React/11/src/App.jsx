import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Register from "./pages/register"
import Users from "./pages/users"
import Tweet from "./pages/tweets"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tweets" element={<Tweet />} />
      </Routes>
    </>
  )
}

export default App
