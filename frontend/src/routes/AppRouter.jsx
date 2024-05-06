import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import NavBar from "../components/navBar/NavBar";
import { Products } from "../pages/Products";
import { Footer } from "../components/footer/Footer";
import { ShoppingCart } from "../pages/ShoppingCart";
import { Appointments } from "../pages/Appointments";
import ProductDetails from "../pages/ProductDetails";
import { RetrivePassword } from "../pages/RetrivePassword";
import { RetrivePasswordConfirm } from "../pages/RetrivePasswordConfirm";
import { Account } from "../pages/Account/Account";

import DashboardRoutes from "./DashboardRoutes";
import { EmailVerification } from "../pages/EmailVerification";
import { getItem } from "../helpers/localStorage/getItem";
import AccountRoutes from "./AccountRoutes";

const navArrayLinks = [
  {
    title: "Inicio",
    path: "/",
    icon: null,
  },
  {
    title: "Productos",
    path: "/products-list",
    icon: null,
  },
  {
    title: "citas",
    path: "/appointments",
    icon: null,
  },
];

function App() {
  const navigate = useNavigate();

  // const handleGetUserId = async () => {
  //   const userId = await getItem("USERID");
  //   if (userId) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // };

  // useEffect(() => {
  //   handleGetUserId();
  // }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products-list" element={<Products />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/product/:id_producto" element={<ProductDetails />} />
          <Route path="/password-restore" element={<RetrivePassword />} />
          <Route
            path="/password-restore/confirmed"
            element={<RetrivePasswordConfirm />}
          />
          <Route
            path="/email-verification-alert"
            element={<EmailVerification />}
          />

          {/* Rutas de la dashboard*/}
          <Route path="/dashboard/*" element={<DashboardRoutes />} />

          {/*Rutas de configuracion de la cuenta*/}
          <Route path="/account/*" element={<AccountRoutes />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
