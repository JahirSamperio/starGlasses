import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register"
import NavBar from "./components/navBar/NavBar";
import { Products } from "./pages/Products";
import { Footer } from "./components/footer/Footer";
import { ShoppingCart } from "./pages/ShoppingCart";

const navArrayLinks = [
  {
      title: "Inicio", path: "/", icon: null
  },
  {
    title: "Productos", path: "/products-list", icon:null 
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
        <Route path="/products-list" element={<Products/>}/>
        <Route path="/shopping-cart" element={<ShoppingCart/>}/>
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
