import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register"
import NavBar from "./components/navBar/NavBar";


const navArrayLinks = [
  {
      title: "Home", path: "/", icon: null
  },
  {
      title: "Login", path: "/login", icon: null
  },
  {
      title: "Register", path: "/register", icon: null 
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
      </Routes>
      
    </>
  );
}

export default App;
