import { Route, Routes } from "react-router-dom";

import { Main } from "../pages/Dashboard/Main";
import { Inventory } from "../pages/Dashboard/Inventory/Inventory";
import { Stats } from "../pages/Dashboard/Stats";
import { Appointments } from "../pages/Dashboard/Appointments";
import { Orders } from "../pages/Dashboard/Orders";
import {Payments} from "../pages/Dashboard/Payments"
import { AddProductPage } from "../pages/Dashboard/Inventory/AddProductPage";


export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="main" element={<Main />} />

      <Route path="inventory" element={<Inventory />} />
      <Route path="inventory/add-a-product" element={<AddProductPage/>}/>


      <Route path="stats" element={<Stats />} />
      <Route path="appointments" element={<Appointments />} />
      <Route path="orders" element={<Orders />} />
      <Route path="payments" element={<Payments />} />
    </Routes>
  );
}
