import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App