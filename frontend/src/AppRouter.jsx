import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register"
import NavBar from "./components/navBar/NavBar";
import { Products } from "./pages/Products";
import { Footer } from "./components/footer/Footer";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Recomendations } from "./pages/Recomendations";
import  ProductDetails  from "./pages/ProductDetails";

const navArrayLinks = [
  {
      title: "Inicio", path: "/", icon: null
  },
  {
    title: "Productos", path: "/products-list", icon:null 
  },
  {
      title: "Recomendaciones", path: "/recomendations", icon: null
  }
]

function App() {
  return (
    
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <NavBar navArrayLinks={navArrayLinks}/>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products-list" element={<Products />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/recomendations" element={<Recomendations/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    
  );
}

export default App;
