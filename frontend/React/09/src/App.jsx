import "./App.css"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Cart from "./pages/cart"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
