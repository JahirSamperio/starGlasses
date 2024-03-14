import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register"
import NavBar from "./components/navBar/NavBar";
import { Products } from "./pages/Products";


const navArrayLinks = [
  {
      title: "Inicio", path: "/", icon: null
  },
  {
    title: "Productos", path: "/products", icon:null 
  },
  {
      title: "Citas", path: "/appointment-schudlement", icon: null
  }
]

function App() {
  return (
    <>
      <NavBar navArrayLinks={navArrayLinks}/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element= {<Register/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
      
    </>
  );
}

export default App;
